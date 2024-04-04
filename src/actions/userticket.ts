"use server"
import request, { gql } from "graphql-request"
import { RedirectType, redirect } from "next/navigation"
import { APOLLO_ROUTER_URL } from "@/constant/graphql"
import { UserTicket } from "@/models/ticket"

export async function getAllUserTicket(userId: string, bookable?: string) {
  const GET_ALL_USERTICKET = gql`
    query GetAllUserticket($userId: String!, $bookable: String) {
      ticket(userId: $userId, typeName: $bookable) {
        ticketType {
          bookableType {
            name
            type
          }
          name
          remaining
          purchasePrice
          expires
          id
          limit
          type
        }
        expiresAt
        endsAt
        availableTime
        id
        refund
        userId
        used
      }
    }
  `

  const data: { ticket: UserTicket[] } = await request(APOLLO_ROUTER_URL, GET_ALL_USERTICKET, {
    userId,
    bookable,
  })

  const { ticket: allUserTicket } = data
  return allUserTicket
}

export async function useUserTicket(userId: string, ticketId: string) {
  // @서버 아직 쿼리가 만들어지지 않음
  console.log("에", userId, ticketId)
  // const NIPOUT_BOOKABLE = gql`
  //   query NipoutBookable($userId: String!, $bookable: String!) {
  //     ticket(paid: true, userId: $userId, typeName: $bookable) {
  //       ticketId
  //     }
  //   }
  // `

  // const data: { ticket: { ticketId: string } } = await request(APOLLO_ROUTER_URL, NIPOUT_BOOKABLE, {
  //   userId,
  //   bookable,
  // })

  // const { ticketId } = data.ticket
  // const userTicketActivated = ticketId ? true : false
  // return userTicketActivated
  const result = "success"
  redirect(`${process.env.BASE_URL}/redirection/useuserticket/${result}`, RedirectType.replace)
}

export async function nipoutUserTicket(userId: string, ticketId: string) {
  const NIPOUT_BOOKABLE = gql`
    mutation NipoutBookable($userId: String!, $ticketId: String!) {
      outingBooking(input: { userId: $userId, id: $ticketId }) {
        resultCode
      }
    }
  `

  const data: { outingBooking: { resultCode: string } } = await request(APOLLO_ROUTER_URL, NIPOUT_BOOKABLE, {
    userId,
    ticketId,
  })

  const resultCode = data.outingBooking.resultCode
  const result = resultCode === "0000" ? "success" : "fail"
  redirect(`${process.env.BASE_URL}/redirection/nipout/${result}`, RedirectType.replace)
}

export async function checkoutUserTicket(userId: string, ticketId: string) {
  const CHECKOUT_BOOKABLE = gql`
    mutation leavingBooking($userId: String!, $ticketId: String!) {
      leavingBooking(input: { userId: $userId, ticketId: $ticketId }) {
        resultCode
      }
    }
  `
  const data: { leavingBooking: { resultCode: string } } = await request(APOLLO_ROUTER_URL, CHECKOUT_BOOKABLE, {
    userId,
    ticketId,
  })

  const resultCode = data.leavingBooking.resultCode
  const result = resultCode === "0000" ? "success" : "fail"
  redirect(`${process.env.BASE_URL}/redirection/checkout/${result}`, RedirectType.replace)
}
