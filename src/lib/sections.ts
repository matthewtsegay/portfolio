export const SECTIONS = {
  about: { id: "about", label: "About", title: "About" },
  skills: { id: "skills", label: "Skills", title: "Skills" },
  work: { id: "work", label: "Projects", title: "Projects" },
  education: { id: "education", label: "Education", title: "Education & Experience" },
  contact: { id: "contact", label: "Contact", title: "Contact" },
} as const;

export type SectionKey = keyof typeof SECTIONS;

export const SECTION_KEYS = Object.keys(SECTIONS) as SectionKey[];

export function isSectionKey(value: string): value is SectionKey {
  return Object.prototype.hasOwnProperty.call(SECTIONS, value);
}
