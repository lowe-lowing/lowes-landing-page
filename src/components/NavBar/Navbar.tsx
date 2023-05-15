import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";

export const Navbar = () => {
  const [activeSectionId, setActiveSectionId] = useState("");
  const [scrollingTo, setScrollingTo] = useState<string | null>(null);

  const router = useRouter();

  function debounce(func: () => void, delay: number) {
    let timeoutId: number | undefined;
    return () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(func, delay);
    };
  }

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (scrollingTo) {
        setActiveSectionId(scrollingTo);
        setScrollingTo(null);
        router.replace(`#${scrollingTo}`, undefined, { scroll: false });
      } else {
        const sections = document.querySelectorAll("section");
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          if (window.scrollY >= sectionTop - 30 && window.scrollY <= sectionBottom - 10) {
            setActiveSectionId(section.id);
          }
        });
      }
    }, 25);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollingTo]);

  return (
    <nav className="h-12 text-primary flex flex-row justify-center items-center gap-5 fixed top-0 w-[100%] bg-primary z-10">
      <NavLink title="About Me" href="#AboutMe" activeSectionId={activeSectionId} setScrollingTo={setScrollingTo} />
      <NavLink title="Projects" href="#Projects" activeSectionId={activeSectionId} setScrollingTo={setScrollingTo} />
      <NavLink title="Carreer" href="#Carreer" activeSectionId={activeSectionId} setScrollingTo={setScrollingTo} />
      <NavLink title="Fun Game" href="#Game" activeSectionId={activeSectionId} setScrollingTo={setScrollingTo} />
      <NavLink title="Contact" href="#Contact" activeSectionId={activeSectionId} setScrollingTo={setScrollingTo} />
    </nav>
  );
};

// props
type NavLinkProps = {
  title: string;
  href: string;
  activeSectionId: string;
  setScrollingTo: React.Dispatch<React.SetStateAction<string | null>>;
};

const NavLink: FC<NavLinkProps> = ({ title, href, activeSectionId, setScrollingTo }) => {
  const sectionId = href.substring(1);
  const isActive = sectionId === activeSectionId;

  return (
    <Link
      onClick={() => setScrollingTo(sectionId)}
      href={href}
      className={`${isActive ? "text-primary" : "text-secondary"} hover:text-primary `}
      scroll={false}
    >
      {title}
    </Link>
  );
};
