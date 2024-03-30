type BottomSheetButtonProps = {
  onClick?: () => void
  children: React.ReactNode
}

function BottomSheetButton({ onClick, children }: BottomSheetButtonProps) {
  return (
    <button onClick={onClick} className="rounded-full bg-white-100 px-10 py-2 font-bold text-black-700">
      {children}
    </button>
  )
}

export default BottomSheetButton
