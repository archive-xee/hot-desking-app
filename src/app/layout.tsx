import localFont from "next/font/local"
import "@/src/app/globals.css"

const PRETENDARD_FONT = localFont({ src: "../static/fonts/Pretendard.woff2" })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={PRETENDARD_FONT.className}>
      <body>{children}</body>
    </html>
  )
}
