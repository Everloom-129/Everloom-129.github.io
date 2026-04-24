import Image from "next/image";
import { Github, Linkedin, Mail, Twitter, GraduationCap, FileText } from "lucide-react";
import { AboutMe } from "@/data/aboutme";

interface NavItem {
  id: string;
  label: string;
}

interface ProfileSectionProps {
  aboutMe: AboutMe;
  navItems?: NavItem[];
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

export function ProfileSection({ aboutMe, navItems }: ProfileSectionProps) {
  if (!aboutMe) return null;

  return (
    <div className="md:sticky top-20 flex flex-row-reverse md:flex-col gap-4 md:gap-0">
      {/* Photo */}
      {aboutMe.imageUrl && (
        <div className="w-1/3 md:w-full flex-shrink-0 md:mb-5">
          <div className="relative w-full md:w-[62%] aspect-[3/4]">
            <Image
              src={aboutMe.imageUrl}
              alt={aboutMe.name}
              fill
              priority
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      )}

      {/* Info */}
      <div className="w-2/3 md:w-full">
        <h1 className="font-serif text-2xl font-light tracking-wide mb-0.5 text-zinc-900">
          {aboutMe.name}
        </h1>

        <p className="text-zinc-500 text-xs leading-relaxed tracking-wide uppercase mb-4">
          {aboutMe.title}
          <br />
          {aboutMe.institutionUrl ? (
            <a
              href={aboutMe.institutionUrl}
              className="hover:text-zinc-900 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {aboutMe.institution}
            </a>
          ) : (
            aboutMe.institution
          )}
        </p>

        {/* Quick links: Blog + CV */}
        <div className="flex gap-5 mb-5">
          {aboutMe.blogUrl && (
            <a
              href={aboutMe.blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase text-zinc-400 hover:text-zinc-900 transition-colors duration-200"
            >
              Blog ↗
            </a>
          )}
          {aboutMe.cvUrl && (
            <a
              href={aboutMe.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase text-zinc-400 hover:text-zinc-900 transition-colors duration-200"
            >
              CV ↗
            </a>
          )}
        </div>

        {/* Social links */}
        <div className="flex flex-col gap-2">
          <SocialLink
            href={`mailto:${aboutMe.email}`}
            icon={<Mail size={13} />}
            label={aboutMe.email}
          />
          {aboutMe.googleScholarUrl && (
            <SocialLink
              href={aboutMe.googleScholarUrl}
              icon={<GraduationCap size={13} />}
              label="Google Scholar"
            />
          )}
          {aboutMe.githubUsername && (
            <SocialLink
              href={`https://github.com/${aboutMe.githubUsername}`}
              icon={<Github size={13} />}
              label={`github/${aboutMe.githubUsername}`}
            />
          )}
          {aboutMe.twitterUsername && (
            <SocialLink
              href={`https://twitter.com/${aboutMe.twitterUsername}`}
              icon={<Twitter size={13} />}
              label={`@${aboutMe.twitterUsername}`}
            />
          )}
          {aboutMe.linkedinUsername && (
            <SocialLink
              href={`https://www.linkedin.com/in/${aboutMe.linkedinUsername}`}
              icon={<Linkedin size={13} />}
              label="LinkedIn"
            />
          )}
          {aboutMe.cvUrl && (
            <SocialLink
              href={aboutMe.cvUrl}
              icon={<FileText size={13} />}
              label="Curriculum Vitae"
            />
          )}
        </div>

        {/* Within-page nav (home page only) */}
        {navItems && navItems.length > 0 && (
          <nav className="hidden md:flex flex-col gap-1 mt-6 pt-6 border-t border-zinc-100">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-xs text-zinc-400 hover:text-zinc-900 tracking-widest uppercase transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
}
