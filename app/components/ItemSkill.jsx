import Image from "next/image"

export const ItemSkill = function ({ icon, name }) {
  return (
    <div className="relative flex flex-col items-center w-14 ">
      <Image
        src={icon}
        alt={`icon ${icon}`}
        width={40}
        height={40}
      // fill={true}
      />
      <h3 className="text-center">{name}</h3>
    </div>
  )
}