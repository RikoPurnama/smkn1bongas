import About from "@/components/Layouts/About";
import AvaibleAtSchool from "@/components/Layouts/AvaibleSchool";
import Companies from "@/components/Layouts/Companies";
import Gallery from "@/components/Layouts/Gallery";
import HomePage from "@/components/Layouts/Home";
import Jurusan from "@/components/Layouts/Jurusan";

export default function Home() {
  return (
    <>
      <HomePage />
      <About />
      <Jurusan />
      <Gallery />
      <AvaibleAtSchool />
      <Companies />
    </>
  );
}
