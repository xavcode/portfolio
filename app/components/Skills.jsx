import { techs } from "../utils/techs"
import { ItemSkill } from "./ItemSkill"

export const Skills = function () {
  return (
    <>
      <div >
        <h2>Skills</h2>
      </div>
      <div >
        <ul className="flex px-3 flex-wrap gap-5 justify-center">
          {techs.map(tech => (
            <li key={tech.name} className="hover:scale-[1.25] hover:transition-all duration-150">
              <ItemSkill icon={tech.icon} name={tech.name} />
            </li>))}
        </ul>
      </div>
    </>
  )
}