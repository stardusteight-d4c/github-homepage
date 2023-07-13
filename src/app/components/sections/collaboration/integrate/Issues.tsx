import issuesPlan from "@/app/assets/issues-plan.png"
import projects from "@/app/assets/illu-projects.png"

export const Issues = () => {
  return (
    <div className="relative z-50">
      <img
        src={issuesPlan.src}
        alt="issues_plan/png"
        className="w-full pointer-events-none select-none border border-[#30363d] shadow-black/50 shadow-xl rounded-xl"
      />
      <img
        src={projects.src}
        alt="projects/png"
        className="absolute pointer-events-none select-none object-cover shadow-black/50 shadow-2xl bottom-[-175px] xl:bottom-[-375px] right-[16px] lg:left-auto smm:left-[45px] md:left-[142px] lg:right-[50px] xl:right-[25px] w-[267px] xl:w-[544px] h-[225px] xl:h-[459px] rounded-lg border border-[#0d1117]"
      />
    </div>
  )
}
