// import { BookableType } from "@/models/bookable"

export type CouponType = "timebonus" | "discount"

export type Coupon = {
  id: string
  type: CouponType
  bookable: "seat" | "meetingroom" | "rentbox" | "locker"
  digit: number
  issuedAt: number
  expiresAt: number
}
