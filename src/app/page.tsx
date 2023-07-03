import Image from "next/image"
import heroLine from "./assets/hero-line.svg"
import heroDrone from "./assets/hero-drone.webp"
import copilot from "./assets/logos/copilot.svg"
import arrowRight from "./assets/arrow-right.svg"
import { useEffect } from "react"

export default function Home() {
  return (
    <main className="w-screen h-screen bg-[#0b0e14] overflow-x-hidden">
      <section className="max-w-7xl mx-auto relative">
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
            className="min-w-[4377px] z-0 max-w-[4377px] min-h-[2043px] max-h-[2043px] absolute top-0 -right-[1050px]"
          />
        </picture>
        <div className="relative z-10">
          <img
            src={heroLine.src}
            alt="roadmap_hero_line/svg"
            className="w-[440px] h-[630px] absolute top-[129px] left-[38px]"
          />
          <Image
            src={heroDrone.src}
            alt="hero_drone/svg"
            width={500}
            height={326}
            className="drone w-[320px] h-[208px] absolute top-[129px] right-0"
          />
          <div className="absolute text-[#ffffff] z-20 left-[115px] top-[425px]">
            <div className="copilot-span mb-[30px] w-fit rounded-full transition-all ease-in-out duration-300 flex items-center py-[14px] px-[20px]">
              <img
                src={copilot.src}
                alt="copilot_logo/svg"
                className="mr-[16px]"
              />
              <div className="flex flex-col mr-[16px] pr-[4px]">
                <strong className=" leading-5">
                  Introducing GitHub Copilot X
                </strong>
                <span className="text-[#6e7681] whitespace-nowrap">
                  Your AI pair programmer is leveling up
                </span>
              </div>
              <div className="box-line relative z-50 min-w-[16px] max-w-[16px] h-[16px]">
                <div className="chevron" />
                <span className="line absolute -translate-y-1/2 top-1/2" />
              </div>
            </div>
            <div>
              <h1 className="font-semibold mb-[24px] text-[80px] tracking-[-0,01em] leading-[80px]">
                Let’s build from here
              </h1>
              <h2 className="font-normal max-w-[978px] text-[#7d8590] text-[32px] tracking-[-0,01em] leading-[44px]">
                Harnessed for productivity. Designed for collaboration.
                Celebrated for built-in security. Welcome to the platform
                developers love.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
