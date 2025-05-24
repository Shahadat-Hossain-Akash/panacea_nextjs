"use client"

import Image from "next/image"
import {Minus, Plus, Star} from "lucide-react"
import {useRef, useState} from "react"
import {motion} from "framer-motion"

import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import {Input} from "@/components/ui/input"

function QuantitySelector({quantity, setQuantity, min = 1, max = 1000}) {
    const intervalRef = useRef(null)

    const changeQuantity = (type) => {
        setQuantity((prev) => {
            const next = type === "inc" ? Math.min(max, prev + 1) : Math.max(min, prev - 1)
            return next
        })
    }

    const handleMouseDown = (type) => {
        changeQuantity(type)
        intervalRef.current = setInterval(() => changeQuantity(type), 150)
    }

    const handleMouseUp = () => {
        clearInterval(intervalRef.current)
    }

    const handleChange = (e) => {
        const val = e.target.value
        if (/^\d*$/.test(val)) {
            setQuantity(val === "" ? 0 : parseInt(val))
        }
    }

    const handleBlur = () => {
        if (quantity < min) setQuantity(min)
        if (quantity > max) setQuantity(max)
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") e.target.blur()
    }

    return (
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between w-full">
            <span className="text-sm uppercase tracking-wide text-black">Quantity</span>
            <div
                className="flex items-center rounded-xl border px-1 py-1 space-x-2 w-full sm:w-auto justify-between sm:justify-normal">
                <motion.button
                    whileTap={{scale: 0.9}}
                    className="rounded-xl bg-black text-white p-4 hover:bg-black/90 transition"
                    onMouseDown={() => handleMouseDown("dec")}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onTouchStart={() => handleMouseDown("dec")}
                    onTouchEnd={handleMouseUp}
                >
                    <Minus className="h-4 w-4"/>
                </motion.button>
                <Input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={quantity}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    className="w-16 h-11 px-2 text-center text-sm font-semibold bg-transparent outline-none border-none shadow-none focus:border-black transition"
                />
                <motion.button
                    whileTap={{scale: 0.9}}
                    className="rounded-xl bg-black text-white p-4 hover:bg-black/90 transition"
                    onMouseDown={() => handleMouseDown("inc")}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onTouchStart={() => handleMouseDown("inc")}
                    onTouchEnd={handleMouseUp}
                >
                    <Plus className="h-4 w-4"/>
                </motion.button>
            </div>
        </div>
    )
}

function DosageCalculator() {
    const [ageGroup, setAgeGroup] = useState("adult")

    const getDosage = () => {
        if (ageGroup === "adult") return "1–2 tablets every 4–6 hours. Max 8 tablets/day."
        if (ageGroup === "child") return "½–1 tablet every 4–6 hours. Max 4 tablets/day."
        return ""
    }

    return (
        <div className="space-y-3">
            <h3 className="text-lg font-medium">Dosage Calculator</h3>
            <div className="flex gap-4">
                <Button
                    variant={ageGroup === "adult" ? "default" : "outline"}
                    onClick={() => setAgeGroup("adult")}
                >
                    Adult (12+)
                </Button>
                <Button
                    variant={ageGroup === "child" ? "default" : "outline"}
                    onClick={() => setAgeGroup("child")}
                >
                    Child (6–11)
                </Button>
            </div>
            <p className="text-sm text-black/70">{getDosage()}</p>
        </div>
    )
}

function StickyCartBar({price, quantity}) {
    return (
        <div className="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-black/10 sm:hidden p-4">
            <Button className="w-full h-12 rounded-xl bg-black text-white hover:bg-black/90 text-sm tracking-wide">
                Add to Cart – ${(price * quantity).toFixed(2)}
            </Button>
        </div>
    )
}

