import Image from "next/image"
import pullRequests from "@/app/assets/pull-requests.png"

export const PullRequests = () => {
  return (
    <div className="col-span-1 relative overflow-hidden shadow-black/50 shadow-xl border border-[#30363d] rounded-xl bg-[#161b22]">
      <div className="lg:py-[64px] lg:pl-[64px] lg:pr-[128px] p-[32px] text-[#f0f0f0]/50 text-[20px] md:text-[24px] leading-[32px] font-semibold">
        <span className="text-[#f0f0f0]">Pull Requests</span> allow real-time
        communication and collaboration about code changes.
        <span className="codespace-span flex items-center cursor-pointer leading-[40px] mt-[60px] font-semibold">
          <span className="underline-animation text-[#f0f0f0] text-base md:text-[20px] font-inter mr-2">
            Check out pull requests
          </span>
          <div className="relative z-50 min-w-[16px] max-w-[16px] h-[16px] mt-[2px]">
            <div className="chevron" />
            <span className="line absolute -translate-y-1/2 top-1/2" />
          </div>
        </span>
      </div>
      <div className="h-full w-fit mx-auto mt-7">
        <Image
          src={pullRequests}
          alt="pull_requests/png"
          width={550}
          height={425}
          quality={100}
          className="md:h-[350px] pointer-events-none select-none mt-auto border border-[#30363d] border-b-0 w-[350px] smm:w-full lg:w-[550px] lg:h-[425px] rounded-t-2xl object-fill"
        />
      </div>
    </div>
  )
}
