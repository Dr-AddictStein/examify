import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Main = () => {
    const location = useLocation();
    const shouldRenderNavbarAndFooter = !['/login', '/signup'].includes(location.pathname);
    return (
        <div>
            {shouldRenderNavbarAndFooter && <Navbar />}
            <div className='min-h-[100vh]'>
                <Outlet />
            </div>
            {shouldRenderNavbarAndFooter && <Footer />}
        </div>
    );
};

export default Main;