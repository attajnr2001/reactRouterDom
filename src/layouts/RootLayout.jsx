import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs"

function RootLayout() {
  return (
    <div className="rootLayout">
      <Navbar />
      <BreadCrumbs />
      <Outlet />
    </div>
  );
}

export default RootLayout;
