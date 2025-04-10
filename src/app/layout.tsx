import type { Metadata } from "next"
import { Inter, Poppins } from 'next/font/google'
import "@/styles/main.css"
import { ChildrenProps } from "@/types"
import { ThemeProviderWrapper, SessionProviderWrapper } from "@/components"
import { auth } from "@/auth"

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "voLang - All-in-One Language Learning Platform",
  description: "Your all-in-one platform for language learning with dictionary, translator, and personalized vocabulary journal.",
}

export default async function RootLayout({ children }: Readonly<ChildrenProps>) {
  const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <SessionProviderWrapper session={session}>
          <ThemeProviderWrapper
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProviderWrapper>
        </SessionProviderWrapper>
      </body>
    </html>
  )
}