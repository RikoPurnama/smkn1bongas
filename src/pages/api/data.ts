// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  jurusan: {
    id: number;
    name: string;
    fullname: string;
    url: string;
    image: string;
    desc: string;
  }[];
  Gallery: {
    id: number;
    image: string;
    class: string;
  }[];
  materiKeahlian: {
    id: number;
    name: string;
    keahlian1: string;
    keahlian2: string;
    keahlian3: string;
    keahlian4: string;
    keahlian5: string;
  }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const Jurusan = () => [
    {
      id: 1,
      name: "TJKT",
      fullname: "Teknik Jaringan Komputer Telekomunikasi",
      url: "teknik-jaringan-komputer-telekomunikasi",
      image: "/background.jpg",
      desc: "TKJ adalah sebuah program ilmu kejuruan dibidang teknologi informasi dan komunikasi yang berhubungan dengan kemampuan pemrograman komputer, perakitan komputer dan jaringan komputer, serta pengoperasian perangkat lunak komputer. Lulusan jurusan ini sangat diperhitungkan dalam dunia teknologi dan informasi, terutama perusahaan ataupun startup yang bergerak di bidang pengembangan dan pelayanan TI seperti Bukalapak, Tokopedia, dan lainnya serta dapat membuka usaha sendiri dibidang komputer ataupun bisa juga bekerja di perusahaan dalam bidang pelayanan jaringan. Hal ini disebabkan karena tidak seimbang nya antara tuntutan kebutuhan SDM dalam dunia IT dengan jumlah tenaga kerja yang tersedia.",
    },
    {
      id: 2,
      name: "PH",
      fullname: "Perhotelan",
      url: "perhotelan",
      image: "/ph.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nobis, qui quos quod libero enim provident totam doloribus incidunt, repellat repudiandae quibusdam voluptas odit similique iure. Provident quas debitis atque maxime quasi, explicabo, nesciunt non accusamus veniam vero recusandae, neque delectus blanditiis esse quod illo quidem! Fugiat labore unde ducimus dolore et! Rerum possimus autem minima suscipit nobis, sapiente quidem?",
    },
    {
      id: 3,
      name: "TKR",
      fullname: "Teknik Kendaraan Ringan",
      url: "teknik-kendaraan-ringan",
      image: "/tkro.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nobis, qui quos quod libero enim provident totam doloribus incidunt, repellat repudiandae quibusdam voluptas odit similique iure. Provident quas debitis atque maxime quasi, explicabo, nesciunt non accusamus veniam vero recusandae, neque delectus blanditiis esse quod illo quidem! Fugiat labore unde ducimus dolore et! Rerum possimus autem minima suscipit nobis, sapiente quidem?",
    },
    {
      id: 4,
      name: "TBSM",
      fullname: "Teknik Bisnis Sepeda Motor",
      url: "teknik-bisnis-sepeda-motor",
      image: "/tbsm.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nobis, qui quos quod libero enim provident totam doloribus incidunt, repellat repudiandae quibusdam voluptas odit similique iure. Provident quas debitis atque maxime quasi, explicabo, nesciunt non accusamus veniam vero recusandae, neque delectus blanditiis esse quod illo quidem! Fugiat labore unde ducimus dolore et! Rerum possimus autem minima suscipit nobis, sapiente quidem?",
    },
  ];

  const Gallery = () => [
    {
      id: 1,
      image: "/background.jpg",
      class: "",
    },
    {
      id: 2,
      image: "/ph.jpg",
      class: "md:row-v-stretch row-res-v-stretch",
    },
    {
      id: 3,
      image: "/tkro.jpg",
      class: "md:col-h-stretch col-res-h-stretch ",
    },
    {
      id: 4,
      image: "/tbsm.jpg",
      class: "",
    },
  ];

  const MateriKeahlian = [
    {
      id: 1,
      name: "TJKT",
      url: "teknik-jaringan-komputer-telekomunikasi",
      keahlian1: "Administrasi Jaringan (LAN-WAN)",
      keahlian2: "Teknik Komputer (Hardware dan Software)",
      keahlian3: "Service Jaringan Komputer",
      keahlian4: "Instalasi Server dan Client",
      keahlian5: "Pemograman web",
    },
    {
      id: 2,
      name: "PH",
      url: "perhotelan",
      keahlian1: "hotel",
      keahlian2: "hotel",
      keahlian3: "hotel",
      keahlian4: "hotel",
      keahlian5: "hotel",
    },
    {
      id: 3,
      name: "TKR",
      url: "teknik-kendaraan-ringan",
      keahlian1: "Mobil",
      keahlian2: "mobil",
      keahlian3: "mobil",
      keahlian4: "mobil",
      keahlian5: "mobil",
    },
    {
      id: 4,
      name: "TBSM",

      url: "teknik-bisnis-sepeda-motor",
      keahlian1: "motor",
      keahlian2: "motor",
      keahlian3: "motor",
      keahlian4: "motor",
      keahlian5: "motor",
    },
  ];
  res.status(200).json({
    jurusan: Jurusan(),
    Gallery: Gallery(),
    materiKeahlian: MateriKeahlian,
  });
}
