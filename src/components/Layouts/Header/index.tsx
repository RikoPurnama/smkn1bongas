import { useEffect, useState } from "react";
import Button from "@/components/Button";
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

  const fixed = scroll ? "fixed bg-nav backdrop-blur-lg shadow-inner" : "absolute";

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
      <header className={`w-full ${fixed} z-[99999]  text-light`}>
        <div className="container mx-auto lg:px-32">
          <div className="w-full px-6 py-2 flex items-center justify-between relative">
              <a href="#" className="text-md lg:text-xl font-bold gap-1 py-4">
                SMK Negeri 1 Bongas{" "}
                <span className="text-sm font-thin text-grey">4.0</span>
              </a>

              <button
                onClick={() => handleToggle()}
                className="py-1 px-1 absolute right-4 lg:hidden"
              >
                <span
                  className={`w-[25px] h-[1px] block bg-light ${toggleNavTop}`}
                ></span>
                <span
                  className={`w-[25px] h-[1px] my-2 block bg-light ${toggleNavCenter}`}
                ></span>
                <span
                  className={`w-[25px] h-[1px] block bg-light ${toggleNavBottom}`}
                ></span>
              </button>

            <nav
              className={`w-full lg:w-auto ${openNav} lg:scale-100 absolute lg:static left-0 top-full bg-nav lg:bg-transparent rounded-b-2xl`}
            >
              <ul className="w-full py-6 flex flex-col items-center gap-2 rounded-lg lg:flex lg:flex-row lg:gap-4 lg:scale-100 lg:static lg:py-4">
                <li>
                  <a href="#" className="hover:text-grey">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-grey">
                    Tentang
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-grey">
                    Jurusan
                  </a>
                </li>
              </ul>
            </nav>
            <Button
              buttonText="Contact"
              coloring="bg-primary hidden lg:block"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
