import { Profile } from "./Profile"
import { Projects } from "./Projects"
import { Skills } from "./Skills"

export const Content = function () {
  return (
    <div className="flex flex-col p-1 mb-3 items-center">
      <Profile />
      <Skills />
      <Projects />
    </div>
  )
}