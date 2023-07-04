import Image from "next/image"
import heroLine from "@/app/assets/hero-line.svg"
import heroLine2 from "@/app/assets/hero-line-2.svg"
import heroDrone from "@/app/assets/hero-drone.webp"
import code from "@/app/assets/code.svg"
import * as logo from "@/app/assets/logos/index"
interface Props {}

export const Hero = (props: Props) => {
  return (
    <section className="max-w-7xl min-h-screen mx-auto relative">
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
          className="lg:min-w-[4377px] z-0 max-w-[4377px] lg:min-h-[2043px] max-h-[2043px] absolute top-0 -right-[1750px] md:-right-[1550px] lg:-right-[1350px] lgg:-right-[1150px] lx:-right-[1050px]"
        />
      </picture>
      <div className="relative z-10">
        <div className="absolute pointer-events-none left-6 md:left-[38px] -top-[45px] ssm:top-[80px] lg:top-[129px]">
          <img
            src={heroLine.src}
            alt="roadmap_hero_line/svg"
            className="w-[300px] -ml-1 md:-ml-0 ssm:w-[440px] h-[630px]"
          />
          <div className="w-fit flex items-center justify-center relative my-[10px] -ml-[5.8px]">
            <div className="blur-effect w-[48px] h-[48px] rounded-full animate-pulse" />
            <img
              src={code.src}
              alt="code_icon/svg"
              className="absolute z-20 w-[28px] h-[28px]"
            />
          </div>
          <img
            src={heroLine2.src}
            alt="roadmap_hero_line/svg"
            className="w-[4px] h-[437px] ml-[17px]"
          />
        </div>
        <Image
          src={heroDrone.src}
          alt="hero_drone/svg"
          width={500}
          height={326}
          className="drone w-[35vw] lg:w-[320px] lg:h-[208px] absolute top-[129px] right-4 lx:right-0"
        />
        <div className="pt-[300px] pl-[70px] mr-[24px] md:mr-0 md:pt-[425px] md:pl-[115px] text-[#ffffff] z-20">
          <div className="copilot-span span w-fit hover:border-white mb-[30px] rounded-full transition-all ease-in-out duration-300 flex items-center py-[7px] md:py-[14px] px-[10px] md:px-[20px]">
            <img
              src={logo.copilot.src}
              alt="copilot_logo/svg"
              className="mr-[16px] w-[38px] md:w-[40px]"
            />
            <div className="flex flex-col font-roboto mr-[16px] pr-[4px]">
              <strong className="text-sm md:text-base font-medium tracking-[0.03em] leading-5">
                Introducing GitHub Copilot X
              </strong>
              <span className="text-sm md:text-base text-[#6e7681] font-light md:whitespace-nowrap">
                Your AI pair programmer is leveling up
              </span>
            </div>
            <div className="relative z-50 min-w-[16px] max-w-[16px] h-[16px]">
              <div className="chevron" />
              <span className="line absolute -translate-y-1/2 top-1/2" />
            </div>
          </div>
          <div>
            <h1 className="font-bold font-roboto mb-[24px] text-[48px] md:text-[80px] md:tracking-wide leading-[50px] md:leading-[80px]">
              Let’s build from here
            </h1>
            <h2 className="text-[24px] md:text-[32px] font-normal font-inter max-w-[960px] mb-[38px] text-[#7d8590] tracking-[-0,01em] md:leading-[44px]">
              Harnessed for productivity. Designed for collaboration. Celebrated
              for built-in security. Welcome to the platform developers love.
            </h2>
          </div>
          <div className="flex items-center">
            <form>
              <div className="flex items-center justify-center w-fit">
                <div className="rounded-l-md overflow-hidden">
                  <input
                    type="text"
                    placeholder="Email address"
                    className="placeholder:text-[#535a61] outline-none w-[296px] border-[2px] border-white transition-all duration-100 focus:border-blue-600 text-black/90 bg-white rounded-l-md py-[10px] px-[24px]"
                  />
                </div>
                <button className="custom-button py-[12px] px-[24px] bg-[#773fc6] rounded-r-md text-base font-semibold font-inter flex items-center justify-center">
                  Sign up for GitHub
                </button>
              </div>
            </form>
            <div className="h-[48px] w-[1px] border-l border-[#ffffff2e] mx-4" />
            <button className="trial-span span transition-all ease-in-out duration-300 relative flex items-center justify-center py-[12px] px-[24px] rounded-md bg-transparent border-[1px] hover:border-white border-[#ffffff2e] font-semibold">
              <span className="pr-[4px] tracking-[0.03em] font-roboto font-medium">
                Start a free enterprise trial
              </span>
              <div className="relative z-50 min-w-[16px] max-w-[16px] h-[16px]">
                <div className="chevron ml-2 mt-[1px]" />
                <span className="line absolute -translate-y-1/2 top-1/2 mt-[1px]" />
              </div>
            </button>
          </div>
          <div className="mt-[80px] text-[#7d8590] font-medium w-full">
            <span>Trusted by the world’s leading organizations ↘︎</span>
            <div className="transition-all ease-in-out duration-300 mt-[28px] flex items-center gap-x-[58px] w-full">
              <img
                src={logo.stripe.src}
                alt="stripe/svg"
                className="h-[44px] hover:brightness-200 cursor-pointer"
              />
              <img
                src={logo.pinterest.src}
                alt="pinterest/svg"
                className="h-[44px] hover:brightness-200 cursor-pointer"
              />
              <img
                src={logo.kpmg.src}
                alt="kpmg/svg"
                className="h-[44px] hover:brightness-200 cursor-pointer"
              />
              <img
                src={logo.mercedesBenz.src}
                alt="mercedesBenz/svg"
                className="h-[44px] hover:brightness-200 cursor-pointer"
              />
              <img
                src={logo.pg.src}
                alt="pg/svg"
                className="h-[32px] hover:brightness-200 cursor-pointer"
              />
              <img
                src={logo.telus.src}
                alt="telus/svg"
                className="h-[32px] hover:brightness-200 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
