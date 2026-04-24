import { ProfileSection } from "@/components/profile-section";
import { PublicationEntry } from "@/components/publication-entry";
import { NewsEntry } from "@/components/news-entry";
import { aboutMe } from "@/data/aboutme";
import { newsData } from "@/data/news";
import { publicationData } from "@/data/publication";
import { educationData } from "@/data/education";
import { experienceData } from "@/data/experience";
import { EducationEntry } from "@/components/education-entry";
import { ExperienceEntry } from "@/components/experience-entry";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function SectionLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-zinc-400 hover:text-zinc-900 transition-colors duration-200 mt-6"
    >
      <span>{label}</span>
      <ArrowUpRight
        size={11}
        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
      />
    </Link>
  );
}

export default function Home() {
  const recentNews = newsData.slice(0, 4);
  const featuredPubs = publicationData.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <div className="max-w-screen-lg mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Left sidebar */}
          <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0">
            <div className="md:sticky top-24 space-y-8">
              <ProfileSection aboutMe={aboutMe} />
            </div>
          </div>

          {/* Right content */}
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-10">
            {/* About */}
            {aboutMe.description && (
              <section>
                <p
                  className="font-serif text-sm leading-relaxed text-zinc-700 [&_a]:underline [&_a]:text-zinc-900 [&_a:hover]:text-zinc-500"
                  dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                />
              </section>
            )}

            {/* News */}
            {recentNews.length > 0 && (
              <section id="news">
                <h2 className="font-serif text-sm mb-6 tracking-widest uppercase text-zinc-500">
                  News
                </h2>
                <div className="space-y-2">
                  {recentNews.map((news, i) => (
                    <NewsEntry key={i} news={news} />
                  ))}
                </div>
              </section>
            )}

            {/* Featured Research */}
            {featuredPubs.length > 0 && (
              <section id="research">
                <h2 className="font-serif text-sm mb-6 tracking-widest uppercase text-zinc-500">
                  Selected Research
                </h2>
                <div className="space-y-10">
                  {featuredPubs.map((pub, i) => (
                    <div key={i}>
                      <PublicationEntry publication={pub} />
                      {i < featuredPubs.length - 1 && (
                        <div className="h-px bg-zinc-100 mt-10" />
                      )}
                    </div>
                  ))}
                </div>
                <SectionLink href="/research" label="All publications" />
              </section>
            )}

            {/* Education */}
            {educationData.length > 0 && (
              <section id="education">
                <h2 className="font-serif text-sm mb-6 tracking-widest uppercase text-zinc-500">
                  Education
                </h2>
                <div className="space-y-6">
                  {educationData.map((ed, i) => (
                    <EducationEntry key={i} education={ed} />
                  ))}
                </div>
              </section>
            )}

            {/* Experience */}
            {experienceData.length > 0 && (
              <section id="experience">
                <h2 className="font-serif text-sm mb-6 tracking-widest uppercase text-zinc-500">
                  Experience
                </h2>
                <div className="space-y-4">
                  {experienceData.map((exp, i) => (
                    <ExperienceEntry key={i} experience={exp} />
                  ))}
                </div>
                <SectionLink href="/projects" label="All projects" />
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
