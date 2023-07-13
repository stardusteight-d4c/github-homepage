import { Collaboration as CollaborationIcon } from "@/app/components/atoms/icons/collaboration"
import { headerStyles as css } from "./styles"

export const Header = () => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>
        <div className={css.titleIconContainer}>
          <div className={css.sectionIconContainer}>
            <div className={css.titleIconBlur} />
            <CollaborationIcon className={css.titleIcon} />
            <div className={css.collaborationBranchLine} />
          </div>
        </div>
        Collaboration
      </h2>
      <p className={css.description}>
        <span className={css.gradientText}>Supercharge collaboration.</span>
        <span className={css.regularText}>
          We provide unlimited repositories, best-in-class version control, and
          the world’s most powerful open source community! So your team can work
          more efficiently together.
        </span>
      </p>
    </div>
  )
}
