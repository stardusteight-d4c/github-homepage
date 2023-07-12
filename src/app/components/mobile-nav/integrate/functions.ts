import { Dispatch, SetStateAction } from "react"

export function handleActive(
  activeItem: false | "product" | "solutions" | "open-source",
  setActiveItem: Dispatch<
    SetStateAction<false | "product" | "solutions" | "open-source">
  >
) {
  return {
    execute: {
      handleProduct: () => {
        if (activeItem === "product") {
          setActiveItem(false)
        } else {
          setActiveItem("product")
        }
      },
      handleSolutions: () => {
        if (activeItem === "solutions") {
          setActiveItem(false)
        } else {
          setActiveItem("solutions")
        }
      },
      handleOpenSource: () => {
        if (activeItem === "open-source") {
          setActiveItem(false)
        } else {
          setActiveItem("open-source")
        }
      },
    },
  }
}
