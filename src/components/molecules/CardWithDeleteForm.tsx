import { Dialog } from "../organisms/Dialog"
import { deleteCardByCardId } from "@/actions/nicepay"
import Button from "@/components/molecules/Button/Button"
import { Card } from "@/models/card"
import { formatCardNumber } from "@/utils/format"

export default async function CardWithDeleteForm(props: { card: Card }) {
  const { card } = props
  const isRepresentative = card.representative === "0"
  const color = isRepresentative ? "bg-blue-300" : "bg-blue-100"
  const deleteUserCardByCardId = deleteCardByCardId.bind(null, card.id)
  return (
    <div className="flex flex-row items-center gap-2 overflow-hidden rounded-lg border border-solid bg-white-300 pr-2">
      <div className={`relative flex flex-col items-center justify-center ${color} size-16`}>
        <p className="text-white-100">{card.cardName}</p>
        {isRepresentative ? <p className="text-sm text-white-100">대표</p> : <></>}
      </div>
      <div>
        <p className="text-sm">{formatCardNumber(card.cardNum)}</p>
      </div>
      <div className="grow"></div>
      {/* <form action={deleteUserCard}>
        <input type="hidden" name="cardId" value={card.id} /> */}
      {/* 다이얼로그 */}
      <Dialog
        trigger={<Button color="red">삭제</Button>}
        title="카드삭제"
        content={<DeleteCardDialogContent />}
        actionName="카드삭제"
        action={deleteUserCardByCardId}
      ></Dialog>
      {/* </form> */}
    </div>
  )
}

const DeleteCardDialogContent = () => {
  return (
    <div className="flex flex-col gap-2">
      <p>카드를 삭제하시면 카드에 등록된 자동결제는 자동 해지됩니다.</p>
      <p>카드삭제를 진행하시겠습니까?</p>
    </div>
  )
}
