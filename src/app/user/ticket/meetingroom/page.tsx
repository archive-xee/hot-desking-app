import { TicketOfUser } from "@/src/components/molecules/Ticket"
import ListViewContainer from "@/src/components/organisms/ListViewContainer"

export default function UserMeetingRoomTicketPage() {
  return (
    <>
      <UserTicketPageTitle />
      <ListViewContainer
        title="나의 회의실 이용권"
        listItems={
          <>
            <TicketOfUser
              ticket={{
                id: "1",
                type: "time",
                bookable: "meetingroom",
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
                bookable: "meetingroom",
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
                bookable: "meetingroom",
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
                bookable: "meetingroom",
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
                bookable: "meetingroom",
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
                bookable: "meetingroom",
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
      ></ListViewContainer>
    </>
  )
}

const UserTicketPageTitle = () => {
  return <h1 className="text-center text-xl font-bold">이용권 사용하기</h1>
}
