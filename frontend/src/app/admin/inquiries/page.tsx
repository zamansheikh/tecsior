"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { PageHead } from "@/components/admin/page-head";
import { StatusPill } from "@/components/admin/status-pill";
import { cn } from "@/lib/cn";
import { SEED_INQUIRIES } from "@/lib/seed";
import type { Inquiry } from "@/lib/types";

export default function InquiriesAdminPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>(SEED_INQUIRIES);
  const [selected, setSelected] = useState<Inquiry>(SEED_INQUIRIES[0]);

  useEffect(() => {
    fetch("/api/proxy/inquiries")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (Array.isArray(d) && d.length) {
          setInquiries(d as Inquiry[]);
          setSelected((curr) => d.find((x: Inquiry) => x.id === curr.id) ?? d[0]);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <PageHead title="Contact inquiries" sub="2 new · 5 awaiting reply · avg. response 4h 12m" />
      <div className="inquiries-split">
        <div className="panel" style={{ padding: 0, overflow: "hidden" }}>
          <table className="dt">
            <thead>
              <tr><th>ID</th><th>From</th><th>Subject</th><th>Budget</th><th>Status</th><th>Priority</th><th>Received</th></tr>
            </thead>
            <tbody>
              {inquiries.map((q) => (
                <tr
                  key={q.id}
                  onClick={() => setSelected(q)}
                  style={{ cursor: "pointer", background: selected.id === q.id ? "var(--surface-2)" : undefined }}
                >
                  <td className="row-id">{q.id}</td>
                  <td>
                    <div className="cell-title">{q.name}</div>
                    <div style={{ color: "var(--fg-mute)", fontSize: 12 }}>{q.company}</div>
                  </td>
                  <td style={{ color: "var(--fg-dim)" }}>{q.subject}</td>
                  <td><span className="tag">{q.budget}</span></td>
                  <td><StatusPill status={q.status} /></td>
                  <td>
                    <span className={cn("tag", q.priority === "Critical" ? "tag-danger" : q.priority === "High" ? "tag-warn" : "tag")}>
                      {q.priority}
                    </span>
                  </td>
                  <td className="mono" style={{ fontSize: 11, color: "var(--fg-faint)" }}>{q.date.slice(0, 10)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="panel inquiries-detail" style={{ padding: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div className="row-id">{selected.id}</div>
              <h3 style={{ margin: "6px 0 4px", fontSize: 18, fontWeight: 500 }}>{selected.name}</h3>
              <div style={{ color: "var(--fg-mute)", fontSize: 13 }}>{selected.company}</div>
            </div>
            <StatusPill status={selected.status} />
          </div>
          <div style={{ marginTop: 20, paddingTop: 20, borderTop: "1px solid var(--border)" }}>
            {[
              ["Email", selected.email],
              ["Budget", selected.budget],
              ["Priority", selected.priority],
              ["Received", selected.date.slice(0, 19).replace("T", " ")],
            ].map(([k, v]) => (
              <div key={k} style={{ display: "grid", gridTemplateColumns: "100px 1fr", padding: "8px 0", fontSize: 13 }}>
                <span className="mono" style={{ color: "var(--fg-faint)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" }}>{k}</span>
                <span style={{ color: "var(--fg-dim)", wordBreak: "break-word" }}>{v}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--border)" }}>
            <div className="mono" style={{ fontSize: 11, color: "var(--fg-faint)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Message</div>
            <div style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--fg-dim)" }}>
              {selected.message || `${selected.subject}. We'd like to explore an engagement with budget in the ${selected.budget} range.`}
            </div>
          </div>
          <div style={{ marginTop: 20, display: "flex", gap: 8 }}>
            <Button variant="primary" size="sm" href={`mailto:${selected.email}?subject=Re: ${encodeURIComponent(selected.subject)}`}>
              Reply
            </Button>
            <Button variant="ghost" size="sm">Move to CRM</Button>
            <button className="icon-btn" title="Archive"><Icon name="trash" /></button>
          </div>
        </div>
      </div>
    </>
  );
}
