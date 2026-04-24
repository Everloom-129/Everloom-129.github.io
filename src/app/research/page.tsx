import { publicationData } from "@/data/publication";
import { PublicationEntry } from "@/components/publication-entry";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research · Jie Wang",
  description: "Publications and research work by Jie Wang in robotics, VLAs, and embodied reasoning.",
};

export default function ResearchPage() {
  const isBlog = (p: { conference: string }) => p.conference.toLowerCase().includes("blog");
  const papers = publicationData.filter((p) => !isBlog(p));
  const blogPosts = publicationData.filter(isBlog);

  const years = [...new Set(papers.map((p) => p.year))].sort((a, b) =>
    Number(b) - Number(a)
  );

  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <div className="max-w-screen-lg mx-auto px-8 py-16">
        {/* Page header */}
        <div className="mb-16 max-w-2xl">
          <h1 className="font-serif text-3xl font-light tracking-wide text-zinc-900 mb-4">
            Research
          </h1>
          <p className="font-serif text-sm leading-relaxed text-zinc-600">
            My research focuses on vision-language-action models, embodied reasoning, and robot learning —
            building generalizable agents that can perceive, reason, and act in the physical world.
            &nbsp;<span className="text-zinc-400">* denotes equal contribution.</span>
          </p>
        </div>

        {/* Papers grouped by year */}
        <div className="space-y-16">
          {years.map((year) => {
            const yearPapers = papers.filter((p) => p.year === year);
            return (
              <section key={year}>
                <h2 className="font-serif text-xs tracking-widest uppercase text-zinc-400 mb-8 flex items-center gap-3">
                  {year}
                  <span className="text-zinc-300">·</span>
                  <span className="text-zinc-300 normal-case tracking-normal">
                    {yearPapers.length} paper{yearPapers.length !== 1 ? "s" : ""}
                  </span>
                  <span className="flex-1 h-px bg-zinc-100" />
                </h2>
                <div className="space-y-12">
                  {yearPapers.map((pub, i) => (
                    <div key={i}>
                      <PublicationEntry publication={pub} />
                      {i < yearPapers.length - 1 && (
                        <div className="h-px bg-zinc-100 mt-12" />
                      )}
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Blog-type publications */}
        {blogPosts.length > 0 && (
          <section className="mt-20 pt-16 border-t border-zinc-100">
            <h2 className="font-serif text-xs tracking-widest uppercase text-zinc-400 mb-8">
              Blog Posts &amp; Reports
            </h2>
            <div className="space-y-12">
              {blogPosts.map((pub, i) => (
                <div key={i}>
                  <PublicationEntry publication={pub} />
                  {i < blogPosts.length - 1 && (
                    <div className="h-px bg-zinc-100 mt-12" />
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
