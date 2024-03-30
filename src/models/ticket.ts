import { BookableType } from "@/models/bookable"

export type TicketType = "oneday" | "period" | "time" | "discount"
export type BillingType = "oneoff" | "billing"

export type Ticket = {
  id: string
  type: TicketType
  billingType: BillingType
  bookable: BookableType
  price: number
  period: number
  issuedAt: number
  expiresAt: number
}
