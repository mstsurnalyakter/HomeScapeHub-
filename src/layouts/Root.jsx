import Footer from "../pages/Shared/Footer/Footer"
import NavBar from "../pages/Shared/NavBar/NavBar"
import { Outlet } from "react-router-dom";


const Root = () => {
  return (
    <div>
      <NavBar />
      <div className="mx-auto max-w-7xl px-1 mt-10 mb-10 min-h-[calc(100vh-366px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root
