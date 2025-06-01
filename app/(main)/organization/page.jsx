'use client'

import {memo, useState} from 'react'
import {BarChart3, Boxes, Building2, DollarSign, PackageOpen, Users2} from 'lucide-react'
import Image from 'next/image'

const OrganizationCard = memo(function OrganizationCard({org}) {
    const [imgSrc] = useState(org.image || '/images/placeholder.png')

    return (
        <div className="relative group rounded-xl overflow-hidden transition w-full">
            {/* Image as faint background for larger screens */}
            <div className="hidden md:block absolute inset-0 bg-gray-50/70">
                {/*<Image*/}
                {/*    src={imgSrc}*/}
                {/*    alt={org.name}*/}
                {/*    fill*/}
                {/*    sizes="(max-width: 768px) 100vw, 25vw"*/}
                {/*    className="object-cover scale-105 transition-transform duration-300 opacity-[0.035]"*/}
                {/*/>*/}
            </div>

            {/*<div className="p-1">*/}
            {/*    <div className="rounded-md w-full p-1 flex items-center justify-end">*/}
            {/*        <EllipsisVertical*/}
            {/*            className="size-4 shrink-0"/>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="flex flex-col md:grid md:grid-cols-5 h-full gap-2 p-2 md:p-1">
                {/* Image Section (as thumbnail on mobile) */}
                <div
                    className="flex md:block items-center h-32 md:h-36 col-span-1 p-3 bg-white/20 backdrop-blur-md rounded-lg">
                    <div className="md:hidden relative w-16 h-16 rounded-md overflow-hidden">
                        <Image src={imgSrc} alt={org.name} fill className="object-cover"/>
                    </div>
                    <h2 className="text-base md:text-lg text-gray-900 truncate ">
                        {org.name}
                    </h2>
                </div>

                {/* Description */}
                <div className="p-3 space-y-1 md:col-span-2 bg-white/20 backdrop-blur-md rounded-lg">
                    <p className="text-xs md:text-md text-gray-700 line-clamp-4">{org.description}</p>
                </div>

                {/* Stats */}
                <div className="p-3 text-md text-gray-700 md:col-span-2 bg-white/20 backdrop-blur-md rounded-lg">
                    <div className="grid grid-cols-2 gap-2 text-xs md:text-md">
                        <Stat label="Products" value={org.productCount}
                              icon={<PackageOpen className="w-4 h-4 stroke-1"/>}/>
                        <Stat label="Stock" value={org.totalStock} icon={<Boxes className="w-4 h-4 stroke-1"/>}/>
                        <Stat label="Sales" value={org.sales} icon={<BarChart3 className="w-4 h-4 stroke-1"/>}/>
                        <Stat label="Employees" value={org.employees} icon={<Users2 className="w-4 h-4 stroke-1"/>}/>
                        <Stat label="Branches" value={org.branches} icon={<Building2 className="w-4 h-4 stroke-1"/>}/>
                        <Stat label="Revenue" value={org.revenue} icon={<DollarSign className="w-4 h-4 stroke-1"/>}/>
                    </div>
                </div>
            </div>
        </div>
    )
})

function Stat({label, value, icon}) {
    return (
        <div className="flex items-center justify-between gap-1">
            <span className="flex items-center gap-1 text-gray-800">
                {icon} {label}
            </span>
            <span className="">{value ?? '—'}</span>
        </div>
    )
}

// Sample Data
const organizationData = [
    {
        id: '1',
        name: 'PharmaCo Ltd.',
        description: 'A leading provider of pharmaceutical solutions with a focus on affordability and quality healthcare.',
        productCount: 48,
        totalStock: 2200,
        sales: 1300,
        employees: 120,
        branches: 12,
        revenue: '$4.2M',
    },
    {
        id: '2',
        name: 'MediCore Health Services',
        description: 'Innovating everyday healthcare for better living. Trusted by millions.',
        productCount: 32,
        totalStock: 800,
        sales: 720,
        employees: 75,
        branches: 5,
        revenue: '$2.1M',
    },
    {
        id: '3',
        name: 'AllergyCare Org',
        description: 'Allergy relief experts since 1999, ensuring wellness and comfort.',
        productCount: 25,
        totalStock: 400,
        sales: 310,
        employees: 38,
        branches: 2,
        revenue: '$760K',
    },
    {
        id: '4',
        name: 'WellnessHub Corp',
        description: 'Your partner in holistic and preventive healthcare.',
        productCount: 60,
        totalStock: 1000,
        sales: 950,
        employees: 90,
        branches: 8,
        revenue: '$3.7M',
    },
]

export default function OrganizationPage() {
    return (
        <div className="p-4 md:p-6 space-y-4 md:space-y-6 min-h-screen">
            <h1 className="text-xl md:text-2xl text-gray-900">All Organizations</h1>
            <div className="flex flex-col gap-2">
                {organizationData.map((org) => (
                    <OrganizationCard key={org.id} org={org}/>
                ))}
            </div>
        </div>
    )
}
