import { getUserIdAfterCheckAuthRedirect } from "@/actions/authjs"
import { getAllUserTicket } from "@/actions/userticket"
import Title from "@/components/molecules/Title/Title"
import AccordionUserTicket from "@/components/organisms/AccordionUserTicket"
import { UserTicket } from "@/models/ticket"

export default async function UserTicketManagePage() {
  const userId = await getUserIdAfterCheckAuthRedirect()
  const allUserTicket = await getAllUserTicket(userId)
  return (
    <>
      <Title text="내 이용권 현황/관리" />
      {allUserTicket.map((userTicket: UserTicket) => (
        <AccordionUserTicket key={userTicket.id} userTicket={userTicket} userId={userId}></AccordionUserTicket>
      ))}
    </>
  )
}
