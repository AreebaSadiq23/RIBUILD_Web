'use client';

import Image from 'next/image';

export default function WorkingProcessSection() {
  return (
    <div className="relative w-full h-[700px] font-['Roboto']">
      {/* Background Image */}
      <Image
        src="/logo/bg.png"
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 px-6 md:px-20 py-10 text-white flex flex-col justify-center">
        {/* Small Heading */}
        <h4 className="text-orange-500 text-sm mb-1">— Working Process</h4>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-4xl font-bold mb-4 leading-tight">
          We Emphasize Clients<br />Requirements The Most
        </h2>

        {/* Steps */}
        <div className="space-y-8 mt-4">
          {[1, 2, 3].map((step, index) => (
            <div key={step} className="flex items-start space-x-4 relative">
              {/* Left side: Circle and line */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-orange-500 rounded-full text-white flex items-center justify-center font-bold text-sm z-10">
                  {step}
                </div>
                {step !== 3 && (
                  <div className="w-px h-20 bg-white"></div> 
                )}
              </div>

              {/* Right side: Text */}
              <div className="flex flex-col space-y-1">
                <h3 className="text-xl font-semibold">
                  {step === 1
                    ? 'Information Collection'
                    : step === 2
                    ? 'Project Report Analysis'
                    : 'Project Procedure'}
                </h3>
                <p className="text-sm text-gray-200 max-w-md leading-relaxed">
                  Giving consultancy for every financial projection report and analysis for existing project
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
