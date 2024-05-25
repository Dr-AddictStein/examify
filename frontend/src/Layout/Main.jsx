import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className='pt-24 min-h-[81vh]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;