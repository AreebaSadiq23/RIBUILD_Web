import Image from "next/image"

const LogoSection = () => (
    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-20 mb-16">
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
);

export default LogoSection;
