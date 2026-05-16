import { NextResponse, type NextRequest } from "next/server";
import { getAdminToken } from "@/lib/auth-cookie";

const BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

/**
 * Authenticated proxy: forwards /api/admin/<path> from the browser to the
 * backend at <BASE>/api/<path>, injecting the admin JWT from the httpOnly cookie.
 * Lets client components hit protected endpoints without ever seeing the token.
 */
async function proxy(req: NextRequest, ctx: { params: Promise<{ path: string[] }> }) {
  const token = await getAdminToken();
  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { path } = await ctx.params;
  const url = new URL(req.url);
  const upstream = `${BASE}/api/${path.join("/")}${url.search}`;

  const headers: Record<string, string> = {
    authorization: `Bearer ${token}`,
  };
  const ct = req.headers.get("content-type");
  if (ct) headers["content-type"] = ct;

  const init: RequestInit = {
    method: req.method,
    headers,
    cache: "no-store",
  };
  if (!["GET", "HEAD"].includes(req.method)) {
    init.body = await req.text();
  }

  const res = await fetch(upstream, init);
  const responseHeaders = new Headers();
  const upstreamCt = res.headers.get("content-type");
  if (upstreamCt) responseHeaders.set("content-type", upstreamCt);

  return new NextResponse(res.body, { status: res.status, headers: responseHeaders });
}

export const GET = proxy;
export const POST = proxy;
export const PATCH = proxy;
export const PUT = proxy;
export const DELETE = proxy;
