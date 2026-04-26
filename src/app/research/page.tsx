import { publicationData } from "@/data/publication";
import { PublicationEntry } from "@/components/publication-entry";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research · Jie Wang",
  description: "Publications and research by Jie Wang in robotics, VLAs, and embodied AI.",
};

const researchAreas = ["Vision-Language-Action Models", "Robot Learning", "Active Perception", "Embodied Reasoning", "Real-World Evaluation", "Sim-to-Real Transfer"];

function SectionRule({ label, sub }: { label: string; sub?: string }) {
  return (
    <h2 className="font-serif text-xs tracking-widest uppercase text-zinc-400 mb-7 flex items-center gap-3">
      {label}
      {sub && <span className="text-zinc-300 normal-case tracking-normal font-sans">· {sub}</span>}
      <span className="flex-1 h-px bg-zinc-100" />
    </h2>
  );
}

export default function ResearchPage() {
  const isBlog = (p: { conference: string }) =>
    p.conference.toLowerCase().includes("blog");

  const allPapers = publicationData.filter((p) => !isBlog(p));
  const blogPosts = publicationData.filter(isBlog);
  const featured = allPapers.filter((p) => p.featured);
  const rest = allPapers.filter((p) => !p.featured);

  const years = [...new Set(rest.map((p) => p.year))].sort(
    (a, b) => Number(b) - Number(a)
  );

  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <div className="max-w-screen-lg mx-auto px-8 py-16">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <h1 className="font-serif text-3xl font-light tracking-wide text-zinc-900 mb-3">
            Research
          </h1>
          <p className="font-serif text-sm leading-relaxed text-zinc-600 mb-5">
            I work on vision-language-action models, embodied reasoning, and robot learning —
            with a focus on systems that are validated on real hardware, not just in simulation.{" "}
            <span className="text-zinc-400">* denotes equal contribution.</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {researchAreas.map((area) => (
              <span
                key={area}
                className="text-xs text-zinc-500 bg-white border border-zinc-200 px-3 py-1 rounded-full"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Featured */}
        {featured.length > 0 && (
          <section className="mb-14">
            <SectionRule label="Featured" />
            <div className="space-y-10">
              {featured.map((pub, i) => (
                <div key={i}>
                  <PublicationEntry publication={pub} />
                  {i < featured.length - 1 && (
                    <div className="h-px bg-zinc-100 mt-10" />
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* By year */}
        <div className="space-y-14">
          {years.map((year) => {
            const yearPapers = rest.filter((p) => p.year === year);
            return (
              <section key={year}>
                <SectionRule
                  label={year}
                  sub={`${yearPapers.length} paper${yearPapers.length !== 1 ? "s" : ""}`}
                />
                <div className="space-y-10">
                  {yearPapers.map((pub, i) => (
                    <div key={i}>
                      <PublicationEntry publication={pub} />
                      {i < yearPapers.length - 1 && (
                        <div className="h-px bg-zinc-100 mt-10" />
                      )}
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Blog posts & reports */}
        {blogPosts.length > 0 && (
          <section className="mt-16 pt-12 border-t border-zinc-100">
            <SectionRule label="Blog Posts & Reports" />
            <div className="space-y-10">
              {blogPosts.map((pub, i) => (
                <div key={i}>
                  <PublicationEntry publication={pub} />
                  {i < blogPosts.length - 1 && (
                    <div className="h-px bg-zinc-100 mt-10" />
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
