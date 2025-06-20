import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    image: "/images/testm.png",
    company: "Best Company",
    text: "We are an architecture firm with a focus beautiful but functional design. At its  heart, we believe in design is about usability and accessibility these are the guiding principles for our work.",
    name: "- Kourtney Holland",
    role: "UI/UX Designer",
  },
  {
    image: "/images/testm.png",
    company: "Good Service",
    text: "We are an architecture firm with a focus beautiful but functional design. At its  heart, we believe in design is about usability and accessibility these are the guiding principles for our work.",
    name: "Jackin Martinez",
    role: "UI/UX Designer",
  },
  {
    image: "/images/testm.png",
    company: "Best Construction",
    text: "We are an architecture firm with a focus beautiful but functional design. At its  heart, we believe in design is about usability and accessibility these are the guiding principles for our work.",
    name: "- Renee Wells",
    role: "UI/UX Designer",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="text-center mb-10">
        <h4 className="text-orange-600 text-md roboto-font">
          - Testimonials
        </h4>
        <h2 className="text-4xl font-bold text-black mt-2 exo-font">
          What Our Clients Say About Us<br/> And 0ur Work
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-2xl p-6 shadow-sm"
          >
            {/* Image + Company + Stars */}
            <div className="flex items-center mb-4">
              <img
                src={t.image}
                alt="Client"
                className="rounded-full w-14 h-14 object-cover mr-4"
              />
              <div>
                <p className="text-gray-800 font-semibold">{t.company}</p>
                <div className="flex text-orange-400">
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} className="mr-1" />
                    ))}
                </div>
              </div>
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 text-sm leading-relaxed mb-4 roboto-font">
              {t.text}
            </p>

            {/* Name + Role */}
            <div className="flex justify-between text-sm text-gray-500">
              <span className="text-black font-bold exo-font">{t.name}</span>
              <span className="roboto-font">{t.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
