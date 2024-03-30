import { checkAuthRedirect } from "@/actions/authjs"
import { registerUserCard } from "@/actions/nicepay"
import Button from "@/components/molecules/Button"

export default async function CardRegisterPage() {
  await checkAuthRedirect()
  const registerUserCardWithUserId = await registerUserCard.bind(null, "userId")

  return (
    <>
      <form action={registerUserCardWithUserId} className="flex flex-col">
        <label>카드 번호</label>
        <input type="text" name="cardNo" />

        <label>월</label>
        <input type="text" name="expMonth" placeholder="MM" />

        <label>년</label>
        <input type="text" name="expYear" placeholder="YY" />

        <label>생년월일</label>
        <input type="text" name="idNo" />

        <label>카드 비밀번호 앞 2자리</label>
        <input type="text" name="cardPw" />
        <Button form={true}>카드등록</Button>
      </form>
      <div className="border">
        mutation RegisterUserCard($userId: string, $card: Card) [ registerUserCard($userId: string, $card: Card) [ User
        [ Card ] ] ]
      </div>
    </>
  )
}
