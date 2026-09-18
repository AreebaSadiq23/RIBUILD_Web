import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartPie,
  faDraftingCompass,
  faHelmetSafety,
  faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons';

const MissionSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-24">
      {/* === Top 4 Icons Section === */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-orange-600 mb-16">
        <div>
          <FontAwesomeIcon icon={faChartPie} className="text-4xl mb-2" />
          <p className="text-black font-medium roboto-font">Financial Planning</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faDraftingCompass} className="text-4xl mb-2" />
          <p className="text-black font-medium roboto-font">Architecture Design</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faHelmetSafety} className="text-4xl mb-2" />
          <p className="text-black font-medium roboto-font">New Construction</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faScrewdriverWrench} className="text-4xl mb-2" />
          <p className="text-black font-medium roboto-font">Building Renovation</p>
        </div>
      </div>

      {/* === Mission === */}
      <div className="flex flex-col items-center">
        {/* Top Section: Mission Text and Progress Bars */}
        <div className="grid md:grid-cols-2 gap-10 w-full mb-10">
          <div>
            <p className="text-orange-600  mb-2 roboto-font">- Mission</p>
            <h2 className="text-3xl font-bold mb-4 text-gray-800 exo-font">
              Transforming Visions <br /> Into Reality
            </h2>
            <p className="text-gray-400 roboto-font">
              Morbi dapibus sollicitudin urna, at <br /> interdum sem euismod quis. Maecenas <br /> vitae est
              maximus, bibendum turpis<br /> non, luctus massa.
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-800 exo-font">Work Ability</span>
                <span className="text-gray-800 exo-font">75%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
                <div className="h-full w-[75%] bg-orange-600" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-800">Keep Up</span>
                <span className="text-gray-800">85%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
                <div className="h-full w-[85%] bg-orange-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
