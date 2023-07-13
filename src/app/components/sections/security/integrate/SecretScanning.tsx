import secretScanning from "@/app/assets/illu-secret-scanning.png"

export const SecretScanning = () => {
  return (
    <div className="mx-auto z-20 relative md:h-[457px] mb-[35px] w-full xl:mx-auto">
      <div className="bg-[#161b22] h-full flex flex-col md:flex-row justify-between shadow-black/50 shadow-xl border border-[#30363d] rounded-xl overflow-hidden">
        <div className="text-[#f0f0f0]/50 relative md:mr-[50px] mx-[40px] pb-[65px] md:pb-0 mdd:mx-[32px] lg:mx-[58px] my-[28px] mdd:my-[62px] m-[32px] leading-[32px] font-semibold">
          <p className="md:max-w-[447px] w-full text-[20px] mdd:text-[24px]">
            <span className="text-[#f0f0f0]">Secret Scanning </span>
            automatically looks for partner patterns and prevents fraudulent use
            of accidentally committed secrets.
          </p>
          <span className="codespace-span flex items-center cursor-pointer leading-[40px] absolute left-0 bottom-0 font-semibold">
            <span className="underline-animation text-[#f0f0f0] text-base mdd:text-[20px] font-inter mr-2">
              Read about Secret Scanning
            </span>
            <div className="relative z-50 min-w-[16px] max-w-[16px] h-[16px] mt-[2px]">
              <div className="caret" />
              <span className="line absolute -translate-y-1/2 top-1/2" />
            </div>
          </span>
        </div>
        <img src={secretScanning.src} alt="secret_scanning/png" />
      </div>
    </div>
  )
}
