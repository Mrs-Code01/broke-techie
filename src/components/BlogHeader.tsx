import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { Logo } from "./Stage";

const NAV_LINKS = [
  { label: "Latest Articles", href: "/blog" },
  { label: "Round Table", href: "/#roundtable" },
  { label: "Answers", href: "/#answers" },
];

export default function BlogHeader() {
  return (
    <header className="relative overflow-hidden border-b border-glow/15 bg-void/60">
      <div className="grain pointer-events-none absolute inset-0 opacity-30" aria-hidden />
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
        <Link href="/">
          <Logo />
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium text-paper/60 min-[960px]:flex">
          <Link href="/blog" className="transition hover:text-gold">
            Latest Articles
          </Link>
          <Link href="/#roundtable" className="transition hover:text-gold">
            Round Table
          </Link>
          <Link href="/#answers" className="transition hover:text-gold">
            Answers
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/#contact"
            className="bg-gold px-5 py-2 text-sm font-bold tracking-[0.12em] text-ink uppercase transition hover:bg-paper"
          >
            Join
          </Link>
          <MobileMenu links={NAV_LINKS} />
        </div>
      </nav>
    </header>
  );
}
