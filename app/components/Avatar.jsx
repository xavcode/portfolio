import Image from "next/image"
import { Social } from "./Social"

export const Avatar = function () {
  return (
    <>
      <div className="flex justify-center pt-3">
        <div className="relative rounded-full w-[100px] h-[100px] overflow-hidden">
          <Image
            src="/images/profile-photo.avif"
            alt='profile-photo'
            priority={true}
            // fill={true}
            width={100}
            height={100}
          />
        </div>
      </div>
      <h1 className="my-2 text-center">XavCode</h1>
      <p className="text-center"> Full-Stack </p>
      <p className="text-center"> Web & Mobile developer </p>
      <Social />
    </>
  )
}