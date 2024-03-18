"use client"

import { redirect } from "next/navigation"
import { useSession } from "next-auth/react"

export default function useUserId() {
  const { data: accessToken, data: userId } = useSession()
  if (accessToken) {
    redirect("/auth/signin")
  } else {
    return userId
  }
}
