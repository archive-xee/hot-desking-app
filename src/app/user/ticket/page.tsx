import { TicketOfUser } from "@/src/components/molecules/Ticket"
import ListViewContainer from "@/src/components/organisms/ListViewContainer"

export default function UserTicketPage() {
  return (
    <>
      <UserTicketPageTitle />
      <ListViewContainer
        listItems={
          <>
            <TicketOfUser
              ticket={{
                id: "1",
                type: "time",
                bookable: "seat",
                price: 10000,
                period: 86400,
                issuedAt: 1706946429,
                expiresAt: 1707551229,
              }}
            ></TicketOfUser>
            <TicketOfUser
              ticket={{
                id: "1",
                type: "time",
                bookable: "seat",
                price: 10000,
                period: 86400,
                issuedAt: 1706946429,
                expiresAt: 1707551229,
              }}
            ></TicketOfUser>
            <TicketOfUser
              ticket={{
                id: "1",
                type: "time",
                bookable: "seat",
                price: 10000,
                period: 86400,
                issuedAt: 1706946429,
                expiresAt: 1707551229,
              }}
            ></TicketOfUser>
            <TicketOfUser
              ticket={{
                id: "1",
                type: "time",
                bookable: "seat",
                price: 10000,
                period: 86400,
                issuedAt: 1706946429,
                expiresAt: 1707551229,
              }}
            ></TicketOfUser>
            <TicketOfUser
              ticket={{
                id: "1",
                type: "time",
                bookable: "seat",
                price: 10000,
                period: 86400,
                issuedAt: 1706946429,
                expiresAt: 1707551229,
              }}
            ></TicketOfUser>
            <TicketOfUser
              ticket={{
                id: "1",
                type: "time",
                bookable: "seat",
                price: 10000,
                period: 86400,
                issuedAt: 1706946429,
                expiresAt: 1707551229,
              }}
            ></TicketOfUser>
            <TicketOfUser
              ticket={{
                id: "1",
                type: "time",
                bookable: "seat",
                price: 10000,
                period: 86400,
                issuedAt: 1706946429,
                expiresAt: 1707551229,
              }}
            ></TicketOfUser>
            <TicketOfUser
              ticket={{
                id: "1",
                type: "time",
                bookable: "seat",
                price: 10000,
                period: 86400,
                issuedAt: 1706946429,
                expiresAt: 1707551229,
              }}
            ></TicketOfUser>
          </>
        }
        actions={
          <div className="flex flex-row gap-2">
            <button
              type="button"
              className="rounded-lg border border-blue-700 bg-white-100 px-5 py-2.5 text-sm font-medium hover:bg-blue-300 hover:text-white-100 "
            >
              구매하기
            </button>
          </div>
        }
        title="사용가능한 티켓"
      ></ListViewContainer>
    </>
  )
}

const UserTicketPageTitle = () => {
  return <h1 className="text-center text-xl font-bold">이용권 사용하기</h1>
}
