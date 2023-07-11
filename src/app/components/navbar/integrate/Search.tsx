"use client"

import { ChangeEvent, useState } from "react"
import { searchStyles as css } from "./styles"

export const Search = () => {
  const [inputData, setInputData] = useState("")

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputData(event.target.value)
  }

  return (
    <input
      type="text"
      value={inputData}
      onChange={(e) => handleInputChange(e)}
      placeholder="Search GitHub"
      className={css.input}
    />
  )
}
