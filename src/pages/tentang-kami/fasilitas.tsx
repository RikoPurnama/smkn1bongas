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
            <div className="w-full flex justify-center items-center">
            <div className="w-[30rem] h-[30rem] flex justify-center items-center bg-grey">Foto Sekolah</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FasilitasPage