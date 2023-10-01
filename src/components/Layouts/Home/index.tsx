import Button from "@/components/Button";
import { BsArrowDownRight } from "react-icons/bs";


const Home = () => {
  return (
    <>
      <section
        style={{ backgroundImage: "url(/background.jpg)" }}
        className='w-full h-screen md:h-[65vh] object-cover bg-top bg-cover before:content-[""] before:w-full before:h-screen before:md:h-[65vh] before:absolute before:bg-transparentDark z-10'
      ></section>

      <section className="absolute top-0 w-full h-screen md:h-[70vh] pt-24 px-6 flex items-center flex-col overflow-hidden ">
        <div className="w-full max-w-xl text-center flex flex-col items-center mt-10">
          <h3 className="text-base text-primary">Welcome To</h3>
          <h2 className="text-lg md:text-xl font-bold text-light ">SMK Negeri 1 Bongas</h2>
          <h1 className="text-4xl md:text-4xl max-w-xl font-bold text-white py-1">
            Grow your skills to advance your career path
          </h1>
          <p className="text-base text-grey py-5">
            Lorem ipsum dolor sit amet consectetur. Tristique id bibendum varius
            scelerisque parturient diam morbi in consequat. Turpis tincidunt.
          </p>
          <Button buttonText="Lainnya" coloring="bg-primary" />
        </div>

        <div
          style={{ backgroundImage: "url(/background.jpg)" }}
          className="w-full max-w-xl h-[18rem] relative translate-y-[20%] bg-cover bg-top object-cover rounded-t-3xl before:content-[''] before:w-full before:h-full before:max-w-[576px] before:absolute before:bg-dark before:opacity-50 before:rounded-t-3xl z-20"
        >
          <a
            href="#"
            className="w-14 h-14 md:w-16 md:h-16 text-light bg-primary border-[.2rem] border-solid border-dark absolute right-6 lg:right-16 -top-7 rounded-full flex justify-center items-center"
          >
            <BsArrowDownRight className="w-6 h-6" />
          </a>
        </div>
        <div
          className="hidden md:block absolute w-24 h-28 -translate-x-[17.2rem] translate-y-[33rem] "
          style={{ backgroundImage: "url(/dash.png)" }}
        ></div>
        <div
          className="hidden md:block absolute w-24 h-24 translate-x-[17rem] translate-y-[20rem] z-10 "
          style={{ backgroundImage: "url(/dash.png)" }}
        ></div>
      </section>
    </>
  );
};

export default Home;
