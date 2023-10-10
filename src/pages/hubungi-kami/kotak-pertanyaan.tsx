import Form from '@/components/Fragments/Form'
import HeadingContentPage from '@/components/Fragments/HeadingContentPage'
import LinkContent from '@/components/Fragments/LinkContent'
import ContentForm from '@/components/Fragments/contentForm'
import React from 'react'

const KotakPertanyaanPage = () => {
  return (
    <section className="bg-semiDark">
      <div className="container mx-auto lg:px-44">
        <div className="w-full px-4">
          <LinkContent content="Kotak Pertanyaan" route="hubungi-kami" id="kotak-pertanyaan" />
          <div className="w-full py-16 text-light">
            <HeadingContentPage content="Kotak Pertanyaan" />
            <Form>
              <ContentForm labelContent="Nama Lengkap" type="text" nameId="nama" />
              <ContentForm labelContent="Nomor Telepon" type="tel" nameId="telepon" />
              <ContentForm labelContent="Alamat Surel" type="text" nameId="surel" />
              <ContentForm labelContent="Subyek" type="text" nameId="subyek" />
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KotakPertanyaanPage