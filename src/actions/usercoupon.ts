"use server"
import request, { gql } from "graphql-request"
import { RedirectType, redirect } from "next/navigation"
import { APOLLO_ROUTER_URL } from "@/constant/graphql"
import { UserCoupon } from "@/models/coupon"

export async function getAllUserCoupon(userId: string) {
  const GET_ALL_USERCOUPON = gql`
    query GetAllUserCoupon($userId: String!) {
      coupon(userId: $userId) {
        expiresAt
        id
        issuedAt
        userId
        type {
          expires
          statement
          name
          number
          type
        }
      }
    }
  `

  const data: { coupon: UserCoupon[] } = await request(APOLLO_ROUTER_URL, GET_ALL_USERCOUPON, {
    userId,
  })

  const { coupon: userCouponList } = data
  return userCouponList
}

export async function registerUserCoupon(userId: string, couponId: string) {
  const REGISTER_USERCOUPON = gql`
    mutation RegisterUserCoupon($userId: String!, $couponId: String!) {
      addCouponUser(input: { userId: $userId, couponId: $couponId }) {
        resultCode
      }
    }
  `

  const data: { addCouponUser: { resultCode: string } } = await request(APOLLO_ROUTER_URL, REGISTER_USERCOUPON, {
    userId,
    couponId,
  })

  const resultCode = data.addCouponUser.resultCode
  const result = resultCode === "0000" ? "success" : "fail"
  redirect(`/redirection/registercoupon/${result}`, RedirectType.replace)
}
