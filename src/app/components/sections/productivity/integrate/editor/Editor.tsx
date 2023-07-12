import {
  Header,
  Aside,
  Tabs,
  Code,
  Terminal,
  CodeOutput,
  FloatingItems,
} from "./integrate"
import { editorStyles as css } from "./styles"

export const Editor = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.contentEditor}>
        <Header />
        <div className={css.mainContentContainer}>
          <Aside />
          <div className={css.flexContainer}>
            <div className={css.textEditor}>
              <Tabs />
              <Code />
              <Terminal />
            </div>
            <CodeOutput />
          </div>
        </div>
      </div>
      <FloatingItems />
    </div>
  )
}
