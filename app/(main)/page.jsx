"use client"

import HeroSection from "@/app/components/HeroSection";
import Category from "@/app/components/Category";
import Shop from "@/app/components/Shop";
import Products from "@/app/components/Product";
import WhyChooseUs from "@/app/components/WhyUs";
import Join from "@/app/components/Join";
import Footer from "@/components/Footer/Footer";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            <main>
                <HeroSection/>
                <Category/>
                <Shop/>
                <Products/>
                <WhyChooseUs/>
                <Join/>
            </main>
            <Footer/>
            {/*<CartDrawer>*/}
            {/*    Cart*/}
            {/*</CartDrawer>*/}
        </div>
    );
}
