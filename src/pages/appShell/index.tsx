import Footer from "@/components/Layouts/Footer";
import Header from "@/components/Layouts/Header";

type appShellType = {
  children: React.ReactNode;
};

const AppShell = ({ children }: appShellType) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AppShell;
