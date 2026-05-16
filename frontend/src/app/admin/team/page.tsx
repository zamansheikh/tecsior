"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/icon";
import { PageHead } from "@/components/admin/page-head";
import { AdminToolbar } from "@/components/admin/toolbar";
import { SEED_TEAM } from "@/lib/seed";
import type { TeamMember } from "@/lib/types";

const EXTRA: TeamMember[] = [
  { name: "Asif Mahmud", role: "Staff Engineer", initials: "AM", focus: "Platform" },
  { name: "Reem Hassan", role: "Senior Designer", initials: "RH", focus: "Brand" },
  { name: "Liu Wei", role: "ML Engineer", initials: "LW", focus: "Evals" },
  { name: "Olu Adekoya", role: "Senior Engineer", initials: "OA", focus: "Mobile" },
  { name: "Camille Roux", role: "Engineering Lead", initials: "CR", focus: "Backend" },
  { name: "Joon-ho Park", role: "Staff Engineer", initials: "JP", focus: "AI" },
];

export default function TeamAdminPage() {
  const [search, setSearch] = useState("");
  const all = [...SEED_TEAM, ...EXTRA];
  const filtered = search ? all.filter((p) => p.name.toLowerCase().includes(search.toLowerCase())) : all;

  return (
    <>
      <PageHead title="Team members" sub="38 people across Dhaka, London and Lagos. Public team page shows leadership only." />
      <AdminToolbar
        count={all.length}
        label="team members"
        search={search}
        onSearch={setSearch}
        filters={[
          { value: "All offices", options: ["All offices", "Dhaka", "London", "Lagos", "Remote"] },
          { value: "All teams", options: ["All teams", "Engineering", "Design", "AI", "Operations"] },
        ]}
        actionLabel="Add member"
        onAction={() => {}}
      />
      <div className="grid-4">
        {filtered.map((p, i) => (
          <div key={p.name} className="card card-hover" style={{ padding: 20 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div className="avatar" style={{ width: 44, height: 44, fontSize: 15 }}>{p.initials}</div>
              {i < SEED_TEAM.length && <span className="tag tag-accent" style={{ fontSize: 10 }}>Public</span>}
            </div>
            <div style={{ marginTop: 14 }}>
              <div style={{ fontWeight: 500 }}>{p.name}</div>
              <div style={{ color: "var(--fg-mute)", fontSize: 12.5 }}>{p.role}</div>
            </div>
            <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className="mono" style={{ fontSize: 11, color: "var(--fg-faint)" }}>{p.focus}</span>
              <div style={{ display: "flex", gap: 2 }}>
                <button className="icon-btn"><Icon name="edit" /></button>
                <button className="icon-btn danger"><Icon name="trash" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
