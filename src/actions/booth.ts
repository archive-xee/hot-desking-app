"use server"
import request, { gql } from "graphql-request"
import { RedirectType, redirect } from "next/navigation"
import { APOLLO_ROUTER_URL } from "@/constant/graphql"
import { Bookable } from "@/models/bookable"

export async function getAllBookable() {
  const GET_ALL_BOOTH = gql`
    query getAllBookable {
      booking {
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

  const data: { booking: Bookable[] } = await request(APOLLO_ROUTER_URL, GET_ALL_BOOTH)

  const { booking: allBookableList } = data
  return allBookableList
}

export async function getBoookableById(id: string) {
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
