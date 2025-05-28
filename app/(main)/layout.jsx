import Navbar from "@/components/Navbar/Navbar";
import ScrollButton from "@/components/shared/ScrollButton";

export default function MainLayout({children}) {
    return (
        <>
            <Navbar/>
            {children}
            <ScrollButton/>
        </>
    );
}
