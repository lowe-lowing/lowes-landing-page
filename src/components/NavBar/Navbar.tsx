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

  const setSection = () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      if (window.scrollY >= sectionTop - 30 && window.scrollY <= sectionBottom - 10) {
        setActiveSectionId(section.id);
      }
    });
  };

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (scrollingTo) {
        setActiveSectionId(scrollingTo);
        setScrollingTo(null);
        router.replace(`#${scrollingTo}`, undefined, { scroll: false });
      } else {
        setSection();
      }
    }, 25);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollingTo]);

  useEffect(() => {
    setSection();
  }, []);

  return (
    <nav className="flex justify-center fixed top-0 w-full z-10 navbar">
      <div className="bg-primary flex flex-row justify-center items-center gap-5 h-12 text-primary pr-5 pl-5 shadow-primary shadow-sm">
        <NavLink title="About Me" href="#AboutMe" activeSectionId={activeSectionId} setScrollingTo={setScrollingTo} />
        <NavLink title="Projects" href="#Projects" activeSectionId={activeSectionId} setScrollingTo={setScrollingTo} />
        <NavLink title="Career" href="#Career" activeSectionId={activeSectionId} setScrollingTo={setScrollingTo} />
        <NavLink
          title="Fun Game"
          href="#Game"
          activeSectionId={activeSectionId}
          setScrollingTo={setScrollingTo}
          hiddenOnMobile
        />
        <NavLink title="Contact" href="#Contact" activeSectionId={activeSectionId} setScrollingTo={setScrollingTo} />
      </div>
    </nav>
  );
};

type NavLinkProps = {
  title: string;
  href: string;
  activeSectionId: string;
  setScrollingTo: React.Dispatch<React.SetStateAction<string | null>>;
  hiddenOnMobile?: boolean;
};

const NavLink: FC<NavLinkProps> = ({ title, href, activeSectionId, setScrollingTo, hiddenOnMobile = false }) => {
  const sectionId = href.substring(1);
  const isActive = sectionId === activeSectionId;

  return (
    <Link
      onClick={() => setScrollingTo(sectionId)}
      href={href}
      className={`${isActive ? "text-primary" : "text-secondary"} hover:text-primary whitespace-nowrap ${
        hiddenOnMobile ? "max-sm:hidden" : ""
      }`}
      scroll={false}
    >
      {title}
    </Link>
  );
};
