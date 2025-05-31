'use client'

import Image from 'next/image'
import {memo, useEffect, useState} from 'react'
import {Ban, CheckCheck, ShoppingCart} from 'lucide-react'
import {Button} from "@/components/ui/button";

const PLACEHOLDERS = ['/images/med_1.png', '/images/med_2.png', '/images/med_3.png']

const ProductCard = memo(function ProductCard({product}) {
    const [imgSrc, setImgSrc] = useState(product.image || '/images/med_1.png')

    useEffect(() => {
        if (!product.image) {
            const rand = Math.floor(Math.random() * PLACEHOLDERS.length)
            setImgSrc(PLACEHOLDERS[rand])
        }
    }, [product.image])

    return (
        <div className="relative group aspect-square rounded-xl overflow-hidden bg-gray-50/30">
            {/* Image */}
            <Image
                src={imgSrc}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-300 scale-90 group-hover:scale-105"
            />


            {/* Info section */}
            <div className="absolute bottom-0 left-0 p-2 z-10 text-white w-full flex flex-col gap-2">
                <div
                    className="bg-gray-300/20 rounded-lg p-2 backdrop-blur-sm max-h-[90px] overflow-hidden">
                    <div className="flex items-start justify-between">
                        <div className="flex flex-col min-w-0 flex-grow mr-2">
                            <h2 className="text-sm sm:text-base text-black truncate">{product.name}</h2>
                            <span className="text-xs sm:text-sm text-gray-700 truncate block">
      {product.organization}
    </span>
                        </div>
                        <span
                            className={`flex-shrink-0 flex items-center gap-1 rounded-lg px-2 py-1 text-xs sm:text-sm ${
                                product.stock > 0 ? 'text-green-500' : 'text-red-500'
                            }`}
                        >
    {product.stock > 0 ? (
        <>
            <CheckCheck className="w-4 h-4"/>
            {product.stock}
        </>
    ) : (
        <Ban className="w-4 h-4"/>
    )}
  </span>
                    </div>

                    <div className="mt-1 flex items-center justify-end text-xs sm:text-sm">
                        <span className="text-black text-lg sm:text-xl">${product.price.toFixed(2)}</span>
                    </div>
                </div>
                <Button
                    variant="outline"
                    className="w-full p-6 flex items-center justify-center gap-2 rounded-lg bg-gray-50/50 backdrop-blur-md text-black border  shadow-none hover:bg-black hover:text-white hover:shadow-lg transition-all duration-200 text-sm"
                >
                    <ShoppingCart className="w-4 h-4"/>
                    Add to Cart
                </Button>
            </div>
        </div>
    )
})

const globalProductData = [
    {
        id: '1',
        name: 'Paracetamol 500mg',
        organization: 'PharmaCo',
        price: 2.99,
        stock: 120,
        image: '/images/med_1.png',
    },
    {
        id: '2',
        name: 'Aspirin',
        organization: 'HealthPlus',
        price: 4.5,
        stock: 0, // no image
    },
    {
        id: '3',
        name: 'Ibuprofen 200mg',
        organization: 'MediCore',
        price: 3.75,
        stock: 30, // no image
    },
    {
        id: '4',
        name: 'Cetirizine',
        organization: 'AllergyCare',
        price: 3.1,
        stock: 42, // no image
    },
]

export default function GlobalProductPage() {
    return (
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 min-h-screen">
            <h1 className="text-xl sm:text-2xl text-gray-900">All Products</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                {globalProductData.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </div>
    )
}
