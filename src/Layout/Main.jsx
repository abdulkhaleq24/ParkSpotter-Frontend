import { Outlet } from "react-router-dom";
import Header from "../Pages/Pages.shared/Header/Header";
import Footer from "../Pages/Pages.shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
