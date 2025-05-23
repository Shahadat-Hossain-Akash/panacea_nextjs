import {Button} from "@/components/ui/button";

const Join = () => (
    <section className="w-full py-24 ">
        <div className="">
            <div className="max-w-3xl mx-auto backdrop-blur-md border border-white/30 rounded-3xl p-10 transition-all ">
                <h2 className="text-3xl md:text-4xl mb-4 text-center">Become a Vendor</h2>
                <p className="text-sm text-center text-black/70 mb-8">
                    Join our growing network of pharmacy vendors and reach more customers.
                    Our platform provides the tools and visibility you need to grow your pharmacy business.
                </p>
                <div className="flex justify-center">
                    <Button
                        className="rounded-xl px-4 py-3 h-auto text-sm bg-black text-white hover:bg-black/90 uppercase tracking-wide shadow-md hover:shadow-lg transition-all"
                        size="lg"
                    >
                        Apply as Vendor
                    </Button>
                </div>
            </div>
        </div>
    </section>
);

export default Join;
