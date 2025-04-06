"use client"

import { ChildrenProps } from "@/types"
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react"

export function SessionProviderWrapper({ children }: ChildrenProps) {
    return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
}