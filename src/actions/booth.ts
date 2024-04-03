"use server"
import request, { gql } from "graphql-request"
import { RedirectType, redirect } from "next/navigation"
import { APOLLO_ROUTER_URL } from "@/constant/graphql"
import { Bookable } from "@/models/bookable"

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
// @클라 변경예정
export async function getBoookableById(id: string) {
  // seatId가 좌/사/대/스 중 무엇(bookable)인지 알아야 합니다.
  // 쿼리엔 아직 추가되지 않음
  const GET_BOOKABLE_BY_ID = gql`
    query GetBookableStatus($id: String!) {
      booking(id: $id) {
        id
        seat {
          number
          type
          name
        }
        ticketId
        userId
        bookableType {
          name
          type
        }
      }
    }
  `

  const data: { booking: Bookable[] } = await request(APOLLO_ROUTER_URL, GET_BOOKABLE_BY_ID, {
    id,
  })

  const { booking: bookable } = data
  return bookable[0]
}

export async function getUserActivatedBoookable(userId: string, types?: string[]) {
  const GET_USER_ACTIVATED_BOOKABLE = gql`
    query getUserActivatedBoookable($userId: String!) {
      booking(used: true, userId: $userId) {
        id
        seat {
          number
          type
          name
        }
        ticketId
        userId
        bookableType {
          name
          type
        }
      }
    }
  `

  const data: { booking: Bookable[] } = await request(APOLLO_ROUTER_URL, GET_USER_ACTIVATED_BOOKABLE, {
    userId: "12345",
  })

  const { booking } = data
  let activatedBookableList: Bookable[] = []
  if (types) {
    types.forEach((type) => {
      activatedBookableList = activatedBookableList.concat(
        booking.filter((bookable: Bookable) => bookable.bookableType.type === type),
      )
    })
  } else {
    activatedBookableList = booking
  }
  return activatedBookableList
}

export async function moveToNewBookable(userId: string, id: string) {
  // @서버 03/29 아직 쿼리가 만들어지지 않음
  console.log(userId, id)
  // const MOVE_TO_NEW_BOOKABLE = gql`
  //   query MoveToNewBookable($userId: String!, $bookable: String!) {
  //     ticket(paid: true, userId: $userId, typeName: $bookable) {
  //       ticketId
  //     }
  //   }
  // `

  // const data: { ticket: { ticketId: string } } = await request(APOLLO_ROUTER_URL, MOVE_TO_NEW_BOOKABLE, {
  //   userId,
  //   bookable,
  // })

  // const { ticketId } = data.ticket
  // const userTicketActivated = ticketId ? true : false
  // return userTicketActivated
  const result = "success"
  redirect(`${process.env.BASE_URL}/redirection/move/${result}`, RedirectType.replace)
}
