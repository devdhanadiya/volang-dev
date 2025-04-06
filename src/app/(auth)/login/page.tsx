"use client"

import { useState } from "react"
import Link from "next/link"
import { signIn } from "next-auth/react"
import { motion } from "framer-motion"
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components"
import Image from "next/image"

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false)

    const handleGoogleSignIn = async () => {
        setIsLoading(true)
        try {
            await signIn("google", { callbackUrl: "/" })
        } catch (error) {
            console.error("Error signing in with Google", error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1 flex items-center justify-center p-4">
                <motion.div
                    className="w-full max-w-md p-8 rounded-xl shadow-neumorphic dark:shadow-neumorphic-dark bg-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="space-y-6">
                        <div className="space-y-2 text-center">
                            <h1 className="text-3xl font-bold tracking-tighter font-heading">Welcome Back</h1>
                            <p className="text-muted-foreground">Sign in to continue your language learning journey</p>
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Button
                                className="w-full h-12 shadow-neumorphic dark:shadow-neumorphic-dark flex items-center justify-center gap-2"
                                onClick={handleGoogleSignIn}
                                disabled={isLoading}
                            >
                                <Image
                                    src="/google.svg"
                                    alt="Google Logo"
                                    width={20}
                                    height={20}
                                    className="h-5 w-5"
                                />
                                {isLoading ? "Signing in..." : "Continue with Google"}
                            </Button>
                        </motion.div>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t"></span>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-card px-2 text-muted-foreground">or</span>
                            </div>
                        </div>

                        <div className="text-center">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Back to home
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </main>

            <footer className="border-t py-4">
                <div className="container flex justify-center text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} voLang. All rights reserved.
                </div>
            </footer>
        </div>
    )
}