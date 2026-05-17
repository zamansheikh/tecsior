"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/icon";
import { PageHead } from "@/components/admin/page-head";
import { AdminToolbar } from "@/components/admin/toolbar";
import { StatusPill } from "@/components/admin/status-pill";
import { ImageUpload, type UploadResult } from "@/components/admin/image-upload";
import { SEED_PORTFOLIO } from "@/lib/seed";
import type { PortfolioItem } from "@/lib/types";

export default function PortfolioAdminPage() {
  const [items, setItems] = useState<PortfolioItem[]>(SEED_PORTFOLIO);
  const [q, setQ] = useState("");
  const [editing, setEditing] = useState<string | null>(null);
  const [saving, setSaving] = useState<string | null>(null);

  useEffect(() => {
    const base = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:7001";
    fetch(`${base}/api/content/portfolio`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (Array.isArray(d) && d.length) setItems(d as PortfolioItem[]); })
      .catch(() => {});
  }, []);

  const filtered = q
    ? items.filter((p) => p.title.toLowerCase().includes(q.toLowerCase()) || p.client.toLowerCase().includes(q.toLowerCase()))
    : items;

  const updateItem = async (id: string, patch: Partial<PortfolioItem>) => {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, ...patch } : it)));
    setSaving(id);
    try {
      const res = await fetch(`/api/proxy/admin/content/portfolio/${id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(patch),
      });
      if (!res.ok) throw new Error(`Save failed (${res.status})`);
    } catch (err) {
      console.error(err);
      // best-effort rollback would refetch; for now we just log
    } finally {
      setSaving(null);
    }
  };

  return (
    <>
      <PageHead title="Portfolio & case studies" sub="Case files shown publicly. Drafts won't appear on the site." />
      <AdminToolbar
        count={items.length}
        label="case studies"
        search={q}
        onSearch={setQ}
        filters={[{ value: "All sectors", options: ["All sectors", "Fintech", "Healthtech", "Energy", "Media", "Supply chain"] }]}
        actionLabel="New case study"
        onAction={() => {}}
      />
      <div className="grid-3">
        {filtered.map((p) => {
          const isEditing = editing === p.id;
          const isSaving = saving === p.id;
          return (
            <div key={p.id} className="card card-hover" style={{ padding: 0, overflow: "hidden" }}>
              <div
                style={{
                  aspectRatio: "16/10",
                  position: "relative",
                  background: p.image
                    ? `url(${p.image}) center/cover`
                    : `linear-gradient(135deg, ${p.color}26, ${p.color}06)`,
                }}
              >
                {!p.image && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "grid",
                      placeItems: "center",
                      fontFamily: "var(--font-serif)",
                      fontStyle: "italic",
                      fontSize: 120,
                      color: `${p.color}30`,
                    }}
                  >
                    {p.thumb}
                  </div>
                )}
                {p.image && (
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 40%)",
                    }}
                  />
                )}
                <div style={{ position: "absolute", top: 12, left: 12, display: "flex", gap: 6, zIndex: 1 }}>
                  <span className="tag" style={{ background: "rgba(0,0,0,0.55)" }}>{p.industry}</span>
                  <StatusPill status="Published" />
                </div>
                <div style={{ position: "absolute", bottom: 10, right: 12, fontFamily: "var(--font-mono)", fontSize: 10.5, color: p.image ? "rgba(255,255,255,0.85)" : "var(--fg-mute)", zIndex: 1 }}>
                  {p.id}
                </div>
              </div>
              <div style={{ padding: 16 }}>
                <div className="mono" style={{ fontSize: 10.5, color: "var(--fg-faint)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{p.client}</div>
                <div style={{ marginTop: 6, fontSize: 14.5, fontWeight: 500, lineHeight: 1.3 }}>{p.title}</div>
                <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="tag tag-accent">{p.metric}</span>
                  <div style={{ display: "flex", gap: 4 }}>
                    {isSaving && <span className="mono" style={{ fontSize: 11, color: "var(--accent)" }}>Saving…</span>}
                    <button className="icon-btn" title="View on site"><Icon name="eye" /></button>
                    <button
                      className={`icon-btn${isEditing ? " danger" : ""}`}
                      title={isEditing ? "Close editor" : "Edit cover image"}
                      onClick={() => setEditing(isEditing ? null : p.id)}
                    >
                      <Icon name="edit" />
                    </button>
                    <button className="icon-btn danger" title="Delete"><Icon name="trash" /></button>
                  </div>
                </div>

                {isEditing && (
                  <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--border)" }}>
                    <ImageUpload
                      label="Cover image"
                      value={p.image}
                      onChange={(url, meta?: UploadResult) =>
                        updateItem(p.id, {
                          image: url || undefined,
                          imagePublicId: url ? meta?.publicId : undefined,
                        })
                      }
                      helperText="Drag & drop or click. Replaces the default letter+gradient on the public site."
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <div
          className="card"
          style={{
            display: "grid",
            placeItems: "center",
            border: "1.5px dashed var(--border-strong)",
            background: "transparent",
            minHeight: 280,
            cursor: "pointer",
            color: "var(--fg-mute)",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <Icon name="plus" size={24} />
            <div style={{ fontWeight: 500, marginTop: 8 }}>Add case study</div>
          </div>
        </div>
      </div>
    </>
  );
}
