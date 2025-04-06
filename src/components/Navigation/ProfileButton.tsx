"use client"

import { useState } from "react"
import { useSession, signOut } from "next-auth/react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { User, LogOut, Settings, ChevronDown, AlertCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    Avatar, AvatarFallback, AvatarImage
} from "@/components";

export function ProfileButton() {
    const { data: session } = useSession()
    const [showLogoutDialog, setShowLogoutDialog] = useState(false)

    if (!session) {
        return null
    }

    const userInitials = session.user?.name
        ? session.user.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
        : "U"

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <motion.button
                        className="flex items-center gap-2 rounded-full p-1 outline-none transition-all hover:bg-muted focus:ring-2 focus:ring-primary/20"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Avatar className="h-8 w-8 shadow-neumorphic dark:shadow-neumorphic-dark">
                            <AvatarImage src={session.user?.image || ""} alt={session.user?.name || "User"} />
                            <AvatarFallback className="bg-primary/10 text-primary">
                                {userInitials}
                            </AvatarFallback>
                        </Avatar>
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </motion.button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 shadow-neumorphic dark:shadow-neumorphic-dark" align="end">
                    <DropdownMenuLabel>
                        <div className="flex flex-col space-y-1">
                            <p className="text-sm font-medium leading-none">{session.user?.name}</p>
                            <p className="text-xs leading-none text-muted-foreground">{session.user?.email}</p>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem asChild>
                            <Link href="/profile" className="flex cursor-pointer items-center">
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href="/settings" className="flex cursor-pointer items-center">
                                <Settings className="mr-2 h-4 w-4" />
                                <span>Settings</span>
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        className="text-red-500 focus:text-500"
                        onSelect={() => setShowLogoutDialog(true)}
                    >
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <AnimatePresence>
                {showLogoutDialog && (
                    <Dialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
                        <DialogContent className="sm:max-w-md shadow-neumorphic dark:shadow-neumorphic-dark">
                            <DialogHeader>
                                <DialogTitle className="flex items-center gap-2">
                                    <AlertCircle className="h-5 w-5 text-destructive" />
                                    Confirm Logout
                                </DialogTitle>
                                <DialogDescription>
                                    Are you sure you want to log out of your account?
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter className="flex sm:justify-end gap-2 mt-4">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => setShowLogoutDialog(false)}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="button"
                                    variant="destructive"
                                    onClick={() => signOut({ callbackUrl: "/" })}
                                >
                                    Yes, log out
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                )}
            </AnimatePresence>
        </>
    )
}