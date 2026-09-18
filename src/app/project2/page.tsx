import React from "react";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "../components/Home-components/header";
import Image from "next/image";
import Footer from "../servicesdetails/footer";

export default function ProjectTwo() {
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
                    <h1 className="text-5xl font-bold mb-6">Our Project Two</h1>
                    <Button className="bg-orange-600 text-white ml-14 px-6 py-3 flex items-center gap-2">
                        <Home size={20} />
                        <span>Home</span>
                        <span className="text-white">•••</span>
                        <span className="underline">Our Project Two</span>
                    </Button>
                </div>
            </div>
            <div className="w-full px-4 py-12 bg-white mt-28">
                {/* CARDS – floating & overlapping the black background */}
                <div className="relative -mt-24 px-4 md:px-20 z-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white h-72 rounded-xl shadow-xl overflow-hidden relative">
                            <Image
                                src="/projects/9.jpg"
                                alt="Modern House Design"
                                fill
                                className="object-cover"
                            />
                             <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-[#F05123] rounded-full flex items-center justify-center mb-4 text-white text-xl font-bold mx-auto">
                                        →
                                    </div>
                                    <p className="text-lg font-semibold leading-snug text-white">
                                    Modern Pattern Style for <br />
                                    House Roof
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card 2 */}
                        <div className="bg-white h-72 rounded-xl shadow-xl overflow-hidden relative">
                            <Image
                                src="/projects/11.jpg"
                                alt="House Roof Pattern"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-[#F05123] rounded-full flex items-center justify-center mb-4 text-white text-xl font-bold mx-auto">
                                        →
                                    </div>
                                    <p className="text-lg font-semibold leading-snug text-white">
                                        Modern Pattern Style for <br />
                                        House Roof
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white h-72 rounded-xl shadow-xl overflow-hidden relative group">
                            <Image
                                src="/projects/10.jpg"
                                alt="House Roof Pattern"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-[#F05123] rounded-full flex items-center justify-center mb-4 text-white text-xl font-bold mx-auto">
                                        →
                                    </div>
                                    <p className="text-lg font-semibold leading-snug text-white">
                                    Modern Pattern Style for <br />
                                    House Roof
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card 4 STYLE*/}
            <div className="w-full px-4 py-12 bg-white">
                <div className="px-4 md:px-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {/* Card 4 */}
                        <div className="bg-white h-72 rounded-xl shadow-xl overflow-hidden relative group">
                            <Image
                                src="/projects/15.jpg"
                                alt="House Roof Pattern"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-[#F05123] rounded-full flex items-center justify-center mb-4 text-white text-xl font-bold mx-auto">
                                        →
                                    </div>
                                    <p className="text-lg font-semibold leading-snug text-white">
                                    Modern Pattern Style for <br />
                                    House Roof
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="bg-white h-72 rounded-xl shadow-xl overflow-hidden relative group">
                            <Image
                                src="/projects/16.jpg"
                                alt="House Roof Pattern"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-[#F05123] rounded-full flex items-center justify-center mb-4 text-white text-xl font-bold mx-auto">
                                        →
                                    </div>
                                    <p className="text-lg font-semibold leading-snug text-white">
                                    Modern Pattern Style for <br />
                                    House Roof
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 6 */}
                        <div className="bg-white h-72 rounded-xl shadow-xl overflow-hidden relative group">
                            <Image
                                src="/projects/17.jpg"
                                alt="Construction Project"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-[#F05123] rounded-full flex items-center justify-center mb-4 text-white text-xl font-bold mx-auto">
                                        →
                                    </div>
                                    <p className="text-lg font-semibold leading-snug text-white">
                                    Modern Pattern Style for <br />
                                    House Roof
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                  {/* logo section */}
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
            <Footer/>
        </>
    );
}
