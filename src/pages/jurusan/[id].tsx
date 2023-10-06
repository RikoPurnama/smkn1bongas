import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import LinkProfile from "@/components/Fragments/LinkProfile";

const DetailjurusanPage = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await fetch("/api/data");
    const responses = await res.json();
    const data = responses.jurusan;
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  const {
    query: { id },
  } = useRouter();
  return (
    <section className="w-full bg-semiDark">
      <div className="container mx-auto lg:px-44">
        <div className="w-full px-4">
          <LinkProfile id={id} />
          {data
            .filter((data: any) => data.url === id)
            .map((data: any) => (
              <div key={data.id} className="py-16 text-light">
                <h2 className="text-xl font-bold text-light">{data.name}</h2>
                <p className="text-base text-primary py-2">{data.fullname}</p>
                <p className="text-base text-grey max-w-xl py-4 ">
                  
                  TKJ adalah sebuah program ilmu kejuruan dibidang teknologi
                  informasi dan komunikasi yang berhubungan dengan kemampuan
                  pemrograman komputer, perakitan komputer dan jaringan
                  komputer, serta pengoperasian perangkat lunak komputer.
                  <br />
                  Lulusan jurusan ini sangat diperhitungkan dalam dunia
                  teknologi dan informasi, terutama perusahaan ataupun startup
                  yang bergerak di bidang pengembangan dan pelayanan TI seperti
                  Bukalapak, Tokopedia, dan lainnya serta dapat membuka usaha
                  sendiri dibidang komputer ataupun bisa juga bekerja di
                  perusahaan dalam bidang pelayanan jaringan. Hal ini disebabkan
                  karena tidak seimbang nya antara tuntutan kebutuhan SDM dalam
                  dunia IT dengan jumlah tenaga kerja yang tersedia.
                </p>
                <h2 className="text-xl font-medium">Materi Keahlian</h2>
                <ol className="list-decimal p-4 pb-8">
                  <li>
                    <p>Administrasi Jaringan (LAN-WAN)</p>
                  </li>
                  <li>
                    <p>Teknik Komputer (Hardware dan Software)</p>
                  </li>
                  <li>
                    <p>Service Jaringan Komputer</p>
                  </li>
                  <li>
                    <p>Instalasi Server dan Client</p>
                  </li>
                  <li>
                    <p>Pemograman web</p>
                  </li>
                </ol>
                <div style={{ backgroundImage: `url(${data.image})` }} className="w-full h-96 bg-cover bg-center"></div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default DetailjurusanPage;
