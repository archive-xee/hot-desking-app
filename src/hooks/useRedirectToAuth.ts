"use client"

import { redirect } from "next/navigation"
import { useSession } from "next-auth/react"

export default function useRedirectToAuth() {
  const { data: accessToken } = useSession()
  if (accessToken) {
    redirect("/auth/signin")
  }
}
