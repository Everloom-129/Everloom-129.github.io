import { portfolioData } from "@/data/portfolio";
import { PortfolioEntry } from "@/components/portfolio-entry";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects · Jie Wang",
  description: "Projects and side experiments by Jie Wang — robotics, systems, and beyond.",
};

function yearFromTitle(title: string): string {
  const match = title.match(/^(\d{4}):/);
  return match ? match[1] : "Other";
}

export default function ProjectsPage() {
  const years = [...new Set(portfolioData.map((p) => yearFromTitle(p.title)))].sort(
    (a, b) => Number(b) - Number(a)
  );

  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <div className="max-w-screen-lg mx-auto px-8 py-16">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <h1 className="font-serif text-3xl font-light tracking-wide text-zinc-900 mb-3">
            Projects
          </h1>
          <p className="font-serif text-sm leading-relaxed text-zinc-600">
            Course projects, personal experiments, and other things I&apos;ve built —
            from OS kernels and drone racing to philosophy coffee clubs.
          </p>
        </div>

        {/* Projects grouped by year */}
        <div className="space-y-16">
          {years.map((year) => {
            const items = portfolioData.filter(
              (p) => yearFromTitle(p.title) === year
            );
            return (
              <section key={year}>
                <h2 className="font-serif text-xs tracking-widest uppercase text-zinc-400 mb-7 flex items-center gap-3">
                  {year}
                  <span className="flex-1 h-px bg-zinc-100" />
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {items.map((project, i) => (
                    <PortfolioEntry key={i} portfolio={project} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
