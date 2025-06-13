import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";

const statusStyles = {
    Featured: "text-emerald-600  bg-gray-100/40",
    Verified: "text-blue-600  bg-gray-100/40",
    default: "text-gray-600 bg-gray-100/40",
};


const ShopCard = ({vendor}) => {
    const badgeStyle = statusStyles[vendor.status] || statusStyles.default;
    return (<Card className="border-none bg-transparent shadow-none hover:bg-white/10 transition-colors">
        <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
                <div
                    className="w-12 h-12 rounded-full flex items-center justify-center">
                    {vendor?.image ? (
                        <Image
                            src={`/placeholder.svg?height=48&width=48&text=${vendor.id}`}
                            width={48}
                            height={48}
                            alt={`Pharmacy ${vendor.id}`}
                            className="rounded-full"
                        />
                    ) : <Image
                        src={`/images/placeholder.png`}
                        width={48}
                        height={48}
                        alt={`Pharmacy ${vendor.id}`}
                        className="rounded-full"
                    />}
                </div>
                <Badge
                    className={`${badgeStyle} rounded-full font-light border hover:bg-white/10 border-white/30 backdrop-blur-sm px-3 py-1 text-xs shadow-none transition-all`}>
                    {vendor.status}
                </Badge>
            </div>
            <h3 className="text-xl font-medium mb-2">{vendor.name}</h3>
            <p className="text-sm text-black/70 mb-4">
                Premium healthcare provider with a wide range of medications and health products.
            </p>
            <div className="flex justify-between items-center">
                <span className="text-xs text-black/50">{vendor.distance} miles away</span>
                <Button
                    variant="ghost"
                    className="p-0 h-auto text-sm hover:bg-transparent hover:text-black/70 font-light"
                >
                    View Store <ArrowRight className="h-3 w-3 ml-1"/>
                </Button>
            </div>
        </CardContent>
    </Card>)
}

const Shop = () => {
    const vendors = Array.from({length: 6}, (_, i) => ({
        id: i + 1,
        name: `HealthPlus Pharmacy ${i + 1}`,
        distance: 2 + (i + 1) / 10,
        status: i % 2 === 0 ? "Featured" : "Verified",
        image: undefined
    }));

    return (
        <section className="w-full py-20">
            <div className="w-full">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
                    <h2 className="text-3xl md:text-4xl ">Shops</h2>
                    <p className="text-sm max-w-xs mt-4 md:mt-0">
                        Our platform connects you with verified pharmacies offering quality medications and healthcare
                        products.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {vendors.map((vendor) => (
                        <ShopCard key={vendor.id} vendor={vendor}/>
                    ))}
                </div>
                <div className="flex justify-center mt-12">
                    <Button
                        variant="outline"
                        className="rounded-xl px-4 py-3 h-auto text-sm border-black text-black hover:bg-black hover:text-white uppercase tracking-wide"
                    >
                        View All Pharmacies
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Shop