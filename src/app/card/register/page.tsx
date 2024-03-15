"use client"

import { gql, useMutation } from "@apollo/client"
import { FormEvent } from "react"

const REGISTER_USER_CARD = gql`
  mutation RegisterUserCard($expYear: String!, $expMonth: String!, $idNo: String!, $cardPw: String!, $cardNo: String!) {
    cardAuth(input: { expYear: $expYear, expMonth: $expMonth, idNo: $idNo, cardPw: $cardPw, cardNo: $cardNo }) {
      resultCode
    }
  }
`

export default function CardRegisterPage() {
  const [registerUserCard, { data, loading, error }] = useMutation(REGISTER_USER_CARD)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const cardNo = formData.get("cardNo")
    const expYear = formData.get("expYear")
    const expMonth = formData.get("expMonth")
    const idNo = formData.get("idNo")
    const cardPw = formData.get("cardPw")
    console.log(expYear, expMonth, idNo, cardPw, cardNo)
    registerUserCard({ variables: { expYear, expMonth, idNo, cardPw, cardNo } })
  }

  // 분기에 따라 다이얼로그 만들면 됩니다
  if (loading) return "Submitting..."
  if (error) return `Submission error! ${error.message}`
  console.log("data", data?.cardAuth?.resultCode)

  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col">
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
        <button type="submit">카드 등록</button>
      </form>
      <div className="border">
        mutation RegisterUserCard($userId: string, $card: Card) [ registerUserCard($userId: string, $card: Card) [ User
        [ Card ] ] ]
      </div>
    </>
  )
}
