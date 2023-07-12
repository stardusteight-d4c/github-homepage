import Image from "next/image"
import actions from "@/app/assets/github-actions.png"
import { gitHubActionsStyles as css } from "./styles"
import { TextSpanWithUnderline } from "@/app/components/globals/TextSpanWithUnderline"

export const GitHubActions = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.textContainer}>
        <span className={css.spanStrong}>GitHub Actions</span> automates your
        build, test, and deployment workflow with simple and secure CI/CD.
        <TextSpanWithUnderline
          title="Discover GitHub Actions"
          styles="text-[#f0f0f0] mt-[60px]"
        />
      </div>
      <div className={css.imageContainer}>
        <Image
          src={actions}
          alt="actions/png"
          width={550}
          height={425}
          quality={100}
          className={css.image}
        />
      </div>
    </div>
  )
}
