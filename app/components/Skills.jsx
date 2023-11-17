import { techs } from "../utils/techs"
import { ItemSkill } from "./ItemSkill"

export const Skills = function () {
  return (
    <div className="mt-2 text-justify w-full px-3">
      <div >
        <h2><strong>Skills</strong></h2>
      </div>
      <div >
        <ul className="flex mt-2 flex-wrap gap-4 justify-center">
          {techs.map(tech => (
            <li key={tech.name} className="hover:scale-[1.25] hover:transition-all duration-150 capitalize">
              <ItemSkill icon={tech.icon} name={tech.name} />
            </li>))}
        </ul>
      </div>
    </div>
  )
}