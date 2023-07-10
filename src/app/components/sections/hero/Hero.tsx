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
      <div className="relative z-10 overflow-hidden">
        <AbsoluteItems />
        <div className="pt-[300px] pb-[138px] pl-[45px] md:pl-[115px] mr-[24px] md:mr-0 md:pt-[425px] text-[#f0f0f0] z-20">
          <CopilotSpan />
          <Header />
          <Form />
          <Organizations />
        </div>
      </div>
    </section>
  )
}
