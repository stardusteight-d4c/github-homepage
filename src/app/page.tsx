import { MobileNav } from "./components/navbar/MobileNav"
import { Navbar } from "./components/navbar/Navbar"
import { Hero } from "./components/sections/hero/Hero"

export default function Home() {
  return (
    <main className="w-screen relative h-fit bg-[#0c1015] overflow-x-hidden">
      <Navbar />
      <MobileNav />
      <Hero />
    </main>
  )
}
