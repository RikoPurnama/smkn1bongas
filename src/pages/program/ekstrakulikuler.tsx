import HeadingContentPage from '@/components/Fragments/HeadingContentPage'
import LinkContent from '@/components/Fragments/LinkContent'
import React from 'react'

const EkstrakulikulerPage = () => {
  return (
    <section className="bg-semiDark">
      <div className="container mx-auto lg:px-44">
        <div className="w-full px-4">
          <LinkContent content="Ekstrakulikuler" route="program" id="ekstrakulikuler" />
          <div className="w-full py-16 text-light">
            <HeadingContentPage content="Ekstrakulikuler" />
            <p className='text-base text-grey pb-4'>Ekstrakurikuler di SMKN 1 Bongas diwadahi dan dibimbing oleh unit kesiswaan guna mendukung siswa sehingga dapat mengembangkan diri agar terus berprestasi. Selain itu, ekstrakurikuler secara rutin mengadakan forum pertemuan setiap minggunya, selain untuk membangun kemampuan berorganisasi siswa juga sebagai penyeimbang kegiatan akademis dan non akademis yang dimiliki oleh siswa.</p>
            <h3 className='text-2xl font-semibold py-4'>Ekstrakurikuler di SMKN 1 Bongas mencakup kegiatan </h3>
            <ol className='list-decimal pl-8'>
              <li>Ekstrakurikuler wajib Pramuka untuk kelas X</li>
              <li>Ekstrakurikuler Paskibra</li>
              <li>Ekstrakurikuler Marcing Band</li>
              <li>Ekstrakurikuler Pks</li>
              <li>Ekstrakurikuler Bola Voli</li>
              <li>Ekstrakurikuler Futsal</li>
              <li>Ekstrakurikuler Pencak silat</li>
              <li>Ekstrakurikuler Taekwondo</li>
              <li>Ekstrakurikuler tari</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EkstrakulikulerPage