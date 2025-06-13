"use client"
import Navbar from "@/components/Navbar/Navbar";
import ScrollButton from "@/components/shared/ScrollButton";
import CartDrawer from "@/components/drawer/CartDrawer";

export default function MainLayout({children}) {
    return (
        <>
            <Navbar/>
            {children}
            <ScrollButton/>
            <CartDrawer/>
        </>
    );
}
