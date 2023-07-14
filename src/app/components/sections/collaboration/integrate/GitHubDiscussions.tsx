import Image from "next/image"
import discussions from "@/app/assets/discussions.png"
import { TextSpanWithUnderline } from "@/app/components/globals/TextSpanWithUnderline"
import { gitHubDiscussionsStyles as css } from "./styles"
import { Tilt } from "@/app/components/globals/Tilt"

export const GitHubDiscussions = () => {
  return (
    <Tilt elementId="github-discussions" max={3}>
      <div id="github-discussions" className={css.wrapper}>
        <div className={css.text}>
          <span className={css.spanStrong}>GitHub Discussions</span> create
          space to ask questions and have open-ended conversations.
          <TextSpanWithUnderline
            title="Enable GitHub Discussions"
            styles="mt-[60px] text-[#f0f0f0]"
          />
        </div>
        <div className={css.imageContainer}>
          <Image
            src={discussions}
            alt="discussions/png"
            width={550}
            height={425}
            quality={100}
            className={css.image}
          />
        </div>
      </div>
    </Tilt>
  )
}
