import branchProductivity from "@/app/assets/git-branch-productivity.svg"
import bgStars from "@/app/assets/bg-stars-1.webp"
import { branchStyles as css } from "./styles"
import { TextSpanWithUnderline } from "@/app/components/globals/TextSpanWithUnderline"

export const Branch = () => {
  return (
    <div className={css.wrapper}>
      <img src={bgStars.src} alt="bg_stars/webp" className={css.bgStars} />
      <div className={css.branchLineContainer}>
        <div className={css.branchLine} />
      </div>
      <div className={css.contentContainer}>
        <p className={css.paragraph}>
          <span className={css.strong}>GitHub Codespaces </span>offers a
          complete dev environment in seconds, so you can code, build, test, and
          open pull requests from any repo anywhere.
        </p>
        <TextSpanWithUnderline
          title="Check out GitHub Codespaces"
          styles="mt-4 md:mt-0"
        />
        <div className={css.didYouKnowSectionWrapper}>
          <div className={css.didYouKnowSectionContainer}>
            <img
              src={branchProductivity.src}
              alt="git_branch_productivity/svg"
              className={css.branchProductivityAsset}
            />
            <span className={css.didYouKnowSpan}>Did you know?</span>
            <h3 className={css.data}>22% increase</h3>
            <span className={css.source}>
              in developer productivity <br /> after three years with GitHub
              <span className={css.note}>1</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
