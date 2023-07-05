import Image from "next/image"

export const BackgroundImage = () => {
  return (
    <picture>
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
        className="lg:min-w-[4377px] z-0 max-w-[3077px] lg:max-w-[4377px] lg:min-h-[2043px] max-h-[2043px] absolute top-0 -right-[1250px] md:-right-[1550px] lg:-right-[1350px] lgg:-right-[1150px] lx:-right-[1050px]"
      />
    </picture>
  )
}
