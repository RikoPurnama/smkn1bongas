import Button from "@/components/Button";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";


const Home = () => {
  return (
    <>
      <section
        style={{ backgroundImage: "url(/background.jpg)" }}
        className='w-full h-screen md:h-[60vh] lg:h-screen absolute object-cover bg-top bg-cover before:content-[""] before:w-full before:h-screen before:md:h-[60vh] before:lg:h-screen before:absolute before:bg-transparentDark'
      ></section>

      <section className="relative top-0 w-full h-screen md:h-[60vh] lg:h-screen pt-24 px-6 flex items-center flex-col overflow-hidden">
        <div className="w-full max-w-xl text-center flex flex-col items-center mt-10">
          <h3 className="text-base text-primary">Welcome To</h3>
          <h2 className="text-lg md:text-xl font-bold text-light ">SMK Negeri 1 Bongas</h2>
          <h1 className="text-3xl md:text-4xl max-w-xl font-bold text-white py-1">
            Grow your skills to advance your career path
          </h1>
          <p className="text-base text-grey py-5">
            Lorem ipsum dolor sit amet consectetur. Tristique id bibendum varius
            scelerisque parturient diam morbi in consequat. Turpis tincidunt.
          </p>
          <Link href="/tentang-kami/profile-sekolah" className="bg-primary py-2 px-6 text-base text-white rounded hover:border-2 border-semiDark hover:outline outline-1 outline-primary">
            Lainnya
          </Link>
        </div>

        <div
          style={{ backgroundImage: "url(/background.jpg)" }}
          className="w-full max-w-2xl h-[18rem] md:max-w-lg absolute bottom-0 bg-cover bg-top object-cover rounded-t-3xl before:content-[''] before:w-full before:h-full before:max-w-[672px] before:absolute before:bg-dark before:opacity-40 before:rounded-t-3xl z-20"
        >
          <Link
            href="/#about"
            className="w-14 h-14 md:w-16 md:h-16 text-light bg-primary border-[.2rem] border-solid border-dark absolute right-6 lg:right-16 -top-7 rounded-full flex justify-center items-center"
            aria-label="scroll down"
          >
            <BsArrowDownRight className="w-6 h-6" />
          </Link>
        </div>
        <div
          className="hidden md:block absolute w-24 h-28 -translate-x-[17.2rem] translate-y-[37rem] "
          style={{ backgroundImage: "url(/dash.png)" }}
        ></div>
        <div
          className="hidden md:block absolute w-24 h-24 translate-x-[17rem] translate-y-[22rem] z-10 "
          style={{ backgroundImage: "url(/dash.png)" }}
        ></div>
      </section>
    </>
  );
};

export default Home;
