import Image from "next/image";
import { Experience } from "@/data/experience";

export function ExperienceEntry({ experience }: { experience: Experience }) {
  return (
    <div className="grid grid-cols-4">
      <div className="flex flex-col">
        <span className="text-xs text-zinc-500 mt-0.5 mb-3">{experience.date}</span>
        {experience.logo && (
          <div className="relative w-12 h-12 flex-shrink-0 overflow-hidden rounded-md bg-white border border-zinc-100">
            <Image
              src={experience.logo}
              alt={`${experience.company} logo`}
              fill
              className="object-contain p-1"
            />
          </div>
        )}
      </div>
      <div className="col-span-3 flex flex-col">
        <h3 className="text-base font-serif leading-tight mb-0.5">
          {experience.title} —{" "}
          {experience.companyUrl ? (
            <a
              href={experience.companyUrl}
              className="hover:text-zinc-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.company}
            </a>
          ) : (
            experience.company
          )}
        </h3>
        {experience.advisor && (
          <p className="text-sm text-zinc-600 leading-tight italic mt-0.5">
            Advisor: {experience.advisor}
          </p>
        )}
        {experience.manager && (
          <p className="text-sm text-zinc-600 leading-tight italic mt-0.5">
            Manager: {experience.manager}
          </p>
        )}
        {experience.description && (
          <p className="text-sm text-zinc-600 leading-snug mt-0.5">
            {experience.description}
          </p>
        )}
      </div>
    </div>
  );
}
