import React from 'react';

const Home = () => {
  return (
    <section className="relative overflow-hidden bg-orange-950 text-white pb-24">
      {/* Large Circle (moved inward from left edge) */}
      <div className="absolute top-[60px] left-[60px] w-[500px] h-[500px] bg-orange-600 opacity-25 rounded-full z-0 mt-10" />

      {/* Orange bottom angled stripe */}
      <div className="absolute bottom-0 right-0 w-full h-32 bg-orange-500 z-0 clip-path-diagonal" />

      {/* === Left-bottom vector decoration === */}
      <img
        src="/logo/vector_2.png"
        alt="left vector"
        className="absolute bottom-0 left-0 w-[220px] z-0"
      />

      {/* === Right-top vector decoration === */}
      <img
        src="/logo/vector.png"
        alt="right top vector"
        className="absolute right-0 w-[300px] z-0"
      />

      {/* === Main Content === */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center mt-16 px-4 lg:px-20">
        {/* Left Side */}
        <div>
          <p className="text-sm text-gray-300 mb-2 font-roboto underline ml-24 mt-20 roboto-font">Introducing Ribuild</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 font-exo ml-20 exo-font">
            Building Excellence<br />with Precision and Passion.
          </h1>
          <button className="bg-white text-orange-600 hover:bg-orange-600 hover:text-white px-6 py-2 text-sm font-medium ml-20 robot-font">
            Explore Service
          </button>
        </div>

        {/* Right Side (Form) */}
        <div className="bg-white text-black p-6 rounded-md shadow-lg w-[400px] max-w-sm ml-auto mt-14">
          <h2 className="text-lg mb-2 font-bold exo-font">Need Construction Help?</h2>
          <p className="text-sm text-gray-600 mb-4 roboto-font">We are always here to help you at any time.</p>
          <form className="space-y-3">
            <input type="text" placeholder="Full Name" className="w-full border px-3 py-2 rounded-md text-sm" />
            <input type="email" placeholder="Email Address" className="w-full border px-3 py-2 rounded-md text-sm" />
            <select className="w-full border px-3 py-2 rounded-md text-sm">
              <option>Category</option>
            </select>
            <textarea placeholder="Message" className="w-full border px-3 py-2 rounded-md text-sm" />
            <button type="submit" className="bg-orange-500 text-white w-[150px] py-2 text-sm">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>

  );
};

export default Home;