export default function ProductDetailPage() {
    const [quantity, setQuantity] = useState(1)
    const price = 12.99 // Flat price for now

    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1 pb-24">
                <section className="w-full py-16 md:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Left Image */}
                        <div className="order-1">
                            <div className="aspect-square bg-white rounded-3xl relative overflow-hidden">
                                <Image
                                    src="/images/placeholder.png"
                                    fill
                                    alt="Paracetamol 500mg"
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="order-2">
                            <Badge
                                className="bg-blue-600 text-white hover:bg-blue-700 shadow-none mb-6 rounded-lg px-4 py-1.5">
                                Pain Relief
                            </Badge>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight mb-8">
                                PARACETAMOL
                                <br/>
                                500MG TABLETS.
                            </h1>

                            <div className="mb-6">
                                <p className="text-sm uppercase tracking-wide mb-4">
                                    FAST-ACTING PAIN RELIEF AND FEVER REDUCER. TRUSTED BY MILLIONS WORLDWIDE FOR
                                    EFFECTIVE TREATMENT.
                                </p>
                                <div className="flex items-center gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="h-4 w-4 fill-black text-black"/>
                                    ))}
                                    <span className="text-sm">4.8 (156 reviews)</span>
                                </div>
                            </div>

                            <div className="mb-8">
                                <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>
                            </div>

                            <div className="mb-8">
                                <Button
                                    className="rounded-xl w-full p-4 h-auto text-sm bg-black text-white hover:bg-black/90 uppercase tracking-wide">
                                    Add to Cart - ${(price * quantity).toFixed(2)}
                                </Button>
                            </div>

                            <DosageCalculator/>
                        </div>
                    </div>
                </section>

                <section className="w-full py-16 border-t border-black/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-6">PRODUCT INFORMATION</h2>
                            <div className="space-y-4 text-black/70 text-sm">
                                <p>
                                    Paracetamol 500mg is a widely used over-the-counter pain reliever and fever reducer.
                                    It belongs to a class of drugs called analgesics and antipyretics.
                                </p>
                                <p>
                                    This medication is effective for treating mild to moderate pain including headaches,
                                    muscle aches, arthritis, backaches, toothaches, colds, and fevers.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium mb-4">DOSAGE INFORMATION</h3>
                            <div className="space-y-3 text-sm text-black/70">
                                <div>
                                    <span className="font-medium text-black">Adults (12+ years):</span>
                                    <br/>
                                    1-2 tablets every 4-6 hours. Max 8 tablets/24h.
                                </div>
                                <div>
                                    <span className="font-medium text-black">Children (6-11 years):</span>
                                    <br/>
                                    1/2 to 1 tablet every 4-6 hours. Max 4 tablets/24h.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-16 border-t border-black/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* Active Ingredients */}
                        <div>
                            <h3 className="text-lg font-medium mb-6">ACTIVE INGREDIENTS</h3>
                            <ul className="list-disc list-inside text-sm text-black/70 space-y-2">
                                <li>Paracetamol 500mg (Active Ingredient)</li>
                                <li>Starch (Binder)</li>
                                <li>Povidone (Disintegrant)</li>
                                <li>Magnesium Stearate (Lubricant)</li>
                            </ul>
                        </div>

                        {/* Possible Side Effects */}
                        <div>
                            <h3 className="text-lg font-medium mb-6">POSSIBLE SIDE EFFECTS</h3>
                            <ul className="list-disc list-inside text-sm text-black/70 space-y-2">
                                <li>Nausea</li>
                                <li>Allergic reactions (rash, itching)</li>
                                <li>Liver issues (with prolonged or high use)</li>
                                <li>Low blood pressure (rare)</li>
                            </ul>
                        </div>

                    </div>
                </section>

                {/* Frequently Asked Questions */}
                <section className="w-full py-16 border-t border-black/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h3 className="text-lg font-medium mb-6">FREQUENTLY ASKED QUESTIONS</h3>
                            <div className="text-sm text-black/70 space-y-4">
                                <div>
                                    <strong>Can I take this on an empty stomach?</strong>
                                    <br/>
                                    Yes, Paracetamol can be taken with or without food.
                                </div>
                                <div>
                                    <strong>How quickly does it work?</strong>
                                    <br/>
                                    Relief typically begins within 30 to 60 minutes.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <StickyCartBar quantity={quantity} price={price}/>
        </div>
    )
}
