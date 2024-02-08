type TicketViewContainerProps = {
  tabs?: React.ReactNode
  tickets: React.ReactNode
  actions?: React.ReactNode
}

const TicketViewContainer = (props: TicketViewContainerProps) => {
  const overflowPadding = 1 == 2 ? "pr-2" : ""

  const { tabs, tickets, actions } = props
  return (
    <div className="container mx-auto  max-w-screen-md  overflow-hidden rounded-lg border border-black-100">
      <div className="bg-white-500 py-2 text-center">
        <p>기간권은 특정 기간동안 사용할 수 있습니다.</p>
      </div>
      <div className="flex flex-row">
        {tabs}
        {/* <aside>
          <ul className="h-full w-32 bg-white-300 py-2 font-medium">
            <li className="flex flex-row p-2  hover:bg-yellow-300">
              <Image src="/icons/ticket/period.png" alt="기간권" width="24" height="24"></Image>
              <span className="ms-3">기간권</span>
            </li>
            <li className="flex flex-row p-2 hover:bg-purple-100">
              <Image src="/icons/ticket/oneday.png" alt="당일권" width="24" height="24"></Image>
              <span className="ms-3">당일권</span>
            </li>
            <li className="flex flex-row p-2 hover:bg-blue-300">
              <Image src="/icons/ticket/time.png" alt="시간권" width="24" height="24"></Image>
              <span className="ms-3">시간권</span>
            </li>
            <li className="flex flex-row p-2  hover:bg-teal-100">
              <Image src="/icons/ticket/discount.png" alt="할인권" width="24" height="24"></Image>
              <span className="ms-3">할인권</span>
            </li>
          </ul>
        </aside> */}
        <div className="flex w-full flex-col gap-2 px-4 py-2">
          <div className={`flex max-h-96 flex-col gap-2 overflow-y-auto ${overflowPadding}`}>{tickets}</div>
          <div className="flex flex-row justify-end">{actions}</div>
        </div>
      </div>
    </div>
  )
}

export default TicketViewContainer
