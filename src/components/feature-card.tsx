"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import * as LucideIcons from "lucide-react"

interface FeatureCardProps {
    title: string
    description: string
    icon: string
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
    // Dynamically get the icon from lucide-react
    const Icon = LucideIcons[icon as keyof typeof LucideIcons] as LucideIcon

    return (
        <motion.div
            className="group rounded-xl p-6 shadow-neumorphic dark:shadow-neumorphic-dark bg-card hover-neumorphic transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 shadow-neumorphic dark:shadow-neumorphic-dark transition-all duration-300">
                {Icon && <Icon className="h-6 w-6 text-primary" />}
            </div>
            <h3 className="mb-2 text-xl font-bold">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </motion.div>
    )
}

