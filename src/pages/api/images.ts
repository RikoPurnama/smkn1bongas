
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  jurusan : {
    id: number
    name: string
    fullname: string
    url: string
    image: string
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
    },
    {
      id: 2,
      name: "PH",
      fullname: "Perhotelan",
      url: 'perhotelan',
      image: "/ph.jpg",
    },
    {
      id: 3,
      name: "TKR",
      fullname: "Teknik Kendaraan Ringan",
      url: 'teknik-kendaraan-ringan',
      image: "/tkro.jpg",
    },
    {
      id: 4,
      name: "TBSM",
      fullname: "Teknik Bisnis Sepeda Motor",
      url: 'teknik-bisnis-sepeda-motor',
      image: "/tbsm.jpg",
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
