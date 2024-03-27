"use server"
import request, { gql } from "graphql-request"
import { APOLLO_ROUTER_URL } from "@/constant/graphql"
import { Card } from "@/models/card"

export async function getBillingKeyTerm() {
  const GET_BILLING_KEY_TERM_QUERY = gql`
    query GetBillingKeyTerm($type: TermsType!) {
      term(type: $type) {
        termsTitle
        content
      }
    }
  `

  type BillingKeyTermRequest = {
    type: "eletorn" | "colletperson" | "sharinginfo" | "telcommun"
  }

  type BillingKeyTermResponse = {
    termsTitle: string
    content: string
  }

  const data: { term: BillingKeyTermResponse } = await request(APOLLO_ROUTER_URL, GET_BILLING_KEY_TERM_QUERY, {
    type: "eletorn",
  } as BillingKeyTermRequest)

  const billingKeyTerm = data.term
  return billingKeyTerm
}

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

export async function registerUserCard(userId: string, formData: FormData) {
  const REGISTER_USER_CARD = gql`
    mutation RegisterUserCard(
      $userId: String!
      $expYear: String!
      $expMonth: String!
      $idNo: String!
      $cardPw: String!
      $cardNo: String!
    ) {
      cardAuth(
        input: {
          userId: $userId
          expYear: $expYear
          expMonth: $expMonth
          idNo: $idNo
          cardPw: $cardPw
          cardNo: $cardNo
        }
      ) {
        resultCode
      }
    }
  `

  const cardNo = formData.get("cardNo")
  const expYear = formData.get("expYear")
  const expMonth = formData.get("expMonth")
  const idNo = formData.get("idNo")
  const cardPw = formData.get("cardPw")

  const data: { cardAuth: { resultCode: string } } = await request(APOLLO_ROUTER_URL, REGISTER_USER_CARD, {
    userId,
    expYear,
    expMonth,
    idNo,
    cardPw,
    cardNo,
  })
  const resultCode = data.cardAuth.resultCode
  return resultCode
}

export async function deleteUserCard(formData: FormData) {
  const DELETE_USER_CARD = gql`
    mutation DeleteUserCard($cardId: String!) {
      deleteUserCard(input: { cardId: $cardId }) {
        resultCode
      }
    }
  `

  const cardId = formData.get("cardId")

  const data: { cardAuth: { resultCode: string } } = await request(APOLLO_ROUTER_URL, DELETE_USER_CARD, {
    cardId,
  })
  const resultCode = data.cardAuth.resultCode
  return resultCode
}
