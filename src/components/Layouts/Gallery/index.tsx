import React, { useEffect, useState } from "react";

type galleryType = {
  id: number;
  image: string;
  class: string;
};

const Gallery = () => {
  const [datas, setDatas] = useState([]);

  const getData = async () => {
    const response = await fetch("/api/images");
    const datas = await response.json();
    const data = datas.Gallery;
    setDatas(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="py-24 md:pb-48 bg-dark">
      <div className="container mx-auto lg:px-44">
        <div className="w-full">

        <div className="w-full px-6">
          <h2 className='text-3xl font-bold text-light text-center before:content-[""] before:w-24 before:h-1 before:bg-primary before:rounded-md before:absolute'>
            Gallery of SMK Negeri 1 Bongas
          </h2>
          <div className="py-6 pt-16 mx-auto grid gap-2 auto-rows-[250px] grid-flow-dense">
            {datas.map((data: galleryType) => (
              <div className={data.class} key={data.id}>
                <img
                  className="w-full h-full object-cover"
                  src={data.image}
                  alt='image'
                />
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
