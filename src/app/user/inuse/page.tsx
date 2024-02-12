import Link from "next/link";
import { TicketInUse } from "@/src/components/molecules/Ticket";
// 남은 수량이 정말 필요한가?
export default function TicketInUsePage() {
  return (
    <>
      <TicketInUseTitle />
      <VerticalListViewContainer
        actions={
          <Link href="/user/ticket">
            <button
              type="button"
              className="rounded-lg border border-blue-700 bg-white-100 px-5 py-2.5 text-sm font-medium hover:bg-blue-300 hover:text-white-100 "
            >
              전체 이용권 인벤토리
            </button>
          </Link>
        }
        title="사용중인 이용권입니다."
        listItems={
          <>
            <TicketInUse
              ticket={{
                id: "1",
                type: "time",
                bookable: "seat",
                price: 10000,
                period: 86400,
                issuedAt: 1706946429,
                expiresAt: 1707551229,
              }}
            ></TicketInUse>
            <TicketInUse
              ticket={{
                id: "1",
                type: "oneday",
                bookable: "locker",
                price: 10000,
                period: 86400,
                issuedAt: 1706946429,
                expiresAt: 1707551229,
              }}
            ></TicketInUse>
            <TicketInUse
              ticket={{
                id: "1",
                type: "discount",
                bookable: "meetingroom",
                price: 10000,
                period: 86400,
                issuedAt: 1706946429,
                expiresAt: 1707551229,
              }}
            ></TicketInUse>
          </>
        }
      />
    </>
  );
}

// 티켓인모달도 가능할듯...?

const TicketInUseTitle = () => {
  return <h1 className="text-center text-xl font-bold">내 쿠폰 리스트</h1>;
};

// 이건 아마도 새로 만들어야하는...
// 가로로 스크롤이 되는?

type VerticalListViewContainerProps = {
  title: string;
  listItems: React.ReactNode;
  actions?: React.ReactNode;
};

const VerticalListViewContainer = (props: VerticalListViewContainerProps) => {
  const { title, listItems, actions } = props;

  return (
    <div className="container mx-auto  max-w-screen-md  overflow-hidden rounded-lg border border-black-100">
      <div className="bg-white-500 py-2 text-center">
        <p>{title}</p>
      </div>
      <div className="flex w-full flex-col gap-2 px-4 py-2">
        <div className={`flex max-h-96 flex-row gap-2 overflow-x-auto `}>
          {listItems}
        </div>
        <div className="flex flex-row justify-end">{actions}</div>
      </div>
    </div>
  );
};
