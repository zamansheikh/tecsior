"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PageHead } from "@/components/admin/page-head";
import { cn } from "@/lib/cn";

const TABS = ["workspace", "billing", "integrations", "api keys", "security", "danger"] as const;
type Tab = (typeof TABS)[number];

export default function WorkspaceSettingsPage() {
  const [tab, setTab] = useState<Tab>("workspace");
  return (
    <>
      <PageHead title="Workspace settings" sub="Configure your admin workspace, integrations and security" />
      <div className="tabs">
        {TABS.map((t) => (
          <button key={t} className={cn("tab", tab === t && "active")} onClick={() => setTab(t)}>
            {t.replace(/\b\w/g, (c) => c.toUpperCase())}
          </button>
        ))}
      </div>

      {tab === "workspace" ? (
        <div className="two-col">
          <div className="panel" style={{ padding: 28 }}>
            <h3 style={{ margin: "0 0 20px", fontSize: 16, fontWeight: 500 }}>General</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div className="field"><label>Workspace name</label><input className="input" defaultValue="Programmer Nexus" /></div>
              <div className="field"><label>Public domain</label><input className="input" defaultValue="programmernexus.com" /></div>
              <div className="field"><label>Admin domain</label><input className="input" defaultValue="admin.programmernexus.com" /></div>
              <div className="field">
                <label>Default timezone</label>
                <select className="select">
                  <option>GMT+6 — Dhaka</option>
                  <option>GMT+0 — London</option>
                  <option>GMT-5 — New York</option>
                </select>
              </div>
              <Button variant="primary" size="sm">Save changes</Button>
            </div>
          </div>
          <div>
            <div className="panel" style={{ padding: 28, marginBottom: 16 }}>
              <h3 style={{ margin: "0 0 8px", fontSize: 16, fontWeight: 500 }}>Plan</h3>
              <div style={{ color: "var(--fg-mute)", fontSize: 13 }}>
                You&apos;re on the <span style={{ color: "var(--accent)" }}>Enterprise</span> plan
              </div>
              <div className="grid-2" style={{ marginTop: 16, gap: 12 }}>
                {[
                  ["10 / 25", "Editors"],
                  ["48 / 100GB", "Storage"],
                  ["8.2M / 10M", "API calls"],
                  ["∞", "Workspaces"],
                ].map(([v, k]) => (
                  <div key={k} style={{ padding: 12, background: "var(--surface-2)", borderRadius: 6 }}>
                    <div style={{ fontSize: 16, fontWeight: 500 }}>{v}</div>
                    <div style={{ fontSize: 11, color: "var(--fg-faint)", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "var(--font-mono)" }}>
                      {k}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="panel" style={{ padding: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: 500 }}>Public site status</div>
                  <div style={{ color: "var(--fg-mute)", fontSize: 12.5 }}>Toggle the site offline for maintenance</div>
                </div>
                <div className="toggle on" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="panel" style={{ padding: 60, textAlign: "center", color: "var(--fg-mute)" }}>
          <div style={{ fontSize: 14 }}>
            The <span style={{ color: "var(--fg)", fontWeight: 500 }}>{tab}</span> tab is wired in production builds.
          </div>
        </div>
      )}
    </>
  );
}
