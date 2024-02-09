export type CouponType = "timebonus" | "discount"
export type Bookable = "seat" | "meetingroom" | "rentbox" | "locker"

export type Coupon = {
  id: string
  type: CouponType
  bookable: Bookable
  digit: number
  issuedAt: number
  expiresAt: number
}
