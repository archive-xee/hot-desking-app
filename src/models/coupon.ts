import { BookableType } from "@/src/models/bookable"

export type CouponType = "timebonus" | "discount"

export type Coupon = {
  id: string
  type: CouponType
  bookable: BookableType
  digit: number
  issuedAt: number
  expiresAt: number
}
