import { deleteUserCard } from "@/actions/nicepay"
import Button from "@/components/molecules/Button/Button"
import { Card } from "@/models/card"

export default async function CardWithDeleteForm(props: { card: Card }) {
  const { card } = props

  return (
    <div className="flex flex-row">
      <div className="rounded-lg border border-black-300">{card.cardCode}</div>
      <div>
        <p>{card.cardName}</p>
        <p>{card.cardNum}</p>
      </div>
      <form action={deleteUserCard}>
        <input type="hidden" name="cardId" value={card.id} />
        <Button form={true}>삭제</Button>
      </form>
    </div>
  )
}
