type TicketViewContainerProps = {
  title: string
  tabs?: React.ReactNode
  listItems: React.ReactNode
  actions?: React.ReactNode
}

const ListViewContainer = (props: TicketViewContainerProps) => {
  const { title, tabs, listItems, actions } = props

  return (
    <div className="container mx-auto  max-w-screen-md  overflow-hidden rounded-lg border border-black-100">
      <div className="bg-white-500 py-2 text-center">
        <p>{title}</p>
      </div>
      <div className="flex w-full flex-col ">
        {tabs}
        <div className="flex flex-col gap-2 px-4 py-2">
          <div className={`flex max-h-96 flex-col gap-2 overflow-y-auto `}>{listItems}</div>
          <div className="flex flex-row justify-end">{actions}</div>
        </div>
      </div>
    </div>
  )
}

export default ListViewContainer
