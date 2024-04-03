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
      }
    }
  `

  const data: { ticket: UserTicket[] } = await request(APOLLO_ROUTER_URL, GET_ALL_USERTICKET, {
    userId: "12345", //@ 서버
    bookable,
  })

  const { ticket: allUserTicket } = data
  return allUserTicket
}

export async function getActivatedUserTicket(userId: string, bookable?: string) {
  // bookable: 좌사대스(bookable), 쿼리엔 typeName으로 들어가있음
  const GET_ACTIVATED_USERTICKET = gql`
    query GetActivatedUserticketActivated($userId: String!, $bookable: String) {
      ticket(used: true, userId: $userId, typeName: $bookable) {
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
      }
    }
  `
  const data: { ticket: UserTicket[] } = await request(APOLLO_ROUTER_URL, GET_ACTIVATED_USERTICKET, {
    userId: "12345",
    bookable,
  })

  const { ticket } = data
  const activatedUserTicket = ticket[0]
  return activatedUserTicket
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
  // @서버 아직 쿼리가 만들어지지 않음
  console.log(userId, ticketId)
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
  return true
}

export async function checkoutUserTicket(userId: string, ticketId: string) {
  // @서버 아직 쿼리가 만들어지지 않음
  console.log(userId, ticketId)
  // const CHECKOUT_TICKET = gql`
  //   query CheckoutTicket($userId: String!, $bookable: String!) {
  //     ticket(paid: true, userId: $userId, typeName: $bookable) {
  //       ticketId
  //     }
  //   }
  // `

  // const data: { ticket: { ticketId: string } } = await request(APOLLO_ROUTER_URL, CHECKOUT_TICKET, {
  //   userId,
  //   bookable,
  // })

  // const { ticketId } = data.ticket
  // const userTicketActivated = ticketId ? true : false
  // return userTicketActivated
  const result = "success"
  redirect(`${process.env.BASE_URL}/redirection/checkout/${result}`, RedirectType.replace)
}
