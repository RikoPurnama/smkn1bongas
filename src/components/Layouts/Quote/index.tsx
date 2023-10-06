import QuoteCard from "@/components/Fragments/QuoteCard";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const Quote = () => {
  return (
    <section id="quote" className="py-20 bg-semiDark">
      <div className="container mx-auto lg:px-44">
        <div className="w-full">
          <div className="px-4">
            <h4 className="text-base font-bold text-primary pb-1">Alumni</h4>
            <h2 className="text-3xl lg:text-4xl font-bold text-light pb-4">
              Best Student{" "}
              <span className="text-primary">SMK Negeri 1 Bongas </span>
            </h2>
            <p className="text-base text-grey max-w-2xl">
              Lorem ipsum dolor sit amet consectetur. Libero faucibus in enim
              sit nullam quis congue vulputate suscipit. Sit ut interdum
              bibendum lacinia blandit ultricies neque purus.
            </p>
          </div>

          <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-[45rem] lg:h-auto">
            <SwiperSlide className="px-11">
              <QuoteCard />
            </SwiperSlide>
            <SwiperSlide className="px-11">
              <QuoteCard />
            </SwiperSlide>
            <SwiperSlide className="px-11">
              <QuoteCard />
            </SwiperSlide>
            <SwiperSlide className="px-11">
              <QuoteCard />
            </SwiperSlide>
            <SwiperSlide className="px-11">
              <QuoteCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Quote;
