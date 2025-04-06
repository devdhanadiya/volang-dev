import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const sessionToken =
        req.cookies.get("next-auth.session-token")?.value ||
        req.cookies.get("__Secure-next-auth.session-token")?.value;

    const isLoggedIn = Boolean(sessionToken);
    const { pathname } = req.nextUrl;

    if (isLoggedIn && pathname.startsWith("/login")) {
        return NextResponse.redirect(new URL("/", req.url));
        console.log("Redirecting to home page");
    }

    if (!isLoggedIn && pathname.startsWith("/dashboard")) {
        const redirectUrl = new URL(
            `/auth/signin?callbackUrl=${encodeURIComponent(req.nextUrl.pathname)}`,
            req.nextUrl.origin
        );
        return NextResponse.redirect(redirectUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/login/:path*"],
};
