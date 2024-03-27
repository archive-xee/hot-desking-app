import { getBillingKeyTerm } from "@/actions/nicepay"

export default async function BillingKeyTerm() {
  const billingKeyTerm = await getBillingKeyTerm()
  const { termsTitle, content } = billingKeyTerm
  return (
    <div>
      <p>{termsTitle}</p>
      <p>{content}</p>
    </div>
  )
}
