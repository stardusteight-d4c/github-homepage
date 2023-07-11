import Image from "next/image"
import github from "@/app/assets/logos/github-logo.svg"
import {
  OpenSourceDropdown,
  ProductDropdown,
  SolutionsDropdown,
} from "./integrate"

export const data = {
  githubLogo: {
    type: "children" as "children",
    children: (
      <Image
        src={github}
        alt="github_logo/svg"
        width={32}
        height={32}
        className="w-8 h-8 mr-6"
      />
    ),
  },
  product: {
    type: "dropdown" as "dropdown",
    title: "product",
    dropdown: ProductDropdown,
  },
  solutions: {
    type: "dropdown" as "dropdown",
    title: "solutions",
    dropdown: SolutionsDropdown,
  },
  openSource: {
    type: "dropdown" as "dropdown",
    title: "open source",
    dropdown: OpenSourceDropdown,
  },
  pricing: {
    type: "children" as "children",
    styles: "hover:opacity-80 transition-all ease-in-out duration-75 py-5",
    children: "pricing",
  },
}
