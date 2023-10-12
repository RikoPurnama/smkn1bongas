import { useEffect, useState } from "react";
import Link from "next/link";
import Navlink from "./navlink";
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
  const openNav = nav ? "translate-y-0" : "translate-y-[-150%]";
  const navToHeader = nav ? "fixed bg-nav backdrop-blur-xl shadow-inner" : "";

  return (
    <>
      <header className={`w-full ${fixed} z-[99999] text-light ${navToHeader}`}>
        <div className="container mx-auto lg:px-44">
          <div className="w-full px-6 flex items-center justify-between relative">
            <Link href="/" className="text-md lg:text-2xl font-bold gap-1 py-4">
              SMK Negeri 1 Bongas{" "}
              <span className="text-sm font-thin text-grey">4.0</span>
            </Link>

            <button
              onClick={() => handleToggle()}
              className="py-1 px-1 absolute right-4 lg:hidden nav-toggle"
              aria-label="nav-toggle"
            >
              <span
                className={`w-[25px] h-[1px] block bg-light ${toggleNavTop} span1`}
              ></span>
              <span
                className={`w-[18px] h-[1px] my-2 ml-[7px] block bg-light ${toggleNavCenter} span2`}
              ></span>
              <span
                className={`w-[25px] h-[1px] block bg-light ${toggleNavBottom} span3`}
              ></span>
            </button>

            <nav
              className={`w-full lg:w-auto ${openNav} lg:translate-y-0 lg:scale-100 absolute lg:static left-0 top-full bg-nav lg:bg-transparent rounded-b-2xl transition duration-300 ease-in-out z-[9999] nav `}
            >
              <ul className="w-full py-6 px-6 lg:px-0 flex flex-col items-center gap-2 rounded-lg lg:flex lg:flex-row lg:gap-4 lg:static lg:py-0">
                <Navlink />
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
