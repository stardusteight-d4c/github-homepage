interface Props {
  activeItem: false | "product" | "solutions" | "open-source"
}

export const OpenSourceList = ({ activeItem }: Props) => {
  return (
    <ul
      className={`${
        activeItem === "open-source" ? "block" : "hidden"
      } cursor-pointer group/li py-2`}
    >
      <li className="cursor-pointer group/li1">
        <h2 className="font-semibold leading-[20px] text-[#1f2328] group-hover/li1:text-[#2563eb] transition-all duration-200 ease-in-out">
          GitHub Sponsors
        </h2>
        <span>
          <span className="text-sm -mt-1 text-[#636a74] block leading-[20px] pt-[6px] group-hover/li1:text-[#2563eb] transition-all duration-200 ease-in-out">
            Fund open source developers
          </span>
        </span>
      </li>
      <div className="bg-[#636a74]/30 w-full h-[1px] my-[16px]" />
      <li className="cursor-pointer group/li2">
        <h2 className="font-semibold leading-[20px] text-[#1f2328] group-hover/li2:text-[#2563eb] transition-all duration-200 ease-in-out">
          The ReadME Project
        </h2>
        <span className="text-sm -mt-1 text-[#636a74] block leading-[20px] pt-[6px] group-hover/li2:text-[#2563eb] transition-all duration-200 ease-in-out">
          GitHub community articles
        </span>
      </li>
      <div className="bg-[#636a74]/30 w-full h-[1px] my-[16px]" />
      <li>
        <h2 className="font-semibold leading-[20px] text-[#1f2328] mb-2">
          Repositories
        </h2>
        <ul className="text-[#636a74]">
          <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-[#2563eb] transition-all duration-200 ease-in-out">
            Topics
          </li>
          <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-[#2563eb] transition-all duration-200 ease-in-out">
            Trending
          </li>
          <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-[#2563eb] transition-all duration-200 ease-in-out">
            Collections
          </li>
        </ul>
      </li>
    </ul>
  )
}
