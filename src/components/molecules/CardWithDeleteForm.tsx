import { deleteUserCard } from "@/actions/nicepay"
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
        <button
          type="submit"
          className="py-0text-sm rounded-lg border border-blue-700 bg-white-100 px-2  font-medium hover:bg-blue-300 hover:text-white-100"
        >
          삭제
        </button>
      </form>
    </div>
  )
}
