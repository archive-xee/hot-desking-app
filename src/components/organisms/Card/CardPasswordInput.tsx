"use client"

import { ChangeEvent, useRef, useState } from "react"

export default function CardPasswordInput() {
  const cardPasswordInputRef = useRef<HTMLInputElement>(null)

  const [password, setPassword] = useState<string>("")

  const handlePasswordChange = (value: string) => {
    console.log(value)
    if (!/^\d*$/.test(value)) {
      alert("숫자만 입력할 수 있습니다.")
      if (cardPasswordInputRef?.current?.value) {
        cardPasswordInputRef.current.value = ""
      }
    }

    const newValue = value // Remove non-digit characters
    if (/^\d{0,2}$/.test(newValue)) {
      console.log(newValue)
      setPassword(newValue)
      if (cardPasswordInputRef?.current?.value) {
        cardPasswordInputRef.current.value = password
      }
    }
  }

  return (
    <div>
      <input
        ref={cardPasswordInputRef}
        type="text"
        name="cardPw"
        maxLength={2}
        size={2}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handlePasswordChange(e.target.value)}
      />
    </div>
  )
}
