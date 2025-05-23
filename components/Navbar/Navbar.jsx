import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";

// Dummy user (replace with actual auth logic)
const user = undefined;

const navLinks = ["Pharmacies", "Products", "About", "Contact Us"];

const Navbar = () => (
    <header className="w-full py-6 sticky top-0 z-50 backdrop-blur-md bg-white/30">
        <div className="flex items-center justify-between px-4 md:px-8">
            <Link href="/" className="flex items-center gap-2" aria-label="Panacea">
                <span className="text-xl font-light">Panacea</span>
            </Link>

            <div className="flex items-center gap-8">
                <nav className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="text-sm font-light hover:text-black/70 transition-colors"
                        >
                            {link.toUpperCase()}
                        </Link>
                    ))}
                </nav>

                {user ? (
                    <div className="hidden md:flex items-center gap-4">
                        <span className="text-sm">Welcome, {user.name}</span>
                        <Button size="sm" className="rounded-full text-sm px-4">
                            Logout
                        </Button>
                    </div>
                ) : (
                    <div className="hidden md:flex items-center gap-3">
                        <Link href="/login">
                            <Button
                                variant="ghost"
                                className="text-sm uppercase font-light px-4 py-2 rounded-xl hover:underline transition shadow-none border-none hover:bg-transparent"
                            >
                                Login
                            </Button>
                        </Link>
                        <Link href="/signup">
                            <Button
                                className="text-sm uppercase font-light px-4 py-2 rounded-xl bg-black text-white hover:bg-blue-500/90 transition"
                            >
                                Sign Up
                            </Button>
                        </Link>
                    </div>
                )}

                <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu">
                    <Menu className="h-6 w-6"/>
                </Button>
            </div>
        </div>
    </header>

);

export default Navbar;
