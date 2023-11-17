import Image from "next/image"

export const ItemSkill = function ({ icon, name }) {
  return (
    <div className="flex flex-col items-center ">
      <div className="relative w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24">
        <Image
          src={icon}
          alt={`icon ${icon}`}
          fill={true}
        />
      </div>
      <h3 className="text-center">{name}</h3>
    </div>
  )
}