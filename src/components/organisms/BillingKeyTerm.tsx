import { getBillingKeyTerm } from "@/actions/nicepay"

export default async function BillingKeyTerm() {
  const billingKeyTerm = await getBillingKeyTerm()
  const { content } = billingKeyTerm
  return (
    <div>
      {content.split(/(제\d+조|\d+\.\s)/).map((item, index) => {
        if (index % 2 === 0) {
          return item
        } else {
          return (
            <span key={index}>
              <br />
              {item}
            </span>
          )
        }
      })}
    </div>
  )
}
