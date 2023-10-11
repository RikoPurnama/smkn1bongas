import HeadingContentPage from '@/components/Fragments/HeadingContentPage'
import LinkContent from '@/components/Fragments/LinkContent'
import React from 'react'

const PusatBantuanPage = () => {
  return (
    <section className="bg-semiDark">
      <div className="container mx-auto lg:px-44">
        <div className="w-full px-4">
          <LinkContent content="Pusat Bantuan" route="hubungi-kami" id="pusat-bantuan" />
          <div className="w-full py-16 text-light">
            <HeadingContentPage content="Pusat Bantuan" />
            <h2 className='text-3xl font-semibold pb-2'>Ikuti kami di media sosial untuk informasi lebih lanjut mengenai SMK Negeri 1 Bongas</h2>
            <ul className='py-6 text-xl flex flex-col gap-5'>
              <li>
                Email :<a href="http://instagram.com/smkn1bongas" target="_blank" rel="smkn 1 bongas instagram" className='text-primary hover:underline'> info@Domain.com</a>
              </li>
              <li>
                Instagram :<a href="http://instagram.com/smkn1bongas" target="_blank" rel="smkn 1 bongas instagram" className='text-primary hover:underline'> @smk1bongas</a>
              </li>
              <li>
                Facebook :<a href="http://instagram.com/smk1bongas" target="_blank" rel="smkn 1 bongas instagram" className='text-primary hover:underline'> smk1bongas</a>
              </li>
              <li>
                Youtube :<a href="http://instagram.com/smk1bongas" target="_blank" rel="smkn 1 bongas instagram" className='text-primary hover:underline'> smk1bongas</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PusatBantuanPage