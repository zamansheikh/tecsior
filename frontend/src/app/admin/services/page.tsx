"use client";

import { useEffect, useState } from "react";
import { Icon, type IconName } from "@/components/ui/icon";
import { PageHead } from "@/components/admin/page-head";
import { AdminToolbar } from "@/components/admin/toolbar";
import { StatusPill } from "@/components/admin/status-pill";
import { SEED_SERVICES } from "@/lib/seed";
import type { Service } from "@/lib/types";

export default function ServicesAdminPage() {
  const [services, setServices] = useState<Service[]>(SEED_SERVICES);
  const [q, setQ] = useState("");

  useEffect(() => {
    const base = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:7001";
    fetch(`${base}/api/content/services`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (Array.isArray(d) && d.length) setServices(d as Service[]); })
      .catch(() => {});
  }, []);

  const filtered = q
    ? services.filter((s) => s.title.toLowerCase().includes(q.toLowerCase()) || s.tags.some((t) => t.toLowerCase().includes(q.toLowerCase())))
    : services;

  return (
    <>
      <PageHead title="Services" sub="The six capabilities shown on the marketing site." />
      <AdminToolbar count={services.length} label="services" search={q} onSearch={setQ} actionLabel="New service" onAction={() => {}} />
      <div className="panel" style={{ padding: 0, overflow: "hidden" }}>
        <table className="dt">
          <thead><tr><th>Order</th><th>Service</th><th>Tags</th><th>Status</th><th>Last edited</th><th></th></tr></thead>
          <tbody>
            {filtered.map((s) => (
              <tr key={s.num}>
                <td className="row-id">{s.num}</td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: "var(--surface-2)", border: "1px solid var(--border)", display: "grid", placeItems: "center", color: "var(--accent)" }}>
                      <Icon name={s.icon as IconName} size={16} />
                    </div>
                    <div>
                      <div className="cell-title">{s.title}</div>
                      <div style={{ color: "var(--fg-mute)", fontSize: 12, maxWidth: 360, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{s.desc}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                    {s.tags.slice(0, 3).map((t) => <span key={t} className="tag" style={{ fontSize: 10.5 }}>{t}</span>)}
                  </div>
                </td>
                <td><StatusPill status="Published" /></td>
                <td className="mono" style={{ fontSize: 11.5, color: "var(--fg-faint)" }}>2d ago · Zaman S.</td>
                <td>
                  <div className="row-actions">
                    <button className="icon-btn" title="View"><Icon name="eye" /></button>
                    <button className="icon-btn" title="Edit"><Icon name="edit" /></button>
                    <button className="icon-btn danger" title="Delete"><Icon name="trash" /></button>
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
