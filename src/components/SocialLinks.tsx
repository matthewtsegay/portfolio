import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/personal";

const socials = [
  { label: "GitHub", href: personalInfo.github, icon: Github },
  { label: "LinkedIn", href: personalInfo.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${personalInfo.email}`, icon: Mail },
];

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-8">
      {socials.map((social, i) => (
        <React.Fragment key={social.label}>
          {i > 0 && <span aria-hidden className="hidden h-4 w-px bg-border sm:block" />}
          <a
            href={social.href}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2 text-base font-semibold tracking-tight text-foreground/65 transition-colors duration-300 hover:text-foreground"
          >
            <social.icon size={18} strokeWidth={1.75} />
            {social.label}
          </a>
        </React.Fragment>
      ))}
    </div>
  );
}
