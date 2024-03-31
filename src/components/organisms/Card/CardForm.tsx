"use client"

import toast from "react-hot-toast"
import { z } from "zod"
import { zfd } from "zod-form-data"
import { registerUserCard } from "@/actions/nicepay"
import Button from "@/components/molecules/Button/Button"

const CardSchema = zfd.formData({
  cardNo0: zfd.numeric(z.number().int().gte(1000).lte(9999)),
  cardNo1: zfd.numeric(z.number().int().gte(1000).lte(9999)),
  cardNo2: zfd.numeric(z.number().int().gte(1000).lte(9999)),
  cardNo3: zfd.numeric(z.number().int().gte(1000).lte(9999)),
  expYear: zfd.numeric(z.number().int().gte(24).lte(34)),
  expMonth: zfd.numeric(z.number().int().gte(1).lte(12)),
  idNo: zfd.numeric(z.number().int().gte(0).lte(999999)),
  // 서버에서 카카오로그인의 user 생년월일과 비교
  cardPw: zfd.numeric(z.number().int().gte(0).lte(99)),
})

type CardFormProps = {
  userId: string
}

function CardForm({ userId }: CardFormProps) {
  const clientAction = async (formData: FormData) => {
    const result = CardSchema.safeParse(formData)
    if (!result.success) {
      let errorMsg = ""
      result.error.issues.forEach((issue) => {
        const errorTarget = issue.path[0]
        switch (errorTarget) {
          case "expYear":
            errorMsg = "유효기간(연): 연도가 이미 지났거나, 유효한 카드의 유효기간이 아닙니다."
            break
          case "expMonth":
            errorMsg = "유효기간(월): 월은 1월부터 12월까지만 유효합니다."
            break
          case "idNo":
            errorMsg = "생년월일: 유효한 형식의 생년월일이 아닙니다."
            break
          case "cardPw":
            errorMsg = "카드 비밀번호 앞 2자리: 숫자만 입력 가능합니다."
            break
          default:
            errorMsg = "카드번호: 각 입력마다 4자리의 숫자가 필요합니다."
            break
        }
      })

      toast.error(errorMsg)
      return
    }

    const resultCode = await registerUserCard(userId, formData)
    // 이것도 결과에 따라서...
    console.log(resultCode)
  }

  const inputStyle =
    "text-center bg-white-300 border border-black-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block"

  return (
    <div className="rounded-lg border border-solid border-black-500 bg-white-500 px-2 py-4">
      <form action={clientAction} className="flex flex-col">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between gap-1">
            <label>카드번호</label>
            <input name="cardNo0" type="numeric" maxLength={4} size={1} className={inputStyle} />
            <p>-</p>
            <input name="cardNo1" type="numeric" maxLength={4} size={1} className={inputStyle} />
            <p>-</p>
            <input name="cardNo2" type="numeric" maxLength={4} size={1} className={inputStyle} />
            <p>-</p>
            <input name="cardNo3" type="numeric" maxLength={4} size={1} className={inputStyle} />
          </div>
          <div className="flex flex-row justify-start gap-1">
            <label>유효기간</label>
            <input type="numeric" placeholder="YY" name="expYear" maxLength={2} size={1} className={inputStyle} />
            <label>/</label>
            <input type="numeric" placeholder="MM" name="expMonth" maxLength={2} size={1} className={inputStyle} />
            <div className="grow"></div>
          </div>
          <div className="flex flex-row justify-start gap-1">
            <label>생년월일</label>
            <input type="numeric" placeholder="YYMMDD" name="idNo" maxLength={6} size={4} className={inputStyle} />
          </div>
          <div className="flex flex-row justify-start gap-1">
            <label>카드 비밀번호 앞 2자리</label>
            <input type="numeric" placeholder="**" name="cardPw" maxLength={2} size={1} className={inputStyle} />
          </div>
          <div className="h-1"></div>
          <Button form={true}>카드등록</Button>
        </div>
      </form>
    </div>
  )
}

export default CardForm
