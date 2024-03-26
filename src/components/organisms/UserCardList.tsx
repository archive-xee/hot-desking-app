import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { getUserCardList } from "@/actions/nicepay"
import CardWithDeleteForm from "@/components/molecules/CardWithDeleteForm"
import { authOptions } from "@/lib/authjs"
import { Card } from "@/models/card"

export default async function UserCardList() {
  const session = await getServerSession(authOptions)
  const userId = session?.userId
  if (!userId) redirect("/auth/signin")
  const userCardList = await getUserCardList(userId)

  return (
    <div className="flex flex-col">
      {userCardList ? (
        userCardList.map((usercard: Card) => <CardWithDeleteForm key={usercard.id} card={usercard} />)
      ) : (
        <p>카드를 등록해주세요</p>
      )}
    </div>
  )
}
