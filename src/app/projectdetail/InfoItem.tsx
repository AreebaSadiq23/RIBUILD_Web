import React, { JSX } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface InfoItemProps {
  icon: IconDefinition;
  label: string;
  value: string | JSX.Element;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, label, value }) => (
  <div className="flex items-start gap-3 text-sm text-gray-800">
    <FontAwesomeIcon icon={icon} className="text-red-500 mt-1 w-4 h-4" />
    <span>
      <strong>{label}:</strong> {value}
    </span>
  </div>
);

export default InfoItem;
