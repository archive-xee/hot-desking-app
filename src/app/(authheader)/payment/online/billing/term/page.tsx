import BillingKeyTerm from "@/components/organisms/BillingKeyTerm"

function BillingTermPage() {
  return (
    <div>
      {/* <BillingKeyTerm /> */}
      <div className="flex flex-col items-center">
        <input
          id="payment-registered-card"
          type="checkbox"
          // onChange={({ target: { checked } }) => {}}
          className="size-4 rounded bg-white-100 text-black-700"
        />
        <label>약관에 동의하고 진행하기</label>
      </div>
    </div>
  )
}

export default BillingTermPage
