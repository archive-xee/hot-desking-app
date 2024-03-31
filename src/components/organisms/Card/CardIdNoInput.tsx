"use client"

import { ChangeEvent, useRef, useState } from "react"

export default function CardIdNoInput() {
  const cardIdNoInputRef = useRef<HTMLInputElement>(null)
  const [idNo, setIdNo] = useState<string>("")

  const handleIdNoChange = (value: string) => {
    if (!/^\d*$/.test(value)) {
      alert("숫자만 입력할 수 있습니다.")
      if (cardIdNoInputRef?.current?.value) {
        cardIdNoInputRef.current.value = ""
      }
    }

    const newValue = value // Remove non-digit characters
    if (/^\d{0,6}$/.test(newValue)) {
      // Check for valid length
      // Split the input into year, month, and day parts
      const year = newValue.substring(0, 2)
      const month = newValue.substring(2, 4)
      const day = newValue.substring(4, 6)

      // Check if year, month, and day are valid
      if (year <= "99" && month >= "01" && month <= "12" && day >= "01" && day <= "31") {
        setIdNo(newValue)
        if (cardIdNoInputRef?.current?.value) {
          cardIdNoInputRef.current.value = idNo
        }
      } else {
        if (newValue.length === 6) {
          alert("올바른 생년월일 형식이 아닙니다.")
          if (cardIdNoInputRef?.current?.value) {
            cardIdNoInputRef.current.value = ""
          }
        }
      }
    }
  }

  return (
    <input
      ref={cardIdNoInputRef}
      type="text"
      name="idNo"
      placeholder="YYMMDD"
      maxLength={6}
      size={6}
      onChange={(e: ChangeEvent<HTMLInputElement>) => handleIdNoChange(e.target.value)}
    />
  )
}
