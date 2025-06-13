const WhyChooseUs = () => {
    const features = [
        {
            title: "Verified Pharmacies",
            description: "All vendors on our platform undergo strict verification to ensure quality and reliability.",
        },
        {
            title: "Competitive Pricing",
            description: "Compare prices across multiple pharmacies to find the best deals on your medications.",
        },
        {
            title: "Fast Delivery",
            description: "Get your medications delivered quickly and securely to your doorstep.",
        },
    ];

    return (
        <section className="w-full py-20">
            <div className="">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
                    <h2 className="text-3xl md:text-4xl">Why Choose Us</h2>
                    <p className="text-sm max-w-xs mt-4 md:mt-0">
                        We provide a seamless experience connecting patients with trusted pharmacies.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6">
                            <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center mb-6">
                                <span className="text-xl font-medium">{index + 1}</span>
                            </div>
                            <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                            <p className="text-sm text-black/70">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs