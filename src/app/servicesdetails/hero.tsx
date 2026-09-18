import Image from 'next/image';
import Header from '../components/Home-components/header';
import { Button } from "@/components/ui/button";
import { Home, ArrowUpRight, ChevronDown } from "feather-icons-react";

const services = [
    "Product design",
    "Creative solution",
    "Visual identity",
    "Branding design",
    "Web design",
    "Content writing",
];

const questions = [
    {
        question: "What Is Project Timing In Construction?",
        answer:
            "Project timing in construction depends on many factors like scale, complexity, and resources. Proper planning and coordination help avoid delays.",
    },
    {
        question: "What Are The Charges Of Renovation?",
        answer: "Renovation charges vary based on scope, material, and labor costs.",
    },
    {
        question: "How To Contact Our Support Team?",
        answer: "You can contact our support team via email or live chat 24/7.",
    },
    {
        question: "How Are Construction Payments Obtained?",
        answer: "Payments are usually obtained in phases—initial deposit, mid-project, and final payment after completion.",
    },
];


export default function Service() {
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
                    <h1 className="text-5xl font-bold mb-6 exo-font">Services Details</h1>
                    <Button className="bg-orange-600 text-white px-6 py-3 flex items-center gap-2">
                        <Home size={20} />
                        <span>Home</span>
                        <span className="text-white">•••</span>
                        <span className="underline exo-font">Services Details</span>
                    </Button>
                </div>
            </div>
            <section className="w-full px-4 py-12 md:py-20 bg-white flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
                {/* Left Image and Service Details */}
                <div className="w-full lg:w-1/2 flex flex-col items-center">
                    <div className="w-[90%] h-[500px] bg-gray-200 rounded-xl overflow-hidden shadow-lg relative mb-8">
                        <Image
                            src="/images/service.jpg"
                            alt="Services Image"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="w-[90%] mb-6">
                        <h3 className="text-xl font-semibold text-gray-800 mt-10">
                            We Ensure Best Service
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Oras Enim Urna, Interdum Nec Porttitor Vitae, Sollicitudin Eu Eros. Praesent Eget Mollis Nulla, Non Lacinia Urna. Donec Sit Amet Neque Auctor, Ornare Dui Rutrum, Condimentum Justo. Duis Dictum, Ex Ac Euismod Eleifend.
                        </p>
                    </div>
                    <div className="w-[90%]">
                        <h3 className="text-xl font-semibold text-gray-800">
                            Included Services
                        </h3>
                        <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
                            <li>Sed Ut Perspiciatis Unde Omnis Iste Natus Error</li>
                            <li>Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur</li>
                            <li>Accusamus Et Iusto Odio Dignissimos Ducimus Qui Blanditiis</li>
                            <li>Nam Libero Tempore Cum Soluta Nobis Est Eligendi Optio Cumque</li>
                        </ul>
                    </div>
                </div>

                {/* Right Content */}
                <div className="w-full lg:w-1/2 flex flex-col gap-8">
                    {/* Our Services */}
                    <div>
                        <h3 className="text-lg font-semibold text-orange-600">Our Services</h3>
                        <ul className="mt-4 flex flex-col gap-4">
                            {services.map((service, index) => (
                                <li
                                    key={index}
                                    className="flex justify-between items-center p-4 border rounded-md hover:bg-gray-50 transition"
                                >
                                    <span className="text-base text-gray-800">{service}</span>
                                    <ArrowUpRight className="w-4 h-4 text-gray-600" />
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Get Free Estimate with Image */}
                    <div>
                        <div className="space-y-4 mt-16">
                            <h3 className="text-sm font-bold text-red-600 uppercase">Get Free Estimate</h3>
                            <div className="bg-neutral-900 text-white p-6 rounded-lg space-y-3 max-w-xs">
                                <p className="text-base leading-tight font-medium">
                                    Have any query<br />feel free contact our support team
                                </p>
                                <button className="mt-2 bg-orange-600 roboto-font text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-red-700">
                                    Free Estimate
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full px-4 py-16 bg-white space-y-16">
                {/* FAQ Section */}
                <div>
                    <h3 className="text-3xl font-bold exo-font text-gray-900 mb-6">
                        Common Question For This Project
                    </h3>
                    <div className="flex flex-col gap-4">
                        {questions.map((q, idx) => (
                            <details
                                key={idx}
                                className="border rounded-md overflow-hidden group transition"
                            >
                                <summary className="flex justify-between items-center cursor-pointer px-4 py-3 bg-gray-100 group-open:bg-gray-200">
                                    <span className="font-medium text-gray-800 text-sm roboto-font">{q.question}</span>
                                    <ChevronDown className="w-4 h-4 text-gray-600 group-open:rotate-180 transition-transform" />
                                </summary>
                                <div className="px-4 py-2 text-sm text-white bg-black roboto-font">
                                    {q.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
            {/* Popular Services */}
            <div>
                <h3 className="text-2xl mb-16 font-bold text-gray-900 mb-6 exo-font ml-14">Popular Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-16">
                    <div className="flex items-start gap-4">
                        <Image src="/icons/s1.png" alt="Elite Construction" width={40} height={40} />
                        <div>
                            <h4 className="font-semibold text-gray-800 text-sm exo-font">Elite Construction</h4>
                            <p className="text-sm text-gray-600 roboto-font">These Cases Are Perfectly Simple And Easy <br /> To Distinguish.In a Free Hour, When Our Power.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Image src="/icons/s2.png" alt="Master Craft Builders" width={40} height={40} />
                        <div>
                            <h4 className="font-semibold text-gray-800 text-sm exo-font">Master Craft Builders</h4>
                            <p className="text-sm text-gray-600 roboto-font">These Cases Are Perfectly Simple And Easy <br /> To Distinguish.In a Free Hour, When Our Power.</p>
                        </div>
                    </div>
                </div>

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
            </div>
        </>
    );
}  