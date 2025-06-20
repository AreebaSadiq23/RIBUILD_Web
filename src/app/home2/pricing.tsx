import React from 'react';

interface Feature {
  label: string;
  available: boolean;
}

interface Plan {
  name: string;
  price: string;
  features: Feature[];
  highlight: boolean;
}

const plans: Plan[] = [
  {
    name: 'Basic',
    price: '$99.00',
    features: [
      { label: 'Construction Hourly Rate', available: true },
      { label: 'Remodel Or Home Addition', available: true },
      { label: 'Limitless Concepts', available: true },
      { label: 'Architectural Plans', available: false },
      { label: 'Economic Market Survey', available: false },
    ],
    highlight: false,
  },
  {
    name: 'Standard',
    price: '$115.00',
    features: [
      { label: 'Construction Hourly Rate', available: true },
      { label: 'Remodel Or Home Addition', available: true },
      { label: 'Limitless Concepts', available: true },
      { label: 'Architectural Plans', available: true },
      { label: 'Economic Market Survey', available: true },
    ],
    highlight: true,
  },
  {
    name: 'Premium',
    price: '$199.00',
    features: [
      { label: 'Construction Hourly Rate', available: true },
      { label: 'Remodel Or Home Addition', available: true },
      { label: 'Limitless Concepts', available: true },
      { label: 'Architectural Plans', available: true },
      { label: 'Economic Market Survey', available: true },
    ],
    highlight: false,
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <div className="text-center">
        <p className={`text-sm text-orange-500 font-semibold mb-2 roboto-font`}> - Pricing Plan</p>
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 exo-font`}>
          Choose Right Pricing <br /> Plan For You
        </h2>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`border p-8 relative flex flex-col ${
              plan.highlight
                ? 'bg-[#1a1a1a] text-white scale-105 shadow-xl z-10'
                : 'bg-white text-black'
            }`}
          >
            <div className="mb-6 flex justify-start">
              <img src="/icons/home.png" alt="icon" className="w-12 h-12" />
            </div>

            <h3 className="text-2xl font-bold mb-2 text-left exo-font">{plan.price}</h3>
            <p className="text-sm mb-6 text-left exo-font">PER MONTH</p>

            <div className="border-t border-gray-200 my-6" />

            <ul className="text-left space-y-3 mb-6 roboto-font">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className={`flex items-center gap-2 ${
                    feature.available ? '' : 'text-gray-400 line-through'
                  }`}
                >
                  <img
                    src={
                      feature.available
                        ? 'https://cdn-icons-png.flaticon.com/512/190/190411.png'
                        : 'https://cdn-icons-png.flaticon.com/512/1828/1828843.png'
                    }
                    alt="status"
                    className="w-4 h-4"
                  />
                  {feature.label}
                </li>
              ))}
            </ul>

            <button
              className={`mt-auto px-6 py-2 text-sm font-semibold text-left self-start ${
                plan.highlight
                  ? 'bg-orange-500 text-white'
                  : 'border border-black text-black'
              }`}
            >
              Purchase Now
            </button>

            <div className="absolute -right-2 top-1/2 -translate-y-1/2 -rotate-90 text-sm font-medium tracking-wide text-gray-400">
              {plan.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
