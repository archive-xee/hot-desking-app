import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { useSession } from "next-auth/react"

export default function Header() {
  const pathname = usePathname()
  const isAuthPage = pathname.indexOf("auth") > 0
  const { data: session } = useSession()
  return (
    <div className="container flex flex-row items-center bg-white-300 px-2">
      <Link className="inline-block" href="/">
        <Image
          className="box-border py-2 pr-2"
          src="/images/app_logo.png"
          alt="궁극의 창작공간"
          width="36"
          height="36"
        />
      </Link>
      <h1 className="text-lg font-bold">궁극의 창작공간</h1>
      <div className="grow"></div>
      <div className="flex flex-row gap-2">
        {isAuthPage ? (
          <></>
        ) : session?.accessToken ? (
          <>
            <Link href="/user/ticket/board" className="hover:underline">
              내 이용권
            </Link>
            <Link href="/api/auth/signout" className="hover:underline">
              로그아웃
            </Link>
          </>
        ) : (
          <Link href="/auth/signin" className="hover:underline">
            로그인
          </Link>
        )}
      </div>
    </div>
  )
}
