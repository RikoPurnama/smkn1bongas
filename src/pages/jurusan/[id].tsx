import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import LinkProfile from "@/components/Fragments/LinkProfile";

const DetailjurusanPage = () => {
  const [data, setData] = useState([]);
  const [materi, setMateri] = useState([]);
  const getData = async () => {
    const res = await fetch("/api/data");
    const responses = await res.json();
    const data = responses.jurusan;
    const dataMateri = responses.materiKeahlian;
    setData(data);
    setMateri(dataMateri);
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
                  {data.desc}
                </p>
                <h2 className="text-xl font-medium">Materi Keahlian</h2>
                  {materi.filter((data: any) => data.url === id).map((materi: any) => (
                  <ol key={materi.id} className="list-decimal p-4 pb-8">
                    <li>{materi.keahlian1}</li>
                    <li>{materi.keahlian2}</li>
                    <li>{materi.keahlian3}</li>
                    <li>{materi.keahlian4}</li>
                    <li>{materi.keahlian5}</li>
                  </ol>
                  ))}
                <div style={{ backgroundImage: `url(${data.image})` }} className="w-full h-96 bg-cover bg-center"></div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default DetailjurusanPage;
