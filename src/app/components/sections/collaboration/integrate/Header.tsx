import { Collaboration as CollaborationIcon } from "@/app/components/atoms/icons/collaboration"

export const Header = () => {
  return (
    <div className="ml-[50px] md:ml-[115px] mb-[58px] md:mb-[96px]">
      <h2 className="text-[20px] md:text-[24px] relative mb-[24px] leading-[28px] font-semibold font-jet-brains">
        <div className="absolute -left-[45px] md:-left-[74px] z-20 ">
          <div className="relative flex items-center justify-center">
            <div className="blur-effect absolute bg-[#fe7b72] w-[48px] h-[48px] rounded-full animate-pulse" />
            <CollaborationIcon className="w-[28px] h-[28px] text-[#f0f0f0] relative z-[50]" />
            <div className="absolute z-0 top-[100%] mt-3 w-[2.5px] md:w-[4px] h-[460px] bg-gradient-to-b from-[#ea6045] via-[#fe7b72] to-[#ea6045]" />
          </div>
        </div>
        Collaboration
      </h2>
      <p className="text-[28px] md:text-[48px] leading-[32px] md:leading-[55px] font-inter mr-2 max-w-[960px]">
        <p className="bg-gradient-to-br from-[#fe7b72] to-[#ea6045] text-transparent bg-clip-text font-semibold mr-2 leading-[32px] md:leading-[55px] tracking-[-0,03em]">
          Supercharge collaboration.
        </p>
        <p className="tracking-[-0,03em]">
          We provide unlimited repositories, best-in-class version control, and
          the world’s most powerful open source community! So your team can work
          more efficiently together.
        </p>
      </p>
    </div>
  )
}
