"use server"
import request, { gql } from "graphql-request"
import { RedirectType, redirect } from "next/navigation"
import { APOLLO_ROUTER_URL } from "@/constant/graphql"

export async function getAllUserTicket(userId: string, bookable?: string) {
  const GET_USERTICKET_ALL = gql`
    query GetAllUserticket($userId: String!, $bookable: String) {
      ticket(paid: true, userId: $userId, typeName: $bookable) {
        ticketId
      }
    }
  `

  const data: { ticket: { ticketId: string } } = await request(APOLLO_ROUTER_URL, GET_USERTICKET_ALL, {
    userId,
    bookable,
  })

  const { ticketId } = data.ticket
  const allUserTicket = ticketId
  return allUserTicket
}

export async function getActivatedUserTicket(userId: string, bookable?: string) {
  // bookable: 좌사대스(bookable), 쿼리엔 typeName으로 들어가있음
  //!! 사용중인지 알아야하는게 있어야함(activated!)
  const GET_ACTIVATED_USERTICKET = gql`
    query GetActivatedUserticketActivated($userId: String!, $bookable: String) {
      ticket(paid: true, userId: $userId, typeName: $bookable) {
        id
      }
    }
  `
  // @클라 04/01 뭘 가져올것인지 정하자
  const data: { ticket: { id: string } } = await request(APOLLO_ROUTER_URL, GET_ACTIVATED_USERTICKET, {
    userId,
    bookable,
  })

  const { id } = data.ticket
  const userTicketActivated = id ? true : false
  // @클라 04/01 ticket객체를 가져와야 함
  return userTicketActivated
}
export async function nipoutTicket(userId: string, ticketId: string) {
  // 아직 쿼리가 만들어지지 않음
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
export async function checkoutTicket(userId: string, ticketId: string) {
  // 아직 쿼리가 만들어지지 않음
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
