import { ItemProject } from "./ItemProject"

export const Projects = function () {
  return (
    <div className="mt-2 w-full text-justify px-3">
      <div className="">
        <h2><strong>Projects</strong></h2>
      </div>
      <div className="flex mt-2 overflow-x-auto overflow-y-hidden gap-2 w-full overflow-scroll ">
        <ItemProject />
        <ItemProject />
        <ItemProject />
        <ItemProject />
      </div>
    </div>
  )
}