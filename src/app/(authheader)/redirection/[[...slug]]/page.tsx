"use client"

import Link from "next/link"
import { ReadonlyURLSearchParams, useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import Button from "@/components/molecules/Button/Button"

const getMsgAndRedirectionPathAndName = (action: string, searchParams: ReadonlyURLSearchParams) => {
  let successMsg = "올바른 접근이 아닙니다."
  const failMsg = "알 수 없는 오류가 발생되었습니다. 관리자에게 문의해주세요."
  let redirectionPath = "/"
  let redirectionPathName = "홈페이지"

  switch (action) {
    case "checkout":
      successMsg = "퇴실이 완료되었습니다."
      break
    case "nipout":
      successMsg = "30분동안 외출 가능하고, 전원은 연결되지 않습니다."
      break
    case "move":
      successMsg = "자리 이동이 완료되었습니다."
      break
    case "useuserticket":
      successMsg = "티켓 사용이 완료되었습니다."
      redirectionPath = "/booth/status"
      redirectionPathName = "현황 페이지"
      break
    case "oneoffOrder": {
      const bookableType = searchParams.get("bookableType")
      successMsg = "일회권 구매가 완료되었습니다."
      redirectionPath = `${process.env.BASE_URL}/user/ticket/use/${bookableType}`
      redirectionPathName = "내 이용권 목록 페이지"
      break
    }
    case "refund":
      successMsg = "티켓 환불이 완료되었습니다."
      redirectionPath = "/user/ticket/board"
      redirectionPathName = "내 이용권 현황/관리 페이지"
      break
    case "unsubscribe":
      successMsg = "구독 취소가 완료되었습니다."
      redirectionPath = "/user/ticket/board"
      redirectionPathName = "내 이용권 현황/관리 페이지"
      break
    default:
      break
  }
  return [successMsg, failMsg, redirectionPath, redirectionPathName]
}

export default function RedirectionPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const [action, result] = slug
  const searchParams = useSearchParams()
  const [successMsg, failMsg, redirectionPath, redirectionPathName] = getMsgAndRedirectionPathAndName(
    action,
    searchParams,
  )

  const router = useRouter()
  const [redirectSeconds, setRedirectSeconds] = useState(10)
  useEffect(() => {
    if (redirectSeconds == 0) {
      router.push(redirectionPath!)
      return
    }

    setTimeout(() => {
      setRedirectSeconds((redirectSeconds) => redirectSeconds - 1)
    }, 1000)
  }, [router, redirectSeconds, redirectionPath])

  return (
    <>
      {result === "success" ? (
        <div className="flex flex-col items-center justify-center">
          <p>{successMsg}</p>
          <p>
            {redirectSeconds}초 후 {redirectionPathName!}로 자동으로 이동합니다.
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <p>{failMsg}</p>
          <Link href="/">
            <Button>홈으로 돌아기기</Button>
          </Link>
        </div>
      )}
    </>
  )
}
