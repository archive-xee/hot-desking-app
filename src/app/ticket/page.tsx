import Image from "next/image";
import Link from "next/link";
import {
  TicketForSale,
  TicketInModal,
} from "@/src/components/molecules/Ticket/index";
import ListViewContainer from "@/src/components/organisms/ListViewContainer";
import { Modal } from "@/src/components/organisms/Modal";
export default function TicketPage() {
  return (
    <>
      <TicketPageTitle />
      <ListViewContainer
        title="정해진 기간동안 사용할 수 있습니다."
        tabs={TicketTypeTab()}
        listItems={
          <>
            <Modal
              trigger={
                <TicketForSale
                  ticket={{
                    id: "1",
                    type: "oneday",
                    bookable: "locker",
                    price: 10000,
                    period: 86400,
                    issuedAt: 1706946429,
                    expiresAt: 1707551229,
                  }}
                ></TicketForSale>
              }
              title="티켓입니다"
              content={
                <TicketInModal
                  ticket={{
                    id: "1",
                    type: "time",
                    bookable: "seat",
                    price: 10000,
                    period: 86400,
                    issuedAt: 1706946429,
                    expiresAt: 1707551229,
                  }}
                ></TicketInModal>
              }
              actions={
                <button
                  type="button"
                  className="rounded-lg border border-blue-700 bg-white-100 px-5 py-2 text-sm font-medium hover:bg-blue-300 hover:text-white-100 "
                >
                  확인
                </button>
              }
            ></Modal>

            <TicketForSale
              ticket={{
                id: "1",
                type: "time",
                bookable: "seat",
                price: 10000,
                period: 86400,
                issuedAt: 1706946429,
                expiresAt: 1707551229,
              }}
            ></TicketForSale>
          </>
        }
        actions={
          <Link href="/user/coupon">
            <button
              type="button"
              className="rounded-lg border border-blue-700 bg-white-100 px-5 py-2.5 text-sm font-medium hover:bg-blue-300 hover:text-white-100 "
            >
              쿠폰 적용
            </button>
          </Link>
        }
      />
    </>
  );
}

const TicketPageTitle = () => {
  return <h1 className="text-center text-xl font-bold">이용권 구매하기</h1>;
};

const TicketTypeTab = () => {
  return (
    <aside>
      <ul className="h-full w-32 bg-white-300 py-2 font-medium">
        <li className="flex flex-row p-2  hover:bg-yellow-300">
          <Image
            src="/icons/ticket/period.png"
            alt="기간권"
            width="24"
            height="24"
          ></Image>
          <span className="ms-3">기간권</span>
        </li>
        <li className="flex flex-row p-2 hover:bg-purple-100">
          <Image
            src="/icons/ticket/oneday.png"
            alt="당일권"
            width="24"
            height="24"
          ></Image>
          <span className="ms-3">당일권</span>
        </li>
        <li className="flex flex-row p-2 hover:bg-blue-300">
          <Image
            src="/icons/ticket/time.png"
            alt="시간권"
            width="24"
            height="24"
          ></Image>
          <span className="ms-3">시간권</span>
        </li>
        <li className="flex flex-row p-2  hover:bg-teal-100">
          <Image
            src="/icons/ticket/discount.png"
            alt="할인권"
            width="24"
            height="24"
          ></Image>
          <span className="ms-3">할인권</span>
        </li>
      </ul>
    </aside>
  );
};
