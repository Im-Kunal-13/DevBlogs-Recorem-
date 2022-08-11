import type { NextPage } from "next";
import Navbar from "../components/Navbar/Navbar";
import DrawerRight from "../components/Navbar/DrawerRight";
import Header from "../containers/Header/Header";
import LoginModal from "../components/LoginModal";
import Footer from "../containers/Footer/Footer";
import Hero from "../containers/Hero/Hero";
import RegisterModal from "../components/RegisterModal";

const Home: NextPage = () => {
  return (
    <div>
      <DrawerRight />
      <LoginModal />
      <RegisterModal />
      <Hero />
      <div className="h-96"></div>
      {/* <Header />  */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
