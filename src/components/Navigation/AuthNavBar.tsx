import Link from "next/link";
import { ThemeToggle, Logo } from "@/components";

export function AuthNavBar() {
    return (
        <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <Logo />
                    <span className="inline-block font-bold text-xl">voLang</span>
                </Link>
                <ThemeToggle />
            </div>
        </header>
    )
}