import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif, PT_Serif } from "next/font/google";
import "./globals.css";
import { aboutMe } from "@/data/aboutme";
import { customMetadata } from "@/data/title-description";
import { Navbar } from "@/components/navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const metaTitle = customMetadata.title || aboutMe.name;
const metaDescription =
  customMetadata.description ||
  "MS Robotics student at UPenn GRASP Lab. Research in VLAs, embodied reasoning, and robot learning.";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  icons: {
    icon: "/images/favicon.ico",
  },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    url: "https://everloom-129.github.io",
    siteName: metaTitle,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: metaTitle,
    description: metaDescription,
    creator: aboutMe.twitterUsername ? `@${aboutMe.twitterUsername}` : undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} ${ptSerif.variable} antialiased`}
      >
        <Navbar />
        <main className="">{children}</main>
        <footer className="border-t border-zinc-100 bg-[#FFFCF8]">
          <div className="max-w-screen-lg mx-auto px-8 py-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            <div>
              <p className="text-sm text-zinc-500">
                © {new Date().getFullYear()} {aboutMe.name}.
              </p>
              {aboutMe.secretDescription && (
                <p className="text-xs text-zinc-400 mt-3 max-w-sm leading-relaxed">
                  {aboutMe.secretDescription}
                </p>
              )}
            </div>
            <nav className="flex gap-6 text-xs tracking-widest uppercase text-zinc-400">
              <a href="/research" className="hover:text-zinc-700 transition-colors">Research</a>
              <a href="/projects" className="hover:text-zinc-700 transition-colors">Projects</a>
              <a href="/blog" className="hover:text-zinc-700 transition-colors">Blog</a>
              {aboutMe.cvUrl && (
                <a href={aboutMe.cvUrl} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-700 transition-colors">CV</a>
              )}
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
