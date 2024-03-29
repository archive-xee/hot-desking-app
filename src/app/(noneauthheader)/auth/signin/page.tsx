"use client"

import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { signIn } from "next-auth/react"
export default function KakaoLoginPage() {
  return (
    <>
      <KakaoLoginPageTitle />
      <KakaoLoginButtonSection />
    </>
  )
}

const KakaoLoginPageTitle = () => {
  return <h1 className="text-center text-xl font-bold">카카오톡 로그인</h1>
}

const KakaoLoginButtonSection = () => {
  const searchParams = useSearchParams()
  let encryptedPath = ""
  for (const key of searchParams.keys()) {
    encryptedPath += key
  }

  const redirectUrl =
    encryptedPath === ""
      ? "/"
      : encryptedPath.replaceAll("^", "/").replaceAll("-", "&").replaceAll("(", "?").replaceAll(")", "=")
  return (
    <div className="container mx-auto max-w-screen-sm  overflow-hidden  rounded-lg border border-black-100">
      <div className="flex flex-col px-4">
        <div className="h-6"></div>
        <h1 className="text-center">궁극의 창작공간에서는 편하게 카카오톡 로그인을 지원해요!</h1>
        <div className="h-24"></div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="rounded-lg border border-blue-700 bg-white-100 text-sm font-medium hover:bg-blue-300 hover:text-white-100 "
            onClick={() => {
              signIn("kakao", { callbackUrl: redirectUrl })
            }}
          >
            <Image src="/kakao/90x45.png" width={90} height={45} alt="카카오 로그인"></Image>
          </button>
        </div>
      </div>
      <div className="h-6"></div>
    </div>
  )
}
