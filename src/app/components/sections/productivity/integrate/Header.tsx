import { Productivity as ProductivityIcon } from "@/app/components/atoms/icons/productivity"

export const Header = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="ml-[50px] md:ml-[115px] mb-[58px] md:mb-[96px]">
        <h2 className="text-[20px] font-jet-brains md:text-[24px] relative mb-[24px] leading-[28px] font-semibold">
          <div className="absolute  -left-[38px] md:-left-[74px] z-20 ">
            <div className="relative flex items-center justify-center">
              <div className="blur-effect absolute bg-[#7ee787] w-[48px] h-[48px] rounded-full animate-pulse" />
              <ProductivityIcon className="w-[28px] h-[28px] text-[#f0f0f0] relative z-[50]" />
              <div className="absolute z-0 top-[100%] mt-3 w-[2.5px] md:w-[4px] h-[400px] bg-gradient-to-b from-[#48eb5b] via-[#55d163] to-[#48eb5b]" />
            </div>
          </div>
          Productivity
        </h2>
        <p className="text-[28px] md:text-[48px] leading-[32px] md:leading-[55px] font-inter mr-2 max-w-[960px]">
          <p className="bg-gradient-to-br from-[#7ee787] to-green-400 text-transparent bg-clip-text font-semibold mr-2 leading-[32px] md:leading-[55px] tracking-[-0,03em]">
            Accelerate high-quality <br /> software development.
          </p>
          <p className="tracking-[-0,03em]">
            Our AI-powered platform drives innovation with tools that boost
            developer velocity.
          </p>
        </p>
      </div>
    </div>
  )
}
