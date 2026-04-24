"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { aboutMe } from "@/data/aboutme";

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/research", label: "Research" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FFFCF8]/95 backdrop-blur-sm border-b border-zinc-100">
      <nav className="max-w-screen-lg mx-auto px-8 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-base font-light text-zinc-900 hover:text-zinc-500 transition-colors duration-200"
        >
          {aboutMe.name}
        </Link>
        <div className="flex items-center gap-7">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-xs tracking-widest uppercase transition-colors duration-200 ${
                pathname.startsWith(href)
                  ? "text-zinc-900"
                  : "text-zinc-400 hover:text-zinc-800"
              }`}
            >
              {label}
            </Link>
          ))}
          {aboutMe.cvUrl && (
            <a
              href={aboutMe.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase text-zinc-400 hover:text-zinc-800 transition-colors duration-200"
            >
              CV ↗
            </a>
          )}
        </div>
      </nav>
    </header>
  );
}
