import HeadingContentPage from '@/components/Fragments/HeadingContentPage'
import LinkContent from '@/components/Fragments/LinkContent'
import React from 'react'

const HubunganIndustriPade = () => {
  return (
    <section className="bg-semiDark">
      <div className="container mx-auto lg:px-44">
        <div className="w-full px-4">
          <LinkContent content='Hubungan Industri' route={"tentang-kami"} id={'hubungan-industri'} />
          <div className="w-full text-light py-16">
          <HeadingContentPage content="Hubungan Industri" />
          <p className='text-base text-grey'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore non perferendis dolores provident, iure suscipit cupiditate debitis neque beatae distinctio laudantium odit veniam velit tenetur doloremque aliquam maiores. Saepe adipisci animi magnam, laborum perspiciatis recusandae necessitatibus tenetur dolorum numquam accusamus natus soluta non nobis corrupti similique vitae, exercitationem delectus? Rem modi ex doloremque voluptatibus asperiores facilis officia eos, quo eum!</p>
          <h3 className='text-2xl font-semibold py-4'>Bentuk Kerjasama </h3>
          <ol className='list-decimal pl-8 text-grey'>
            <li>Recruitment</li>
            <li>Praktek Kerja Industri</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit.</li>
          </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HubunganIndustriPade