"use server"
import request, { gql } from "graphql-request"
import { APOLLO_ROUTER_URL } from "@/constant/graphql"

export async function getBoothStatus() {
  const GET_BOOTH_STATUS = gql`
    query GetBoothStatus() {
      booking {
        bookableTypeId
        seatId
        ticketId
      }
    }
  `

  type BoothStatusResponse = {
    bookableTypeId: string
    seatId: string
    ticketId: string
  }

  const data: { booking: BoothStatusResponse } = await request(APOLLO_ROUTER_URL, GET_BOOTH_STATUS)

  const booking = data.booking
  return booking
}

// 이것도 bookable, type, number에 따라서해야되니까 이것도 받아와줘야 함
export async function getBoookableOccupied(seatId: string) {
  // seatId가 좌/사/대/스 중 무엇(bookable)인지 알아야 합니다.
  // 쿼리엔 아직 추가되지 않음
  const GET_BOOKABLE_STATUS = gql`
    query GetBookableStatus($seatId: String!) {
      booking(seatId: $seatId) {
        ticketId
        bookable
      }
    }
  `

  // bookable
  // type 도 추가
  // number 도 추가

  const data: { booking: { ticketId: string; bookable: string } } = await request(
    APOLLO_ROUTER_URL,
    GET_BOOKABLE_STATUS,
    {
      seatId,
    },
  )

  const { bookable, ticketId } = data.booking
  const bookableOccupied = ticketId ? true : false
  return { bookable, bookableOccupied }
}

export async function getUserTicketActivated(userId: string, bookable: string) {
  // bookable: 좌사대스(bookable), 쿼리엔 typeName으로 들어가있음
  //!! 사용중인지 알아야하는게 있어야함
  const GET_USERTICKET_ACTIVATED = gql`
    query GetUserticketActivated($userId: String!, $bookable: String!) {
      ticket(paid: true, userId: $userId, typeName: $bookable) {
        ticketId
      }
    }
  `

  const data: { ticket: { ticketId: string } } = await request(APOLLO_ROUTER_URL, GET_USERTICKET_ACTIVATED, {
    userId,
    bookable,
  })

  const { ticketId } = data.ticket
  const userTicketActivated = ticketId ? true : false
  return userTicketActivated
}

export async function moveToNewBookable(userId: string, seatId: string) {
  // 아직 쿼리가 만들어지지 않음ㄴ
  console.log(userId, seatId)
  // const GET_USERTICKET_ACTIVATED = gql`
  //   query GetUserticketActivated($userId: String!, $bookable: String!) {
  //     ticket(paid: true, userId: $userId, typeName: $bookable) {
  //       ticketId
  //     }
  //   }
  // `

  // const data: { ticket: { ticketId: string } } = await request(APOLLO_ROUTER_URL, GET_USERTICKET_ACTIVATED, {
  //   userId,
  //   bookable,
  // })

  // const { ticketId } = data.ticket
  // const userTicketActivated = ticketId ? true : false
  // return userTicketActivated
  return true
}
