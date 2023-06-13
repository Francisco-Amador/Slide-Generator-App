import Footer from "@/root/components/Footer/Footer";
import NavBar from "@/root/components/NavBar/NavBar";
import ProductSection from "@/root/components/product-info/ProductSection";
import { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <NavBar/>
            <ProductSection/>
            <main className="flex justify-center items-center bg-slate-200">{children}</main>
            <Footer></Footer>
        </>
    );
};
export default Layout;
