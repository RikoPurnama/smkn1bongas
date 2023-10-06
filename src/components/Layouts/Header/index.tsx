import { useEffect, useState } from "react";
import Button from "@/components/Button";
import Link from "next/link";
import Gallery from '../Gallery/index';
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
      <header className={`w-full ${fixed} z-[99999] text-light`}>
        <div className="container mx-auto lg:px-44">
          <div className="w-full px-6 flex items-center justify-between relative">
              <Link href="/" className="text-md lg:text-xl font-bold gap-1 py-4">
                SMK Negeri 1 Bongas{" "}
                <span className="text-sm font-thin text-grey">4.0</span>
              </Link>

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
              <ul className="w-full py-6 flex flex-col items-center gap-2 rounded-lg lg:flex lg:flex-row lg:gap-8 lg:scale-100 lg:static lg:py-0">
                <li className="group relative py-6">
                  <Link href="/" className="hover:text-grey">
                    Beranda
                  </Link>
                  <div className=" hidden group-hover:block bg-nav py-4 px-10 absolute top-[100%] rounded-b-lg">
                    <ul className="flex flex-col gap-3">
                      <li>
                        <Link href="/#about" className="hover:text-grey">
                          Tentang
                        </Link>
                      </li>
                      <li>
                        <Link href="/#jurusan" className="hover:text-grey">
                          Jurusan
                        </Link>
                      </li>
                      <li>
                        <Link href="/#gallery" className="hover:text-grey">
                          Gallery
                        </Link>
                      </li>
                      <li>
                        <Link href="/#sekolah" className="hover:text-grey w-full">
                          Fasilitas sekolah
                        </Link>
                      </li>
                      <li>
                        <Link href="/#quote" className="hover:text-grey">
                          Alumni
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link href="/about" className="hover:text-grey">
                    Tentang
                  </Link>
                </li>
                <li>
                  <Link href="/jurusan" className="hover:text-grey">
                    Jurusan
                  </Link>
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
