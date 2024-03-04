"use client"
import { useEffect, useRef, useState } from "react"

type BottomSheetModalProps = {
  trigger: React.ReactNode
  content?: React.ReactNode
  buttonTitle: string
  buttonAction: () => void
}

export const BottomSheetModal = (props: BottomSheetModalProps) => {
  const { trigger, content, buttonTitle, buttonAction } = props
  const [showBottomSheetModal, setShowBottomSheetModal] = useState(false)
  const handleTriggerClicked = () => {
    setShowBottomSheetModal(!showBottomSheetModal)
  }

  const bottomSheetModalRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const closeBottomSheetModal = (e: MouseEvent) => {
      if (
        showBottomSheetModal &&
        bottomSheetModalRef.current &&
        !bottomSheetModalRef.current.contains(e.target as Node)
      ) {
        // 이벤트가 발생한 노드가 모달 컴포넌트 내부에 존재하지 않는다면 close
        setShowBottomSheetModal(false)
      }
    }

    document.addEventListener("mousedown", closeBottomSheetModal)

    return () => {
      document.removeEventListener("mousedown", closeBottomSheetModal)
    }
  }, [showBottomSheetModal])

  // 트리거가 한번 더 있다라는거... 
  return (
    <div>
      <div className="cursor-pointer" onClick={handleTriggerClicked}>
        {trigger}
      </div>

      {showBottomSheetModal && (
        <div
          ref={bottomSheetModalRef}
          aria-hidden="true"
          className="bg-black-700 text-white-300 fixed bottom-0 left-0 flex w-full flex-col overflow-hidden   rounded-t-lg py-4"
        >
          <div className="flex flex-col gap-6 px-4 py-2">
            {content}
            <button className="place-self-center bg-white-100 text-black-700  rounded-full px-10 py-2 font-bold" onClick={buttonAction}>
              {buttonTitle}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
