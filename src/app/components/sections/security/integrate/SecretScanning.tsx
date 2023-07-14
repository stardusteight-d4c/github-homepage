import secretScanning from "@/app/assets/illu-secret-scanning.png"
import { secretScanningStyles as css } from "./styles"
import { TextSpanWithUnderline } from "@/app/components/globals/TextSpanWithUnderline"
import { Tilt } from "@/app/components/globals/Tilt"

export const SecretScanning = () => {
  return (
    <Tilt elementId="secret-scanning" max={4}>
      <div className={css.container}>
        <div id="secret-scanning" className={css.cardContainer}>
          <div className={css.textContainer}>
            <p className={css.text}>
              <span className={css.spanStrong}>Secret Scanning </span>
              automatically looks for partner patterns and prevents fraudulent
              use of accidentally committed secrets.
            </p>
            <TextSpanWithUnderline
              title="Read about Secret Scanning"
              styles="text-[#f0f0f0] !absolute left-0 bottom-0"
            />
          </div>
          <img
            src={secretScanning.src}
            alt="secret_scanning/png"
            className="pointer-events-none select-none"
          />
        </div>
      </div>
    </Tilt>
  )
}
