import Link from "next/link"
import { getAllTicketFrame } from "@/actions/ticketframe"
import BottomSheetButton from "@/components/molecules/Button/BottomSheetButton"
import BottomSheetModal from "@/components/molecules/Modal/BottomSheetModal"
import CardTicket from "@/components/molecules/Ticket/CardTicket"
import Title from "@/components/molecules/Title/Title"

export default async function BillingTicketPage() {
  const billingTicketList = await getAllTicketFrame("billing")
  return (
    <>
      <Title text="정기권 구매하기" />
      {billingTicketList.map((oneoffTicket: any, idx: number) => (
        <BottomSheetModal
          key={idx}
          trigger={<CardTicket key={idx} ticketFrame={oneoffTicket}></CardTicket>}
          content={
            <div className="flex flex-row justify-center">
              <Link
                href={{
                  pathname: "/payment/online/billing/term",
                  query: {
                    // 티켓타입, 티켓이름 정도
                    ticketId: "1",
                  },
                }}
              >
                <BottomSheetButton>구매하기</BottomSheetButton>
              </Link>
            </div>
          }
        ></BottomSheetModal>
      ))}
    </>
  )
}
