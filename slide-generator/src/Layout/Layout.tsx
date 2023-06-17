
import { Footer } from "@/root/components";
import NavBar from "@/root/components/NavBar/NavBar";
import ProductSection from "@/root/components/Product-Section/ProductSection";

import { ReactNode, useRef } from "react";

type LayoutProps = {
    children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {

    const appRef = useRef();

    return (
        <>
            <NavBar/>
            <ProductSection/>
            <main id="app" className="bg-gray-900 flex justify-center items-center  ">{children}</main>

            
            <Footer/>
        </>
    );
};
export default Layout;
