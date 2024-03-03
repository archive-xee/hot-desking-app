"use client"

// import { gql } from "@apollo/client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { CouponOfUser } from "@/src/components/molecules/Coupon"

// const GET_USER_COUPON_LIST = gql`
//   query GetUserCouponList($userId: string) {
//     UserCoupon(userId: $userId)
//   }
// `

export default function UserCouponPage() {
  const router = useRouter()
  return (
    <>
      <UserCouponPageTitle />
      <CouponOfUser
        coupon={{
          id: "1",
          type: "timebonus",
          bookable: "seat",
          digit: 10,
          issuedAt: 0,
          expiresAt: 0,
        }}
      ></CouponOfUser>
      <CouponOfUser
        coupon={{
          id: "2",
          type: "discount",
          bookable: "locker",
          digit: 10,
          issuedAt: 0,
          expiresAt: 0,
        }}
      ></CouponOfUser>
      <div className="flex flex-row gap-2">
        <Link href="/coupon">
          <button
            type="button"
            className="rounded-lg border border-blue-700 bg-white-100 px-5 py-2.5 text-sm font-medium hover:bg-blue-300 hover:text-white-100 "
          >
            등록하기
          </button>
        </Link>
        <button
          onClick={() => router.back()}
          type="button"
          className="rounded-lg border border-blue-700 bg-white-100 px-5 py-2.5 text-sm font-medium hover:bg-blue-300 hover:text-white-100 "
        >
          사용하기
        </button>
      </div>
      <p>
        <br /> UserTimeBonusCoupon[ id, userId, bonusTime, CouponType, expiresAt ]의 리스트 + UserDiscountCoupon [ id,
        CouponType , discountPercentage, expiresAt]의 리스트
        <br /> 사용하기 위해 쿠폰을 눌렀을 때는 모달에 프로퍼티로 보내겠음
      </p>
      userJwt와 userId를 어떻게 연결할지는 생각해보겠음
      <div className="border"> query GetUserCouponList($userId: string) [ UserCoupon(userId: $userId) ]</div>
    </>
  )
}

const UserCouponPageTitle = () => {
  return <h1 className="text-center text-xl font-bold">내 쿠폰 리스트</h1>
}
