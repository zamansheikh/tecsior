"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/icon";
import { PageHead } from "@/components/admin/page-head";
import { AdminToolbar } from "@/components/admin/toolbar";
import { StatusPill } from "@/components/admin/status-pill";
import { SEED_APPLICATIONS } from "@/lib/seed";
import type { Application } from "@/lib/types";

const STAGES = ["Applied", "Tech screen", "Portfolio review", "Hiring manager", "Onsite", "Offer"];
const STAGE_COUNTS: Record<string, number> = {
  Applied: 18, "Tech screen": 11, "Portfolio review": 6, "Hiring manager": 5, Onsite: 4, Offer: 3,
};

export default function ApplicationsAdminPage() {
  const [apps, setApps] = useState<Application[]>(SEED_APPLICATIONS);
  const [q, setQ] = useState("");

  useEffect(() => {
    fetch("/api/proxy/applications")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (Array.isArray(d) && d.length) setApps(d as Application[]); })
      .catch(() => {});
  }, []);

  const roles = Array.from(new Set(apps.map((a) => a.role)));
  const filtered = q ? apps.filter((a) => a.candidate.toLowerCase().includes(q.toLowerCase())) : apps;

  return (
    <>
      <PageHead title="Applications" sub="47 active candidates across the funnel" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 8, marginBottom: 24 }}>
        {STAGES.map((s, i) => (
          <div key={s} className="card" style={{ padding: 16, borderColor: i === 0 ? "var(--accent)" : "var(--border)" }}>
            <div className="mono" style={{ fontSize: 10, color: "var(--fg-faint)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Stage {i + 1}
            </div>
            <div style={{ fontWeight: 500, marginTop: 4, fontSize: 14 }}>{s}</div>
            <div style={{ fontSize: 26, fontWeight: 500, marginTop: 8, letterSpacing: "-0.02em" }}>{STAGE_COUNTS[s]}</div>
          </div>
        ))}
      </div>

      <AdminToolbar
        count={apps.length}
        label="applications"
        search={q}
        onSearch={setQ}
        filters={[
          { value: "All stages", options: ["All stages", ...STAGES, "Rejected"] },
          { value: "All roles", options: ["All roles", ...roles] },
        ]}
      />
      <div className="panel" style={{ padding: 0, overflow: "hidden" }}>
        <table className="dt">
          <thead>
            <tr><th>ID</th><th>Candidate</th><th>Applied for</th><th>Stage</th><th>Score</th><th>Source</th><th>Applied</th><th></th></tr>
          </thead>
          <tbody>
            {filtered.map((a) => (
              <tr key={a.id}>
                <td className="row-id">{a.id}</td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div className="avatar" style={{ width: 30, height: 30, fontSize: 11 }}>{a.candidate.split(" ").map((x) => x[0]).join("")}</div>
                    <span className="cell-title">{a.candidate}</span>
                  </div>
                </td>
                <td style={{ color: "var(--fg-dim)" }}>{a.role}</td>
                <td><StatusPill status={a.stage} /></td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 60, height: 4, background: "var(--surface-2)", borderRadius: 2, overflow: "hidden" }}>
                      <div style={{ width: `${a.score}%`, height: "100%", background: a.score > 85 ? "var(--accent)" : a.score > 70 ? "var(--info)" : "var(--warn)" }} />
                    </div>
                    <span className="mono" style={{ fontSize: 12.5, color: a.score > 85 ? "var(--accent)" : "var(--fg-dim)" }}>{a.score}</span>
                  </div>
                </td>
                <td style={{ color: "var(--fg-mute)", fontSize: 13 }}>{a.source}</td>
                <td className="mono" style={{ fontSize: 11.5, color: "var(--fg-faint)" }}>{a.date}</td>
                <td><button className="icon-btn"><Icon name="chevron" /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
