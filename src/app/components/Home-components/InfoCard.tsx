import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface InfoCardProps {
  icon: IconDefinition
  title: string
  text: string
}

export const InfoCard = ({ icon, title, text }: InfoCardProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg text-center">
      <FontAwesomeIcon icon={icon} className="text-orange-500 text-xl sm:text-2xl mb-2 sm:mb-4" />
      <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{title}</h3>
      <p className="text-gray-200 text-xs sm:text-base">{text}</p>
    </div>
  )
} 