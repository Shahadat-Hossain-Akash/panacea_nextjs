import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {ShoppingCart} from "lucide-react";

const ProductCard = ({product}) => (
    <Card className="border-none bg-transparent shadow-none transition-colors">
        <CardContent className="p-4">
            <div className="aspect-square bg-black/5 mb-6 relative rounded-lg">
                {product?.image ? (
                    <Image
                        src={`/placeholder.svg?height=48&width=48&text=${product.id}`}
                        width={48}
                        height={48}
                        alt={`Pharmacy ${product.id}`}
                        className="rounded-full"
                    />
                ) : <Image
                    src={`/images/placeholder.png`}
                    width={48}
                    height={48}
                    alt={`Pharmacy ${product.id}`}
                    className="rounded-full"
                />}
            </div>
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-base font-medium">{product.name}</h3>
                <span className="text-sm font-medium">${product.price.toFixed(2)}</span>
            </div>
            <p className="text-xs text-black/70 mb-4">{product.brand}</p>
            <Button
                variant="outline"
                className="w-full p-6 flex items-center justify-center gap-2 rounded-xl bg-transparent backdrop-blur-md text-black border  shadow-none hover:bg-black hover:text-white hover:shadow-lg transition-all duration-200 text-sm"
            >
                <ShoppingCart className="w-4 h-4"/>
                Add to Cart
            </Button>
        </CardContent>
    </Card>
);

const Products = () => {
    const products = Array.from({length: 8}, (_, i) => ({
        id: i + 1,
        name: `Premium Health Supplement ${i + 1}`,
        price: 19.99 + i,
        brand: "Brand Name",
        image: undefined
    }));

    return (
        <section className="w-full py-20 border-t border-black/10">
            <div className="w-full">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
                    <h2 className="text-3xl md:text-4xl">Featured Products</h2>
                    <p className="text-sm max-w-xs mt-4 md:mt-0">
                        Discover top-rated medications and healthcare products from our trusted vendors.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
                <div className="flex justify-center mt-12">
                    <Button
                        variant="outline"
                        className="rounded-full px-4 py-3 h-auto text-sm border-black text-black hover:bg-black hover:text-white uppercase tracking-wide"
                    >
                        View All Products
                    </Button>
                </div>
            </div>
        </section>
    );
};
export default Products