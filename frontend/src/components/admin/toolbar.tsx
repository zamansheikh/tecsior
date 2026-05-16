"use client";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

type Filter = { value: string; options: string[] };

export function AdminToolbar({
  count,
  label,
  search,
  onSearch,
  filters,
  onAction,
  actionLabel,
}: {
  count: number;
  label: string;
  search?: string;
  onSearch?: (v: string) => void;
  filters?: Filter[];
  onAction?: () => void;
  actionLabel?: string;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: 16, flexWrap: "wrap" }}>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <span style={{ fontSize: 13, color: "var(--fg-mute)" }}>
          <span style={{ color: "var(--fg)", fontWeight: 500 }}>{count}</span> {label}
        </span>
        <span style={{ width: 1, height: 18, background: "var(--border)" }} />
        <div className="admin-search" style={{ width: 280 }}>
          <Icon name="search" size={13} />
          <input
            value={search ?? ""}
            onChange={(e) => onSearch?.(e.target.value)}
            placeholder={`Search ${label.toLowerCase()}…`}
          />
        </div>
        {filters?.map((f, i) => (
          <select key={i} className="select" style={{ width: 140, padding: "8px 10px", fontSize: 13 }} defaultValue={f.value}>
            {f.options.map((o) => <option key={o}>{o}</option>)}
          </select>
        ))}
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <Button variant="ghost" size="sm"><Icon name="filter" size={13} /> Filters</Button>
        <Button variant="ghost" size="sm"><Icon name="download" size={13} /> Export</Button>
        {onAction && (
          <Button variant="primary" size="sm" onClick={onAction}>
            <Icon name="plus" size={13} /> {actionLabel}
          </Button>
        )}
      </div>
    </div>
  );
}
