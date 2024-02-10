export type TicketType = "oneday" | "period" | "time" | "discount"
export type Bookable = "seat" | "meetingroom" | "rentbox" | "locker"

export type Ticket = {
  id: string
  type: TicketType
  bookable: Bookable
  price: number
  period: number
  issuedAt: number
  expiresAt: number
}
