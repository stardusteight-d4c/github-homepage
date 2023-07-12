import React from "react"
import { CodeBlock } from "./CodeBlock"
import { codeStyles as css } from "./styles"

export const Code = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.enumerationContainer}>
        {[...Array(12)].map((_, index) => {
          return (
            <span key={index + 1} className={css.number}>
              {index + 1}
            </span>
          )
        })}
      </div>
      <div className={css.codeBlockContainer}>
        <CodeBlock />
      </div>
    </div>
  )
}
