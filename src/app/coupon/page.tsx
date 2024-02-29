"use client"

import { useRouter } from "next/navigation"

export default function CouponPage() {
  return (
    <>
      <CouponPageTitle />
      <CouponRegisterForm />
      <p>
        <br /> QR코드 찍으면 QR객체의 string을 받아올 거고
        <br /> string은 Coupon객체의 CouponType, issuedAt, expiresAt을 서버에서 알아서 잘 섞어서 만든 uuid
        <br /> 다시 말하면 QR객체의 string은 Coupon 객체의 PR key임
        <br /> 쿠폰등록 버튼을 누르면 DiscountCoupon, TimebonusCoupon 중 PR Key가 string과 맞는 객체가
        <br /> UserDiscountCoupon, USerTimebonusCoupon가 되어 User에게 할당될 것임
      </p>
    </>
  )
}

const CouponPageTitle = () => {
  return <h1 className="text-center text-xl font-bold">쿠폰 등록하기</h1>
}

const CouponRegisterForm = () => {
  const router = useRouter()

  return (
    <div className="container mx-auto max-w-screen-sm  overflow-hidden  rounded-lg border border-black-100">
      <div className="bg-white-500 py-2 text-center">
        {/* 키오스크였을 때 */}
        <p>QR코드 인식기에 QR코드를 가까이 해주세요.</p>
        {/* 모바일웹일 때 */}
        {/* <p>쿠폰의 QR코드를 촬영해주세요.</p> */}
      </div>
      <div className="px-2 py-6">
        <form>
          <div className="flex flex-row justify-center">
            <input
              type="qr"
              id="qr"
              className="w-full max-w-sm rounded-lg border  border-black-100 bg-white-300 p-2.5 text-sm"
              placeholder="쿠폰 코드"
              required
            />
          </div>
          <div className="my-12"></div>
          <div className="flex flex-row justify-center">
            <button
              onClick={() => router.back()}
              type="submit"
              className="rounded-lg border border-blue-700 bg-white-100 px-5 py-2.5 text-sm font-medium hover:bg-blue-300 hover:text-white-100 "
            >
              쿠폰 등록
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
