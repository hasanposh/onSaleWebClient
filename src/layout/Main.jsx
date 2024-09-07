import { Outlet } from "react-router-dom";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";

const Main = () => {
  return (
    <div >
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
