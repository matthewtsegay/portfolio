import React from "react";

interface CodeWindowProps {
  lines: string[];
  title?: string;
}

function renderLine(line: string, key: number) {
  if (line.startsWith("#") || line.startsWith("//")) {
    return (
      <span key={key} className="text-zinc-500">
        {line}
      </span>
    );
  }

  const parts = line.split(/("(?:[^"\\]|\\.)*")/g);
  return (
    <span key={key}>
      {parts.map((part, i) =>
        part.startsWith('"') ? (
          <span key={i} className="text-zinc-400">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </span>
  );
}

export function CodeWindow({ lines, title }: CodeWindowProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 dark:border-zinc-800">
      <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900/60 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-zinc-600" />
        <span className="h-3 w-3 rounded-full bg-zinc-400" />
        <span className="h-3 w-3 rounded-full bg-zinc-300" />
        <span className="ml-3 font-mono text-xs text-zinc-500">{title ?? "snippet.py"}</span>
      </div>
      <pre className="overflow-x-auto px-5 py-4 font-mono text-[13px] leading-7 text-zinc-200">
        {lines.map((line, i) => (
          <React.Fragment key={i}>
            {renderLine(line, i)}
            {"\n"}
          </React.Fragment>
        ))}
      </pre>
    </div>
  );
}
