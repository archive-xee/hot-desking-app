import { getUserIdAfterCheckAuthRedirect } from "@/actions/authjs"
import { getUserCardList } from "@/actions/nicepay"
import CardWithDeleteForm from "@/components/molecules/CardWithDeleteForm"
import { Card } from "@/models/card"

export default async function UserCardList() {
  const userId = await getUserIdAfterCheckAuthRedirect()
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
