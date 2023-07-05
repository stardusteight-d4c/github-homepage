import Image from "next/image"
import heroLine from "@/app/assets/hero-line.svg"
import heroDrone from "@/app/assets/hero-drone.webp"
import code from "@/app/assets/code.svg"

export const AbsoluteItems = () => {
  return (
    <div className="absolute w-full pointer-events-none left-6 md:left-[38px] -top-[45px] ssm:top-[80px] lg:top-[129px]">
      <div className="relative w-[300px] -ml-1 md:-ml-0 ssm:w-[440px] h-[630px]">
        <img
          src={heroLine.src}
          alt="roadmap_hero_line/svg"
          className="-ml-1 md:-ml-0 w-[440px] h-[630px]"
        />
        <div className="absolute bottom-[38px] md:bottom-[-58px] w-fit flex items-center justify-center my-[10px] -left-[19px] md:left-[-10px]">
          <div className="blur-effect w-[48px] h-[48px] rounded-full animate-pulse" />
          <img
            src={code.src}
            alt="code_icon/svg"
            className="absolute z-20 w-[28px] h-[28px]"
          />
        </div>
        <div className="absolute left-[4px] md:left-[12.5px] rounded-full bottom-[-390px] md:bottom-[-487px] w-[2.5px] md:w-[4px] h-[437px] bg-gradient-to-b from-[#733fc8] via-[#266c40] to-[#55d163]" />
      </div>
      <Image
        src={heroDrone.src}
        alt="hero_drone/svg"
        width={500}
        height={326}
        className="drone w-[35vw] lg:w-[320px] lg:h-[208px] absolute top-[15px] right-4 lx:right-10"
      />
    </div>
  )
}
