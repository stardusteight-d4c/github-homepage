"use client"

import { Fade } from "react-awesome-reveal"
import { terminalStyles as css } from "./styles"

export const Terminal = () => {
  return (
    <div className={css.wrapper}>
      <ul className={css.tabs}>
        <li className={css.activeTab}>Terminal</li>
        <li>Output</li>
        <li>Problems</li>
        <li>Debug</li>
        <li>Console</li>
      </ul>
      <code>
        <Fade cascade damping={0.2}>
          <span className={css.whitespaceNoWrap}>
            [09:43:36] Starting '
            <span className={css.operation}>
              watch-extension:vscode-api-tests
            </span>
            ' ...
          </span>
          <span className={css.whitespaceNoWrap}>
            [09:43:36] Finished '
            <span className={css.operation}>
              clean-extension:typescript-language-features
            </span>
            '
          </span>
          <span className={css.whitespaceNoWrap}>
            [09:43:36] Starting '
            <span className={css.operation}>
              watch-extension:typescript-language-features
            </span>
            ' ...{" "}
          </span>
          <span className={css.whitespaceNoWrap}>
            [09:43:36] Finished '
            <span className={css.operation}>
              clean-extension:php-language-features
            </span>
            '
          </span>
          <span className={css.whitespaceNoWrap}>
            [09:43:36] Starting '
            <span className={css.operation}>
              watch-extension:php-language-features
            </span>
            ' ...
          </span>
          <span className={css.whitespaceNoWrap}>
            [09:43:40] Finished '
            <span className={css.operation}>
              clean-extension:html-language-features-server
            </span>
            '
          </span>
          <span className={css.whitespaceNoWrap}>
            [09:43:40] Starting '
            <span className={css.operation}>
              watch-extension:html-language-features-server
            </span>
            ' ...
          </span>
          <span className={css.whitespaceNoWrap}>
            [09:43:43] Finished '
            <span className={css.operation}>clean-client</span>' after{" "}
            <span className={css.time}>7.33 s</span>
          </span>
          <span className={css.whitespaceNoWrap}>
            [09:43:43] Starting '
            <span className={css.operation}>watch-client</span>' ...
          </span>
        </Fade>
      </code>
    </div>
  )
}
