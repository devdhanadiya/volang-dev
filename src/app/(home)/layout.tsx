import { Navbar } from "@/components";
import { ChildrenProps } from "@/types";

export default function HomeLayout({ children }: ChildrenProps) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}