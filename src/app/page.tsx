import Image from "next/image"
import bgStars from "./assets/bg-stars-1.webp"
import heroLine from "./assets/hero-line.svg"
import copilot from "./assets/logos/copilot.svg"
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
            alt="background/img"
            width={4377}
            height={2043}
            quality={100}
            className="min-w-[4377px] max-w-[4377px] min-h-[2043px] max-h-[2043px] absolute top-0 -right-[1050px]"
          />
        </picture>
      </section>
    </main>
  )
}
