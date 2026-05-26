import { Outlet } from "react-router";
import Header from "./Header/Header";
import Footer from "./Footer";


const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;