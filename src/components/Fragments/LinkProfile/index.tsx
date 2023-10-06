import Link from "next/link";
import React from "react";

const LinkProfile = ({ id }: { id: any }) =>  {
  return (
    <div className="w-full py-24 px-4 md:py-28 flex flex-col justify-center items-center bg-primary rounded-b-3xl">
      <h2 className="text-xl lg:text-3xl font-bold text-light">Profile Jurusan</h2>
      <div className="flex">
        <Link className="text-base text-grey hover:underline" href={"/"}>
          Beranda
        </Link>
        <span className="mx-2 text-grey">/</span>
        <Link
          className="text-base text-grey hover:underline"
          href={"/#jurusan"}
        >
          Jurusan
        </Link>
        <span className="mx-2 text-grey">/</span>
        <Link
          className="text-base h-1 text-grey hover:underline"
          href={`/jurusan/${id}`}
        >
          {id}
        </Link>
      </div>
    </div>
  );
};

export default LinkProfile;
