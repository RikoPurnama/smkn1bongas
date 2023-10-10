import HeadingContentPage from '@/components/Fragments/HeadingContentPage'
import LinkContent from '@/components/Fragments/LinkContent'
import React from 'react'

const FasilitasPage = () => {
  return (
    <section className="bg-semiDark">
      <div className="container mx-auto lg:px-44">
        <div className="w-full px-4">
          <LinkContent content="Fasilitas" route="tentang-kami" id="fasilitas" />
          <div className="w-full py-16 text-light">
            <HeadingContentPage content="Fasilitas" />
            <div className="w-full flex flex-col gap-4 justify-center items-center">
            <div className="w-[30rem] h-[20rem] flex justify-center items-center bg-grey">Foto Sekolah</div>
            <div className="w-full py-8 flex flex-wrap justify-center items-center gap-4">
            <div className="w-[20rem] h-[15rem] flex justify-center items-center bg-grey">3x Kantin</div>
            <div className="w-[20rem] h-[15rem] flex justify-center items-center bg-grey">Perpustakaan</div>
            <div className="w-[20rem] h-[15rem] flex justify-center items-center bg-grey">Koprasi</div>
            </div>
            <p>Dan lainnya</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FasilitasPage