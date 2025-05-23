import {Button} from "@/components/ui/button"
import SearchBar from "@/app/components/SearchBar";

const HeroSection = () => (
    <section className="w-full min-h-[calc(100vh-76px)] flex flex-col items-center justify-center text-center gap-6">
        <SearchBar/>
        <div className="flex flex-col items-center justify-center text-center gap-4">
            <h1 className="text-5xl md:text-7xl lg:text-9xl  tracking-tight leading-tight mb-4">
                WE CONNECT
                <br/>
                PHARMACIES
                <br/>
                TO PATIENTS.
            </h1>
            <div className="flex flex-col items-center justify-center gap-6">
                <p className="text-xs uppercase tracking-wide max-w-md">
                    We are the leaders in multi-vendor pharmacy marketplace, connecting trusted pharmacies with
                    patients nationwide.
                </p>
                <Button
                    className="rounded-full px-16 py-4 h-auto text-sm border bg-white text-black hover:bg-white/90 uppercase tracking-wide w-fit shadow-none border-gray-300"
                    size="lg"
                >
                    Find Medications
                </Button>
            </div>
        </div>
    </section>
)

export default HeroSection
