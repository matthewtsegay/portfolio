import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomeContent from "@/components/HomeContent";
import { SECTIONS, SECTION_KEYS, isSectionKey } from "@/lib/sections";

export function generateStaticParams() {
  return SECTION_KEYS.map((section) => ({ section }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string }>;
}): Promise<Metadata> {
  const { section } = await params;
  if (!isSectionKey(section)) return {};
  return {
    title: `${SECTIONS[section].title} | Matyos Tsegay Kassa`,
  };
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  if (!isSectionKey(section)) notFound();
  return <HomeContent section={section} />;
}
