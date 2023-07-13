import Image from "next/image"
import globe from "@/app/assets/globe.png"
import astrocat from "@/app/assets/astrocat.png"
import ground from "@/app/assets/ground.svg"
import { astrocatLookingAtEarthStyles as css } from "./styles"

export const AstrocatLookingAtEarth = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.globeAstrocatContainer}>
        <Image
          src={globe.src}
          alt="globe/png"
          width={1150}
          height={641}
          quality={100}
          className={css.globe}
        />
        <img src={astrocat.src} alt="astrocat/png" className={css.astrocat} />
      </div>
      <img src={ground.src} alt="ground/svg" className={css.ground} />
    </div>
  )
}
