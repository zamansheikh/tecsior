import { redirect } from "next/navigation";
import { Sidebar } from "@/components/admin/sidebar";
import { Topbar } from "@/components/admin/topbar";
import { adminAuthHeader } from "@/lib/auth-cookie";

export const metadata = {
  title: "Admin · Programmer Nexus",
  robots: { index: false, follow: false },
};

const BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

type Me = { id: string; name: string; email: string; role: string; initials?: string };

async function fetchMe(): Promise<Me | null> {
  try {
    const headers = await adminAuthHeader();
    if (!headers.authorization) return null;
    const res = await fetch(`${BASE}/api/auth/me`, { headers, cache: "no-store" });
    if (!res.ok) return null;
    return (await res.json()) as Me;
  } catch {
    return null;
  }
}

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const me = await fetchMe();
  if (!me) {
    // Cookie exists (middleware passed) but JWT was rejected — force re-login.
    redirect("/login");
  }

  const initials =
    me.initials ??
    me.name
      .split(/\s+/)
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  return (
    <div className="admin">
      <Sidebar />
      <main className="admin-main">
        <Topbar user={{ name: me.name, email: me.email, initials }} />
        <div className="admin-content">{children}</div>
      </main>
    </div>
  );
}
