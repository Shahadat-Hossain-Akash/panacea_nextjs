"use client"
import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/app/components/HeroSection";
import Category from "@/app/components/Category";
import Shop from "@/app/components/Shop";
import WhyChooseUs from "@/app/components/WhyUs";
import Join from "@/app/components/Join";
import Footer from "@/components/Footer/Footer";
import Products from "@/app/components/Product";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-br from-white via-white to-rose-50 px-4">
            <Navbar/>
            <main>
                <HeroSection/>
                <Category/>
                <Shop/>
                <Products/>
                <WhyChooseUs/>
                <Join/>
            </main>
            <Footer/>
        </div>
    );
}
