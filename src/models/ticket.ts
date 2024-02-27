import { BookableType } from "@/src/models/bookable"

export type TicketType = "oneday" | "period" | "time" | "discount"

export type Ticket = {
  id: string
  type: TicketType
  bookable: BookableType
  price: number
  period: number
  issuedAt: number
  expiresAt: number
}
