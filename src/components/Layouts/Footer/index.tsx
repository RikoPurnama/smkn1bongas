import React from "react";

const Footer = () => {
  return (
    <section className="pt-24 pb-4 bg-dark text-light">
      <div className="container mx-auto lg:px-32">
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
                  <a href="#" className="hover:text-light">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-light">
                    Tentang
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-light">
                    Jurusan
                  </a>
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
                <a
                  href="#"
                  className="w-11 h-11 rounded-xl bg-semiDark shadow-card"
                >
                  <img src="/facebook.png" alt="" />
                </a>
                <a
                  href="#"
                  className="w-11 h-11 rounded-xl bg-semiDark shadow-card"
                >
                  <img src="/instagram.png" alt="" />
                </a>
                <a
                  href="#"
                  className="w-11 h-11 rounded-xl bg-semiDark shadow-card"
                >
                  <img src="/twitter.png" alt="" />
                </a>
              </div>
            </div>
          </div>

          <hr className="mt-8 mb-4 bg-grey" />
          <p className="text-base text-grey text-center">
            Copyright &copy; 2023 RpLc Tech
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
