import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  let pathname = request.nextUrl.pathname;
  // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  if (
    [
      "/favicon.ico",
      "/logo.png",
      // Your other files in `public`
    ].includes(pathname)
  )
    return;

  return NextResponse.next();
}
