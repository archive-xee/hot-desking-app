"use client"

import React, { useState, ChangeEvent, useRef } from "react"

export default function CardMonthInput() {
  const cardMonthInputRef = useRef<HTMLInputElement>(null)
  const [month, setMonth] = useState<string>("")

  const handleMonthChange = (value: string) => {
    if (!/^\d*$/.test(value)) {
      alert("숫자만 입력할 수 있습니다.")
      if (cardMonthInputRef?.current?.value) {
        cardMonthInputRef.current.value = ""
      }
    }

    const newValue = value // Remove non-digit characters
    if (/^\d{0,2}$/.test(newValue)) {
      if (newValue >= "01" && newValue <= "12") {
        setMonth(newValue)
        if (cardMonthInputRef?.current?.value) {
          cardMonthInputRef.current.value = month
        }
      } else {
        if (newValue.length === 2) {
          alert("올바른 월 형식이 아닙니다.")
          if (cardMonthInputRef?.current?.value) {
            cardMonthInputRef.current.value = ""
          }
        }
      }
    } else {
      alert("숫자만 입력할 수 있습니다.")
      if (cardMonthInputRef?.current?.value) {
        cardMonthInputRef.current.value = ""
      }
    }
  }

  return (
    <input
      ref={cardMonthInputRef}
      type="text"
      name="expMonth"
      maxLength={2}
      size={2}
      onChange={(e: ChangeEvent<HTMLInputElement>) => handleMonthChange(e.target.value)}
    />
  )
}
