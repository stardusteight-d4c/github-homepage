import Image from "next/image"
import dependabot from "@/app/assets/illu-dependabot.png"
import { TextSpanWithUnderline } from "@/app/components/globals/TextSpanWithUnderline"
import { dependabotStyles as css } from "./styles"

export const Dependabot = () => {
  return (
    <div className={css.container}>
      <div className={css.textContainer}>
        <span className={css.title}>Dependabot</span> makes it easy to find and
        fix vulnerable dependencies in your supply chain.
        <TextSpanWithUnderline
          title="Explore Dependabot"
          styles={css.underline}
        />
      </div>
      <div className={css.imageContainer}>
        <Image
          src={dependabot}
          alt="dependabot/png"
          width={550}
          height={425}
          quality={100}
          className={css.image}
        />
      </div>
    </div>
  )
}
