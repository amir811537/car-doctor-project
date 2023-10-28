import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navber from "../Pages/Shared/Navber";

const Mainlayout = () => {
    return (
        <div>
            <Navber></Navber>
           <Outlet></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default Mainlayout;