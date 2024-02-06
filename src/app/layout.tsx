import localFont from "next/font/local"
import "@/src/app/globals.css"
import Header from "@/src/components/organisms/Header"

const PRETENDARD_FONT = localFont({ src: "../static/fonts/Pretendard.woff2" })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={PRETENDARD_FONT.className}>
      <body>
        <div className="container mx-auto h-lvh bg-white-100">
          <main>
            <Header />
            <div className="container px-4 py-2">{children}</div>
          </main>
        </div>
      </body>
    </html>
  )
}
