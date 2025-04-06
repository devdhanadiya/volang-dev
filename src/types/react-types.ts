import { Session } from "next-auth";
import { ReactNode } from "react";

export interface ChildrenProps {
    children: ReactNode;
}

export interface SessionProviderProps {
    children: ReactNode;
    session: Session | null;
}