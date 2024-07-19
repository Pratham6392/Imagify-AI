import { clerkMiddleware } from "@clerk/nextjs/server";

import next from "next";

// export default clerkMiddleware();

export default clerkMiddleware({
  publicRoutes:['/api/webhooks/clerk']
   
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};


