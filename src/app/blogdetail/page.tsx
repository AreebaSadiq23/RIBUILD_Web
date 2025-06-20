import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUser, faComments, faSearch, faArrowLeft, faArrowRight, faQuoteRight, faAngleDoubleLeft, faAngleDoubleRight, faReply, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookF, faLinkedinIn, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { Button } from "@/components/ui/button";
import {  Home } from "feather-icons-react";
import Image from "next/image";
import Header from "../components/Home-components/header";
import Footer from '../servicesdetails/footer';

export default function BlogDetailSection() {
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
        <h1 className="text-5xl font-bold mb-6">Blog Details</h1>
        <Button className="bg-orange-600 text-white px-6 py-3 flex items-center gap-2">
          <Home size={20} />
          <span>Home</span>
          <span className="text-white">•••</span>
          <span className="underline">Blog Details</span>
        </Button>
      </div>
    </div>

    <div className="w-full px-4 md:px-10 lg:px-20 py-10 bg-white text-[#2f2f2f] grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Blog Content */}
      <div className="lg:col-span-2">
        <img src="/logo/blog.jpg" alt="blog" className="w-full h-[300px] object-cover rounded" />

        <div className="flex items-center gap-6 text-sm text-gray-500 mt-4">
          <div className="flex items-center gap-1"><FontAwesomeIcon icon={faUser} className='text-orange-500'/>By Admin</div>
          <div className="flex items-center gap-1"><FontAwesomeIcon icon={faCalendarAlt} className='text-orange-500' /> February 28, 2024</div>
          <div className="flex items-center gap-1"><FontAwesomeIcon icon={faComments} className='text-orange-500' /> 2 Comments</div>
        </div>

        <h2 className="text-2xl font-bold text-black mt-4 mb-3 exo-font">Construction Process Streamlines</h2>
        <p className="text-gray-600 mb-6 roboto-font">
        Etiam ullamcorper malasada elementum. In molestie pharetra lacus sit abet protium elit facilices acilisis. Quisque sit amet lobortis diam. Pelletize elementum nibh quis ex semper, eu dipygus Donec nisi purus, mollis scelerisque tellus vel, auctor aliquet quam.</p>
        <div className="bg-[#f4f4f4] p-6 border-l-4 border-orange-500 mb-6">
          <p className="italic text-gray-600 flex items-center gap-2 roboto-font">
            <FontAwesomeIcon icon={faQuoteRight} className="text-orange-500 text-5xl mr-3" />
            Purus non enim praesent elementum facilisis leo. Quis lectus nulla volutpat. Nunc scelerisque viverra mauris in aliquam sem fringilla Nam lectus urna duis convallis convallis tellus.
          </p>
          <p className="text-black font-bold mt-2 ml-10 exo-font">– Dominick E. Romero</p>
        </div>

        <p className="text-gray-600 mb-6 roboto-font">
        Ut a rutrum ante. Mauris vestibulum eget leo ac sagittis. Duis arcu magna, fermentum a turpis consequat sagittis sem. Ut efficitur nulla urna, sed mattis erat dapibus vel. Aenean at pulvinar est. Aliquam dapibus ante et magna condimentum eleifend. In laoreet tempus luctus.</p>
        {/* Image + Points Section */}
        <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
          {/* Left Image */}
          <div className="flex-shrink-0 w-full md:w-1/3">
            <img src="/images/cons1.jpg" alt="Construction" className="w-full h-48 object-cover rounded" />
          </div>
          {/* Right Points */}
          <div className="flex-1">
            <ul className="list-disc pl-5 space-y-2 mb-4 text-gray-700">
              <li>Maecenas rhoncus volutpat urna</li>
              <li>sit amet maximus elit commodo at.</li>
              <li>Quisque hendrerit lectus dui</li>
              <li>egestas pellentesque id Praesent dictum</li>
              <li > ullamcorper ensu porta utricles elit scleroes.</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-600 mb-6 roboto-font">
        Quisque augue purus, ultrices ut auctor non, scelerisque vel lacus. Nulla molestie luctus justo, eu ultrices mi maximus molestie. Donec bibendum eleifend pellentesque. Phasellus sed efficitur sem. Cras dictum porta viverra. Vestibulum id dignissim turpis, at sollicitudin sem.
        </p>

        {/* Tags & Share */}
        <div className="flex flex-wrap justify-between items-center border-y py-4 mt-4">
          <div className="text-sm text-gray-600 flex gap-2 flex-wrap">
            <span className='text-black font-bold exo-font'>Tags:</span>
            <span className="border border-gray-200 cursor-pointer">#Building</span>
            <span className="border border-gray-200 cursor-pointer">#Marketing</span>
            <span className="border border-gray-200 cursor-pointer">#SaaS</span>
          </div>
          <div className="text-md flex gap-3 items-center exo-font font-bold">
            Share:
            <span className="w-9 h-9 flex items-center justify-center rounded-full border border-orange-500 text-gray-400 cursor-pointer transition-colors duration-200 hover:bg-orange-500 hover:text-white">
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <span className="w-9 h-9 flex items-center justify-center rounded-full border border-orange-500 text-gray-400 cursor-pointer transition-colors duration-200 hover:bg-orange-500 hover:text-white">
              <FontAwesomeIcon icon={faFacebookF} />
            </span>
            <span className="w-9 h-9 flex items-center justify-center rounded-full border border-orange-500 text-gray-400 cursor-pointer transition-colors duration-200 hover:bg-orange-500 hover:text-white">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </span>
            <span className="w-9 h-9 flex items-center justify-center rounded-full border border-orange-500 text-gray-400 cursor-pointer transition-colors duration-200 hover:bg-orange-500 hover:text-white">
              <FontAwesomeIcon icon={faPinterestP} />
            </span>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center text-sm mt-6">
          {/* Prev Post */}
          <div className="flex flex-col items-start gap-1 cursor-pointer text-gray-400">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faAngleDoubleLeft} />
              <span className="text-xs font-semibold text-gray-700 roboto-font">Prev Post</span>
            </div>
            <span className="text-base font-bold exo-font">Discover A Better</span>
          </div>
          {/* Next Post */}
          <div className="flex flex-col items-end gap-1 cursor-pointer text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-gray-700 roboto-font">Next Post</span>
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </div>
            <span className="text-base font-bold exo-font">Latest News From</span>
          </div>
        </div>

        {/* Comments */}
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-4 exo-font text-gray-800">2 Comments</h3>
          {[{
            name: 'Norman Gordon',
            date: 'March 10, 2024 AT 10:35 PM',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
          }, {
            name: 'Dakota Henderson',
            date: 'March 11, 2024 AT 10:38 PM',
            comment: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
          }].map((c, i) => (
            <div key={i} className="flex items-start gap-4 mb-8 border-b pb-6">
              {/* Profile Circle */}
              <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0" />
              {/* Comment Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-black exo-font">{c.name}</p>
                    <p className="text-xs text-gray-400 roboto-font">{c.date}</p>
                  </div>
                  <button className="flex items-center gap-1 text-orange-500 hover:underline ml-4">
                    Reply
                    <FontAwesomeIcon icon={faReply} className="ml-1" />
                  </button>
                </div>
                <p className="text-sm text-gray-600 mt-2 roboto-font">{c.comment}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Reply Form */}
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-2 exo-font ">Leave A Reply</h3>
          <p className="mb-4 text-gray-400 roboto-font">Your email address will not be published. Required fields are marked </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="border p-2 w-full" />
            <input type="email" placeholder="Email" className="border p-2 w-full" />
            <textarea placeholder="Comment" className="border p-2 w-full md:col-span-2" rows={4}></textarea>
            <button type="submit" className="bg-orange-600 text-white px-6 py-2 mt-2 w-max">Post Comment</button>
          </form>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="space-y-8">
        <div>
          <div className="border border-gray-300 rounded-lg p-4 bg-white">
            <h4 className="text-lg font-bold border-b pb-2 mb-2 text-black exo-font">Search here</h4>
            <div className="flex items-center border px-2 py-1 rounded">
              <input type="text" placeholder="Search keywords" className="flex-grow p-1 outline-none" />
              <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
            </div>
          </div>
        </div>

        <div className="border border-gray-300 rounded-lg p-4 bg-white">
          <h4 className="text-lg font-bold border-b pb-2 mb-2 text-black exo-font">Category</h4>
          <ul className="space-y-0 text-sm text-gray-600 divide-y divide-gray-200" style={{ minHeight: '220px' }}>
            <li className="cursor-pointer px-2 py-3 transition-colors duration-200 hover:bg-orange-500 hover:text-white flex items-center justify-between group">
              <span>Product design</span>
              <FontAwesomeIcon icon={faPaperPlane} className="transition-colors duration-200 group-hover:text-white" />
            </li>
            <li className="cursor-pointer text-white bg-orange-500 px-2 py-3 roboto-font flex items-center justify-between">
              <span>Creative solution</span>
              <FontAwesomeIcon icon={faPaperPlane} className="text-white" />
            </li>
            <li className="cursor-pointer px-2 py-3 transition-colors duration-200 hover:bg-orange-500 hover:text-white roboto-font flex items-center justify-between group">
              <span>Visual identity</span>
              <FontAwesomeIcon icon={faPaperPlane} className="transition-colors duration-200 group-hover:text-white" />
            </li>
            <li className="cursor-pointer px-2 py-3 transition-colors duration-200 hover:bg-orange-500 hover:text-white roboto-font flex items-center justify-between group">
              <span>Graphic design</span>
              <FontAwesomeIcon icon={faPaperPlane} className="transition-colors duration-200 group-hover:text-white" />
            </li>
            <li className="cursor-pointer px-2 py-3 transition-colors duration-200 hover:bg-orange-500 hover:text-white roboto-font flex items-center justify-between group">
              <span>Web design</span>
              <FontAwesomeIcon icon={faPaperPlane} className="transition-colors duration-200 group-hover:text-white" />
            </li>
            <li className="cursor-pointer px-2 py-3 transition-colors duration-200 hover:bg-orange-500 hover:text-white roboto-font flex items-center justify-between group">
              <span>Development</span>
              <FontAwesomeIcon icon={faPaperPlane} className="transition-colors duration-200 group-hover:text-white" />
            </li>
          </ul>
        </div>
        <div>
          {/* blog post */}
          <h4 className="text-lg font-bold border-b pb-2 mb-2 text-black exo-font">Recent post</h4>
          <div className="space-y-4">
            {[
              {
                date: '02 March 2023',
                desc: 'Started to develop a specific programs.'
              },
              {
                date: '05 March 2023',
                desc: 'Renovations that add the most resale value to your home.'
              },
              {
                date: '10 March 2023',
                desc: 'How to stay motivated until a project is finished.'
              }
            ].map((post, i) => (
              <div
                key={i}
                className="flex flex-col items-start border border-gray-200 rounded-lg p-3 bg-white shadow-sm"
              >
                <div className="w-full h-20 bg-gray-300 rounded mb-2" />
                <p className="text-xs text-gray-500 mb-1">{post.date}</p>
                <p className="text-xl exo-font font-bold text-black mt-1">{post.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
            {/* tags cloud */}
            <div className="border border-gray-300 rounded-lg p-4 bg-white">
          <h4 className="text-xl font-bold border-b pb-2 mb-2 text-black exo-font">Tags cloud</h4>
          <div className="flex flex-wrap gap-2">
            {['Creative', 'Design', 'Color', 'Brand','Service','Technology','Startup','Corporate'].map((tag, i) => (
              <span key={i} className={`text-sm px-6 py-2 border rounded ${tag === 'Service' ? 'bg-orange-500 text-white' : 'text-gray-600'}`}>{tag}</span>
            ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
             {/* logo  */}
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
                <Footer/>
      
</>
  );
}
