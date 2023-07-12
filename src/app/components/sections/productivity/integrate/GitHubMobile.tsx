import Image from "next/image"
import mobile1 from "@/app/assets/github-mobile-1.png"
import mobile2 from "@/app/assets/github-mobile-2.png"
import { TextSpanWithUnderline } from "@/app/components/globals/TextSpanWithUnderline"
import { gitHubMobileStyles as css } from "./styles"

export const GitHubMobile = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.textContainer}>
        <span className={css.spanStrong}>GitHub Mobile</span> fits your projects
        in your pocket, so you never miss a beat while on the go.
        <TextSpanWithUnderline
          title="Get GitHub Mobile"
          styles={css.textSpan}
        />
      </div>
      <div className={css.imageContainer}>
        <Image
          src={mobile1}
          alt="mobile1/png"
          width={350}
          height={425}
          quality={100}
          className={css.image1}
        />
        <Image
          src={mobile2}
          alt="mobile2/png"
          width={350}
          height={425}
          quality={100}
          className={css.image2}
        />
      </div>
    </div>
  )
}
