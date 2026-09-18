import React from "react";
import Image from "next/image";

const WorkingProcess = () => {
  return (
    <div className="font-sans">
      {/* Working Process */}
      <section className="py-10 bg-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-md font-roboto text-orange-500 font-semibold">- Working Process -</h1>
          <h2 className="text-3xl font-bold mb-10 relative exo-font">Our Working Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 relative max-w-6xl mx-auto">
            {/* Wavy connecting lines */}
            <div className="hidden md:block absolute top-[40px] left-[12.5%] right-[12.5%] h-[2px]">
              <svg width="100%" height="20" viewBox="0 0 1000 20" preserveAspectRatio="none">
                <path
                  d="M0,10 
                     C25,0 50,20 75,10
                     C100,0 125,20 150,10
                     C175,0 200,20 225,10
                     C250,0 275,20 300,10
                     C325,0 350,20 375,10
                     C400,0 425,20 450,10
                     C475,0 500,20 525,10
                     C550,0 575,20 600,10
                     C625,0 650,20 675,10
                     C700,0 725,20 750,10
                     C775,0 800,20 825,10
                     C850,0 875,20 900,10
                     C925,0 950,20 975,10
                     C990,5 1000,10 1000,10"
                  fill="none"
                  stroke="#d1d5db"
                  strokeWidth="2"
                  strokeDasharray="2,2"
                />
              </svg>
            </div>

            {[
              {
                icon: <Image src="/icons/p2.png" alt="Search" width={32} height={32} className="w-8 h-8" />,
                label: "Product Research",
                text: "Lorem ipsum dolor sit amet, adipiscing elit. sed do eiusmod tempor",
                color: "bg-gray-100",
                number: 1
              },
              {
                icon: <Image src="/icons/p1.png" alt="Design" width={32} height={32} className="w-8 h-8" />,
                label: "Design Idea",
                text: "Lorem ipsum dolor sit amet, adipiscing elit. sed do eiusmod tempor",
                color: "bg-gray-100",
                number: 2
              },
              {
                icon: <Image src="/icons/p4.png" alt="Advice" width={32} height={32} className="w-8 h-8" />,
                label: "Advice & guides",
                text: "Lorem ipsum dolor sit amet, adipiscing elit.  sed do eiusmod tempor",
                color: "bg-gray-100",
                number: 3
              },
              {
                icon: <Image src="/icons/p3.png" alt="Solution" width={32} height={32} className="w-8 h-8" />,
                label: "Great Solutions",
                text: "Lorem ipsum dolor sit amet, adipiscing elit. sed do eiusmod tempor",
                color: "bg-gray-100",
                number: 4
              },
            ].map(({ icon, label, text, color, number }) => (
              <div key={label} className="flex flex-col items-center relative">
                <div
                  className={`w-20 h-20 flex items-center justify-center rounded-full border-b-4 border-orange-500 mb-3 ${color || "bg-gray-200"} relative`}
                >
                  {icon}
                  <div className={`absolute -top-2 exo-font -right-2 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold ${number === 2 ? 'bg-orange-500' : 'bg-black'}`}>
                    {number}
                  </div>
                </div>
                <h3 className={`font-semibold ${color ? "text-orange-500" : "text-black"} exo-font`}>{label}</h3>
                <p className="text-sm text-gray-500 text-center w-4/5">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkingProcess;

