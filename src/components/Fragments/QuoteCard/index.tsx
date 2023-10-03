import React from "react";

const QuoteCard = () => {
  return (
    <div className="w-full h-72 my-10 flex flex-wrap rounded-r-2xl shadow-xl">
      <div className="w-full lg:w-52 h-72 md:h-full bg-grey flex justify-center items-center">
        <h1>Hero</h1>
      </div>
      <div className="w-full max-w-xl flex justify-center items-center">
        <div className="py-4 md:p-7 lg:py-0">
          <img src="/quote.svg" alt="" className="w-[3rem] h-[3rem]" />
          <h2 className="text-2xl font-bold text-light py-2">anak anj</h2>
          <p className="text-base text-grey">Design in nothing Companies</p>
          <p className="text-base text-grey pt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            ipsa quae repellat quod omnis, sint nostrum eos delectus
            voluptatibus quaerat!
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
