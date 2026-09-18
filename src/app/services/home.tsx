import Image from 'next/image';
import Header from '../components/Home-components/header';
import { Button } from "@/components/ui/button";
import {  Home } from "feather-icons-react";


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
            <h1 className="text-5xl font-bold mb-6 exo-font">Services</h1>
            <Button className="bg-orange-600 text-white px-6 py-3 flex items-center gap-2">
              <Home size={20} />
              <span>Home</span>
              <span className="text-white">•••</span>
              <span className="underline exo-font">Services</span>
            </Button>
          </div>
        </div>
      </>
    );
}  