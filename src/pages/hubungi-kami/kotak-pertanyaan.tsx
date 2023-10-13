import Form from '@/components/Fragments/Form'
import HeadingContentPage from '@/components/Fragments/HeadingContentPage'
import LinkContent from '@/components/Fragments/LinkContent'
import ContentForm from '@/components/Fragments/contentForm'
import Textarea from '@/components/Fragments/contentForm/textarea'
import React from 'react'
import { useForm } from '@formspree/react'
import { useRouter } from 'next/router'

const KotakPertanyaanPage = () => {
  const [state, handleSubmit] = useForm("xwkdabag")
  const route = useRouter()
  if (state.succeeded) {
    return (
      <section className='py-44 bg-semiDark'>
        <div className="container mx-auto lg:px-44">
          <div className="w-full px-4">
            <h1 className='text-4xl text-light font-semibold text-center'>Terima Kasih Telah Menghubungi kami🎉</h1>
            <p className='text-base text-grey text-center py-3'>Kami akan menghubungi  dan menjawab pernyataan anda lewat Email dan nomor telepon yg telah anda kirim</p>
          </div>
        </div>
      </section>
    )
  }
  return (
    <section className="bg-semiDark">
      <div className="container mx-auto lg:px-44">
        <div className="w-full px-4">
          <LinkContent content="Kotak Pertanyaan" route="hubungi-kami" id="kotak-pertanyaan" />
          <div className="w-full py-16 text-light">
            <HeadingContentPage content="Kotak Pertanyaan" />
            <Form onsub={handleSubmit}>
              <ContentForm labelContent="Nama Lengkap" type="text" nameId="nama" errors={state.errors} />
              <ContentForm labelContent="Nomor Telepon" type="tel" nameId="telepon" errors={state.errors} />
              <ContentForm labelContent="Alamat Surel" type="email" nameId="surel" errors={state.errors} />
              <ContentForm labelContent="Subyek" type="text" nameId="subyek" errors={state.errors} />
              <Textarea />
              <button type="submit" disabled={state.submitting} className="bg-primary py-2 px-6 text-base text-white rounded hover:border-2 border-semiDark hover:outline outline-1 outline-primary">Kirim Pesan</button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KotakPertanyaanPage