import Image from 'next/image';
import Header from '../components/Home-components/header';
import { Button } from "@/components/ui/button";
import { Home } from "feather-icons-react";
import Footer from '../servicesdetails/footer';

export default function Error() {
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
          <h1 className="text-5xl font-bold mb-6 exo-font">404 Error</h1>
          <Button className="bg-orange-600 text-white px-6 py-3 flex items-center gap-2">
            <Home size={20} />
            <span>Home</span>
            <span className="text-white">•••</span>
            <span className="underline exo-font">404 Error</span>
          </Button>
        </div>
      </div>
      {/* New Centered 404 Section */}
      <div className="flex flex-col items-center justify-center min-h-[70vh] bg-white">
        <Image
          src="/images/error.png"
          alt="Not Found"
          width={300}
          height={300}
          className="mb-6"
          priority
        />
        <h2 className="text-4xl font-bold text-gray-800 mb-4 exo-font text-center">Oops! Page not found</h2>
        <Button
          className="bg-orange-600 text-white px-8 py-3 text-lg font-semibold rounded hover:bg-orange-700 transition"
          asChild
        >
          <a href="/">Back to Home</a>
        </Button>
      </div>
      <Footer />
    </>
  );
}  