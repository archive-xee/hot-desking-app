import { CLIENT_KEY_SERVER_AUTH, PAYMENT_APPROVAL_SENDING_ENDPOINT } from "@/constant/nicepay"

export async function POST(req: Request) {
  const response: FormData = await req.formData()
  const tid = response.get("tid")
  const amount = response.get("amount")

  const res = await fetch(PAYMENT_APPROVAL_SENDING_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      clientId: CLIENT_KEY_SERVER_AUTH,
      tid: tid,
      amount: amount,
    }),
  })
  const result = await res.json()

  return Response.json({ result })
}
