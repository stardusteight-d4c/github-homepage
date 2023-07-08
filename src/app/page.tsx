import { MobileNav } from "./components/navbar/MobileNav"
import { Navbar } from "./components/navbar/Navbar"
import { Collaboration } from "./components/sections/collaboration/Collaboration"
import { Hero } from "./components/sections/hero/Hero"
import { Productivity } from "./components/sections/productivity/Productivity"
import { Security } from "./components/sections/security/Security"

export default function Home() {
  return (
    <main className="w-screen min-h-screen bg-[#0c1015] relative overflow-x-hidden">
      <Navbar />
      <MobileNav />
      <Hero />
      <Productivity />
      <Collaboration />
      <Security />
    </main>
  )
}
