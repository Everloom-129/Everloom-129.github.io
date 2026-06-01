import { aboutMe } from "@/data/aboutme";
import { publicationData } from "@/data/publication";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog · Jie Wang",
  description: "Writing, notes, and reflections by Jie Wang on robotics, AI, and life.",
};

interface WritingEntry {
  title: string;
  description: string;
  url?: string;
  tag: string;
  date?: string;
}

function WritingCard({ entry }: { entry: WritingEntry }) {
  const baseClass =
    "group flex items-start justify-between gap-4 py-4 border-b border-zinc-100 last:border-0";

  const inner = (
    <>
      <div className="flex-1 min-w-0">
        <h3
          className={`font-serif text-sm text-zinc-900 leading-snug mb-1 ${
            entry.url ? "group-hover:text-zinc-500 transition-colors duration-200" : ""
          }`}
        >
          {entry.title}
        </h3>
        <p className="text-xs text-zinc-500 leading-relaxed">{entry.description}</p>
        {entry.date && (
          <span className="text-[10px] text-zinc-400 mt-1 block">{entry.date}</span>
        )}
      </div>
      {entry.url && (
        <ArrowUpRight
          size={14}
          className="flex-shrink-0 text-zinc-300 group-hover:text-zinc-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 mt-0.5"
        />
      )}
    </>
  );

  if (entry.url) {
    return (
      <a
        href={entry.url}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass + " cursor-pointer"}
      >
        {inner}
      </a>
    );
  }
  return <div className={baseClass}>{inner}</div>;
}

function Section({
  title,
  description,
  entries,
}: {
  title: string;
  description?: string;
  entries: WritingEntry[];
}) {
  if (entries.length === 0) return null;
  return (
    <section className="mb-12">
      <div className="mb-4">
        <h2 className="font-serif text-xs tracking-widest uppercase text-zinc-400 flex items-center gap-3">
          {title}
          <span className="flex-1 h-px bg-zinc-100" />
        </h2>
        {description && (
          <p className="text-xs text-zinc-400 mt-2 leading-relaxed max-w-xl font-sans">
            {description}
          </p>
        )}
      </div>
      <div>
        {entries.map((entry, i) => (
          <WritingCard key={i} entry={entry} />
        ))}
      </div>
    </section>
  );
}

