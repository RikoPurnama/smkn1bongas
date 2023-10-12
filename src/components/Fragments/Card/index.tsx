import Link from "next/link";
import React from "react";

type cardType = {
  name: string;
  fullname: string;
  image: string;
  url: string
};

const Card = (props: cardType) => {
  const { name, fullname, image, url } = props;
  return (
    <>
      <div className="w-full mt-8">
        <Link href={`/jurusan/${url}`}>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="w-full max-w-[515px] h-[270px] bg-center bg-cover object-cover rounded-3xl shadow-card hover:shadow-none transition duration-500 ease-in-out"
        ></div>
        <div className="flex items-center gap-1 mt-2">
          <span className="w-[1rem] h-[.08rem] bg-primary inline-block "></span>
          <p className="text-base text-primary font-semibold tracking-wider inline-block">
            {name}
          </p>
        </div>
        <h3 className="text-xl font-bold text-light py-2">{fullname}</h3>
        </Link>
      </div>
    </>
  );
};

const avaibleCard = () => {
  return (
    <>
      <div className="w-full max-w-[5rem] h-[10rem] bg-primary rounded-2xl p-6">

      </div>
    </>
  );
}

export default Card;
