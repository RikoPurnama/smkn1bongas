import HeadingContentPage from '@/components/Fragments/HeadingContentPage'
import LinkContent from '@/components/Fragments/LinkContent'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const DataGuruPage = () => {
  SwiperCore.use([Autoplay]);
  return (
    <section className='bg-semiDark'>
      <div className="container mx-auto lg:px-44">
        <div className="w-full px-4">
          <LinkContent content="Data Guru" route="tentang-kami" id="data-guru" />
          <div className="w-full py-16 text-light">
          <HeadingContentPage content="Data Guru" />
          <Swiper
            slidesPerView={5}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            autoplay={{ delay: 3000 }}
          >
            <SwiperSlide>
              <div className="w-[150px] h-[200px] bg-slate-500 flex justify-center items-center text-white rounded-lg">
                Foto
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[150px] h-[200px] bg-slate-500 flex justify-center items-center text-white rounded-lg">
                Foto
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[150px] h-[200px] bg-slate-500 flex justify-center items-center text-white rounded-lg">
                Foto
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[150px] h-[200px] bg-slate-500 flex justify-center items-center text-white rounded-lg">
                Foto
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[150px] h-[200px] bg-slate-500 flex justify-center items-center text-white rounded-lg">
                Foto
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[150px] h-[200px] bg-slate-500 flex justify-center items-center text-white rounded-lg">
                Foto
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[150px] h-[200px] bg-slate-500 flex justify-center items-center text-white rounded-lg">
                Foto
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[150px] h-[200px] bg-slate-500 flex justify-center items-center text-white rounded-lg">
                Foto
              </div>
            </SwiperSlide>
          </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DataGuruPage