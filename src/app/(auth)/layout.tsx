import { AuthNavBar } from "@/components";
import { ChildrenProps } from "@/types";

export default function AuthLayout({ children }: ChildrenProps) {
    return (
        <div>
            <AuthNavBar />
            {children}
        </div>
    )
}