import { getUserIdAfterCheckAuthRedirect } from "@/actions/authjs"
import { getUserCardList } from "@/actions/nicepay"
import SubTitle from "@/components/molecules/Title/SubTitle"
import UserCard from "@/components/organisms/Card/UserCard"
import { Card, card1, card2, card3 } from "@/models/card"

export default async function UserCardList() {
  const userId = await getUserIdAfterCheckAuthRedirect()
  const userCardList = await getUserCardList(userId)

  return (
    <div className="flex flex-col gap-2">
      {userCardList ? (
        <div>
          <SubTitle text="카드를 클릭하시면 결제를 진행하실 수 있습니다." />
          {userCardList.map((usercard: Card) => (
            <UserCard key={usercard.id} card={usercard} />
          ))}
        </div>
      ) : (
        <SubTitle text="카드를 등록하시면 더 간편하게 결제하실 수 있습니다." />
      )}
      <UserCard key={card1.id} card={card1} />
      <UserCard key={card2.id} card={card2} />
      <UserCard key={card3.id} card={card3} />
    </div>
  )
}
