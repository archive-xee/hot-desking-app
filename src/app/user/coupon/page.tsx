"use client"

// import { gql } from "@apollo/client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import StretchedCoupon from "@/components/molecules/Coupon/StretchedCoupon"
import BottomSheetModal from "@/components/organisms/BottomSheetModal"

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
      <CouponRegistrationButton />
      <BottomSheetModal
        trigger={
          <StretchedCoupon
            coupon={{
              id: "1",
              type: "timebonus",
              bookable: "seat",
              digit: 10,
              issuedAt: 0,
              expiresAt: 0,
            }}
          ></StretchedCoupon>
        }
        content={
          <div className="flex flex-row justify-center">
            <button
              onClick={() => {
                router.back()
              }}
              className="bg-white-100 text-black-700 rounded-full px-10 py-2 font-bold"
            >
              사용하기
            </button>
          </div>
        }
      ></BottomSheetModal>
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

const CouponRegistrationButton = () => {
  return (
    <Link href="/coupon">
      <button
        type="button"
        className="bg-white-100 hover:text-white-100 w-full rounded-lg border border-blue-700 px-5 py-2.5 text-sm font-medium hover:bg-blue-300 "
      >
        쿠폰 등록하기
      </button>
    </Link>
  )
}
