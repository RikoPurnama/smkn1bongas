
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  jurusan : {
    id: number
    name: string
    fullname: string
    url: string
    image: string
    desc: string
  }[],
  Gallery: {
    id: number
    image: string
    class: string
  }[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const Jurusan = () => [
    {
      id: 1,
      name: "TJKT",
      fullname: "Teknik Jaringan Komputer Telekomunikasi",
      url: 'teknik-jaringan-komputer-telekomunikasi',
      image: "/background.jpg",
      desc: 'TKJ adalah sebuah program ilmu kejuruan dibidang teknologi informasi dan komunikasi yang berhubungan dengan kemampuan pemrograman komputer, perakitan komputer dan jaringan komputer, serta pengoperasian perangkat lunak komputer. Lulusan jurusan ini sangat diperhitungkan dalam dunia teknologi dan informasi, terutama perusahaan ataupun startup yang bergerak di bidang pengembangan dan pelayanan TI seperti Bukalapak, Tokopedia, dan lainnya serta dapat membuka usaha sendiri dibidang komputer ataupun bisa juga bekerja di perusahaan dalam bidang pelayanan jaringan. Hal ini disebabkan karena tidak seimbang nya antara tuntutan kebutuhan SDM dalam dunia IT dengan jumlah tenaga kerja yang tersedia.',
    },
    {
      id: 2,
      name: "PH",
      fullname: "Perhotelan",
      url: 'perhotelan',
      image: "/ph.jpg",
      desc: 'TKJ adalah sebuah program ilmu kejuruan dibidang teknologi informasi dan komunikasi yang berhubungan dengan kemampuan pemrograman komputer, perakitan komputer dan jaringan komputer, serta pengoperasian perangkat lunak komputer. Lulusan jurusan ini sangat diperhitungkan dalam dunia teknologi dan informasi, terutama perusahaan ataupun startup yang bergerak di bidang pengembangan dan pelayanan TI seperti Bukalapak, Tokopedia, dan lainnya serta dapat membuka usaha sendiri dibidang komputer ataupun bisa juga bekerja di perusahaan dalam bidang pelayanan jaringan. Hal ini disebabkan karena tidak seimbang nya antara tuntutan kebutuhan SDM dalam dunia IT dengan jumlah tenaga kerja yang tersedia.',
    },
    {
      id: 3,
      name: "TKR",
      fullname: "Teknik Kendaraan Ringan",
      url: 'teknik-kendaraan-ringan',
      image: "/tkro.jpg",
      desc: 'TKJ adalah sebuah program ilmu kejuruan dibidang teknologi informasi dan komunikasi yang berhubungan dengan kemampuan pemrograman komputer, perakitan komputer dan jaringan komputer, serta pengoperasian perangkat lunak komputer. Lulusan jurusan ini sangat diperhitungkan dalam dunia teknologi dan informasi, terutama perusahaan ataupun startup yang bergerak di bidang pengembangan dan pelayanan TI seperti Bukalapak, Tokopedia, dan lainnya serta dapat membuka usaha sendiri dibidang komputer ataupun bisa juga bekerja di perusahaan dalam bidang pelayanan jaringan. Hal ini disebabkan karena tidak seimbang nya antara tuntutan kebutuhan SDM dalam dunia IT dengan jumlah tenaga kerja yang tersedia.',
    },
    {
      id: 4,
      name: "TBSM",
      fullname: "Teknik Bisnis Sepeda Motor",
      url: 'teknik-bisnis-sepeda-motor',
      image: "/tbsm.jpg",
      desc: 'TKJ adalah sebuah program ilmu kejuruan dibidang teknologi informasi dan komunikasi yang berhubungan dengan kemampuan pemrograman komputer, perakitan komputer dan jaringan komputer, serta pengoperasian perangkat lunak komputer. Lulusan jurusan ini sangat diperhitungkan dalam dunia teknologi dan informasi, terutama perusahaan ataupun startup yang bergerak di bidang pengembangan dan pelayanan TI seperti Bukalapak, Tokopedia, dan lainnya serta dapat membuka usaha sendiri dibidang komputer ataupun bisa juga bekerja di perusahaan dalam bidang pelayanan jaringan. Hal ini disebabkan karena tidak seimbang nya antara tuntutan kebutuhan SDM dalam dunia IT dengan jumlah tenaga kerja yang tersedia.',
    },
  ]

  const Gallery = () => [
    {
      id: 1,
      image: "/background.jpg",
      class: ""
    },
    {
      id: 2,
      image: "/ph.jpg",
      class: "md:row-v-stretch row-res-v-stretch"
    },
    {
      id: 3,
      image: "/tkro.jpg",
      class: "md:col-h-stretch col-res-h-stretch "
    },
    {
      id: 4,
      image: "/tbsm.jpg",
      class: ""
    },
  ]
  res.status(200).json({ jurusan: Jurusan(), Gallery: Gallery() });
}
