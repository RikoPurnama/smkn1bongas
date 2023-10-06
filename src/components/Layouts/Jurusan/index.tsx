import Card from "@/components/Fragments/Card";
import React, { useEffect, useState } from "react";

type jurusanType = {
  id: number;
  name: string;
  fullname: string;
  image: string;
  url: string;
  desc: string;
  materi: string[];
};

const Jurusan = () => {
  const [datas, setDatas] = useState([]);

  const getData = async () => {
    const response = await fetch("/api/data");
    const datas = await response.json();
    const data = datas.jurusan;
    setDatas(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section id="jurusan" className="py-20 bg-semiDark">
      <div className="container mx-auto lg:px-44">
        <div className="w-full flex flex-wrap">
          <div className="w-full md:w-1/2 px-6">
            <h4 className="text-base font-bold text-primary pb-1">Jurusan</h4>
            <h2 className="text-3xl lg:text-4xl max-w-lg font-bold text-light pb-4">
              Cek jurusan favorit mu sekarang
            </h2>
            <p className="w-full max-w-lg text-base text-grey">
              Lorem ipsum dolor sit amet consectetur. Libero faucibus in enim
              sit nullam quis congue vulputate suscipit. Sit ut interdum
              bibendum lacinia blandit ultricies neque purus.
            </p>
            {datas
              .filter((data: jurusanType) => data.id < 3)
              .map((data: jurusanType) => (
                <Card
                  key={data.id}
                  name={data.name}
                  fullname={data.fullname}
                  image={data.image}
                  url={data.url}
                />
              ))}
          </div>
          <div className="w-full md:w-1/2 px-6">
            {datas
              .filter((data: jurusanType) => data.id > 2)
              .map((data: jurusanType) => (
                <Card
                  key={data.id}
                  name={data.name}
                  fullname={data.fullname}
                  image={data.image}
                  url={data.url}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jurusan;
