import {Search} from "lucide-react";
import {Input} from "@/components/ui/input";

const SearchBar = () => (
    <section className="w-full mb-8">
        <div className="max-w-md mx-auto text-center  ">
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-black/50"/>
                <Input
                    type="text"
                    placeholder="Search for medicines or Search for pharmacies..."
                    className="w-full  pl-12 py-6 hover:bg-gray-50/70 text-sm md:text-base border-none shadow-none rounded-2xl focus:border-black focus:ring-black"
                    aria-label="Search medications"

                />
            </div>
        </div>
    </section>
);

export default SearchBar