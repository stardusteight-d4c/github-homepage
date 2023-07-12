import {
  AbsoluteItems,
  BackgroundImage,
  CopilotSpan,
  Form,
  Header,
  Organizations,
} from "./integrate"
import { heroStyles as css } from "./styles"

export const Hero = () => {
  return (
    <section id="hero" className={css.wrapper}>
      <BackgroundImage />
      <div className={css.container}>
        <AbsoluteItems />
        <div className={css.content}>
          <CopilotSpan />
          <Header />
          <Form />
          <Organizations />
        </div>
      </div>
    </section>
  )
}
