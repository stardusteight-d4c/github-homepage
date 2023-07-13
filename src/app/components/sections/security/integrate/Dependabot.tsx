import dependabot from "@/app/assets/illu-dependabot.png"
import Image from "next/image"

export const Dependabot = () => {
  return (
    <div className="col-span-1 relative overflow-hidden shadow-black/50 shadow-xl border border-[#30363d] rounded-xl bg-[#161b22]">
      <div className="lg:py-[64px] lg:pl-[64px] lg:pr-[128px] p-[32px] text-[#f0f0f0]/50 text-[20px] md:text-[24px] leading-[32px] font-semibold">
        <span className="text-[#f0f0f0]">Dependabot</span> makes it easy to find
        and fix vulnerable dependencies in your supply chain.
        <span className="codespace-span flex items-center cursor-pointer leading-[40px] mt-[60px] font-semibold">
          <span className="underline-animation text-[#f0f0f0] text-base md:text-[20px] font-inter mr-2">
            Explore Dependabot
          </span>
          <div className="relative z-50 min-w-[16px] max-w-[16px] h-[16px] mt-[2px]">
            <div className="caret" />
            <span className="line absolute -translate-y-1/2 top-1/2" />
          </div>
        </span>
      </div>
      <div className="h-[260px] ssm:h-[350px] smm:h-[450px] w-full">
        <Image
          src={dependabot}
          alt="dependabot/png"
          width={550}
          height={425}
          quality={100}
          className="md:h-[350px] right-0 absolute bottom-0 w-[550px] lg:h-[425px] object-fill"
        />
      </div>
    </div>
  )
}
