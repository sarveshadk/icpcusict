"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import { Github, Linkedin, Twitter, Mail, ArrowLeft } from "lucide-react";

/* ─────────────────── Devs data ─────────────────── */
const DEVS = [
  {
    name: "Balmukund Mishra",
    position: "Full-Stack Developer",
    email: "dev1@icpcusict.com",
    github: "https://github.com/dev1",
    linkedin: "https://linkedin.com/in/dev1",
    twitter: "https://twitter.com/dev1",
  },
  {
    name: "Anurag Sharma",
    position: "Backend Lead",
    email: "dev2@icpcusict.com",
    github: "https://github.com/dev2",
    linkedin: "https://linkedin.com/in/dev2",
    twitter: "https://twitter.com/dev2",
  },
  {
    name: "Utkarsh",
    position: "Backend Developer",
    email: "dev3@icpcusict.com",
    github: "https://github.com/dev3",
    linkedin: "https://linkedin.com/in/dev3",
    twitter: "https://twitter.com/dev3",
  },
  {
    name: "Sarveshwar Adhikari",
    position: "Frontend Lead",
    email: "mail@sarveshadk.xyz",
    github: "https://github.com/sarveshadk",
    linkedin: "https://linkedin.com/in/sarveshadk",
    twitter: "https://twitter.com/sarveshadk",
  },
];

/* ═══════════════════════════════════════════════════════════ */
/*                  BEHIND THE BARS PAGE                      */
/* ═══════════════════════════════════════════════════════════ */

export default function BehindTheBars() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E6EDF3] font-mono relative overflow-hidden">
      {/* ── Background Grid ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(88,166,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(88,166,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            animation: "gridMove 20s linear infinite",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(88,166,255,0.04) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ── Scanline overlay ── */}
      <div
        className="fixed inset-0 pointer-events-none z-10 opacity-[0.015]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
        }}
      />

      {/* ── Main Content ── */}
      <div className="relative z-20">
        {/* Header */}
        <header className="py-8 px-6 border-b border-[#21262D]">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[#484F58] hover:text-[#58A6FF] transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>cd ~</span>
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-sm text-[#8B949E] mb-2">
                &gt; cat ./behind-the-bars
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Behind the Bars
              </h1>
              <p className="text-sm text-[#484F58] mt-3">
                The developers who built and maintain this portal.
              </p>
              <div className="w-16 h-px bg-[#58A6FF] mt-4" />
            </motion.div>
          </div>
        </header>

        {/* Dev Cards */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {DEVS.map((dev, i) => (
                <motion.div
                  key={dev.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-[#58A6FF]/0 via-[#58A6FF]/0 to-[#58A6FF]/0 group-hover:from-[#58A6FF]/20 group-hover:via-[#3FB950]/20 group-hover:to-[#58A6FF]/20 transition-all duration-700 blur-sm" />

                  {/* Terminal card */}
                  <div className="relative bg-[#0D1117] border border-[#30363D] group-hover:border-[#58A6FF]/40 transition-all duration-500">
                    {/* Terminal header bar */}
                    <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[#30363D] bg-[#161B22]">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#F85149]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF9F1C]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#3FB950]" />
                      <span className="ml-2 text-xs text-[#484F58]">
                        ~/dev-{i}.sh
                      </span>
                    </div>

                    {/* Terminal body */}
                    <div className="p-5 space-y-4">
                      {/* Name & Position */}
                      <div>
                        <div className="text-lg font-bold text-[#E6EDF3] tracking-tight">
                          {dev.name}
                        </div>
                        <span className="text-xs font-medium text-[#3FB950]">
                          {dev.position}
                        </span>
                      </div>

                      {/* Email */}
                      <a
                        href={`mailto:${dev.email}`}
                        className="flex items-center gap-2 text-sm text-[#8B949E] hover:text-[#58A6FF] transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>{dev.email}</span>
                      </a>

                      {/* Socials */}
                      <div className="flex items-center gap-3 pt-1">
                        <a
                          href={dev.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#484F58] hover:text-[#E6EDF3] transition-all duration-300 hover:scale-110"
                          title="GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        <a
                          href={dev.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#484F58] hover:text-[#0A66C2] transition-all duration-300 hover:scale-110"
                          title="LinkedIn"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a
                          href={dev.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#484F58] hover:text-[#1DA1F2] transition-all duration-300 hover:scale-110"
                          title="Twitter"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <SiteFooter />
      </div>

      {/* ── CSS Animations ── */}
      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }
      `}</style>
    </div>
  );
}
