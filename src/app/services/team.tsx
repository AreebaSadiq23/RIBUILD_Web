import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';


const SocialIcons = () => {
    return (
      <div className="flex flex-col gap-2">
        <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-orange-600 hover:text-white transition-colors">
          <FontAwesomeIcon icon={faInstagram} />
        </button>
        <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-orange-600 hover:text-white transition-colors">
          <FontAwesomeIcon icon={faFacebookF} />
        </button>
        <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-orange-600 hover:text-white transition-colors">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </button>
        <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-orange-600 hover:text-white transition-colors">
          <FontAwesomeIcon icon={faTwitter} />
        </button>
      </div>
    );
  };
  

const Team = () => (
  <section className="mt-10">
    <p className="text-orange-600 font-semibold uppercase exo-font mb-2 text-center">- Work People -</p>
    <h2 className="text-3xl md:text-4xl font-bold exo-font mb-12 text-center">Our Awesome Creative Best<br /> Team Members</h2>
 
    {/* Cards */}
    <div className="flex flex-wrap justify-center gap-6">
      {/* Card 1 */}
      <div className="relative bg-white rounded-md shadow overflow-hidden text-left w-[280px]">
        <div className="w-full h-[350px]  relative">
          <Image
            src="/images/1.jpg"
            alt="Person 1"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
          <SocialIcons />
        </div>
        <div className="flex items-center justify-between px-4 py-4 border-t bg-gray-300">
          <div className="text-left">
            <h3 className="text-lg font-semibold exo-font">James Williams</h3>
            <p className="text-sm text-gray-600 roboto-font">Operations Manager</p>
          </div>
          <div className="w-9 h-9 bg-orange-600 text-white rounded-full flex items-center justify-center shadow">
            <FontAwesomeIcon icon={faShareAlt} />
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative bg-white rounded-md shadow overflow-hidden text-left w-[280px]">
        <div className="w-full h-[350px] relative">
          <Image
            src="/images/2.jpg"
            alt="Person 2"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
          <SocialIcons />
        </div>
        <div className="flex items-center justify-between px-4 py-4 border-t bg-gray-300">
          <div className="text-left">
            <h3 className="text-lg font-semibold exo-font">Anthony Notson</h3>
            <p className="text-sm text-gray-600 roboto-font">Prodcution Manager</p>
          </div>
          <div className="w-9 h-9 bg-orange-600 text-white rounded-full flex items-center justify-center shadow">
            <FontAwesomeIcon icon={faShareAlt} />
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="relative bg-white rounded-md shadow overflow-hidden text-left w-[280px]">
        <div className="w-full h-[350px] relative">
          <Image
            src="/images/i3.jpg"
            alt="Person 3"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
          <SocialIcons />
        </div>
        <div className="flex items-center justify-between px-4 py-4 border-t bg-gray-300">
          <div className="text-left">
            <h3 className="text-lg font-semibold exo-font">Joseph Crawford</h3>
            <p className="text-sm text-gray-600 roboto-font">Chief Marketing</p>
          </div>
          <div className="w-9 h-9 bg-orange-600 text-white rounded-full flex items-center justify-center shadow">
            <FontAwesomeIcon icon={faShareAlt} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Team;