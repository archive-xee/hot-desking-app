import { getUserIdAfterCheckAuthRedirect } from "@/actions/authjs"
import CardForm from "@/components/organisms/Card/CardForm"

export default async function CardRegisterPage() {
  const userId = await getUserIdAfterCheckAuthRedirect()

  return (
    <>
      <h1 className="text-center text-xl font-bold">카드 등록하기</h1>
      <CardForm userId={userId} />
    </>
  )
}
