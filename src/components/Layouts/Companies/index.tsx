import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const Companies = () => {
  SwiperCore.use([Autoplay]);
  return (
    <section className="py-11 bg-semiDark">
      <div className="container mx-auto lg:px-44">
        <div className="w-full px-4">
          <Swiper
            slidesPerView={5}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3, 
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            autoplay={{ delay: 4000 }}
          >
            <SwiperSlide>
              <div className="w-[150px] h-[100px] bg-slate-500 flex justify-center items-center text-white rounded-lg">
                1
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[150px] h-[100px] bg-slate-500 flex justify-center items-center text-white rounded-lg">
                2
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[150px] h-[100px] bg-slate-500 flex justify-center items-center text-white rounded-lg">
                3
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[150px] h-[100px] bg-slate-500 flex justify-center items-center text-white rounded-lg">
                4
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[150px] h-[100px] bg-slate-500 flex justify-center items-center text-white rounded-lg">
                5
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[150px] h-[100px] bg-slate-500 flex justify-center items-center text-white rounded-lg">
                6
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[150px] h-[100px] bg-slate-500 flex justify-center items-center text-white rounded-lg">
                7
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[150px] h-[100px] bg-slate-500 flex justify-center items-center text-white rounded-lg">
                8
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Companies;
