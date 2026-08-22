export const LIMITS = {
  name: { min: 2, max: 80 },
  email: { max: 254 },
  subject: { min: 1, max: 120 },
  message: { min: 10, max: 2000 },
} as const;

export interface ValidatedContact {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ContactField = keyof ValidatedContact;

export type ContactFieldErrors = Partial<Record<ContactField, string>>;

const EMAIL_PATTERN =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

function cleanText(value: string, preserveNewlines: boolean): string {
  let cleaned = value.normalize("NFC");
  cleaned = cleaned.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "");
  if (preserveNewlines) {
    cleaned = cleaned.replace(/\r\n?/g, "\n").replace(/\n{4,}/g, "\n\n\n").replace(/[ \t]{3,}/g, "  ");
  } else {
    cleaned = cleaned.replace(/[\n\r\t]+/g, " ").replace(/\s{2,}/g, " ");
  }
  return cleaned.trim();
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function validateContactFields(input: Record<string, unknown>): {
  valid: true;
  data: ValidatedContact;
} | {
  valid: false;
  errors: ContactFieldErrors;
} {
  const errors: ContactFieldErrors = {};

  const name = isNonEmptyString(input.name) ? cleanText(input.name, false) : "";
  if (!name) {
    errors.name = "Please enter your name.";
  } else if (name.length < LIMITS.name.min) {
    errors.name = `Name must be at least ${LIMITS.name.min} characters.`;
  } else if (name.length > LIMITS.name.max) {
    errors.name = `Name must be no more than ${LIMITS.name.max} characters.`;
  }

  const email = isNonEmptyString(input.email) ? cleanText(input.email, false).toLowerCase() : "";
  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (email.length > LIMITS.email.max || !EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  const subject = isNonEmptyString(input.subject) ? cleanText(input.subject, false) : "";
  if (!subject) {
    errors.subject = "Please enter a subject.";
  } else if (subject.length > LIMITS.subject.max) {
    errors.subject = `Subject must be no more than ${LIMITS.subject.max} characters.`;
  }

  const message = isNonEmptyString(input.message) ? cleanText(input.message, true) : "";
  if (!message) {
    errors.message = "Please enter a message.";
  } else if (message.length < LIMITS.message.min) {
    errors.message = `Message must be at least ${LIMITS.message.min} characters.`;
  } else if (message.length > LIMITS.message.max) {
    errors.message = `Message must be no more than ${LIMITS.message.max} characters.`;
  }

  if (Object.keys(errors).length > 0) {
    return { valid: false, errors };
  }

  return { valid: true, data: { name, email, subject, message } };
}
