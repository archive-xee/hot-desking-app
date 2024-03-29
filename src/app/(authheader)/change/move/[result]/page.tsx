"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function BookableMoveResultPage({ params }: { params: { result: string } }) {
  const { result } = params
  const router = useRouter()
  const [redirectSeconds, setRedirectSeconds] = useState(5)
  useEffect(() => {
    if (redirectSeconds == 0) {
      router.push("/")
      return
    }

    setTimeout(() => {
      setRedirectSeconds((redirectSeconds) => redirectSeconds - 1)
    }, 1000)
  }, [router, redirectSeconds])

  return (
    <>
      {result === "success" ? (
        <p>자리 이동이 완료되었습니다. {redirectSeconds}초 후 홈페이지로 자동으로 이동합니다</p>
      ) : (
        <div>
          <p>알 수 없는 오류가 발생되었습니다. 관리자에게 문의해주세요. (전화번호)</p>
          <Link href="/">홈으로 돌아기기</Link>
        </div>
      )}
    </>
  )
}
