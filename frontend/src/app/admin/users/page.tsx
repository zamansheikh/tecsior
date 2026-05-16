"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/icon";
import { PageHead } from "@/components/admin/page-head";
import { AdminToolbar } from "@/components/admin/toolbar";
import { SEED_USERS } from "@/lib/seed";

const ROLE_COLORS: Record<string, string> = { Owner: "tag-accent", Admin: "tag-info", Editor: "tag", Author: "tag", Viewer: "tag" };
const ROLES = [
  { name: "Owner", color: "var(--accent)", perms: ["Full access", "Billing", "Delete workspace", "Manage roles"] },
  { name: "Admin", color: "var(--info)", perms: ["Edit everything", "Manage users", "API keys", "No billing"] },
  { name: "Editor", color: "#C792EA", perms: ["Edit content", "Publish posts", "View inquiries", "No users/settings"] },
  { name: "Viewer", color: "var(--fg-mute)", perms: ["Read-only access", "Export reports", "No edit rights", "No inbox"] },
];

export default function UsersAdminPage() {
  const [search, setSearch] = useState("");
  const filtered = search
    ? SEED_USERS.filter((u) => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()))
    : SEED_USERS;
  return (
    <>
      <PageHead title="Users & roles" sub="6 active members · 4 roles · SSO via Google Workspace" />
      <AdminToolbar
        count={SEED_USERS.length}
        label="users"
        search={search}
        onSearch={setSearch}
        filters={[{ value: "All roles", options: ["All roles", "Owner", "Admin", "Editor", "Author", "Viewer"] }]}
        actionLabel="Invite user"
        onAction={() => {}}
      />

      <div className="panel" style={{ padding: 0, overflow: "hidden", marginBottom: 24 }}>
        <table className="dt">
          <thead>
            <tr><th><input type="checkbox" /></th><th>User</th><th>Role</th><th>Last active</th><th>2FA</th><th></th></tr>
          </thead>
          <tbody>
            {filtered.map((u) => (
              <tr key={u.id}>
                <td><input type="checkbox" /></td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div className="avatar" style={{ width: 34, height: 34, fontSize: 12 }}>{u.initials}</div>
                    <div>
                      <div className="cell-title">
                        {u.name} {u.you && <span className="tag" style={{ fontSize: 10, marginLeft: 6 }}>You</span>}
                      </div>
                      <div style={{ color: "var(--fg-mute)", fontSize: 12 }}>{u.email}</div>
                    </div>
                  </div>
                </td>
                <td><span className={`tag ${ROLE_COLORS[u.role] ?? "tag"}`}>{u.role}</span></td>
                <td className="mono" style={{ fontSize: 12, color: "var(--fg-faint)" }}>{u.lastActive}</td>
                <td>
                  <span className="tag tag-accent">
                    <Icon name="check" size={10} /> Enabled
                  </span>
                </td>
                <td>
                  <div className="row-actions">
                    <button className="icon-btn"><Icon name="edit" /></button>
                    <button className="icon-btn danger"><Icon name="trash" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={{ margin: "32px 0 16px", fontSize: 16, fontWeight: 500 }}>Roles & permissions</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
        {ROLES.map((r) => (
          <div key={r.name} className="card">
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: `${r.color}20`, border: `1px solid ${r.color}40`, display: "grid", placeItems: "center" }}>
                <Icon name="shield" size={14} />
              </div>
              <h4 style={{ margin: 0, fontSize: 15, fontWeight: 500 }}>{r.name}</h4>
            </div>
            <ul style={{ listStyle: "none", padding: 0, marginTop: 16 }}>
              {r.perms.map((p) => (
                <li key={p} style={{ display: "flex", gap: 8, padding: "6px 0", fontSize: 12.5, color: "var(--fg-dim)" }}>
                  <Icon name="check" size={12} /> {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
