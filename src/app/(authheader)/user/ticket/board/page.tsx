import { getUserIdAfterCheckAuthRedirect } from "@/actions/authjs"
import Title from "@/components/molecules/Title"
// import { getAllUserTicket } from "@/actions/userticket"
import AccordionUserTicket from "@/components/organisms/AccordionUserTicket"

export default async function UserSeatTicketPage() {
  const userId = await getUserIdAfterCheckAuthRedirect()
  console.log(userId)
  // 서버액션 쿼리 (WIP)
  // const allUserTicket = await getAllUserTicket(userId)
  const allUserTicket = [
    {
      id: "1",
      type: "time",
      billingType: "oneoff",
      bookable: "seat",
      price: 10000,
      period: 86400,
      issuedAt: 1706946429,
      expiresAt: 1707551229,
    },
    {
      id: "2",
      type: "time",
      billingType: "billing",
      bookable: "seat",
      price: 10000,
      period: 86400,
      issuedAt: 1706946429,
      expiresAt: 1707551229,
    },
  ]
  return (
    <>
      <Title text="내 이용권 현황/관리" />
      {allUserTicket.map((userTicket: any) => (
        <AccordionUserTicket key={userTicket.id} ticket={userTicket} userId={userId}></AccordionUserTicket>
      ))}
    </>
  )
}
