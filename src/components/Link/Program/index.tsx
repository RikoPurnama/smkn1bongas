import Link from "next/link";
import React from "react";
import LinkProgramStudi from "./ProgramStudi";
import { FaAngleDown } from "react-icons/fa";

const LinkProgram = () => {
  return (
    <div className="w-60 hidden group-hover/program:block hover:block lg:bg-nav py-4 pl-4 lg:pl-8 lg:absolute top-[100%] rounded-b-lg border-t-2 border-primary">
      <ul className="flex flex-col gap-3">
        <li className="relative group/profile">
          <Link
            href="/#jurusan"
            className="hover:text-grey flex justify-between lg:justify-normal items-center gap-1 profile"
          >
            Profile Program Studi
            <FaAngleDown className="w-4 h-4  group-hover/profile:-rotate-180 lg:-rotate-90 lg:group-hover/profile:rotate-90 mt-1 translate-x-1 transition duration-200 ease-in-out" />
          </Link>
          <LinkProgramStudi />
        </li>
        <li>
          <Link href="/program/ekstrakulikuler" className="hover:text-grey">
            Ekstrakulikuler
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LinkProgram;
