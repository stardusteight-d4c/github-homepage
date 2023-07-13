import Image from "next/image"
import codeScanning from "@/app/assets/illu-code-scanning.png"
import { TextSpanWithUnderline } from "@/app/components/globals/TextSpanWithUnderline"
import { codeScanningStyles as css } from "./styles"

export const CodeScanning = () => {
  return (
    <div className={css.container}>
      <div className={css.textContainer}>
        <span className={css.title}>Code Scanning</span> is GitHub’s static code
        analysis tool that helps you remediate issues in your code.
        <TextSpanWithUnderline
          title="Download the latest SAST ebook"
          styles={css.underline}
        />
      </div>
      <div className={css.imageContainer}>
        <Image
          src={codeScanning}
          alt="code_scanning/png"
          width={550}
          height={425}
          quality={100}
          className={css.image}
        />
      </div>
    </div>
  )
}
