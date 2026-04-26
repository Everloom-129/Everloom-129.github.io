import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Publication } from "@/data/publication";

function conferenceBadgeClass(conference: string): string {
  if (conference.includes("Under Review"))
    return "text-zinc-400 bg-zinc-50 border border-zinc-200";
  if (conference.toLowerCase().includes("blog"))
    return "text-emerald-700 bg-emerald-50 border border-emerald-100";
  if (
    conference.includes("NeurIPS") ||
    conference.includes("ICRA") ||
    conference.includes("CoRL") ||
    conference.includes("CVPR") ||
    conference.includes("ICLR") ||
    conference.includes("ICICT")
  )
    return "text-blue-700 bg-blue-50 border border-blue-100";
  return "text-violet-700 bg-violet-50 border border-violet-100";
}

function AuthorLine({ authors }: { authors: string }) {
  const parts = authors.split(/(Jie Wang)/g);
  return (
    <p className="text-sm text-zinc-500 leading-relaxed">
      {parts.map((part, i) =>
        part === "Jie Wang" ? (
          <span key={i} className="font-semibold text-zinc-700 underline decoration-dotted underline-offset-2">
            Jie Wang
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </p>
  );
}

function LinkPill({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1 text-[11px] tracking-wider uppercase text-zinc-500 hover:text-zinc-900 border border-zinc-200 hover:border-zinc-400 rounded px-2 py-0.5 transition-all duration-150"
    >
      {label}
      <ArrowUpRight
        size={10}
        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150"
      />
    </a>
  );
}

export function PublicationEntry({ publication }: { publication: Publication }) {
  return (
    <div className="flex flex-col sm:flex-row gap-5">
      {publication.imageUrl && (
        <div className="flex-shrink-0 sm:w-[180px]">
          <div className="relative w-full sm:w-[180px] h-[112px] rounded-lg overflow-hidden bg-zinc-100 border border-zinc-100">
            <Image
              src={publication.imageUrl}
              alt={publication.title}
              fill
              loading="lazy"
              className="object-cover"
            />
          </div>
        </div>
      )}

      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1.5">
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${conferenceBadgeClass(publication.conference)}`}>
            {publication.conference}
          </span>
          <span className="text-xs text-zinc-400">{publication.year}</span>
          {publication.award && (
            <span className="inline-flex items-center text-xs text-amber-700 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-full font-medium">
              {publication.award}
            </span>
          )}
        </div>

        <h3 className="font-serif text-[0.95rem] leading-snug mb-1.5 text-zinc-900">
          {publication.paperUrl ? (
            <a
              href={publication.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-500 transition-colors duration-200"
            >
              {publication.title}
            </a>
          ) : (
            publication.title
          )}
        </h3>

        <AuthorLine authors={publication.authors} />

        {publication.tldr && (
          <p className="text-xs text-zinc-500 mt-2 leading-relaxed italic border-l-2 border-zinc-100 pl-3">
            {publication.tldr}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mt-3">
          {publication.paperUrl && <LinkPill href={publication.paperUrl} label="Paper" />}
          {publication.codeUrl && <LinkPill href={publication.codeUrl} label="Code" />}
          {publication.poster && <LinkPill href={publication.poster} label="Poster" />}
          {publication.bibtex && <LinkPill href={publication.bibtex} label="BibTeX" />}
        </div>

        {publication.keywords && publication.keywords.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2.5">
            {publication.keywords.map((kw, i) => (
              <span key={i} className="text-[10px] tracking-wide text-zinc-400 px-1.5 py-0.5 bg-zinc-50 border border-zinc-100 rounded">
                {kw}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
