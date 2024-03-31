import { checkAuthRedirect } from "@/actions/authjs"
import { registerUserCard } from "@/actions/nicepay"
import Button from "@/components/molecules/Button/Button"
import {
  CardIdNoInput,
  CardMonthInput,
  CardPasswordInput,
  CardNumberInput,
  CardYearInput,
} from "@/components/organisms/Card"

export default async function CardRegisterPage() {
  await checkAuthRedirect()
  const registerUserCardWithUserId = await registerUserCard.bind(null, "userId")

  return (
    <>
      <form action={registerUserCardWithUserId} className="flex flex-col">
        <label>카드번호</label>
        <CardNumberInput />
        <label>월</label>
        <CardMonthInput />
        <label>연</label>
        <CardYearInput />
        <label>생년월일</label>
        <CardIdNoInput />
        <label>카드 비밀번호 앞 2자리</label>
        <CardPasswordInput />
        <Button form={true}>카드등록</Button>
      </form>
    </>
  )
}
