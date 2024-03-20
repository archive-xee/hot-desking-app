"use client"

import { gql, useQuery } from "@apollo/client"
import CardWithDeleteForm from "../molecules/CardWithDeleteForm"
import { Card } from "@/models/card"

const GET_USER_CARD_LIST = gql`
  query GetUserCardList($userId: String!) {
    userbyid(userId: $userId) {
      cards {
        authDate
        cardCode
        cardName
        cardNum
        orderId
        id
        representative
        userId
      }
    }
  }
`

export default function UserCardList(props: { userId: string }) {
    const { userId } = props
    const { loading, error, data } = useQuery(GET_USER_CARD_LIST, {
        variables: { userId },
    })

    // 분기에 따라 다이얼로그 만들면 됩니다
    if (loading) return "Submitting..."
    else if (error) return `Submission error! ${error.message}`
    else {
        const userCards = data.userbyid.cards
        return (
            <div className="flex flex-col">
                {userCards.map((usercard: Card) => (
                    <CardWithDeleteForm key={usercard.id} card={usercard} />
                ))}
            </div>
        )
    }
}
