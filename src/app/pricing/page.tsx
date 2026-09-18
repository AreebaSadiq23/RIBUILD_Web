'use client';
import Image from 'next/image';
import Header from '../components/Home-components/header';
import { Button } from "@/components/ui/button";
import { Home } from "feather-icons-react";
import React from 'react';
import Footer from '../servicesdetails/footer';

interface Feature {
    label: string;
    available: boolean;
}

interface Plan {
    name: string;
    monthlyPrice: string;
    yearlyPrice: string;
    features: Feature[];
    highlight: boolean;
}

const plans: Plan[] = [
    {
        name: 'Basic',
        monthlyPrice: '$99.00',
        yearlyPrice: '$999.00',
        features: [
            { label: 'Construction Hourly Rate', available: true },
            { label: 'Remodel Or Home Addition', available: true },
            { label: 'Limitless Concepts', available: true },
            { label: 'Architectural Plans', available: false },
            { label: 'Economic Market Survey', available: false },
        ],
        highlight: false,
    },
    {
        name: 'Standard',
        monthlyPrice: '$115.00',
        yearlyPrice: '$1150.00',
        features: [
            { label: 'Construction Hourly Rate', available: true },
            { label: 'Remodel Or Home Addition', available: true },
            { label: 'Limitless Concepts', available: true },
            { label: 'Architectural Plans', available: true },
            { label: 'Economic Market Survey', available: true },
        ],
        highlight: true,
    },
    {
        name: 'Premium',
        monthlyPrice: '$199.00',
        yearlyPrice: '$1999.00',
        features: [
            { label: 'Construction Hourly Rate', available: true },
            { label: 'Remodel Or Home Addition', available: true },
            { label: 'Limitless Concepts', available: true },
            { label: 'Architectural Plans', available: true },
            { label: 'Economic Market Survey', available: true },
        ],
        highlight: false,
    },
];


export default function Pricing() {
    const [isYearly, setIsYearly] = React.useState(false);
    return (
        <>
            <Header />
            {/* Hero Section with Background Image */}
            <div className="relative w-full h-[500px] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/banner.jpg"
                        alt="Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative z-10 text-center text-white">
                    <h1 className="text-5xl font-bold mb-6 exo-font">Pricing</h1>
                    <Button className="bg-orange-600 text-white px-6 py-3 flex items-center gap-2">
                        <Home size={20} />
                        <span>Home</span>
                        <span className="text-white">•••</span>
                        <span className="underline exo-font">Pricing</span>
                    </Button>
                </div>
            </div>
            <section className="bg-white py-16 px-4 md:px-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                    <div className="text-left">
                        <p className={`text-sm text-orange-500 font-semibold mb-2 roboto-font`}> - Pricing Plan</p>
                        <h2 className={`text-3xl md:text-4xl font-bold exo-font`}>
                            Choose Right Pricing <br /> Plan For You
                        </h2>
                    </div>
                    {/* Toggle Button Start */}
                    <div className="flex justify-start md:justify-end items-center mt-6 md:mt-0 ">
                        <span className={`mr-4 font-semibold 'text-gray-400'`}>Monthly</span>
                        <button
                            className={`relative w-16 h-8 bg-gray\-200 rounded-full focus:outline-none transition-colors duration-300`}
                            onClick={() => setIsYearly((prev) => !prev)}
                            aria-label="Toggle pricing"
                        >
                            <span
                                className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-orange-300 shadow-md transition-transform duration-300 ${isYearly ? 'translate-x-8' : ''}`}
                                style={{ transform: isYearly ? 'translateX(2rem)' : 'translateX(0)' }}
                            />
                        </button>
                        <span className={`ml-4 font-semibold ${isYearly ? 'text-orange-600' : 'text-gray-500'}`}>Yearly</span>
                    </div>
                    {/* Toggle Button End */}
                </div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`border p-8 relative flex flex-col ${plan.highlight
                                    ? 'bg-[#1a1a1a] text-white scale-105 shadow-xl z-10'
                                    : 'bg-white text-black'
                                }`}
                        >
                            <div className="mb-6 flex justify-start">
                                <Image src="/icons/home.png" alt="icon" width={48} height={48} className="w-12 h-12" />
                            </div>

                            <h3 className="text-2xl font-bold mb-2 text-left exo-font">{isYearly ? plan.yearlyPrice : plan.monthlyPrice}</h3>
                            <p className="text-sm mb-6 text-left exo-font">PER {isYearly ? 'YEAR' : 'MONTH'}</p>

                            <div className="border-t border-gray-200 my-6" />

                            <ul className="text-left space-y-3 mb-6 roboto-font">
                                {plan.features.map((feature, i) => (
                                    <li
                                        key={i}
                                        className={`flex items-center gap-2 ${feature.available ? '' : 'text-gray-400 line-through'
                                            }`}
                                    >
                                        <Image
                                            src={
                                                feature.available
                                                    ? 'https://cdn-icons-png.flaticon.com/512/190/190411.png'
                                                    : 'https://cdn-icons-png.flaticon.com/512/1828/1828843.png'
                                            }
                                            alt="status"
                                            width={16}
                                            height={16}
                                            className="w-4 h-4"
                                        />
                                        {feature.label}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`mt-auto px-6 py-2 text-sm font-semibold text-left self-start ${plan.highlight
                                        ? 'bg-orange-500 text-white'
                                        : 'border border-black text-black'
                                    }`}
                            >
                                Purchase Now
                            </button>

                            <div className="absolute -right-2 top-1/2 -translate-y-1/2 -rotate-90 text-sm font-medium tracking-wide text-gray-400">
                                {plan.name}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <div className="mt-24 text-center mb-20">
                <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
                    {["logo-2.png", "logo-1.png", "logo-5.png", "logo-3.png", "logo-4.png"].map((logo, index) => (
                        <div key={index} className="w-28 h-16 relative">
                            <Image
                                src={`/images/logo/${logo}`}
                                alt={`Client logo ${index + 1}`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}  