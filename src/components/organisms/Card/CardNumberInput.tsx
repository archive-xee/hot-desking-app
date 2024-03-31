"use client"

import React, { useRef, useState, ChangeEvent } from "react"

export default function CardNumberInput() {
  const [inputs, setInputs] = useState(["", "", "", ""])
  const inputRefs = useRef<HTMLInputElement[]>([])

  const handleChange = (index: number, value: string) => {
    // Update the input value in the state
    if (/^\d*$/.test(value)) {
      const newInputs = [...inputs]
      newInputs[index] = value
      setInputs(newInputs)

      // Check if the current input value has reached its maxLength
      if (value.length >= inputRefs.current[index].maxLength) {
        // Focus on the next input field if available
        if (index < inputs.length - 1) {
          inputRefs.current[index + 1].focus()
        }
      }
    } else {
      alert("숫자만 입력할 수 있습니다.")
    }
  }

  return (
    <div className="flex flex-row justify-between">
      {inputs.map((value, index) => (
        <React.Fragment key={index}>
          <input
            key={`cardNo${index}`}
            name={`cardNo${index}`}
            ref={(ref) => (inputRefs.current[index] = ref as HTMLInputElement)}
            type="numeric"
            value={value}
            maxLength={4}
            size={4}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(index, e.target.value)}
          />
          {index !== 3 ? <p key={`slash${index}`}>-</p> : <p key={`slash${index}`}></p>}
        </React.Fragment>
      ))}
    </div>
  )
}
