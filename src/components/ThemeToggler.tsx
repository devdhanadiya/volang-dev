"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { motion } from "framer-motion"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="h-9 w-9 rounded-full shadow-neumorphic dark:shadow-neumorphic-dark flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-muted"></div>
            </div>
        )
    }

    return (
        <motion.button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="h-9 w-9 rounded-full shadow-neumorphic dark:shadow-neumorphic-dark flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 0 : 180 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="relative w-5 h-5"
            >
                {theme === "dark" ? (
                    <SunIcon className="h-5 w-5 text-amber-400 absolute inset-0" />
                ) : (
                    <MoonIcon className="h-5 w-5 text-slate-700 absolute inset-0" />
                )}
            </motion.div>
        </motion.button>
    )
}

