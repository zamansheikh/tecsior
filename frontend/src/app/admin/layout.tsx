import { Sidebar } from "@/components/admin/sidebar";
import { Topbar } from "@/components/admin/topbar";

export const metadata = {
  title: "Admin · Programmer Nexus",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin">
      <Sidebar />
      <main className="admin-main">
        <Topbar />
        <div className="admin-content">{children}</div>
      </main>
    </div>
  );
}
