import "./globals.css"
import { Inter, Roboto, JetBrains_Mono } from "next/font/google"

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
})

const jetBrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jet-brains-mono",
})

export const metadata = {
  title: "GitHub: Let’s build from here",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable} ${jetBrainsMono.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
