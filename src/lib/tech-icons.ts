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

export function getTechIconUrl(name: string): string | null {
  const slug = TECH_SLUGS[name];
  if (!slug) return null;
  return `https://cdn.simpleicons.org/${slug}`;
}

export function getTechSlug(name: string): string | null {
  return TECH_SLUGS[name] ?? null;
}
