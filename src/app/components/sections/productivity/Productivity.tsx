import { Productivity as ProductivityIcon } from "../../atoms/icons/productivity"

export const Productivity = () => {
  return (
    <section className="w-screen relative text-white ml-[115px] mt-[150px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[24px] relative mb-[24px] leading-[28px] font-semibold font-roboto">
          <div className="absolute flex items-center justify-center -left-[74px] z-20 ">
            <div className="blur-effect absolute bg-[#7ee787] w-[48px] h-[48px] rounded-full animate-pulse" />
            <ProductivityIcon className="w-[28px] h-[28px] text-white" />
          </div>
          Productivity
        </h2>
        <p className="text-[48px] leading-[55px] tracking-[-0,03em] font-inter w-[960px]">
          <strong className="bg-gradient-to-br mr-2 from-[#7ee787] leading-[55px] tracking-[-0,03em] to-green-400 text-transparent bg-clip-text">
            Accelerate high-quality software development.
          </strong>
          Our AI-powered platform drives innovation with tools that boost
          developer velocity.
        </p>
      </div>
    </section>
  )
}
