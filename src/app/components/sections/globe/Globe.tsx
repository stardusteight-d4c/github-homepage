import globe from "@/app/assets/globe.png"
import astrocat from "@/app/assets/astrocat.png"
import ground from "@/app/assets/ground.svg"
import Image from "next/image"

interface Props {}

export const Globe = (props: Props) => {
  return (
    <>
      <div className="w-screen h-[35px] bg-gradient-to-b from-[#0c1015] to-[#0d1018]" />

      <section className="relative text-[#f0f0f0] max-w-7xl mx-auto w-full h-fit">
        <picture className="pointer-events-none">
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
            className="lg:min-w-[2000.33px] 2xl:min-w-[4553.33px] xl:h-[1000px] 2xl:h-[1291px] z-0  absolute top-0 -right-[1250px] md:-right-[1550px] lg:-right-[200px] 2xl:-right-[1050px]"
          />
        </picture>
        <div className="flex items-center justify-center flex-col">
          <div className="relative z-50 pt-[160px]">
            <h4 className="text-[54px] text-center w-[840px] mx-auto font-jet-brains text-[#f6f8fa] leading-[58px] md:tracking-[-4px] font-bold">
              The place for anyone from anywhere to build anything
            </h4>
            <p className="text-[20px] text-[#7d8590] leading-[28px] w-[724px] text-center mx-auto mt-[16px]">
              Whether you’re scaling your startup or just learning how to code,
              GitHub is your home. Join the world’s largest developer platform
              to build the innovations that empower humanity. Let’s build from
              here.
            </p>
            <div className="flex items-center justify-center gap-x-2 mt-[50px]">
              <button className="span-button bg-[#f6f8fa] flex items-center gap-x-3 rounded-md text-xl font-bold text-[#0d1117] py-[18px] px-[30px]">
                <span>Sign up for GitHub</span>
                <div className="relative z-50 min-w-[16px] max-w-[16px] h-[16px] mt-[2px]">
                  <div className="chevron-black " />
                  <span className="line-black -ml-2 absolute -translate-y-1/2 top-1/2" />
                </div>
              </button>
              <button className="trial-span span w-fit transition-all ease-in-out duration-300 relative flex items-center justify-center py-[17px] px-[30px] rounded-md bg-transparent border-[1px] hover:border-[#f6f8fa] border-[#ffffff2e] font-semibold">
                <span className="pr-[4px] text-xl tracking-[0.03em] font-roboto font-medium">
                  Start a free enterprise trial
                </span>
                <div className="relative z-50 min-w-[16px] max-w-[16px] h-[16px]">
                  <div className="chevron ml-2 mt-[1px]" />
                  <span className="line absolute -translate-y-1/2 top-1/2 mt-[1px]" />
                </div>
              </button>
            </div>
            <div>
              <div className="relative w-screen pointer-events-none select-none">
                <div className="relative max-w-7xl mx-auto pointer-events-none select-none">
                  <Image
                    src={globe.src}
                    alt="globe/png"
                    width={1150}
                    height={641}
                    quality={100}
                    className="relative w-[1150px] -mt-[50px] ml-[12px] -mb-6 z-[5] pointer-events-none select-none"
                  />
                  <img
                    src={astrocat.src}
                    alt="astrocat/png"
                    className="absolute w-[541px] z-20 -bottom-[200px] left-[380px] pointer-events-none  select-none"
                  />
                </div>
                <img
                  src={ground.src}
                  alt="ground/svg"
                  className="absolute z-10 h-[150px] min-w-[2500px] left-1/2 -translate-x-1/2 pointer-events-none  select-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
