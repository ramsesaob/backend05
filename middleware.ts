import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";




const isProtectedRoute = createRouteMatcher([
    '/laptop(.*)',
    '/habilidades(.*)',
  ]);
  export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) auth().protect();
  
    return NextResponse.next();
  });

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

