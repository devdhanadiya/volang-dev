import { authOptions } from "@/lib/auth/config";
import { getServerSession } from "next-auth";

// Export API route handlers
export { GET, POST } from "@/app/api/auth/[...nextauth]/route";

// Auth function for server components
export const auth = () => getServerSession(authOptions);

// Utility functions
export const getCurrentUser = async () => {
    const session = await auth();
    return session?.user;
};

export const getCurrentUserId = async () => {
    const session = await auth();
    return session?.user?.id;
};