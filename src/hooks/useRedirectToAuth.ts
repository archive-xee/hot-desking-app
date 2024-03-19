"use client"

import { redirect } from "next/navigation"
import { useSession } from "next-auth/react"
import { useEffect } from "react"

export default function useRedirectToAuth() {
  const { data: session } = useSession()
  useEffect(() => {
    if (!session?.userId) {
      redirect("/auth/signin")
    }
  })
}
