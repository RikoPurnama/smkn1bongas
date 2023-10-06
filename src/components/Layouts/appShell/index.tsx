import Footer from "@/components/Layouts/Footer";
import Header from "@/components/Layouts/Header";
import Companies from "../Companies";

type appShellType = {
  children: React.ReactNode;
};

const AppShell = ({ children }: appShellType) => {
  return (
    <>
      <Header />
      {children}
      <Companies />
      <Footer />
    </>
  );
};

export default AppShell;
