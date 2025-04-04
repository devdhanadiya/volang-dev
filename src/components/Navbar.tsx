"use client"

import Link from "next/link"
import { Logo, ThemeToggle, Button } from "@/components"

export function Navbar() {
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <div className="flex gap-6 md:gap-10">
                    <Link href="/" className="flex items-center space-x-2">
                        <Logo />
                        <span className="inline-block font-bold text-xl">voLang</span>
                    </Link>
                    <nav className="hidden md:flex gap-6">
                        <Link
                            href="#features"
                            className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            Features
                        </Link>
                        <Link
                            href="#journal"
                            className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            Journal
                        </Link>
                        <Link
                            href="#translator"
                            className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            Translator
                        </Link>
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-2">
                        <ThemeToggle />
                        <Button variant="ghost" size="sm" className="hidden md:flex">
                            Sign In
                        </Button>
                        <Button size="sm" className="hidden md:flex">
                            Get Started
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}