"use client";

import React, { useState } from "react";
import { Code2 } from "lucide-react";

const TECH_SLUGS: Record<string, string> = {
  Python: "python",
  Dart: "dart",
  JavaScript: "javascript",
  Go: "go",
  Flutter: "flutter",
  "React.js": "react",
  HTML: "html5",
  CSS: "css",
  "Next.js": "nextdotjs",
  Django: "django",
  "Django REST Framework": "django",
  FastAPI: "fastapi",
  "Node.js": "nodedotjs",
  PostgreSQL: "postgresql",
  MySQL: "mysql",
  Firebase: "firebase",
  Git: "git",
  GitHub: "github",
  Docker: "docker",
  Postman: "postman",
  Redis: "redis",
  Celery: "rabbitmq",
  Render: "render",
  Vercel: "vercel",
  "Vue.js": "vuedotjs",
};

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

export function TechIcon({ name, size = 20, className }: TechIconProps) {
  const [error, setError] = useState(false);
  const slug = TECH_SLUGS[name];

  if (!slug || error) {
    return (
      <Code2
        size={size}
        className={className ?? "text-primary shrink-0"}
        aria-hidden
      />
    );
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}`}
      alt=""
      width={size}
      height={size}
      className={`object-contain shrink-0 ${className ?? ""}`}
      onError={() => setError(true)}
    />
  );
}
