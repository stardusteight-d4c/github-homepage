import bgStars from "@/app/assets/bg-stars-1.webp"
import branchSecurity from "@/app/assets/git-branch-security.svg"
import { TextSpanWithUnderline } from "@/app/components/globals/TextSpanWithUnderline"
import { branchStyles as css } from "./styles"

export const Branch = () => {
  return (
    <div className={css.wrapper}>
      <img src={bgStars.src} alt="bg_stars/webp" className={css.bgStars} />
      <div className={css.securityBranchContainer}>
        <div className={css.securityBranchLine} />
      </div>
      <div className={css.contentContainer}>
        <p className={css.paragraph}>
          <span className={css.spanStrong}>GitHub Advanced Security </span>
          lets you gain visibility into your security posture, respond to
          threats proactively, and ship secure applications quickly.
        </p>
        <TextSpanWithUnderline
          title="Get GitHub Advanced Security"
          styles="text-[#f0f0f0] mt-4"
        />
        <div className={css.infoContainer}>
          <img
            src={branchSecurity.src}
            alt="git_branch_security/svg"
            className={css.branchSecurity}
          />
          <span className={css.didYouKnow}>Did you know?</span>
          <h3 className={css.didYouKnowData}>56 million projects</h3>
          <span className={css.source}>
            fixed vulnerabilities with GitHub
            <span className={css.note}>3</span>
          </span>
        </div>
      </div>
    </div>
  )
}
