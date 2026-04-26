import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Portfolio } from "@/data/portfolio";

export function PortfolioEntry({ portfolio }: { portfolio: Portfolio }) {
  const cleanTitle = portfolio.title.replace(/^\d{4}:\s*/, "");

  return (
    <div className="group flex flex-col border border-zinc-100 rounded-xl overflow-hidden hover:border-zinc-200 hover:shadow-sm transition-all duration-200 bg-white h-full">
      {portfolio.imageUrl && (
        <div className="relative w-full aspect-video bg-zinc-100 overflow-hidden flex-shrink-0">
          <Image
            src={portfolio.imageUrl}
            alt={cleanTitle}
            fill
            loading="lazy"
            className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      )}

      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-serif text-base text-zinc-900 leading-snug mb-2">
          {portfolio.projectUrl ? (
            <a
              href={portfolio.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-500 transition-colors inline-flex items-center gap-1.5"
            >
              {cleanTitle}
              <ArrowUpRight
                size={14}
                className="opacity-0 group-hover:opacity-100 flex-shrink-0 transition-opacity duration-200"
              />
            </a>
          ) : (
            cleanTitle
          )}
        </h3>

        {portfolio.technologies && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {portfolio.technologies.map((tech, i) => (
              <span
                key={i}
                className="text-[10px] text-zinc-500 bg-zinc-50 border border-zinc-100 px-2 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <p className="text-sm text-zinc-600 leading-relaxed flex-1">
          {portfolio.description}
        </p>

        {portfolio.codeUrl && (
          <a
            href={portfolio.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-700 transition-colors mt-4 self-start"
          >
            <ArrowUpRight size={11} />
            <span className="tracking-wider uppercase">Code</span>
          </a>
        )}
      </div>
    </div>
  );
}
