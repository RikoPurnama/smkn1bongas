import Link from "next/link";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Navlink = () => {
  const [heading, setHeading] = useState('')
  const [program, setProgram] = useState('')
  
  const Links = [
    {
      name: "Beranda",
      to: "/",
      submenu: true,
      sublinks: [
        {
          name: "Tentang",
          to: "/#about",
        },
        {
          name: "Jurusan",
          to: "/#jurusan",
        },
        {
          name: "Gallery",
          to: "/#gallery",
        },
        {
          name: "Alumni",
          to: "/#quote",
        },
      ],
    },
    {
      name: "Tentang Kami",
      to: "",
      submenu: true,
      sublinks: [
        {
          name: "Profile Sekolah",
          to: "/tentang-kami/profile-sekolah",
        },
        {
          name: "Visi & Misi",
          to: "/tentang-kami/visi-misi",
        },
        {
          name: "Data Guru",
          to: "/tentang-kami/data-guru",
        },
        {
          name: "Hubungan Industri",
          to: "/tentang-kami/hubungan-industri",
        },
        {
          name: "Fasilitas",
          to: "/tentang-kami/fasilitas",
        },
      ],
    },
    {
      name: "Program",
      to: "/#jurusan",
      submenu: true,
      sublinks: [
        {
          name: "Profile Program Studi",
          to: "",
          group: "/program",
          menu: true,
          links: [
            {
              name: "Teknik Jaringan Komputer Telekomunikasi",
              to: "/jurusan/teknik-jaringan-komputer-telekomunikasi",
            },
            {
              name: "Perhotelan",
              to: "/jurusan/perhotelan",
            },
            {
              name: "Teknik Kendaraan Ringan",
              to: "/jurusan/teknik-kendaraan-ringan",
            },
            {
              name: "Teknik Bisnis Sepeda Motor",
              to: "/jurusan/teknik-bisnis-sepeda-motor",
            },
          ],
        },
        {
          name: "Ekstrakulikuler",
          to: "/program/ekstrakulikuler",
        },
      ],
    },
    {
      name: "Hubungi Kami",
      to: "",
      submenu: true,
      sublinks: [
        {
          name: "Kotak Pertanyaan",
          to: "/hubungi-kami/kotak-pertanyaan",
        },
        {
          name: "Pusat Bantuan",
          to: "/hubungi-kami/pusat-bantuan",
        },
      ],
    },
  ];
  return (
    <>
      {Links.map((link) => (
        <li key={link.name} className="group relative lg:py-6 w-full lg:w-auto">
          <Link
            href={`${link.to}`}
            onClick={() => setHeading(link.name)}
            className="hover:text-grey flex justify-between items-center gap-1 "
          >
            {link.name}
          <FaAngleDown className={`lg:hidden transition duration-300 ease-in-out ${heading === link.name ? 'rotate-180' : ''}`} />
          </Link>

          {link.submenu && (
            <div className={`w-52 group-hover:lg:block hover:lg:block lg:bg-nav py-4 px-4 lg:px-0 lg:absolute top-[100%] rounded-b-lg border-t-2 border-primary ${heading === link.name ? 'block lg:hidden' : 'hidden'}`}>
              <ul className="flex flex-col gap-3">
                {link.sublinks.map((sublink) => (
                  <li
                    className={`group${sublink.group} lg:px-5`}
                    key={sublink.name}
                  >
                    <Link href={sublink.to} 
                    onClick={() => setProgram(sublink.name)}
                    className="hover:text-grey flex justify-between items-center">
                      {sublink.name}
                      {sublink.menu && <FaAngleDown className={`lg:hidden transition duration-300 ease-in-out ${program === sublink.name ? 'rotate-180' : ''}`} />}
                    </Link>
                    {sublink.menu && (
                      <div className={`w-60 group-hover/program:lg:block hover:lg:block lg:bg-nav py-4 px-4 lg:absolute right-[101%] top-1 rounded-b-lg ${program === sublink.name ? 'block lg:hidden' : 'hidden'}`}>
                        <ul className="flex flex-col gap-3">
                          {sublink.links.map((link) => (
                            <li key={link.name}>
                              <Link href={link.to} className="hover:text-grey">
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </>
  );
};

export default Navlink;
