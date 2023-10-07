import Link from "next/link";
import React from "react";
import LinkProgramStudi from "./ProgramStudi";
import { FaAngleDown } from "react-icons/fa";

const LinkProgram = () => {
  return (
    <div className="w-64 hidden group-hover/program:block lg:bg-nav py-4 pl-10 lg:absolute top-[100%] lg:-translate-x-40 rounded-b-lg dropdown">
      <ul className="flex flex-col gap-3">
        <li className="relative group/profile">
          <Link
            href="/#jurusan"
            className="hover:text-grey flex items-center gap-1"
          >
            Profile Program Studi
            <FaAngleDown className="w-4 h-4 -rotate-90 group-hover/profile:rotate-90 mt-1 group-hover:rotate-90 translate-x-1 transition duration-200 ease-in-out" />
          </Link>
          <LinkProgramStudi />
        </li>
        <li>
          <Link href="/#jurusan" className="hover:text-grey">
            Kegiatan
          </Link>
        </li>
        <li>
          <Link href="/#gallery" className="hover:text-grey">
            Prakerin
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LinkProgram;
