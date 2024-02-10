import { CouponOfUser } from "@/src/components/molecules/Coupon"
import ListViewContainer from "@/src/components/organisms/ListViewContainer"

export default function UserCouponPage() {
  return (
    <div className="m-auto mx-1 flex flex-col gap-2 py-1">
      <UserCouponPageTitle />
      <ListViewContainer
        title="8시간을 추가로 드립니다."
        listItems={
          <>
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
          </>
        }
        actions={
          <div className="flex flex-row gap-2">
            <button
              type="button"
              className="rounded-lg border border-blue-700 bg-white-100 px-5 py-2.5 text-sm font-medium hover:bg-blue-300 hover:text-white-100 "
            >
              사용하기
            </button>
          </div>
        }
      ></ListViewContainer>
    </div>
  )
}

const UserCouponPageTitle = () => {
  return <h1 className="text-center text-xl font-bold">내 쿠폰 리스트</h1>
}
