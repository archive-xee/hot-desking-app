"use client"

// import { gql } from "@apollo/client"
import { useRouter } from "next/navigation"
import StretchedCoupon from "@/components/molecules/Coupon/StretchedCoupon"
import BottomSheetModal from "@/components/organisms/BottomSheetModal"

// const GET_USER_COUPON_LIST = gql`
//   query GetUserCouponList($userId: string) {
//     UserCoupon(userId: $userId)
//   }
// `

// 서버 컴포넌트/액션으로 뮤테이션 보내기
export default function UserCouponPage() {
  const router = useRouter()
  return (
    <>
      <UserCouponPageIntroduction />
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
                // 쿠폰 적용을 결제페이지에서 해야 할듯
                router.back()
              }}
              className="rounded-full bg-white-100 px-10 py-2 font-bold text-black-700"
            >
              사용하기
            </button>
          </div>
        }
      ></BottomSheetModal>
      <div className="border"> query GetUserCouponList($userId: string) [ UserCoupon(userId: $userId) ]</div>
    </>
  )
}

const UserCouponPageIntroduction = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-center text-xl font-bold">내 쿠폰 리스트</h1>
      <h3 className="text-center">쿠폰을 등록하려면 실물쿠폰의 QR코드를 촬영해주세요.</h3>
    </div>
  )
}
