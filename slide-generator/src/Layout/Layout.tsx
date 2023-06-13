import Footer from "@/root/components/Footer/Footer";
import NavBar from "@/root/components/NavBar/NavBar";
import ProductInfo from "@/root/components/product-info/Product-Info";
import { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <NavBar/>
            <ProductInfo/>
            <main className="flex justify-center items-center bg-slate-200">{children}</main>
            <Footer></Footer>
        </>
    );
};
export default Layout;
