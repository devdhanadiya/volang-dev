"use client"

import { SessionProviderProps } from "@/types"
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react"

export function SessionProviderWrapper({ children, session }: SessionProviderProps) {
    return (
        <NextAuthSessionProvider session={session}>
            {children}
        </NextAuthSessionProvider>
    )
}