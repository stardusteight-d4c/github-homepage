import Image from "next/image"
import mobile1 from "@/app/assets/github-mobile-1.png"
import mobile2 from "@/app/assets/github-mobile-2.png"

export const GitHubMobile = () => {
  return (
    <div className="col-span-1  overflow-hidden relative shadow-black/50 shadow-xl border border-[#30363d] rounded-xl bg-[#161b22]">
      <div className="lg:py-[64px] lg:pl-[64px] lg:pr-[128px] p-[32px] text-[#f0f0f0]/50 text-[20px] md:text-[24px] leading-[32px] font-semibold">
        <span className="text-[#f0f0f0]">GitHub Mobile</span> fits your projects
        in your pocket, so you never miss a beat while on the go.
        <span className="codespace-span flex items-center cursor-pointer leading-[40px] mt-[60px] font-semibold">
          <span className="underline-animation text-[#f0f0f0] text-base md:text-[20px] font-inter mr-2">
            Get GitHub Mobile
          </span>
          <div className="relative z-50 min-w-[16px] max-w-[16px] h-[16px] mt-[2px]">
            <div className="chevron" />
            <span className="line absolute -translate-y-1/2 top-1/2" />
          </div>
        </span>
      </div>
      <div className="h-[480px] md:h-[260px] w-fit mx-auto mt-7">
        <Image
          src={mobile1}
          alt="mobile1/png"
          width={350}
          height={425}
          quality={100}
          className="lgg:left-[35px] left-1/2 -translate-x-1/2 lgg:translate-x-0 border border-[#30363d] border-b-0 absolute -bottom-[150px] md:-bottom-[265px] lg:-bottom-[195px] w-[350px] rounded-t-2xl object-fill"
        />
        <Image
          src={mobile2}
          alt="mobile2/png"
          width={350}
          height={425}
          quality={100}
          className="hidden lgg:block left-[232px] border border-[#30363d] border-b-0 absolute -bottom-[300px] w-[350px] rounded-t-2xl object-fill"
        />
      </div>
    </div>
  )
}
