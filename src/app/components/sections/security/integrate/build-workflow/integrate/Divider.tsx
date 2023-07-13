export const Divider = () => {
  return (
    <>
      <div className="hidden lg:block absolute left-[100%]">
        <div className="h-[2px] w-[42px] bg-[#d1d5da] relative">
          <div className="w-[10px] h-[10px] bg-[#6e7681] rounded-full absolute top-1/2 -translate-y-1/2 -left-[5px] border-[2px] border-[#444d56]" />
          <div className="w-[10px] h-[10px] bg-[#6e7681] rounded-full absolute top-1/2 -translate-y-1/2 -right-[5px] border-[2px] border-[#444d56]" />
        </div>
      </div>
      <div className="block lg:hidden absolute top-[100%]">
        <div className="w-[2px] h-[42px] bg-[#d1d5da] relative">
          <div className="w-[10px] h-[10px] bg-[#6e7681] rounded-full absolute -top-[5px] -left-[4px] border-[2px] border-[#444d56]" />
          <div className="w-[10px] h-[10px] bg-[#6e7681] rounded-full absolute -bottom-[5px] -left-[4px] border-[2px] border-[#444d56]" />
        </div>
      </div>
    </>
  )
}
