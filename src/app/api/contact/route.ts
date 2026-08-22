import { NextResponse } from "next/server";
import {
  validateContactFields,
  type ValidatedContact,
} from "@/lib/validation";
import { rateLimit, getClientIp } from "@/lib/rateLimit";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 16 * 1024;
const RATE_LIMIT_REQUESTS = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const ALLOWED_FIELDS = new Set(["name", "email", "subject", "message", "website"]);

function jsonResponse(
  body: Record<string, unknown>,
  status: number,
  headers?: Record<string, string>
) {
  return NextResponse.json(body, { status, headers });
}

async function deliverEmail(data: ValidatedContact): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) return false;

  const text = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    "",
    data.message,
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject: `[Portfolio] ${data.subject}`.slice(0, 150),
      text,
    }),
    signal: AbortSignal.timeout(8000),
  });

  return response.ok;
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return jsonResponse({ ok: false, error: "Unsupported content type." }, 415);
  }

  const ip = getClientIp(request);
  const rl = rateLimit(`contact:${ip}`, RATE_LIMIT_REQUESTS, RATE_LIMIT_WINDOW_MS);
  if (!rl.allowed) {
    return jsonResponse(
      { ok: false, error: "Too many requests. Please try again later." },
      429,
      { "Retry-After": String(rl.retryAfterSeconds) }
    );
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return jsonResponse({ ok: false, error: "Invalid request body." }, 400);
  }

  if (rawBody.length > MAX_BODY_BYTES) {
    return jsonResponse({ ok: false, error: "Request body too large." }, 413);
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(rawBody);
  } catch {
    return jsonResponse({ ok: false, error: "Invalid request body." }, 400);
  }

  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    return jsonResponse({ ok: false, error: "Invalid request." }, 400);
  }

  const record = parsed as Record<string, unknown>;
  const unexpectedFields = Object.keys(record).filter((key) => !ALLOWED_FIELDS.has(key));
  if (unexpectedFields.length > 0) {
    return jsonResponse({ ok: false, error: "Unexpected fields in request." }, 400);
  }

  const website = record.website;
  if (typeof website === "string" && website.trim() !== "") {
    return jsonResponse({ ok: true, delivered: true }, 200);
  }

  const result = validateContactFields(record);
  if (!result.valid) {
    return jsonResponse(
      { ok: false, error: "Validation failed.", errors: result.errors },
      400
    );
  }

  try {
    const delivered = await deliverEmail(result.data);
    if (!delivered && process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL) {
      return jsonResponse(
        { ok: false, error: "Unable to send your message right now. Please try again later." },
        502
      );
    }
    return jsonResponse({ ok: true, delivered }, 200);
  } catch (error) {
    console.error(
      "[contact] delivery error:",
      error instanceof Error ? error.message : "unknown"
    );
    return jsonResponse(
      { ok: false, error: "Unable to send your message right now. Please try again later." },
      502
    );
  }
}
