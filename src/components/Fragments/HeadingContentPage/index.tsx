import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const HeadingContentPage = ({ content }: { content: string }) => {
  return (
    <div className="w-full pb-8 flex flex-wrap justify-between items-center">
      <h2 className="text-2xl md:text-3xl font-semibold">{content}</h2>
      <div className="flex gap-2 items-center">
        <p className="text-base text-grey">Bagikan</p>
        <a
          href="http://facebook.com"
          target="_blank"
          rel="SMKN 1 Bongas Facebook"
          className="w-9 h-9 bg-primary rounded-full flex justify-center items-center"
        >
          <FaFacebookF />
        </a>
        <a
          href="http://facebook.com"
          target="_blank"
          rel="SMKN 1 Bongas Facebook"
          className="w-9 h-9 bg-primary rounded-full flex justify-center items-center"
        >
          <FaWhatsapp />
        </a>
        <a
          href="http://facebook.com"
          target="_blank"
          rel="SMKN 1 Bongas Facebook"
          className="w-9 h-9 bg-primary rounded-full flex justify-center items-center"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default HeadingContentPage;
