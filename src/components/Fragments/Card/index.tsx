import React from "react";

type cardType = {
  name: string;
  fullname: string;
  image: string;
};

const Card = (props: cardType) => {
  const { name, fullname, image } = props;
  return (
    <>
      <div className="w-full mt-8">
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="w-full max-w-[515px] h-[270px] bg-center bg-cover object-cover rounded-3xl"
        ></div>
        <div className="flex items-center gap-1 mt-2">
          <span className="w-[1rem] h-[.08rem] bg-primary inline-block "></span>
          <p className="text-base text-primary font-semibold tracking-wider inline-block">
            {name}
          </p>
        </div>
        <h3 className="text-xl font-bold text-light py-2">{fullname}</h3>
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
