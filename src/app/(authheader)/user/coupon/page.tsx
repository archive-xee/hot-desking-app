"use client"

// import { gql } from "@apollo/client"
import { useRouter } from "next/navigation"
import Button from "@/components/molecules/Button/Button"
import StretchedCoupon from "@/components/molecules/Coupon/StretchedCoupon"
import BottomSheetModal from "@/components/molecules/Modal/BottomSheetModal"
import SubTitle from "@/components/molecules/Title/SubTitle"
import Title from "@/components/molecules/Title/Title"

// const GET_USER_COUPON_LIST = gql`
//   query GetUserCouponList($userId: string) {
//     UserCoupon(userId: $userId)
//   }
// `

// 쿠폰의 일회권/정기권 타입이 있으면, 그거에 맞춰서 redirect 가능 (useRouter 필요없음)
// 즉, 서버 컴포넌트/액션으로 뮤테이션 가능
export default function UserCouponPage() {
  const router = useRouter()
  return (
    <>
      <Title text="내 쿠폰 리스트" />
      <SubTitle text="쿠폰을 등록하려면 실물쿠폰의 QR코드를 촬영해주세요." />
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
            <Button onClick={() => router.back()}>사용하기</Button>
          </div>
        }
      ></BottomSheetModal>
      <div className="border"> query GetUserCouponList($userId: string) [ UserCoupon(userId: $userId) ]</div>
    </>
  )
}
