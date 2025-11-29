import { Education } from "@/data/education";

export function EducationEntry({ education }: { education: Education }) {
  return (
    <div>
      <div className="grid grid-cols-4 mb-1">
        <span className="text-xs text-zinc-500 mt-0.5">{education.year}</span>
        <div className="col-span-3">
          <h3 className="text-base mb-0.5 font-serif">{education.institution}</h3>
          <p className="text-sm text-zinc-600">{education.degree}</p>
          {education.advisor && (
            <p className="text-sm text-zinc-500 mt-1 italic">
              Advisor: {education.advisor}
            </p>
          )}
          {education.thesis && (
            <p className="text-sm text-zinc-500 mt-1 italic">
              Thesis:{" "}
              {education.thesisUrl ? (
                <a
                  href={education.thesisUrl}
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {education.thesis}
                </a>
              ) : (
                education.thesis
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
