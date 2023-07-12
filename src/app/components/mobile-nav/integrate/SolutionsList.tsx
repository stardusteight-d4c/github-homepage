interface Props {
  activeItem: false | "product" | "solutions" | "open-source"
}

export const SolutionsList = ({ activeItem }: Props) => {
  return (
    <ul
      className={`${
        activeItem === "solutions" ? "block" : "hidden"
      } pr-4 mt-[8px]`}
    >
      <li>
        <h2 className="font-semibold font-roboto leading-[20px] text-[#1f2328]">
          For
        </h2>
        <ul className="font-roboto text-[#636a74] mt-[4px]">
          <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-[#2563eb] transition-all duration-200 ease-in-out">
            Enterprise
          </li>
          <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-[#2563eb] transition-all duration-200 ease-in-out">
            Teams
          </li>
          <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-[#2563eb] transition-all duration-200 ease-in-out">
            Startups
          </li>
          <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-[#2563eb] transition-all duration-200 ease-in-out">
            Startups Education
          </li>
        </ul>
      </li>
      <div className="bg-[#636a74]/30 w-full h-[1px] my-[16px]" />
      <li>
        <h2 className="font-semibold font-roboto leading-[20px] text-[#1f2328]">
          By Solution
        </h2>
        <ul className="font-roboto text-[#636a74] mt-[4px]">
          <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-[#2563eb] transition-all duration-200 ease-in-out">
            CI/CD & Automation
          </li>
          <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-[#2563eb] transition-all duration-200 ease-in-out">
            DevOps
          </li>
          <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-[#2563eb] transition-all duration-200 ease-in-out">
            DevSecOps
          </li>
        </ul>
      </li>
      <div className="bg-[#636a74]/30 w-full h-[1px] my-[16px]" />
      <li>
        <h2 className="font-semibold font-roboto leading-[20px] text-[#1f2328]">
          Case Studies
        </h2>
        <ul className="font-roboto text-[#636a74] mt-[4px]">
          <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-[#2563eb] transition-all duration-200 ease-in-out">
            Customer
          </li>
          <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-[#2563eb] transition-all duration-200 ease-in-out">
            Stories
          </li>
          <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-[#2563eb] transition-all duration-200 ease-in-out">
            Resources
          </li>
        </ul>
      </li>
    </ul>
  )
}
