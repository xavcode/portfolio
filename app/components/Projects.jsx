import { ItemProject } from "./ItemProject"

export const Projects = function () {
  return (
    <>
      <div>
        <h2>Projects</h2>
      </div>
      <div className="flex overflow-x-auto overflow-y-hidden gap-2 w-full overflow-scroll">
        <ItemProject />
        <ItemProject />
        <ItemProject />
        <ItemProject />
        <ItemProject />
        <ItemProject />
      </div>
    </>
  )
}