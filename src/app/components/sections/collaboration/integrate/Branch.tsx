import bgStars from "@/app/assets/bg-stars-1.webp"
import branchCollaboration from "@/app/assets/git-branch-collaboration.svg"
import { TextSpanWithUnderline } from "@/app/components/globals/TextSpanWithUnderline"
import { branchStyles as css } from "./styles"

export const Branch = () => {
  return (
    <div className={css.wrapper}>
      <img src={bgStars.src} alt="bg_stars/webp" className={css.bgStars} />
      <div className={css.branchLineContainer}>
        <div className={css.branchLine} />
      </div>
      <div className={css.contentContainer}>
        <p className={css.paragraph}>
          <span className={css.spanStrong}>
            GitHub Issues and GitHub Projects{" "}
          </span>
          supply flexible project management tools that adapt to your team
          alongside your code.
        </p>
        <TextSpanWithUnderline
          title="Explore GitHub Issues"
          styles="mt-4 md:mt-0"
        />
        <div className={css.didYouKnowSectionWrapper}>
          <div className={css.didYouKnowSectionContainer}>
            <img
              src={branchCollaboration.src}
              alt="git_branch_collaboration/svg"
              className={css.branchCollaboration}
            />
            <span className={css.didYouKnowSpan}>Did you know?</span>
            <h3 className={css.data}>80% reduction</h3>
            <span className={css.source}>
              in onboarding time with GitHub
              <span className={css.note}>2</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
