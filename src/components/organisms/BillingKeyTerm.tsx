import { getBillingKeyTerm } from "@/actions/nicepay"
import SubTitle from "@/components/molecules/Title/SubTitle"

export default async function BillingKeyTerm() {
  const billingKeyTerm = await getBillingKeyTerm()
  const { termsTitle, content } = billingKeyTerm
  console.log(content)
  return (
    <div>
      <SubTitle text={termsTitle} />
      <p>{content}</p>
    </div>
  )
}
