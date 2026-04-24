import { ArrowUpRight } from "lucide-react";
import { News } from "@/data/news";

export function NewsEntry({ news }: { news: News }) {
  return (
    <div className="flex gap-6 group">
      {/* Date column */}
      <div className="flex-shrink-0 w-24 pt-0.5">
        <span className="text-xs text-zinc-400 font-mono tabular-nums leading-none">
          {news.date}
        </span>
      </div>

      {/* Divider dot */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 group-hover:bg-zinc-500 transition-colors duration-200 mt-1.5" />
        <div className="flex-1 w-px bg-zinc-100 mt-1" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-5">
        <h3 className="font-serif text-sm leading-snug text-zinc-900 mb-0.5">
          {news.link ? (
            <a
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-zinc-500 transition-colors duration-200"
            >
              {news.title}
              <ArrowUpRight
                size={13}
                className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0"
              />
            </a>
          ) : (
            news.title
          )}
        </h3>
        <p className="text-xs text-zinc-500 leading-relaxed">{news.description}</p>
      </div>
    </div>
  );
}
