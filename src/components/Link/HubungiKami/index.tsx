import Link from "next/link";
import React from "react";

const LinkHubungiKami = () => {
  return (
    <div className="w-52 hidden group-hover/hubungi:block lg:bg-nav py-4 px-4 lg:px-10 lg:absolute top-[100%] rounded-b-lg border-t-2 border-primary">
      <ul className="flex flex-col gap-3">
        <li>
          <Link
            href="/hubungi-kami/kotak-pertanyaan"
            className="hover:text-grey"
          >
            Kotak Pertanyaan
          </Link>
        </li>
        <li>
          <Link href="/hubungi-kami/pusat-bantuan" className="hover:text-grey">
            Pusat Bantuan
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LinkHubungiKami;
