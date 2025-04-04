"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function HeroSection() {
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <section className="relative py-20 md:py-28 overflow-hidden">
            <div className="container relative z-10">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <motion.h1
                        className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Master Languages with <span className="text-primary">voLang</span>
                    </motion.h1>
                    <motion.p
                        className="mx-auto max-w-[700px] text-xl text-muted-foreground"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Your all-in-one platform for language learning with dictionary, translator, and personalized vocabulary
                        journal.
                    </motion.p>

                    <motion.div
                        className="max-w-md mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="relative rounded-full shadow-neumorphic dark:shadow-neumorphic-dark overflow-hidden">
                            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Search for a word..."
                                className="w-full pl-10 pr-20 py-6 rounded-full border-none bg-background dark:bg-card shadow-neumorphic-inset dark:shadow-neumorphic-inset-dark focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <div className="absolute right-1 top-1/2 -translate-y-1/2">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button className="rounded-full px-4 shadow-neumorphic dark:shadow-neumorphic-dark">Search</Button>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <span>Popular searches:</span>
                        <button
                            onClick={() => setSearchTerm("serendipity")}
                            className="bg-muted/50 px-3 py-1 rounded-full hover:bg-muted transition-colors"
                        >
                            serendipity
                        </button>
                        <button
                            onClick={() => setSearchTerm("ephemeral")}
                            className="bg-muted/50 px-3 py-1 rounded-full hover:bg-muted transition-colors"
                        >
                            ephemeral
                        </button>
                        <button
                            onClick={() => setSearchTerm("ubiquitous")}
                            className="bg-muted/50 px-3 py-1 rounded-full hover:bg-muted transition-colors"
                        >
                            ubiquitous
                        </button>
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.08),transparent_40%)]" />
        </section>
    )
}

