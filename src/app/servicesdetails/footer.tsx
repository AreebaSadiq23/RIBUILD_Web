import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B1F22] text-white px-6 md:px-20 py-12 relative">
      {/* Decorative Images */}
      <Image
        src="/logo/Vector_2.png"
        alt="Vector Bottom Left"
        width={150}
        height={150}
        className="absolute left-0 bottom-0 mb-2 ml-2 opacity-70 pointer-events-none select-none"
        style={{ zIndex: 1 }}
      />
      <Image
        src="/logo/Vector.png"
        alt="Vector Top Right"
        width={180}
        height={180}
        className="absolute right-0 top-0 mt-2 mr-2 opacity-70 pointer-events-none select-none"
        style={{ zIndex: 1 }}
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <Image src="/logo/logo.png" alt="Ribuild Logo" width={120} height={40} />
          <p className="text-sm text-gray-400 mt-4 roboto-font">
            Officia deserunt mollitia ad est laborum fuga. Et harum quidem r facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
          </p>
          <div className="mt-4 text-sm rboto-font">
            <p className="mb-5">Working Hours</p>
            <p className="text-gray-300">Saturday: 09.00AM - 05.00PM</p>
            <p className="text-gray-300">Thursday: 09.00AM - 05.00PM</p>
            <p className="text-gray-300">Friday: Close</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-4 exo-font">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300 roboto-font">
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/ourteam" className="hover:underline">Our Team</Link></li>
            <li><Link href="#" className="hover:underline">Testimonials</Link></li>
            <li><Link href="/bloggrid" className="hover:underline">Blog Grid</Link></li>
            <li><Link href="/error" className="hover:underline">Error Page</Link></li>
          </ul>
        </div>

        {/* Our Service */}
        <div>
          <h4 className="font-semibold text-white mb-4 exo-font">Our Service</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/services" className="hover:underline">General Construction</Link></li>
            <li><Link href="/services" className="hover:underline">Property Maintenance</Link></li>
            <li><Link href="/services" className="hover:underline">Project Management</Link></li>
            <li><Link href="/services" className="hover:underline">Virtual Design & Build</Link></li>
          </ul>
        </div>

        {/* Our Gallery */}
        <div>
          <h4 className="font-semibold text-white mb-4 exo-font">Our Gallery</h4>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <Image
                key={num}
                src={`/projects/${num}.jpg`}
                alt={`Gallery image ${num}`}
                width={56}
                height={56}
                className="h-14 w-14 rounded-sm object-cover"
              />
            ))}
          </div>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="border-t mt-10 border-gray-700 text-sm flex flex-col md:flex-row justify-between items-center px-6 py-4">
        <p className="text-[#FFFFFF] ml-0 md:ml-14 mb-4 md:mb-0">&copy; {currentYear} Rebuild. All rights reserved.</p>
          {/* Policy Links */}
          <div className="flex gap-4 ml-0 md:ml-6">
            <a href="#" className="text-[#FFFFFF] roboto-font hover:underline">Privacy Policy</a>
            <a href="#" className="text-[#FFFFFF] roboto-font hover:underline">Terms & Conditions</a>
          </div>
        </div>
    </footer>
  );
}
