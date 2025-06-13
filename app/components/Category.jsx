import Link from "next/link";

const categories = [
    {
        name: "Prescription Medicines",
        dotColor: "bg-indigo-500",
        textColor: "text-indigo-500",
        bgColor: "bg-indigo-100/20"
    },
    {name: "Heart & Cardiovascular", dotColor: "bg-rose-500", textColor: "text-rose-500", bgColor: "bg-rose-100/20"},
    {
        name: "Baby & Mother Care",
        dotColor: "bg-fuchsia-500",
        textColor: "text-fuchsia-500",
        bgColor: "bg-fuchsia-100/20"
    },
    {name: "Eye Care", dotColor: "bg-sky-500", textColor: "text-sky-500", bgColor: "bg-sky-100/20"},
    {name: "Fever & Pain Relief", dotColor: "bg-yellow-500", textColor: "text-yellow-500", bgColor: "bg-yellow-100/20"},
    {name: "Ayurvedic", dotColor: "bg-emerald-500", textColor: "text-emerald-500", bgColor: "bg-emerald-100/20"},
    {name: "Homeopathy", dotColor: "bg-cyan-500", textColor: "text-cyan-500", bgColor: "bg-cyan-100/20"},
    {name: "Skin Care", dotColor: "bg-rose-400", textColor: "text-rose-400", bgColor: "bg-rose-100/20"},
    {name: "Diabetes Care", dotColor: "bg-purple-500", textColor: "text-purple-500", bgColor: "bg-purple-100/20"},
    {name: "Health Foods", dotColor: "bg-lime-500", textColor: "text-lime-500", bgColor: "bg-lime-100/20"},
    {name: "First Aid", dotColor: "bg-amber-500", textColor: "text-amber-500", bgColor: "bg-amber-100/20"},
    {name: "Mental Wellness", dotColor: "bg-gray-500", textColor: "text-gray-600", bgColor: "bg-gray-100/20"},
];

const CategoryCard = ({category}) => (
    <Link href="#" className="no-underline">
        <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl ${category.bgColor}  backdrop-blur-lg transition-all`}
        >
            <div className={`w-1.5 h-1.5 rounded-full ${category.dotColor}`}/>
            <span className={`text-xs ${category.textColor}`}>{category.name}</span>
        </div>
    </Link>
);

const Categories = () => (
    <div className="relative">
        {/* Top progressive gradient */}
        <div className="absolute inset-0 flex justify-center items-center -top-32">
            <div className="w-[600px] h-[600px] bg-indigo-100 rounded-full blur-3xl opacity-50 "/>
        </div>

        <section className="w-full py-20 relative bg-white rounded-xl">
            <div className="flex flex-col items-center text-center">
                <h2 className="text-3xl md:text-4xl mb-4">Medicine Categories</h2>
                <p className="text-sm max-w-md mb-12">
                    Browse our extensive range of medications and healthcare products by category.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, i) => (
                        <CategoryCard key={i} category={category}/>
                    ))}
                </div>

            </div>
        </section>
    </div>
);

export default Categories;
