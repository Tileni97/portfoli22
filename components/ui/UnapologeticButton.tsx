import React from 'react'


const UnapologeticButton = ({ title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button className="px-8 py-2 border border-[#4B0082] bg-transparent text-[#4B0082] 
        dark:border-white relative group transition duration-200">
      <div className="absolute -bottom-2 -right-2 bg-[#9400D3] 
          h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 
          transition-all duration-200" />
      <span className="relative">
        

      </span>
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  
  )
}

export default UnapologeticButton
