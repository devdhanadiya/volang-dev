import { BookOpenText } from "lucide-react"

export function Logo() {
    return (
        <div className="flex items-center justify-center w-10 h-10 rounded-full shadow-neumorphic dark:shadow-neumorphic-dark bg-background transition-all duration-300 hover:scale-105">
            <BookOpenText className="h-5 w-5 text-primary" />
        </div>
    )
}

