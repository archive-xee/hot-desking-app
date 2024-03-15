import request, { gql } from "graphql-request"
import { APOLLO_ROUTER_URL } from "@/constant/graphql"

const PAYMENT_APPROVAL_SENDING_MUTATION = gql`
  mutation SendPaymentApproval($tid: String!, $amount: Float!) {
    serverAuth(input: { tid: $tid, amount: $amount }) {
      resultCode
    }
  }
`

type PaymentApprovalSendingResponse = {
  serverAuth: {
    resultCode: string
  }
}

export async function POST(req: Request) {
  const response: FormData = await req.formData()
  const tid = response.get("tid")?.toString()
  const amount = Number(response.get("amount"))

  const data: PaymentApprovalSendingResponse = await request(APOLLO_ROUTER_URL, PAYMENT_APPROVAL_SENDING_MUTATION, {
    tid,
    amount,
  })

  const resultCode = data.serverAuth.resultCode

  return Response.json({ resultCode })
}
