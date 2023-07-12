"use client"

import { useEffect, useState } from "react"
import { FixedNavMobile, CallToAction } from "./integrate"
import { fixedNavStyles as css } from "./styles"

interface ListItemProps {
  item: "productivity" | "collaboration" | "security"
  activeItem: false | "productivity" | "collaboration" | "security"
  handleScrollView: (id: "productivity" | "collaboration" | "security") => void
}

export const FixedNav = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false)
  const [openDropdown, setOpenDropdown] = useState<boolean>(false)
  const [activeItem, setActiveItem] = useState<
    "productivity" | "collaboration" | "security" | false
  >(false)

  useEffect(() => {
    const handleScroll = () => {
      const productivitySection = document.getElementById("productivity")
      const collaborationSection = document.getElementById("collaboration")
      const securitySection = document.getElementById("security")

      if (productivitySection) {
        const { top } = productivitySection.getBoundingClientRect()
        const inSection = top <= 175
        setShowNavbar(inSection)
        if (inSection) {
          setActiveItem("productivity")
        } else if (top >= 175) {
          setActiveItem(false)
        }
      }
      if (collaborationSection) {
        const { top } = collaborationSection.getBoundingClientRect()
        const inSection = top <= 175
        if (inSection) {
          setActiveItem("collaboration")
        }
      }
      if (securitySection) {
        const { top } = securitySection.getBoundingClientRect()
        const inSection = top <= 175
        if (inSection) {
          setActiveItem("security")
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  function handleScrollView(id: "productivity" | "collaboration" | "security") {
    const element = document.getElementById(id)!
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    })
    setTimeout(() => {
      window.scrollBy(0, 10)
    }, 900)
    setTimeout(() => {
      window.scrollBy(0, -105)
    }, 1000)
  }

  return (
    <header className={css.wrapper(showNavbar)}>
      <div className={css.container}>
        <nav className={css.navigation}>
          <ul className={css.unorderedList}>
            {["productivity", "collaboration", "security"].map(
              (item: any, index) => (
                <ListItem
                  key={index}
                  item={item}
                  activeItem={activeItem}
                  handleScrollView={handleScrollView}
                />
              )
            )}
          </ul>
          <CallToAction />
        </nav>
      </div>
      <FixedNavMobile
        activeItem={activeItem}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
        handleScrollView={handleScrollView}
      />
    </header>
  )
}

const ListItem = ({ item, activeItem, handleScrollView }: ListItemProps) => {
  return (
    <li
      onClick={() => handleScrollView(item)}
      className={css.listItem(item, activeItem)}
    >
      {item}
    </li>
  )
}
