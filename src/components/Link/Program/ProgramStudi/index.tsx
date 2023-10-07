import Link from "next/link";
import React from "react";

const LinkProgramStudi = () => {
  return (
    <div className="w-44 hidden group-hover/profile:block lg:bg-nav py-4 px-4 lg:absolute left-[100%] -top-4 rounded-b-lg">
      <ul className="flex flex-col gap-3">
        <li>
          <Link
            href="/jurusan/teknik-jaringan-komputer-telekomunikasi"
            className="hover:text-grey flex items-center gap-1"
          >
            Jaringan Komputer Telekomunikasi
          </Link>
        </li>
        <li>
          <Link href="/jurusan/perhotelan" className="hover:text-grey">
            Perhotelan
          </Link>
        </li>
        <li>
          <Link
            href="/jurusan/teknik-kendaraan-ringan"
            className="hover:text-grey"
          >
            Teknik Kendaraan Ringan
          </Link>
        </li>
        <li>
          <Link
            href="/jurusan/teknik-bisnis-sepeda-motor"
            className="hover:text-grey"
          >
            Teknik Bisnis Sepeda Motor
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LinkProgramStudi;
