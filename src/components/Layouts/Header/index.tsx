import { useEffect, useState } from "react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import LinkBeranda from "@/components/Link/Beranda";
import LinkProgram from "@/components/Link/Program";
import LinkAboutMe from "@/components/Link/AboutMe";
import LinkHubungiKami from "@/components/Link/HubungiKami";
const Header = () => {
  const [scroll, setScroll] = useState(false);
  const fixedHeader = () => {
    const top = window.scrollY;
    if (top > 8) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", () => fixedHeader());

    window.addEventListener("click", (e) => {
      if (
        e.target != document.querySelector(".nav") &&
        e.target != document.querySelector(".beranda") &&
        e.target != document.querySelector(".tentang") &&
        e.target != document.querySelector(".program") &&
        e.target != document.querySelector(".contact") &&
        e.target != document.querySelector(".span1") &&
        e.target != document.querySelector(".span2") &&
        e.target != document.querySelector(".span3")
      ) {
        setNav(false);
      }
    });
  });

  const fixed = scroll
    ? "fixed bg-nav backdrop-blur-xl shadow-inner"
    : "absolute";

  // for toggle nav
  const [nav, setNav] = useState(false);
  const handleToggle = () => {
    setNav(!nav);
  };

  const toggleNavTop = nav
    ? "origin-top-left rotate-45 transition duration-300 ease-in-out"
    : "";
  const toggleNavCenter = nav
    ? "scale-0 transition duration-300 ease-in-out"
    : "";
  const toggleNavBottom = nav
    ? "origin-bottom-left -rotate-45 transition duration-300 ease-in-out"
    : "";
  const openNav = nav ? "scale-100" : "scale-0";

  return (
    <>
      <header className={`w-full ${fixed} z-[99999] text-light`}>
        <div className="container mx-auto lg:px-44">
          <div className="w-full px-6 flex items-center justify-between relative">
            <Link href="/" className="text-md lg:text-2xl font-bold gap-1 py-4">
              SMK Negeri 1 Bongas{" "}
              <span className="text-sm font-thin text-grey">4.0</span>
            </Link>

            <button
              onClick={() => handleToggle()}
              className="py-1 px-1 absolute right-4 lg:hidden nav-toggle"
            >
              <span
                className={`w-[25px] h-[1px] block bg-light ${toggleNavTop} span1`}
              ></span>
              <span
                className={`w-[25px] h-[1px] my-2 block bg-light ${toggleNavCenter} span2`}
              ></span>
              <span
                className={`w-[25px] h-[1px] block bg-light ${toggleNavBottom} span3`}
              ></span>
            </button>

            <nav
              className={`w-full lg:w-auto ${openNav} lg:scale-100 absolute lg:static left-0 top-full bg-nav lg:bg-transparent rounded-b-2xl z-[9999] nav `}
            >
              <ul className="w-full py-6 px-6 lg:px-0 flex flex-col items-center gap-2 rounded-lg lg:flex lg:flex-row lg:gap-4 lg:static lg:py-0">
                <li className="group/beranda relative lg:py-6 w-full lg:w-auto">
                  <Link
                    href="/"
                    className="hover:text-grey flex justify-between items-center gap-1 beranda"
                  >
                    Beranda
                    <FaAngleDown className="w-4 h-4 group-hover/beranda:rotate-180 mt-1 transition duration-200 ease-in-out text-grey" />
                  </Link>
                  <LinkBeranda />
                </li>
                <li className="group/tentang relative lg:py-6 w-full lg:w-auto ">
                  <Link
                    href=""
                    className="hover:text-grey flex justify-between items-center gap-1 tentang"
                  >
                    Tentang kami
                    <FaAngleDown className="w-4 h-4 group-hover/tentang:rotate-180 mt-1 transition duration-200 ease-in-out text-grey" />
                  </Link>
                  <LinkAboutMe />
                </li>
                <li className="group/program relative lg:py-6 w-full lg:w-auto">
                  <Link
                    href=""
                    className="hover:text-grey flex justify-between items-center gap-1 program"
                  >
                    Program
                    <FaAngleDown className="w-4 h-4 group-hover/program:rotate-180 mt-1 transition duration-200 ease-in-out text-grey" />
                  </Link>
                  <LinkProgram />
                </li>
                <li className="group/hubungi relative lg:py-6 w-full lg:w-auto">
                  <Link
                    href=""
                    className="hover:text-grey flex justify-between items-center gap-1 contact"
                  >
                    Hubungi Kami
                    <FaAngleDown className="w-4 h-4 group-hover/hubungi:rotate-180 mt-1 transition duration-200 ease-in-out text-grey" />
                  </Link>
                  <LinkHubungiKami />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
