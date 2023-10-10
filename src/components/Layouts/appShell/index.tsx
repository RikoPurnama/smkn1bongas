import Footer from "@/components/Layouts/Footer";
import Header from "@/components/Layouts/Header";
import Companies from "../Companies";
import { useRouter } from "next/router";

type appShellType = {
  children: React.ReactNode;
};

const disableNavbar = ["/_error"];

const AppShell = ({ children }: appShellType) => {
  const { pathname } = useRouter();
  return (
    <>
      {!disableNavbar.includes(pathname) && <Header />}
      {children}
      {!disableNavbar.includes(pathname) && (
        <>
          <Companies />
          <Footer />
        </>
      )}
    </>
  );
};

export default AppShell;
