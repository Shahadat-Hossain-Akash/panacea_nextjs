"use client"

import Image from "next/image"
import {useState} from "react"

const tabs = [
    {id: "details", label: "Basic Details"},
    {id: "products-request", label: "Products Request"},
    {id: "custom-products", label: "Custom Products"},
    {id: "analytics", label: "Analytics"},
]

const organizationMetrics = [
    {label: "Years in Operation", value: "26"},
    {label: "Employees", value: "8,000+"},
    {label: "Global Reach", value: "40+ Countries"},
    {label: "R&D Centers", value: "5 Worldwide"},
]

const faqs = [
    {
        question: "Why choose Acme Pharmaceuticals?",
        answer: "Acme offers globally certified quality, competitive pricing, and sustainable practices that benefit both partners and communities."
    },
    {
        question: "What certifications do their facilities hold?",
        answer: "All facilities are WHO-GMP certified and undergo regular international audits."
    },
    {
        question: "How does Acme ensure sustainability?",
        answer: "Through carbon-neutral practices, eco-friendly packaging, and health outreach programs."
    },
]

const TabBasicDetails = () => {
    const [openFAQ, setOpenFAQ] = useState(null)

    return (
        <div className="space-y-6 text-sm text-black/70 mb-6">
            <div className="space-y-4">
                <p>
                    Acme Pharmaceuticals is a global leader in providing affordable, effective
                    pharmaceutical products to communities worldwide. Established in 1998, it operates
                    in over 40 countries.
                </p>
                <p>
                    With a strong focus on R&D, Acme produces both generic and branded medications and
                    adheres to strict international standards for quality and safety.
                </p>
                <p>
                    The company maintains partnerships with leading healthcare providers and research institutions
                    to innovate in drug formulation, delivery mechanisms, and treatment protocols.
                </p>
                <p>
                    Acme's state-of-the-art manufacturing facilities are certified by the World Health Organization
                    (WHO),
                    ensuring compliance with global Good Manufacturing Practices (GMP).
                </p>
                <p>
                    Sustainability is a core pillar at Acme Pharmaceuticals. Their initiatives include eco-friendly
                    packaging, carbon footprint reduction, and community health outreach programs in under-served
                    regions.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                <div className="bg-gray-100/50 rounded-xl p-4 flex flex-col justify-between">
                    <p className="text-xs text-black/60">Years in Operation</p>
                    <p className="text-2xl  text-black">26</p>
                </div>
                <div className="bg-gray-100/50 rounded-xl p-4 flex flex-col justify-between ">
                    <p className="text-xs text-black/60">Employees</p>
                    <p className="text-2xl  text-black">8,000+</p>
                </div>
                <div className="bg-gray-100/50 rounded-xl p-4 flex flex-col justify-between row-span-2 ">
                    <p className="text-xs text-black/60">Global Reach</p>
                    <p className="text-2xl text-black">40+ Countries</p>
                </div>
                <div
                    className="bg-gray-100/50 rounded-xl p-4 flex flex-col justify-between col-span-2">
                    <p className="text-xs text-black/60">R&amp;D Centers</p>
                    <p className="text-2xl text-black">5 Worldwide</p>
                </div>
            </div>

            {/*<div>*/}
            {/*    <h4 className="text-base text-black mb-2 mt-4">Frequently Asked Questions</h4>*/}
            {/*    <div className="space-y-2">*/}
            {/*        {faqs.map((faq, idx) => (*/}
            {/*            <div key={idx} className="border-b py-3 cursor-pointer"*/}
            {/*                 onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}>*/}
            {/*                <p className=" text-black mb-1">{faq.question}</p>*/}
            {/*                {openFAQ === idx && <p className="text-black/70 text-sm">{faq.answer}</p>}*/}
            {/*            </div>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}


const analyticsData = [
    {label: "Total Products", value: "152"},
    {label: "Monthly Orders", value: "2,340"},
    {label: "Avg. Rating", value: "4.6 ★"},
    {label: "Repeat Customers", value: "67%"},
    {label: "Customer Satisfaction", value: "92%"},
    {label: "Return Rate", value: "3.1%"},
    {label: "Avg. Delivery Time", value: "2.4 days"},
    {label: "Active Subscriptions", value: "1,132"},
]

const TabAnalytics = () => (
    <div className="space-y-4 text-sm text-black/70 mb-6">
        <h3 className="text-lg font-medium text-black mb-4">SHOP ANALYTICS</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-black/80">
            {analyticsData.map((item, index) => (
                <div
                    key={index}
                    className="bg-gray-50/30 rounded-lg p-12 border text-center flex flex-col items-center justify-center"
                >
                    <p className="text-xs text-black/60 mb-1">{item.label}</p>
                    <p className="text-base font-semibold">{item.value}</p>
                </div>
            ))}
        </div>
    </div>
)

const TabProductRequests = () => {
    const requests = [
        {
            name: "Paracetamol 500mg",
            requester: "John Doe",
            status: "Pending",
            requestDate: "2025-05-20",
            quantity: 500,
            notes: "Urgent delivery required",
            priority: "High",
        },
        {
            name: "Amoxicillin 250mg",
            requester: "Jane Smith",
            status: "Approved",
            requestDate: "2025-05-18",
            quantity: 1000,
            notes: "For regular stock replenishment",
            priority: "Medium",
        },
        {
            name: "Ibuprofen 200mg",
            requester: "Emily Johnson",
            status: "Rejected",
            requestDate: "2025-05-15",
            quantity: 300,
            notes: "Duplicates previous request",
            priority: "Low",
        },
    ]

    const getStatusClass = (status) => {
        switch (status) {
            case "Approved":
                return "text-green-600"
            case "Pending":
                return "text-yellow-600"
            default:
                return "text-red-600"
        }
    }

    const getPriorityClass = (priority) => {
        switch (priority) {
            case "High":
                return "bg-red-100/20 text-red-500 border border-red-500/50"
            case "Medium":
                return "bg-yellow-100/20 text-yellow-500 border border-yellow-500/50"
            case "Low":
                return "bg-green-100/20 text-green-500 border border-green-500/50"
            default:
                return "bg-gray-100/20 text-gray-500 "
        }
    }

    return (
        <div className="flex flex-col gap-2 ">
            <h3 className="text-lg font-medium mb-4 ">PRODUCT REQUESTS</h3>
            {requests.map((item, idx) => (
                <div
                    key={idx}
                    className="border rounded-xl bg-gray-50/50 p-3 flex flex-col gap-1.5"
                >
                    <div className="flex justify-between items-center">
                        <h4 className="text-base ">{item.name}</h4>
                        <span
                            className={`text-xs  px-2 py-0.5 rounded ${getPriorityClass(
                                item.priority
                            )}`}
                        >
              {item.priority} Priority
            </span>
                    </div>

                    <div className="grid grid-cols-3 gap-x-6 text-xs text-black/70">
                        <p>
                            <span className="font-medium">Requested by:</span> {item.requester}
                        </p>
                        <p>
                            <span className="font-medium">Date:</span> {item.requestDate}
                        </p>
                        <p>
                            <span className="font-medium">Qty:</span> {item.quantity}
                        </p>
                    </div>

                    <p className="text-xs italic text-black/60">{item.notes}</p>
                    <p className={`text-xs ${getStatusClass(item.status)}`}>
                        Status: {item.status}
                    </p>
                </div>
            ))}
        </div>
    )
}

const TabCustomProducts = () => {
    const customProducts = [
        {
            name: "Custom Vitamin C",
            requester: "Alice Kumar",
            status: "Pending",
            requestDate: "2025-05-10",
            quantity: 200,
            notes: "Special formula with Zinc",
            priority: "High",
        },
        {
            name: "Magnesium Complex",
            requester: "Bob Marley",
            status: "Approved",
            requestDate: "2025-05-05",
            quantity: 150,
            notes: "For new clinic launch",
            priority: "Medium",
        },
    ]

    const getStatusClass = (status) => {
        switch (status) {
            case "Approved":
                return "text-green-600"
            case "Pending":
                return "text-yellow-600"
            default:
                return "text-red-600"
        }
    }

    const getPriorityClass = (priority) => {
        switch (priority) {
            case "High":
                return "bg-red-100/20 text-red-500 border border-red-500/50"
            case "Medium":
                return "bg-yellow-100/20 text-yellow-500 border border-yellow-500/50"
            case "Low":
                return "bg-green-100/20 text-green-500 border border-green-500/50"
            default:
                return "bg-gray-100/20 text-gray-500"
        }
    }

    return (
        <div className="flex flex-col gap-2 ">
            <h3 className="text-lg font-medium mb-4">CUSTOM PRODUCTS</h3>
            {customProducts.map((item, idx) => (
                <div
                    key={idx}
                    className="border rounded-xl bg-gray-50/50 p-3 flex flex-col gap-1.5"
                >
                    <div className="flex justify-between items-center">
                        <h4 className="text-base">{item.name}</h4>
                        <span className={`text-xs px-2 py-0.5 rounded ${getPriorityClass(item.priority)}`}>
                            {item.priority} Priority
                        </span>
                    </div>

                    <div className="grid grid-cols-3 gap-x-6 text-xs text-black/70">
                        <p><span className="font-medium">Requested by:</span> {item.requester}</p>
                        <p><span className="font-medium">Date:</span> {item.requestDate}</p>
                        <p><span className="font-medium">Qty:</span> {item.quantity}</p>
                    </div>

                    <p className="text-xs italic text-black/60">{item.notes}</p>
                    <p className={`text-xs ${getStatusClass(item.status)}`}>
                        Status: {item.status}
                    </p>
                </div>
            ))}
        </div>
    )
}

const OrganizationDetailPage = () => {
    const [tab, setTab] = useState("details")

    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="w-full py-16 md:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Left Image */}
                        <div className="order-1">
                            <div className="aspect-square bg-white rounded-3xl relative overflow-hidden">
                                <Image
                                    src="/images/placeholder.png"
                                    fill
                                    alt="Acme Pharmaceuticals"
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="order-2">
                            <div>
                                <div>
                                    {/* Tabs */}
                                    <div className="flex justify-end mb-4 space-x-4 py-2">
                                        {tabs.map((t) => (
                                            <button
                                                key={t.id}
                                                onClick={() => setTab(t.id)}
                                                className={`px-2 py-1 text-sm font-medium border-b-2 transition-colors ${
                                                    tab === t.id
                                                        ? "border-black text-black"
                                                        : "border-transparent text-black/50 hover:text-black"
                                                }`}
                                            >
                                                {t.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight mb-8">
                                    Acme Pharmaceuticals Ltd.
                                </h1>

                                {tab === "details" && <TabBasicDetails/>}
                                {tab === "analytics" && <TabAnalytics/>}
                                {tab === "products-request" && <TabProductRequests/>}
                                {tab === "custom-products" && <TabCustomProducts/>}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Overview */}
                <section className="w-full py-8 border-b border-black/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 ">
                        {/* Overview */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-6">ORGANIZATION OVERVIEW</h2>
                            <div className="space-y-4 text-black/70 text-sm">
                                <p>
                                    Acme Pharmaceuticals is a global leader in providing affordable, effective
                                    pharmaceutical products to communities worldwide. Established in 1998, it operates
                                    in over 40 countries.
                                </p>
                                <p>
                                    With a strong focus on R&D, Acme produces both generic and branded medications and
                                    adheres to strict international standards for quality and safety.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Information */}
                <section className="w-full py-8 border-t border-black/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mx-auto">
                        <div>
                            <h3 className="text-lg font-medium mb-4">CONTACT INFORMATION</h3>
                            <div className="space-y-3 text-sm text-black/70">
                                <div>
                                    <span className="font-medium text-black">Email:</span>
                                    <br/> info@acmepharma.com
                                </div>
                                <div>
                                    <span className="font-medium text-black">Phone:</span>
                                    <br/> +1 800 123 4567
                                </div>
                                <div>
                                    <span className="font-medium text-black">Headquarters:</span>
                                    <br/> 123 Global Avenue, New York, USA
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default OrganizationDetailPage
