import Link from "next/link";
import React from "react";

const LinkBeranda = () => {
  return (
    <div className="w-52 hidden group-hover/beranda:block lg:bg-nav py-4 px-10 lg:absolute top-[100%] rounded-b-lg">
      <ul className="flex flex-col gap-3">
        <li>
          <Link href="/#about" className="hover:text-grey">
            Tentang
          </Link>
        </li>
        <li>
          <Link href="/#jurusan" className="hover:text-grey">
            Jurusan
          </Link>
        </li>
        <li>
          <Link href="/#gallery" className="hover:text-grey">
            Gallery
          </Link>
        </li>
        <li>
          <Link href="/#sekolah" className="hover:text-grey w-full">
            Fasilitas sekolah
          </Link>
        </li>
        <li>
          <Link href="/#quote" className="hover:text-grey">
            Alumni
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LinkBeranda;
