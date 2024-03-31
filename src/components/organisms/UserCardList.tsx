import { getUserIdAfterCheckAuthRedirect } from "@/actions/authjs"
import { getUserCardList } from "@/actions/nicepay"
import UserCard from "@/components/organisms/Card/UserCard"
import { Card, card1, card2, card3 } from "@/models/card"

export default async function UserCardList() {
  const userId = await getUserIdAfterCheckAuthRedirect()
  const userCardList = await getUserCardList(userId)

  return (
    <div className="flex flex-col gap-2">
      {userCardList ? (
        <div>
          <h3>카드를 클릭하시면 결제를 진행하실 수 있습니다.</h3>
          {userCardList.map((usercard: Card) => (
            <UserCard key={usercard.id} card={usercard} />
          ))}
        </div>
      ) : (
        <p className="text-center">카드를 등록해주세요</p>
      )}
      <UserCard key={card1.id} card={card1} />
      <UserCard key={card2.id} card={card2} />
      <UserCard key={card3.id} card={card3} />
    </div>
  )
}
