import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => (
  <>
    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-black hover:text-white transition">
      <FontAwesomeIcon icon={faInstagram} />
    </div>
    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-black hover:text-white transition">
      <FontAwesomeIcon icon={faFacebookF} />
    </div>
    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-black hover:text-white transition">
      <FontAwesomeIcon icon={faLinkedinIn} />
    </div>
    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-black hover:text-white transition">
      <FontAwesomeIcon icon={faTwitter} />
    </div>
  </>
);

const Team = () => {
  return (
    <section className="w-full bg-gray-100 py-20 px-6 md:px-20 mt-24">
      {/* Section Heading */}
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-orange-600 font-semibold uppercase exo-font mb-2">- Work People -</p>
            <h2 className="text-3xl md:text-4xl font-bold exo-font">Meet Our Team</h2>
          </div>
          <button className="bg-orange-600 text-white px-6 py-2 roboto-font hover:bg-orange-700 transition">
            Contact Us
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Card 1 */}
        <div className="relative bg-white rounded-2xl shadow overflow-hidden text-left w-[280px]">
          <div className="w-full h-[280px] relative">
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
            <div className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center shadow">
              <FontAwesomeIcon icon={faShareAlt} />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative bg-white rounded-2xl shadow overflow-hidden text-left w-[280px]">
          <div className="w-full h-[280px] relative">
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
            <div className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center shadow">
              <FontAwesomeIcon icon={faShareAlt} />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative bg-white rounded-2xl shadow overflow-hidden text-left w-[280px]">
          <div className="w-full h-[280px] relative">
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
            <div className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center shadow">
              <FontAwesomeIcon icon={faShareAlt} />
            </div>
          </div>
        </div>
      </div>

      {/* Our Clients Section */}
      <div className="mt-24 text-center">
        <p className="text-orange-600 font-medium mb-2 roboto-font">— Our Clients —</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 exo-font">Awarding winning clients</h2>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-20">
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
  );
};

export default Team;
