"use client"

import { Fade } from "react-awesome-reveal"
import issuesPlan from "@/app/assets/issues-plan.png"
import projects from "@/app/assets/illu-projects.png"
import { issuesStyles as css } from "./styles"

export const Issues = () => {
  return (
    <div className={css.container}>
      <img
        src={issuesPlan.src}
        alt="issues_plan/png"
        className={css.issuesImage}
      />
      <div className="absolute pointer-events-none select-none bottom-[-175px] xl:bottom-[-375px] right-[16px] lg:left-auto smm:left-[45px] md:left-[142px] lg:right-[50px] xl:right-[25px] w-[267px] xl:w-[544px] h-[225px] xl:h-[459px] rounded-lg">
        <Fade>
          <div className="relative">
            <img
              src={projects.src}
              alt="projects/png"
              className={css.projectsImage}
            />
          </div>
        </Fade>
      </div>
    </div>
  )
}
