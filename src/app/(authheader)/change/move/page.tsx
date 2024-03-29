import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { getUserIdAfterCheckAuthRedirect } from "@/actions/authjs"
import { moveToNewBookable } from "@/actions/booth"

export default async function BookableMovePage() {
  const userId = await getUserIdAfterCheckAuthRedirect()
  const urlObject = new URL(headers().get("x-url")!)
  const seatId = urlObject.searchParams.get("seatId") ?? "seatIdError"
  const succeed = await moveToNewBookable(userId, seatId)
  const result = succeed ? "success" : "failed"
  redirect(`change/move/${result}`)
}
