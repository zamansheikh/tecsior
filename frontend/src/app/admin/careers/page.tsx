"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/icon";
import { PageHead } from "@/components/admin/page-head";
import { AdminToolbar } from "@/components/admin/toolbar";
import { StatusPill } from "@/components/admin/status-pill";
import { SEED_CAREERS } from "@/lib/seed";
import type { Career } from "@/lib/types";

export default function CareersAdminPage() {
  const [careers, setCareers] = useState<Career[]>(SEED_CAREERS);
  const [q, setQ] = useState("");

  useEffect(() => {
    const base = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";
    fetch(`${base}/api/content/careers`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (Array.isArray(d) && d.length) setCareers(d as Career[]); })
      .catch(() => {});
  }, []);

  const filtered = q ? careers.filter((c) => c.title.toLowerCase().includes(q.toLowerCase())) : careers;

  return (
    <>
      <PageHead title="Job openings" sub={`${careers.filter((c) => c.status === "Open").length} open · ${careers.filter((c) => c.status === "Closed").length} closed · ${careers.reduce((s, c) => s + c.applicants, 0)} active applications`} />
      <AdminToolbar
        count={careers.length}
        label="job openings"
        search={q}
        onSearch={setQ}
        filters={[{ value: "All teams", options: ["All teams", "Platform", "Product", "AI", "Design", "Mobile", "Marketing"] }]}
        actionLabel="Post new role"
        onAction={() => {}}
      />
      <div className="panel" style={{ padding: 0, overflow: "hidden" }}>
        <table className="dt">
          <thead>
            <tr><th>ID</th><th>Role</th><th>Team</th><th>Location</th><th>Type</th><th>Status</th><th>Applicants</th><th>Posted</th><th></th></tr>
          </thead>
          <tbody>
            {filtered.map((j) => (
              <tr key={j.id}>
                <td className="row-id">{j.id}</td>
                <td>
                  <div className="cell-title">{j.title}</div>
                  <div style={{ color: "var(--fg-mute)", fontSize: 12 }}>{j.level}</div>
                </td>
                <td><span className="tag">{j.team}</span></td>
                <td style={{ color: "var(--fg-dim)", fontSize: 13 }}>{j.location}</td>
                <td style={{ color: "var(--fg-dim)" }}>{j.type}</td>
                <td><StatusPill status={j.status} /></td>
                <td>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-mono)", fontSize: 12 }}>
                    <Icon name="users" size={12} /> {j.applicants}
                  </span>
                </td>
                <td className="mono" style={{ fontSize: 11.5, color: "var(--fg-faint)" }}>{j.posted}</td>
                <td>
                  <div className="row-actions">
                    <button className="icon-btn"><Icon name="eye" /></button>
                    <button className="icon-btn"><Icon name="edit" /></button>
                    <button className="icon-btn danger"><Icon name="trash" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
