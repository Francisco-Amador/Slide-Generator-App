import Footer from "@/root/components/footer/Footer";
import NavBar from "@/root/components/NavBar/NavBar";
import ProductSection from "@/root/components/Product-Section/ProductSection";
import { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <NavBar/>
            <ProductSection/>
            <main className="bg-gray-900 flex justify-center items-center ">{children}</main>
            <Footer></Footer>
        </>
    );
};
export default Layout;
