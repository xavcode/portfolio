import Image from "next/image"

export const ItemSocial = function ({ icon }) {
  return (
    <div className="relative flex pt-7 justify-center my-2 w-10 h-10">
      <Image
        color="#fff"
        src={icon}
        alt={`icono ${icon}`}
        fill={true}
      />
    </div>
  )
}