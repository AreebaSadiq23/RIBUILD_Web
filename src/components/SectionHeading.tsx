import React from 'react'

interface SectionHeadingProps {
  title: string
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-black">{title}</h2>
      <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
    </div>
  )
}

export default SectionHeading 