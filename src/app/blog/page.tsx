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
  const Wrapper = entry.url ? "a" : "div";
  const wrapperProps = entry.url
    ? { href: entry.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`group block py-6 border-b border-zinc-100 last:border-0 ${
        entry.url ? "cursor-pointer" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className={`text-xs tracking-widest uppercase px-2 py-0.5 rounded-full border font-medium ${
              entry.tag === "Substack"
                ? "text-violet-700 bg-violet-50 border-violet-100"
                : entry.tag === "Research Blog"
                ? "text-emerald-700 bg-emerald-50 border-emerald-100"
                : entry.tag === "Course Notes"
                ? "text-blue-700 bg-blue-50 border-blue-100"
                : "text-amber-700 bg-amber-50 border-amber-100"
            }`}>
              {entry.tag}
            </span>
            {entry.date && (
              <span className="text-xs text-zinc-400">{entry.date}</span>
            )}
          </div>
          <h3
            className={`font-serif text-base text-zinc-900 mb-2 leading-snug ${
              entry.url
                ? "group-hover:text-zinc-600 transition-colors duration-200"
                : ""
            }`}
          >
            {entry.title}
          </h3>
          <p className="text-sm text-zinc-600 leading-relaxed">
            {entry.description}
          </p>
        </div>
        {entry.url && (
          <ArrowUpRight
            size={16}
            className="text-zinc-300 group-hover:text-zinc-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0 mt-1"
          />
        )}
      </div>
    </Wrapper>
  );
}

export default function BlogPage() {
  const blogPubs = publicationData.filter((p) =>
    p.conference.toLowerCase().includes("blog")
  );

  const substackEntry: WritingEntry = {
    title: "Substack — Essays on Robotics, AI, and Ideas",
    description:
      "I write on Substack about research intuitions, robotics philosophy, and things I find interesting at the intersection of intelligence and machines.",
    url: aboutMe.blogUrl ?? undefined,
    tag: "Substack",
  };

  const pubEntries: WritingEntry[] = blogPubs.map((p) => ({
    title: p.title,
    description: p.tldr ?? p.authors,
    url: p.paperUrl,
    tag: "Research Blog",
    date: p.year,
  }));

  const courseEntries: WritingEntry[] = [
    {
      title: "Course Blogs of CIS7000: Real-World Robot Learning",
      description:
        "A comprehensive collection of paper reading notes and algorithm reproductions for ESE6800/CIS7000 at UPenn. Learning from Prof. Antonio Loquercio and Prof. Dinesh Jayaraman on cutting-edge robotics research.",
      url: "https://everloom-129.github.io/CIS700-Real-World-Robot-Learning/",
      tag: "Course Notes",
      date: "2025",
    },
  ];

  const philoCoffee: WritingEntry = {
    title: "PhiloCoffee Club (哲咖社)",
    description:
      "A student club I founded at ZJU International Campus exploring philosophy through coffee. We read Nietzsche, debate consciousness, and share espresso.",
    url: "https://philocoffee.github.io/",
    tag: "Misc",
  };

  const allEntries = [substackEntry, ...pubEntries, ...courseEntries, philoCoffee];

  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <div className="max-w-screen-lg mx-auto px-8 py-16">
        {/* Page header */}
        <div className="mb-16 max-w-2xl">
          <h1 className="font-serif text-3xl font-light tracking-wide text-zinc-900 mb-4">
            Blog &amp; Writing
          </h1>
          <p className="font-serif text-sm leading-relaxed text-zinc-600">
            Research notes, course reflections, and essays on things I&apos;m thinking about —
            from robot learning to coffee philosophy.
          </p>
        </div>

        {/* Writing list */}
        <div className="max-w-2xl">
          {allEntries.map((entry, i) => (
            <WritingCard key={i} entry={entry} />
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 pt-8 border-t border-zinc-100 max-w-2xl">
          <p className="font-serif text-xs text-zinc-400 leading-relaxed">
            Most of my long-form writing lives on{" "}
            <a
              href={aboutMe.blogUrl ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700 transition-colors"
            >
              Substack
            </a>
            . Short thoughts go on{" "}
            {aboutMe.twitterUsername && (
              <a
                href={`https://twitter.com/${aboutMe.twitterUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-zinc-700 transition-colors"
              >
                X / Twitter
              </a>
            )}
            .
          </p>
        </div>
      </div>
    </div>
  );
}
