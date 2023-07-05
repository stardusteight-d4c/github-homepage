import * as logo from "@/app/assets/logos/index"

export const Organizations = () => {
  return (
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
  )
}
