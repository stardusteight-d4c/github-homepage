import Image from "next/image"
import bgStars from "./assets/bg-stars-1.webp"
import heroLine from "./assets/Vector4.svg"
import copilot from "./assets/logos/copilot.svg"

export default function Home() {
  return (
    <main>
      <section className="h-screen bg-[#0c1015] relative w-screen">
        <div className="max-w-[1250px] w-full h-screen bg-hero bg-contain bg-no-repeat mx-auto relative">
          <Image
            src={bgStars}
            width={500}
            height={500}
            alt="background_stars/webp"
            className="w-[500px] h-[500px] absolute right-16 top-20"
          />
          <div className="absolute left-0 top-20">
            <div className="bg-[#6639BA] absolute w-[4px] h-[500px]" />
            <div className="relative">
              <div className="bg-gradient-to-br to-[#ffffff] via-[#6639BA] from-transparent absolute -top-[10px] -right-[8px] animate-ping w-6 h-6 rounded-full" />
              <div className="bg-gradient-to-br to-[#ffffff] via-[#6639BA] from-transparent absolute -top-[10px] -right-[8px] w-6 h-6 rounded-full" />
              <Image
                src={heroLine}
                width={439}
                height={316}
                alt="hero_line/svg"
                className="w-[439px] h-[316px]"
              />
            </div>
          </div>
          <a href="">
            <Image
              src={copilot}
              width={40}
              height={40}
              alt="copilot/svg"
              className="w-[40px] h-[40px]"
            />
            <span>GitHub Introducing GitHub Copilot X</span>
            <span>Your AI pair programmer is leveling up</span>
          </a>
          <h1>Let’s build from here </h1>
        </div>
      </section>
    </main>
  )
}
