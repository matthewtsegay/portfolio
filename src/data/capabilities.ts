import { Server, Layers, BrainCircuit } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Pillar {
  icon: LucideIcon;
  title: string;
  sub: string;
  description: string;
  status: string;
}

export const pillars: Pillar[] = [
  {
    icon: Server,
    title: "Backend Systems",
    sub: "Django · DRF · FastAPI",
    description:
      "Reliable APIs and backend systems with clean architecture, authentication, and scalable data models.",
    status: "Core Focus",
  },
  {
    icon: Layers,
    title: "Full-Stack & Mobile",
    sub: "Next.js · React · Flutter",
    description:
      "End-to-end products connecting modern frontend experiences with robust backend services.",
    status: "Core Focus",
  },
  {
    icon: BrainCircuit,
    title: "AI Integration",
    sub: "Python · XGBoost",
    description:
      "Intelligent features and machine-learning solutions that turn data into practical product capabilities.",
    status: "Core Focus",
  },
];
