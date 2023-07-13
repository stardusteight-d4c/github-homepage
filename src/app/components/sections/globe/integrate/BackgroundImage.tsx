import Image from "next/image"
import { backgroundImageStyles as css } from "./styles"

export const BackgroundImage = () => {
  return (
    <picture className={css.wrapper}>
      <source
        media="(max-width: 768px)"
        type="image/jpg"
        srcSet="/footer-galaxy.jpg 1x, /footer-galaxy.jpg 2x"
      />
      <source
        media="(min-width: 1280px)"
        type="image/jpg"
        srcSet="/footer-galaxy.jpg 1x, /footer-galaxy.jpg 2x"
      />
      <Image
        src="/footer-galaxy.jpg"
        alt="background/jpg"
        width={4553}
        height={1291}
        quality={100}
        className={css.image}
      />
    </picture>
  )
}
