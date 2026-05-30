import { Outlet } from "react-router";
import Header from "./Header/Header";
import Footer from "./Footer";


const Layout = () => {
    return (
        <div className="max-w-7xl mx-auto px-2">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;