import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="pt-24 pb-4 bg-dark text-light">
      <div className="container mx-auto lg:px-44">
        <div className="w-full px-6">
          <div className="w-full flex justify-between flex-wrap">
            <div className="w-full md:w-[22%] py-4">
              <h3 className="text-2xl font-bold pb-4">SMK Negeri 2 Bongas</h3>
              <p className="text-base text-grey">
                Lorem ipsum dolor sit amet consectetur. Suspendisse purus sociis
                sagittis
              </p>
            </div>

            <div className="w-full md:w-[22%] py-4 md:flex flex-col items-center">
              <h3 className="text-2xl font-bold pb-4">Link</h3>
              <ul className="ml-3 text-grey flex flex-col gap-2">
                <li>
                  <Link href="/" className="hover:text-light">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="hover:text-light">
                    Tentang
                  </Link>
                </li>
                <li>
                  <Link href="/#jurusan" className="hover:text-light">
                    Jurusan
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-[22%] py-4">
              <h3 className="text-2xl font-bold pb-4">Privacy</h3>
              <ul className="w-full text-grey flex flex-col gap-2">
                <li>
                  <a href="#" className="hover:text-light">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-light">
                    Terms and conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-light">
                    refund Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-[22%] py-4">
              <h3 className="text-2xl font-bold pb-4">Contact Us</h3>
              <p className="text-base text-grey">+62 800 0000 0000</p>
              <p className="text-base text-grey">@gmail.com</p>
              <div className="flex gap-3 pt-4">
                <Link
                  href="#"
                  target="_blank"
                  className="w-11 h-11 rounded-xl bg-semiDark shadow-card flex justify-center items-center group/fa hover:shadow-none"
                >
                  <FaFacebookSquare className="w-[60%] h-[60%] group-hover/fa:text-primary group-hover/fa:w-[65%] group-hover/you:h-[65%] transition duration-300 ease-in-out" />
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  className="w-11 h-11 rounded-xl bg-semiDark shadow-card flex justify-center items-center group/ig hover:shadow-none"
                >
                  <FaInstagram className="w-[60%] h-[60%] group-hover/ig:text-[#4f5bd5] group-hover/ig:w-[65%] group-hover/you:h-[65%] transition duration-300 ease-in-out" />
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  className="w-11 h-11 rounded-xl bg-semiDark shadow-card flex justify-center items-center group/you hover:shadow-none"
                >
                  <FaYoutube className="w-[60%] h-[60%] group-hover/you:text-[#FF0000] group-hover/you:w-[65%] group-hover/you:h-[65%] transition duration-300 ease-in-out" />
                </Link>
                
              </div>
            </div>
          </div>

          <hr className="mt-8 mb-4 bg-grey" />
          <p className="text-base text-grey text-center">
            Copyright &copy; 2023 RpLc. All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
