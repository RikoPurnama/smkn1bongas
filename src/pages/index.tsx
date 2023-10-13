import About from "@/components/Layouts/About";
import AvaibleAtSchool from "@/components/Layouts/AvaibleSchool";
import Gallery from "@/components/Layouts/Gallery";
import HomePage from "@/components/Layouts/Home";
import Jurusan from "@/components/Layouts/Jurusan";
import Quote from "@/components/Layouts/Quote";

export default function Home() {
  return (
    <>
      <HomePage />
      <About />
      <Jurusan />
      <Gallery />
      <AvaibleAtSchool />
      <Quote />
    </>
  );
}
