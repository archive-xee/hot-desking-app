"use client"

import { useState } from "react"
import { Dialog } from "../molecules/Modal/Dialog"
import Button from "@/components/molecules/Button/Button"
import CardTicket from "@/components/molecules/Ticket/CardTicket"
import { refundUserTicket, unsubscribeUserTicket } from "@/gql/userticket"
import type { UserTicket } from "@/models/ticket"

const AccordionUserTicket = (props: { userId: string; userTicket: UserTicket }) => {
  const [hidden, setHidden] = useState(true)
  const hiddenClass = hidden ? "hidden" : ""
  const borderDirection = hidden ? "rounded-md" : "rounded-t-md "
  const chevronDirection = hidden ? "rotate-180" : ""
  const { userId, userTicket } = props

  return (
    <div>
      <div
        onClick={() => {
          setHidden(!hidden)
        }}
        tabIndex={0}
        className={`flex w-full items-center gap-2 ${borderDirection} border px-2 py-1 focus:ring-1`}
      >
        <div className="w-full">
          <CardTicket ticketFrame={userTicket.ticketType}></CardTicket>
        </div>
        <svg
          data-accordion-icon
          className={`${chevronDirection} size-3`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
        </svg>
      </div>
      <div className={hiddenClass}>
        <div className="flex flex-row justify-between gap-2 rounded-b-md border border-t-0 border-black-100 p-5">
          <div className="w-8/12 content-start">
            세정보를 위한 쿼리를 또 보낸다기보다는 전 페이지에서 한번에 다 받아와서 하자!
          </div>
          <div className="flex flex-col gap-2">
            <Dialog
              trigger={<Button color="teal">환불하기</Button>}
              title="환불하기"
              content={<RefundDialogContent />}
              actionName="환불하기"
              action={() => refundUserTicket(userId, userTicket.id)}
            ></Dialog>
            {userTicket.ticketType.type === "billing" ? (
              <Dialog
                trigger={<Button color="red">구독취소</Button>}
                title="구독취소"
                content={<UnsubscribeDialogContent />}
                actionName="구독취소"
                action={
                  () => unsubscribeUserTicket(userId, userTicket.id)
                  // 여부에 따라서 결과 페이지로
                }
              ></Dialog>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const RefundDialogContent = () => {
  // 티켓(일회권, 정기권 모두)에서 환불 요청 들어왔을 때 경과된 시간에 따라
  // 환불받을수 있는 금액 필드 필요
  return (
    <div className="flex flex-col gap-2">
      <p>환불받을 수 있는 금액은 8000원 입니다.</p>
      <p>환불을 진행하시겠습니까?</p>
    </div>
  )
}

const UnsubscribeDialogContent = () => {
  // 정기권 티켓일 때 구독취소 요청 들어왔을 때
  // 다음 구독일자
  // 현재구독기간의 만료일 필요함
  return (
    <div className="flex flex-col  gap-2">
      <p>자동 구독을 취소하시면 다음 구독일인 24년 4월 20일부터 재구독이 되지 않습니다.</p>
      <p>남은 구독기간(24년 4월 19일)까지는 변함없이 이용이 가능합니다.</p>
      <p>구독취소를 진행하시겠습니까?</p>
    </div>
  )
}

export default AccordionUserTicket
