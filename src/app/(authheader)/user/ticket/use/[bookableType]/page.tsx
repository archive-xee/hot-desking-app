import Link from "next/link"
import { getUserIdAfterCheckAuthRedirect } from "@/actions/authjs"
import { getAllUserTicket, useUserTicket } from "@/actions/userticket"
import BottomSheetButton from "@/components/molecules/Button/BottomSheetButton"
import Button from "@/components/molecules/Button/Button"
import BottomSheetModal from "@/components/molecules/Modal/BottomSheetModal"
import StretchedTicket from "@/components/molecules/Ticket/StretchedTicket"
import SubTitle from "@/components/molecules/Title/SubTitle"
import Title from "@/components/molecules/Title/Title"
import { UserTicket } from "@/models/ticket"

export default async function UserTicketInventoryPage() {
  const userId = await getUserIdAfterCheckAuthRedirect()
  const allUserTicket = await getAllUserTicket(userId)

  return (
    <>
      <Title text="이용권 사용하기" />
      <SubTitle text="이용권을 클릭해주세요. 없다면 구매할 수 있어요." />
      <div className="flex flex-row justify-end gap-2">
        <Link href="/ticket/oneoff">
          <Button>일회권 구매</Button>
        </Link>
        <Link href="/ticket/billing">
          <Button color="teal">정기권 구매</Button>
        </Link>
      </div>
      {allUserTicket.map(async (userTicket: UserTicket) => {
        const useUserTicketByUserId = await useUserTicket.bind(null, userId, userTicket.id)
        return (
          <BottomSheetModal
            key={userTicket.id}
            trigger={<StretchedTicket ticketFrame={userTicket.ticketType}></StretchedTicket>}
            content={
              <div className="flex flex-row justify-center">
                <form action={useUserTicketByUserId}>
                  <BottomSheetButton form={true}>사용하기</BottomSheetButton>
                </form>
              </div>
            }
          ></BottomSheetModal>
        )
      })}
    </>
  )
}
