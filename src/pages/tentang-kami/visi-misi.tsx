import HeadingContentPage from "@/components/Fragments/HeadingContentPage";
import LinkProfile from "@/components/Fragments/LinkContent";
import React from "react";

const VisiMisiPages = () => {
  return (
    <section className="bg-semiDark">
      <div className="container mx-auto lg:px-44">
        <div className="w-full px-4">
          <LinkProfile
            content="Visi & Misi"
            route="tentang-kami"
            id="visi-misi"
          />
          <div className="w-full py-16 text-light">
            <HeadingContentPage content="Visi Dan Misi" />
            <h2 className="text-3xl font-semibold pb-2">Visi</h2>
            <p className="text-base text-grey pb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
              voluptatibus.
            </p>
            <h2 className="text-3xl font-semibold pb-2">Misi</h2>
            <ol className="list-decimal pl-8 text-grey">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nostrum, voluptatibus.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nostrum, voluptatibus.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nostrum, voluptatibus.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nostrum, voluptatibus.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nostrum, voluptatibus.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisiPages;
