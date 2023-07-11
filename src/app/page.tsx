import {
  Navbar,
  MobileNav,
  FixedNav,
  Hero,
  Productivity,
  Collaboration,
  Security,
  Globe,
  Footer,
} from "./components"
import { homeStyles as css } from "./styles"

export default function Home() {
  return (
    <main className={css.wrapper}>
      <Navbar />
      <MobileNav />
      <FixedNav />
      <Hero />
      <Productivity />
      <Collaboration />
      <Security />
      <Globe />
      <Footer />
    </main>
  )
}