export default function BlogPage() {
  const blogPubs = publicationData.filter((p) =>
    p.conference.toLowerCase().includes("blog")
  );

  const essays: WritingEntry[] = [
    {
      title: "Essays on Robotics, AI, and Ideas",
      description:
        "Long-form writing on research intuitions, the philosophy of embodied intelligence, and what it means to build machines that act in the physical world.",
      url: aboutMe.blogUrl ?? undefined,
      tag: "Substack",
    },
  ];

  const researchNotes: WritingEntry[] = blogPubs.map((p) => ({
    title: p.title,
    description: p.tldr ?? p.authors,
    url: p.paperUrl,
    tag: "Research Blog",
    date: p.year,
  }));

  const courseNotes: WritingEntry[] = [
    {
      title: "CIS7000: Real-World Robot Learning — Paper Reading Notes",
      description:
        "Reading notes and algorithm reproductions from ESE6800/CIS7000 at UPenn, covering cutting-edge robot learning research with Prof. Antonio Loquercio and Prof. Dinesh Jayaraman.",
      url: "https://everloom-129.github.io/CIS700-Real-World-Robot-Learning/",
      tag: "Course Notes",
      date: "2025",
    },
    {
      title: "EAS5450: Engineering Entrepreneurship",
      description:
        "Notes from UPenn's engineering entrepreneurship course — covering venture formation, go-to-market strategy, and what it takes to turn deep-tech research into a company.",
      url: "https://github.com/Everloom-129/EAS5450-Eng_Entrepreneurship",
      tag: "Course Notes",
      date: "2025",
    },
  ];

  const benchmarkTabs: { label: string; url: string }[] = [
    { label: "RoboCasa365 · Atomic", url: "/blogs/robocasa365_atomic_skills.html" },
    { label: "RoboCasa365 · Composite", url: "/blogs/robocasa365_composite_tasks.html" },
    { label: "MolmoAct2 · BimanualYAM", url: "/blogs/molmoact2_yam_dataset.html" },
    { label: "BEHAVIOR Challenge 2025", url: "/blogs/behavior_challenge_2025.html" },
    { label: "LW-BenchHub", url: "/blogs/lw_benchhub_tasks.html" },
  ];

  const misc: WritingEntry[] = [
    {
      title: "PhiloCoffee Club (哲咖社)",
      description:
        "A student club I founded at ZJU International Campus exploring philosophy through coffee. We read Nietzsche, debate consciousness, and share espresso.",
      url: "https://philocoffee.github.io/",
      tag: "Misc",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <div className="max-w-screen-lg mx-auto px-8 py-16">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <h1 className="font-serif text-3xl font-light tracking-wide text-zinc-900 mb-3">
            Blog &amp; Writing
          </h1>
          <p className="font-serif text-sm leading-relaxed text-zinc-600">
            Research notes, course reflections, and essays — from robot learning to the philosophy of intelligence.
          </p>
        </div>

        <div className="max-w-2xl">
          <Section
            title="Essays"
            description="Long-form writing on research, AI, and ideas."
            entries={essays}
          />
          <Section
            title="Research Notes"
            description="Blog posts and reports from research projects."
            entries={researchNotes}
          />

          {/* Benchmark Atlas — dashboard lead + per-benchmark tabs */}
          <section className="mb-12">
            <div className="mb-4">
              <h2 className="font-serif text-xs tracking-widest uppercase text-zinc-400 flex items-center gap-3">
                Benchmark Atlas
                <span className="flex-1 h-px bg-zinc-100" />
              </h2>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed max-w-xl font-sans">
                A living visual survey of VLA simulation benchmarks — instructions, success rates, and per-benchmark dissections.
              </p>
            </div>
            <a
              href="/blogs/vla_benchmark_dashboard.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-4 py-4 border-b border-zinc-100 cursor-pointer"
            >
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-sm text-zinc-900 leading-snug mb-1 group-hover:text-zinc-500 transition-colors duration-200">
                  VLA Simulation Benchmarks — Visual Survey
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Word clouds of task instructions, a capability-vs-robustness map, and a benchmark × model success heatmap across 20+ sim benchmarks.
                </p>
              </div>
              <ArrowUpRight
                size={14}
                className="flex-shrink-0 text-zinc-300 group-hover:text-zinc-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 mt-0.5"
              />
            </a>
            <div className="flex flex-wrap gap-2 pt-4">
              {benchmarkTabs.map((t) => (
                <a
                  key={t.label}
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-sans text-zinc-500 border border-zinc-200 rounded-full px-3 py-1 hover:border-zinc-400 hover:text-zinc-700 transition-colors"
                >
                  {t.label}
                </a>
              ))}
              <span className="text-[11px] font-sans text-zinc-300 border border-dashed border-zinc-200 rounded-full px-3 py-1 select-none">
                (…) more
              </span>
            </div>
          </section>

          <Section
            title="Course Notes"
            description="Reading logs, reproductions, and reflections from graduate courses."
            entries={courseNotes}
          />
          <Section title="Life &amp; Misc" entries={misc} />
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-100 max-w-2xl">
          <p className="font-serif text-xs text-zinc-400 leading-relaxed">
            Most long-form writing lives on{" "}
            <a
              href={aboutMe.blogUrl ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-600 transition-colors"
            >
              Substack
            </a>
            .{" "}
            {aboutMe.twitterUsername && (
              <>
                Short thoughts on{" "}
                <a
                  href={`https://twitter.com/${aboutMe.twitterUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-zinc-600 transition-colors"
                >
                  X / Twitter
                </a>
                .
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
