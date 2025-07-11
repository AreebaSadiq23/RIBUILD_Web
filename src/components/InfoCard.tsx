import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface InfoCardProps {
  icon: IconDefinition;
  title: string;
  text: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, text }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
      <FontAwesomeIcon icon={icon} className="text-2xl mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-200">{text}</p>
    </div>
  );
};

export default InfoCard; 