import Image from "next/image"
import bgStars from "./assets/bg-stars-1.webp"
import heroLine from "./assets/hero-line-2.svg"

export default function Home() {
  return (
    <main>
      <section className="h-screen relative w-screen bg-hero bg-cover bg-no-repeat">
        <div className="max-w-[1250px] mx-auto relative">
        <Image
          src={bgStars}
          width={500}
          height={500}
          alt="background_stars/webp"
          className="w-[500px] h-[500px] absolute right-16 top-20"
        />
          <div className="absolute left-0 top-20">
            <div className="bg-[#6639BA] absolute w-[4px] h-[500px]"/>
            <div className="relative">
              <div className="bg-[#6639BA] absolute -right-[2px] w-3 h-3 rounded-full border" />
              <Image
                src={heroLine}
                width={179}
                height={128}
                alt="hero_line/svg"
                className="w-[179px] h-[128px]"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
