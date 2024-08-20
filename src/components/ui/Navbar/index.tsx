import Aos from "aos";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export default function NavbarList() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const links = [
    { title: "Profile", link: "/" },
    { title: "About", link: "#About" },
    { title: "Project", link: "#Project" },
    { title: "Achievement", link: "#Achievement" },
    { title: "Contact", link: "#Contact" },
  ];

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  return (
    <nav
      className={`flex fixed justify-around w-full ${
        isOpen ? "backdrop-blur-lg" : "h-[50px] "
      } top-0 pt-4 shadow-sm md:p-4 transition-all z-50 ${
        isScrolled ? "shadow-lg backdrop-blur-lg " : ""
      }`}
    >
      <div className="flex flex-wrap flex-col justify-center align-middle items-center gap-3 md:flex-row">
        <div className="md:hidden flex justify-center items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1 items-center justify-center justify-items-center md:hidden"
          >
            <div
              className={`w-10 h-1 bg-sky-400 rounded-lg transition ease-in-out items-center justify-center ${
                isOpen
                  ? "origin-top-left rotate-45"
                  : "origin-top-left -rotate-0"
              }`}
            ></div>
            <div
              className={`h-2 bg-sky-400 rounded-lg transition ease-in-out ${
                isOpen ? "opacity-0 m-0 w-0" : "opacity-100 w-14"
              }`}
            ></div>
            <div
              className={`w-10 h-1 bg-sky-400 rounded-lg ${
                isOpen ? "origin-bottom-left -rotate-45 mt-1" : ""
              }`}
            ></div>
          </button>
        </div>
        <div>
          <button>{}</button>
        </div>
        <div className="flex flex-col flex-wrap md:flex-row gap-4 text-center">
          {links.map((link, index) => (
            <Link
              className={`${
                isOpen ? "block" : "hidden"
              } md:block transition-all hover:-translate-y-1 ease-in-out delay-100 duration-700`}
              href={link.link}
              key={link.title}
            >
              <p
                data-aos={hasAnimated ? "" : "fade-up"}
                data-aos-delay={(index + 1) * 100}
              >
                {link.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
