import React from 'react';

interface Service {
  title: string;
  desc: string;
  icon: string; 
  highlight?: boolean;
}

const services: Service[] = [
  {
    title: 'Modified Roofing',
    desc: 'Giving consultancy for every financial projection report and analysis for existing project',
    icon: '/icons/l1.png',
    highlight: true,
  },
  {
    title: 'Roof Installation',
    desc: 'Giving consultancy for every financial projection report and analysis for existing project',
    icon: '/icons/l2.png',
  },
  {
    title: 'Damage Roofing',
    desc: 'Giving consultancy for every financial projection report and analysis for existing project',
    icon: '/icons/l3.png',
  },
  {
    title: 'New Roofing',
    desc: 'Giving consultancy for every financial projection report and analysis for existing project',
    icon: '/icons/l4.png',
  },
  {
    title: 'Roof Renovation',
    desc: 'Giving consultancy for every financial projection report and analysis for existing project',
    icon: '/icons/l5.png',
  },
  {
    title: 'Roof Solar Panels',
    desc: 'Giving consultancy for every financial projection report and analysis for existing project',
    icon: '/icons/l6.png',
  },
];

const EfficientSolutions: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="text-center mb-14">
        <p className="text-orange-500 font-semibold roboto-font">Why Choose Us</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 exo-font mt-2">Efficient Affordable Solutions</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex items-start gap-5 bg-white border border-gray-200 rounded-xl shadow-md p-6 transition-transform hover:scale-105 ${service.highlight ? 'relative pb-6' : ''}`}
          >
            <div>
              <img src={service.icon} alt={service.title} className={`w-10 h-10 ${service.highlight ? 'grayscale-0' : 'grayscale'}`} />
            </div>
            <div>
              <h3
                className={`text-lg font-semibold exo-font ${
                  service.highlight ? 'text-orange-500' : 'text-black'
                }`}
              >
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1 roboto-font">{service.desc}</p>
            </div>
            {service.highlight && (
              <span className="absolute bottom-0 left-0 w-full h-2 bg-orange-300 rounded-full" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EfficientSolutions;
