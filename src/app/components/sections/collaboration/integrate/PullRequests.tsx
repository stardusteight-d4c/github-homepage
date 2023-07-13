import Image from "next/image"
import pullRequests from "@/app/assets/pull-requests.png"
import { TextSpanWithUnderline } from "@/app/components/globals/TextSpanWithUnderline"
import { pullRequestsStyles as css } from "./styles"

export const PullRequests = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.text}>
        <span className={css.spanStrong}>Pull Requests </span>allow real-time
        communication and collaboration about code changes.
        <TextSpanWithUnderline
          title="Check out Pull Requests"
          styles="mt-[60px] text-[#f0f0f0]"
        />
      </div>
      <div className={css.imageContainer}>
        <Image
          src={pullRequests}
          alt="pull_requests/png"
          width={550}
          height={425}
          quality={100}
          className={css.image}
        />
      </div>
    </div>
  )
}
