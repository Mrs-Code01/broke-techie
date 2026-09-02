import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { Logo } from "./Stage";

const NAV_LINKS = [
  { label: "Latest Articles", href: "/blog" },
  { label: "Round Table", href: "/#roundtable" },
  { label: "Answers", href: "/#answers" },
];

/** Nav content, rendered twice: once fixed and visible, once invisible in
 * normal flow so it reserves the exact same height at every breakpoint. */
function NavContent() {
  return (
    <>
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
    </>
  );
}

export default function BlogHeader() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-glow/15 bg-void/90 backdrop-blur-md">
        <div className="grain pointer-events-none absolute inset-0 opacity-30" aria-hidden />
        <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
          <NavContent />
        </nav>
      </header>
      <div className="invisible" aria-hidden>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
          <NavContent />
        </div>
      </div>
    </>
  );
}
