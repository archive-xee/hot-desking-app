"use server"

import request, { gql } from "graphql-request"
import { APOLLO_ROUTER_URL } from "@/constant/graphql"
import { Card } from "@/models/card"

export async function getUserCardList(userId: string) {
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

  const data: { userbyid: { cards: Card[] } } = await request(APOLLO_ROUTER_URL, GET_USER_CARD_LIST, {
    userId,
  })
  const userCardList = data.userbyid.cards
  return userCardList
}
