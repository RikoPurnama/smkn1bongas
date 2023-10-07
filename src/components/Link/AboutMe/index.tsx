import Link from "next/link";
import React from "react";

const LinkAboutMe = () => {
  return (
    <div className="w-56 hidden group-hover/tentang:block lg:bg-nav py-4 px-10 lg:absolute top-[100%] rounded-b-lg">
      <ul className="flex flex-col gap-3">
        <li>
          <Link href="/profile" className="hover:text-grey">
            Profile Sekolah
          </Link>
        </li>
        <li>
          <Link href="/visi-misi" className="hover:text-grey">
            Visi & Misi
          </Link>
        </li>
        <li>
          <Link href="/daftar-guru" className="hover:text-grey">
            Daftar guru
          </Link>
        </li>
        <li>
          <Link href="/struktur-organisasi" className="hover:text-grey w-full">
            Struktur organisasi
          </Link>
        </li>
        <li>
          <Link href="/hubungan-industri" className="hover:text-grey">
            Hubungan Industri
          </Link>
        </li>
        <li>
          <Link href="/prestasi" className="hover:text-grey">
            Prestasi
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LinkAboutMe;
