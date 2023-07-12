import Image from "next/image"
import { backgroundImageStyles as css } from "./styles"

export const BackgroundImage = () => {
  return (
    <picture className="pointer-events-none">
      <source
        media="(max-width: 768px)"
        type="image/webp"
        srcSet="/hero-bg.webp 1x, /hero-bg.webp 2x"
      />
      <source
        media="(min-width: 1280px)"
        type="image/webp"
        srcSet="/hero-bg.webp 1x, /hero-bg.webp 2x"
      />
      <Image
        src="/hero-bg.webp"
        alt="background/webp"
        width={4377}
        height={2043}
        quality={100}
        className={css.image}
      />
    </picture>
  )
}
