"use client"

import Image from "next/image"
import Link from "next/link"
import { Suspense, useState } from "react"
import Button from "@/components/molecules/Button/Button"
import LoadingSpinner from "@/components/molecules/LoadingSpinner"
import Title from "@/components/molecules/Title/Title"
import OneoffTicketList from "@/components/organisms/Ticket/OneoffTicketList"

// usedAt(UserTicket구별), portOneType구별(일회/정기권) 필요
export default function OneoffTicketPurchasePage() {
  const ticketTypeList = ["time", "oneday", "period", "discount"]
  const ticketTypeNameList = ["시간권", "당일권", "기간권", "할인권"]
  const ticketTypeColorList = ["hover:bg-yellow-300", "hover:bg-purple-100", "hover:bg-blue-300", "hover:bg-teal-100"]
  const [ticketType, setTicketType] = useState("time")

  return (
    <>
      <Title text="이용권 구매하기" />
      <div className="flex flex-row bg-white-300">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            onClick={() => {
              setTicketType(ticketTypeList[index])
            }}
            className={`flex grow flex-row justify-center p-2 ${ticketTypeColorList[index]} max-sm:flex-col max-sm:items-center`}
          >
            <Image src={`/icons/ticket/${ticketTypeList[index]}.png`} alt={ticketType} width="24" height="24"></Image>
            <span className="ms-3 max-sm:ms-0">{ticketTypeNameList[index]}</span>
          </div>
        ))}
      </div>
      {/* 결제 페이지로 이동 */}
      <CouponApplicationButton />
      <Suspense fallback={<LoadingSpinner />}>
        <OneoffTicketList type={ticketType} />
      </Suspense>
    </>
  )
}

const CouponApplicationButton = () => {
  return (
    <Link href="/user/coupon">
      <Button fullWidth={true}>쿠폰 적용</Button>
    </Link>
  )
}
