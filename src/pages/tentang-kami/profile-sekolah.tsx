import HeadingContentPage from "@/components/Fragments/HeadingContentPage";
import LinkContent from "@/components/Fragments/LinkContent";
import React from "react";

const ProfileSekolahPages = () => {
  return (
    <section className="bg-semiDark">
      <div className="container mx-auto lg:px-44">
        <div className="w-full px-4">
          <LinkContent content='Profile-Sekolah' route={"tentang-kami"} id={'profile-sekolah'} />
          <div className="w-full py-16 text-light">
            <HeadingContentPage content="Profile Sekolah" />
            <p className="text-base text-grey">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil unde distinctio autem quibusdam beatae modi quam molestiae libero fugit perspiciatis laborum hic, repellat dolor non expedita quod eligendi nemo natus ipsam dignissimos. Maxime in pariatur iste quisquam repellendus ab aperiam, itaque, non perferendis, quaerat optio fuga sequi blanditiis officia assumenda fugit minima consequuntur facilis fugiat autem ratione sunt esse neque. Ea eaque, accusantium minus tempore soluta vitae, voluptatibus quaerat harum perferendis error quasi doloribus alias sequi, labore voluptatem maxime cumque voluptatum sint recusandae aliquam eligendi deleniti vero corrupti. Itaque, quibusdam?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSekolahPages;
