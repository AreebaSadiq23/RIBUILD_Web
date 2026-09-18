import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Home } from "feather-icons-react";
import Header from "../components/Home-components/header";
import Footer from "../servicesdetails/footer";

const TeamProfile = () => {
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
        <h1 className="text-5xl font-bold mb-6">Team Details</h1>
        <Button className="bg-orange-600 text-white px-6 py-3 flex items-center gap-2">
          <Home size={20} />
          <span>Home</span>
          <span className="text-white">•••</span>
          <span className="underline">Team Details</span>
        </Button>
      </div>
    </div>
    <section className="bg-white px-6 py-16 md:px-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Image */}
        <div className="w-full aspect-square bg-gray-200 rounded-md overflow-hidden">
          <Image
            src="/images/2.jpg" 
            alt="Antony Notson"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold exo-font">Antony Notson</h2>
          <h3 className="text-orange-500 roboto-font">Operation Manager</h3>
          <p className="text-gray-700 roboto-font">
          An industrial manufacturing company is a business entity <br/>
          that specializes in producing and supplying a wide range of <br/>
          products and components used in various industries. These products<br/>
         can range from machinery and equipment to electronics, automotive parts,
          consumer goods, and more. </p>

          <div className="text-sm text-gray-800 space-y-6 pt-4 roboto-font">
            <p><strong className="font-semibold">Position</strong> Web Developer</p>
            <p><strong className="font-semibold">Experience:</strong> 15+ Years</p>
            <p><strong className="font-semibold">Location:</strong> 59 Street Chicago, New York City</p>
            <p><strong className="font-semibold">Email:</strong> info@example.com</p>
            <p><strong className="font-semibold">Phone:</strong> +123-7855-4560</p>
          </div>
        </div>
      </div>

      {/* Sections below */}
      <div className="max-w-5xl mx-auto mt-12 space-y-10 text-gray-800 text-sm">
        {/* Personal Info */}
        <div>
          <h3 className="text-2xl text-black font-semibold pb-1 mb-2 exo-font">Personal Info</h3>
          <p className="roboto-font">
          Cras ac sapien eget ante faucibus tempus et eu tortor. Integer iaculis 
          ultrices velit nec tempor. Pellentesque aliquet est massa, sit amet 
          tempor mi auctor nec. Mauris a nibh sed libero fermentum aliquet.
           Quisque sit amet faucibus magna. Donec purus mi, commodo id commodo 
           vel, imperdiet ut mauris. Ut ultricies arcu risus, malesuada efficitur
            orci euismod in. Proin eleifend est risus, ac sodales nulla mollis vel.
             Etiam condimentum placerat mi, sed cursus augue dignissim sit amet.</p>
        </div>

        {/* Career Guidelines */}
        <div>
          <h3 className="text-xl text-black font-semibold pb-1 mb-2 exo-font">Career Guidelines</h3>
          <p>
          Donec purus mi, commodo id commodo vel, imperdiet ut mauris. Ut ultricies arcu risus, 
          malesuada efficitur orci euismod in. Proin eleifend est risus, ac sodales nulla mollis vel.
          </p>
          <p className="roboto-font">
          Integer iaculis ultrices velit nec tempor. Pellentesque aliquet est massa, sit amet tempor mi auctor nec. Mauris a nibh sed libero fermentum aliquet. Quisque sit amet faucibus magna. Donec purus mi, commodo id commodo vel, imperdiet ut mauris. Ut ultricies arcu risus, malesuada efficitur orci euismod in. 
          Proin eleifend est risus, ac sodales nulla mollis vel. Etiam condimentum placerat mi, sed cursus augue dignissim sit amet.
          </p>
        </div>

        {/* Contact Me */}
        <div>
          <h3 className="font-semibold pb-1 mb-2 text-black text-xl exo-font">Contact Me</h3>
          <p>In nec libero luctus, aliquet turpis at, vehicula nisi. Cras eget mauris in nisl tempus lobortis.</p>
          <form className="space-y-4 mt-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <select
                className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
                defaultValue=""
              >
                <option value="" disabled>Select Type of Service</option>
                <option value="consulting">Consulting</option>
                <option value="development">Development</option>
                <option value="design">Design</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <textarea
                placeholder="Type your message"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 min-h-[100px]"
                required
              />
            </div>
            <Button type="submit" className="bg-orange-600 text-white px-6 py-2 mt-2">Send Message</Button>
          </form>
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
    </section>
    <Footer/>
    </>
  );
};

export default TeamProfile;
