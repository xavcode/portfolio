import { ItemSocial } from "./ItemSocial"

export const Social = function () {
  return (
    <>
      <div className="flex mt-1 flex-col h-8 justify-center items-center">
        <div className="flex gap-1">
          <ItemSocial icon={'/Social/linkedIn.svg'} />
          <ItemSocial icon={'/Social/github.svg'} />
          <ItemSocial icon={'/Social/facebook.svg'} />
        </div>
      </div>
    </>
  )
}