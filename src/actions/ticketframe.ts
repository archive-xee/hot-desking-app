"use server"
import request from "graphql-request"
import { APOLLO_ROUTER_URL } from "@/constant/graphql"
import { GET_ALL_TICKET_FRAME } from "@/gql/ticketframe"
import { TicketFrame } from "@/models/ticket"

export async function getAllTicketFrame(type: TicketFrame["type"]) {
  const data = await request(APOLLO_ROUTER_URL, GET_ALL_TICKET_FRAME, {
    type,
  })

  const { ticketType: ticketFrameList } = data
  return ticketFrameList
}
