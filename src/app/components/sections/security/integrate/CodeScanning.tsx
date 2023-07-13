import codeScanning from "@/app/assets/illu-code-scanning.png"
import Image from "next/image"

export const CodeScanning = () => {
  return (
    <div className="col-span-1 relative overflow-hidden shadow-black/50 shadow-xl border border-[#30363d] rounded-xl bg-[#161b22]">
      <div className="lg:py-[64px] lg:pl-[64px] lg:pr-[128px] p-[32px] text-[#f0f0f0]/50 text-[20px] md:text-[24px] leading-[32px] font-semibold">
        <span className="text-[#f0f0f0]">Code Scanning</span> is GitHub’s static
        code analysis tool that helps you remediate issues in your code.
        <span className="codespace-span flex items-center cursor-pointer leading-[40px] mt-[60px] font-semibold">
          <span className="underline-animation text-[#f0f0f0] text-base md:text-[20px] font-inter mr-2">
            Download the latest SAST ebook
          </span>
          <div className="relative z-50 min-w-[16px] max-w-[16px] h-[16px] mt-[2px]">
            <div className="caret" />
            <span className="line absolute -translate-y-1/2 top-1/2" />
          </div>
        </span>
      </div>
      <div className="h-[260px] ssm:h-[350px] smm:h-[450px] w-full">
        <Image
          src={codeScanning}
          alt="code_scanning/png"
          width={550}
          height={425}
          quality={100}
          className="md:h-[350px] left-1/2 -translate-x-1/2 absolute bottom-0 w-[550px] lg:h-[425px] object-fill"
        />
      </div>
    </div>
  )
}
