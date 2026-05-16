"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/icon";
import { PageHead } from "@/components/admin/page-head";
import { AdminToolbar } from "@/components/admin/toolbar";
import { SEED_TESTIMONIALS } from "@/lib/seed";

export default function TestimonialsAdminPage() {
  const [search, setSearch] = useState("");
  const items = search
    ? SEED_TESTIMONIALS.filter((t) => t.quote.toLowerCase().includes(search.toLowerCase()) || t.author.toLowerCase().includes(search.toLowerCase()))
    : SEED_TESTIMONIALS;

  return (
    <>
      <PageHead title="Testimonials" sub="What clients say about us. Featured testimonials appear on the homepage." />
      <AdminToolbar count={SEED_TESTIMONIALS.length} label="testimonials" search={search} onSearch={setSearch} actionLabel="New testimonial" onAction={() => {}} />
      <div className="grid-2">
        {items.map((t) => (
          <div key={t.id} className="card" style={{ position: "relative" }}>
            {t.featured && (
              <span className="tag tag-accent" style={{ position: "absolute", top: 16, right: 16 }}>
                <Icon name="star" size={11} /> Featured
              </span>
            )}
            <div className="serif" style={{ fontSize: 22, lineHeight: 1.3, color: "var(--fg)", paddingRight: t.featured ? 80 : 0 }}>“{t.quote}”</div>
            <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div className="avatar" style={{ width: 36, height: 36, fontSize: 13 }}>{t.author.split(" ").map((x) => x[0]).join("")}</div>
                <div>
                  <div style={{ fontWeight: 500, fontSize: 14 }}>{t.author}</div>
                  <div style={{ color: "var(--fg-mute)", fontSize: 12.5 }}>{t.role}</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 4 }}>
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
