"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

/* ─────────────────── Footer links data ─────────────────── */
const FOOTER_LINKS = [
  { key: "D", label: "dashboard", href: "/dashboard" },
  { key: "T", label: "tasks", href: "/tasks" },
  { key: "L", label: "leaderboard", href: "/leaderboard" },
  { key: "C", label: "contests", href: "/contests" },
  { key: "S", label: "sessions", href: "/sessions" },
  { key: "B", label: "blog", href: "/blog" },
  { key: "A", label: "alumni", href: "/alumni" },
];

export default function SiteFooter() {
  const router = useRouter();

  /* ── Keyboard shortcuts ── */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger when typing in inputs/textareas
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      // Don't trigger with modifier keys
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      const pressed = e.key.toUpperCase();
      const match = FOOTER_LINKS.find((link) => link.key === pressed);
      if (match) {
        e.preventDefault();
        router.push(match.href);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  return (
    <footer className="py-10 px-6 border-t border-[#21262D]">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Keyboard shortcuts */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="text-[10px] text-[#30363D] font-mono mr-1">
            keyboard:
          </span>
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center gap-1.5 text-xs text-[#484F58] hover:text-[#58A6FF] transition-colors font-mono"
            >
              <kbd className="inline-flex items-center justify-center w-5 h-5 border border-[#30363D] bg-[#161B22] text-[10px] text-[#8B949E] group-hover:border-[#58A6FF] group-hover:text-[#58A6FF] transition-colors rounded-[3px]">
                {link.key}
              </kbd>
              <span>{link.label}</span>
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#21262D]" />

        {/* Bottom row */}
        <div className="flex items-center justify-between">
          <div className="text-xs text-[#484F58] font-mono">
            © 2026 ICPC USICT. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/behind-the-bars"
              className="text-xs text-[#484F58] hover:text-[#58A6FF] transition-colors font-mono"
            >
              {`{ behind_the_bars }`}
            </Link>
            <div className="flex items-center gap-2 text-xs text-[#8B949E]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#3FB950] animate-pulse" />
              <span>system.status: </span>
              <span className="text-[#3FB950]">online</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
