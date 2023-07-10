import { MobileNav } from "./components/navbar/MobileNav"
import { Navbar } from "./components/navbar/Navbar"
import { Collaboration } from "./components/sections/collaboration/Collaboration"
import { Footer } from "./components/sections/footer/Footer"
import { Globe } from "./components/sections/globe/Globe"
import { Hero } from "./components/sections/hero/Hero"
import { Productivity } from "./components/sections/productivity/Productivity"
import { Security } from "./components/sections/security/Security"

export default function Home() {
  return (
    <main className="w-screen h-fit bg-[#0c1015] relative overflow-x-hidden">
      <Navbar />
      <MobileNav />
      <Hero />
      <Productivity />
      <Collaboration />
      <Security />
      <Globe />
      <Footer />
    </main>
  )
}
