import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavbarList() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <>
      <nav
        className={`flex fixed justify-around bg-slate-300 w-full top-0 p-4 md:p-3 transition-all ${
          isScrolled ? "shadow-lg " : ""
        }`}
      >
        <div className="flex flex-wrap flex-col justify-center align-middle items-center gap-3 md:flex-row ">
          <div className="md:hidden">
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
                className={` h-2 bg-sky-400  rounded-lg transition ease-in-out ${
                  isOpen ? "opacity-0 m-0 w-0" : "opacity-100 w-14"
                }`}
              ></div>
              <div
                className={`w-10 h-1 bg-sky-400  rounded-lg ${
                  isOpen ? "origin-bottom-left -rotate-45 mt-1" : ""
                }`}
              ></div>
            </button>
          </div>
          <div className="flex flex-col flex-wrap md:flex-row gap-4 text-center">
            <Link
              className={`${isOpen ? "block" : "hidden"} md:block transition`}
              href="/"
            >
              Profile
            </Link>
            <Link
              className={`${isOpen ? "block" : "hidden"} md:block`}
              href="#About"
            >
              About
            </Link>
            <Link
              className={`${isOpen ? "block" : "hidden"} md:block`}
              href="#Project"
            >
              Project
            </Link>
            <Link
              className={`${isOpen ? "block" : "hidden"} md:block`}
              href="#Achievement"
            >
              Achievement
            </Link>
            <Link
              className={`${isOpen ? "block" : "hidden"} md:block`}
              href="#Contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
