import Link from "next/link";

const Footer = () => {
    const footerLinks = {
        "Quick Links": ["Home", "About Us", "Pharmacies", "Products", "Contact"],
        "For Customers": ["My Account", "Order Tracking", "Wishlist", "Prescription Upload", "FAQs"],
        "For Vendors": ["Become a Vendor", "Vendor Login", "Vendor Guidelines", "Vendor Dashboard", "Support"],
    };

    return (
        <footer className="w-full py-12 border-t border-black/10">
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-6" aria-label="MediMarket Home">
                            {/*<ShieldCheck className="h-6 w-6 text-black" />*/}
                            <span className="text-xl font-light">Panacea</span>
                        </Link>
                        <p className="text-sm text-black/70 mb-6">
                            Your trusted multi-vendor pharmacy marketplace for all your healthcare needs.
                        </p>
                    </div>
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h3 className="text-sm font-medium uppercase mb-4">{title}</h3>
                            <ul className="space-y-2 text-sm">
                                {links.map((link) => (
                                    <li key={link}>
                                        <Link href="#" className="text-black/70 hover:text-black transition-colors">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-xs text-black/50 mb-4 md:mb-0">© 2025 Panacea. All rights reserved.</p>
                    <div className="flex gap-6">
                        {["Privacy Policy", "Terms of Service", "Shipping Policy", "Refund Policy"].map((link) => (
                            <Link key={link} href="#"
                                  className="text-xs text-black/50 hover:text-black transition-colors">
                                {link}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer