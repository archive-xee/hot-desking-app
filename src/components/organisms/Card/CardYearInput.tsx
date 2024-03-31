"use client"

import React, { useState, ChangeEvent, useRef } from "react"

export default function CardYearInput() {
  const currentYear = new Date().getFullYear() % 100
  const cardYearInputRef = useRef<HTMLInputElement>(null)
  const [year, setYear] = useState<string>("")

  const handleYearChange = (value: string) => {
    if (!/^\d*$/.test(value)) {
      alert("숫자만 입력할 수 있습니다.")
      if (cardYearInputRef?.current?.value) {
        cardYearInputRef.current.value = ""
      }
    }

    const newValue = value // Remove non-digit characters
    if (/^\d{0,2}$/.test(newValue)) {
      if (parseInt(newValue) > currentYear) {
        setYear(newValue)
        if (cardYearInputRef?.current?.value) {
          cardYearInputRef.current.value = year
        }
      } else {
        if (newValue.length === 2) {
          alert("올바른 연 형식이 아닙니다.")
          if (cardYearInputRef?.current?.value) {
            cardYearInputRef.current.value = ""
          }
        }
      }
    } else {
      alert("숫자만 입력할 수 있습니다.")
      if (cardYearInputRef?.current?.value) {
        cardYearInputRef.current.value = ""
      }
    }
  }

  return (
    <input
      ref={cardYearInputRef}
      type="text"
      name="expYear"
      maxLength={2}
      size={2}
      onChange={(e: ChangeEvent<HTMLInputElement>) => handleYearChange(e.target.value)}
    />
  )
}
