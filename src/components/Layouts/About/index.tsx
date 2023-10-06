import React from "react";

const About = () => {
  return (
    <section id="about" className="pt-24 pb-2 bg-semiDark">
      <div className="container mx-auto lg:px-44">
        <div className="w-full">
          <div className="w-full flex flex-wrap">
            <div className="w-full md:w-1/2 px-4 order-2 md:order-1">
              <div
                className="hidden md:block absolute w-24 h-28 -translate-x-[1.5rem] -translate-y-[1.2rem] "
                style={{ backgroundImage: "url(/dash.png)" }}
              ></div>

              <div className="h-[478px] flex gap-3 items-center">
                <div className="flex flex-col gap-3">
                  <div
                    style={{ backgroundImage: "url(/about.png)" }}
                    className="w-[130px] md:w-[150px] md:h-[210px] lg:w-[200px] h-[160px] lg:h-[255px] object-cover bg-cover bg-center rounded-2xl"
                  ></div>

                  <div
                    style={{ backgroundImage: "url(/about.png)" }}
                    className="w-[130px] md:w-[150px] md:h-[210px] lg:w-[200px] h-[160px] lg:h-[255px] object-cover bg-cover bg-center rounded-2xl"
                  ></div>
                </div>

                <div
                  style={{ backgroundImage: "url(/about.png)" }}
                  className="w-[130px] md:w-[150px] md:h-[210px] lg:w-[200px] h-[160px] lg:h-[255px] object-cover bg-cover bg-center rounded-2xl"
                ></div>
              </div>

              <div
                className="hidden md:block absolute w-24 h-28 translate-x-[23rem] md:translate-x-[16rem] -translate-y-[10rem] md:-translate-y-[12 rem]"
                style={{ backgroundImage: "url(/dash.png)" }}
              ></div>
            </div>

            <div className="w-full md:w-1/2 px-4 order-1">
              <div className="w-full h-full flex items-center">
                <div className="w-full">
                  <h4 className="text-base font-bold text-primary pb-1">
                    About
                  </h4>
                  <h2 className="text-3xl lg:text-4xl font-bold text-light pb-4">
                    Hai, welcome to{" "}
                    <span className="text-primary">SMK Negeri 1 Bongas </span>
                  </h2>
                  <p className="text-base text-grey">
                    Lorem ipsum dolor sit amet consectetur. Libero faucibus in
                    enim sit nullam quis congue vulputate suscipit. Sit ut
                    interdum bibendum lacinia blandit ultricies neque purus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
