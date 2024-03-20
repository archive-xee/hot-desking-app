"use client"

// import { gql, useMutation } from "@apollo/client"
import { FormEvent } from "react"
import { Card } from "@/models/card"

// userId 필요함
// const DELETE_USER_CARD = gql`
//   mutation DeleteUserCard($cardId: String!) {
//     deleteUserCard(input: { cardId: $cardId }) {
//       resultCode
//     }
//   }
// `

const CardWithDeleteForm = (props: { card: Card }) => {
  // const [deleteUserCard, { data, loading, error }] = useMutation(DELETE_USER_CARD)
  const { card } = props

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // const formData = new FormData(event.currentTarget)
    // const cardId = formData.get("cardId")
    // deleteUserCard({ variables: { cardId } })
  }

  // if (loading) return "Submitting..."
  // if (error) return `Submission error! ${error.message}`
  // console.log("data", data?.cardAuth?.resultCode)

  return (
    <div className="flex flex-row">
      <div className="rounded-lg border border-black-300">{card.cardCode}</div>
      <div>
        <p>{card.cardName}</p>
        <p>{card.cardNum}</p>
      </div>
      <form onSubmit={onSubmit}>
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

export default CardWithDeleteForm
