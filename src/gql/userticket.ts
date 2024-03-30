import request, { gql } from "graphql-request"
import { APOLLO_ROUTER_URL } from "@/constant/graphql"

export async function refundUserTicket(userId: string, ticketId: string) {
  const REFUND_USER_TICKET = gql`
    mutation RefundUserTicket($userId: String!, $ticketId: String!) {
      refundUserTicket(input: { cardId: $cardId }) {
        resultCode
      }
    }
  `

  type BoothStatusResponse = {
    bookableTypeId: string
    seatId: string
    ticketId: string
  }

  const data: { booking: BoothStatusResponse } = await request(APOLLO_ROUTER_URL, REFUND_USER_TICKET, {
    userId,
    ticketId,
  })

  const booking = data.booking
  return booking
}

export async function unsubscribeUserTicket(userId: string, ticketId: string) {
  const UNSUBSCIRE_USER_TICKET = gql`
    mutation UnsubscribeUserTicket($cardId: String!, $ticketId: String!) {
      unsubscribeUserTicket(input: { cardId: $cardId }) {
        resultCode
      }
    }
  `

  type BoothStatusResponse = {
    bookableTypeId: string
    seatId: string
    ticketId: string
  }

  const data: { booking: BoothStatusResponse } = await request(APOLLO_ROUTER_URL, UNSUBSCIRE_USER_TICKET, {
    userId,
    ticketId,
  })

  const booking = data.booking
  return booking
}
