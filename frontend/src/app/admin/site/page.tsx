"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PageHead } from "@/components/admin/page-head";
import { ImageUpload } from "@/components/admin/image-upload";
import { cn } from "@/lib/cn";

const TABS = ["hero", "about", "footer", "social", "seo"] as const;
type Tab = (typeof TABS)[number];

export default function SiteSettingsPage() {
  const [tab, setTab] = useState<Tab>("hero");
  const [hero, setHero] = useState({
    headline: "We build the software serious teams stake their roadmap on.",
    sub: "A senior-only engineering studio for fintech, health, and AI-native products.",
    cta: "Start a project",
    showStats: true,
    showMarquee: true,
    background: "",
  });

  return (
    <>
      <PageHead title="Site settings" sub="Edit the content shown on the public website. Changes are live in 30 seconds." />
      <div className="tabs">
        {TABS.map((t) => (
          <button key={t} className={cn("tab", tab === t && "active")} onClick={() => setTab(t)}>
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {tab === "hero" ? (
        <div className="two-col">
          <div className="panel" style={{ padding: 28 }}>
            <h3 style={{ margin: "0 0 20px", fontSize: 16, fontWeight: 500 }}>Hero section</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div className="field">
                <label>Eyebrow text</label>
                <input className="input" defaultValue="Tecsior / Engineered software" />
              </div>
              <div className="field">
                <label>Headline</label>
                <textarea className="textarea" style={{ minHeight: 90 }} value={hero.headline} onChange={(e) => setHero({ ...hero, headline: e.target.value })} />
              </div>
              <div className="field">
                <label>Subheading</label>
                <textarea className="textarea" value={hero.sub} onChange={(e) => setHero({ ...hero, sub: e.target.value })} />
              </div>
              <div className="grid-2" style={{ gap: 16 }}>
                <div className="field">
                  <label>Primary CTA</label>
                  <input className="input" value={hero.cta} onChange={(e) => setHero({ ...hero, cta: e.target.value })} />
                </div>
                <div className="field">
                  <label>Secondary CTA</label>
                  <input className="input" defaultValue="See selected work" />
                </div>
              </div>
              <ImageUpload
                label="Hero background image"
                value={hero.background}
                onChange={(url) => setHero({ ...hero, background: url })}
                helperText="Optional. Uploads to Cloudinary. Used as a backdrop behind the headline."
              />
              <Toggle label="Show statistics" sub="4 key numbers under hero" value={hero.showStats} onChange={(v) => setHero({ ...hero, showStats: v })} />
              <Toggle label="Show client marquee" sub="Scrolling list of client names" value={hero.showMarquee} onChange={(v) => setHero({ ...hero, showMarquee: v })} />
              <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                <Button variant="primary" size="sm">Save changes</Button>
                <Button variant="ghost" size="sm" href="/">Preview on site</Button>
              </div>
            </div>
          </div>
          <div>
            <div className="panel" style={{ padding: 20 }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--fg-mute)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
                Live preview
              </div>
              <div style={{ background: "var(--surface-0)", border: "1px solid var(--border)", borderRadius: 8, padding: 24, minHeight: 280 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--fg-faint)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>
                  Tecsior / Engineered software
                </div>
                <div style={{ fontSize: 28, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.05 }}>{hero.headline}</div>
                <div style={{ color: "var(--fg-mute)", fontSize: 13.5, marginTop: 14, lineHeight: 1.5 }}>{hero.sub}</div>
                <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
                  <span className="btn btn-primary btn-sm">{hero.cta}</span>
                  <span className="btn btn-ghost btn-sm">See selected work</span>
                </div>
              </div>
            </div>
            <div className="panel" style={{ padding: 20, marginTop: 16 }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--fg-mute)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
                Editor activity
              </div>
              <div style={{ fontSize: 13 }}>
                <div className="activity-item">
                  <div className="activity-dot" />
                  <div>
                    <div>Last edit by <strong>Mehedi H.</strong></div>
                    <div className="activity-meta">3h ago — &quot;Engineered for production...&quot;</div>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-dot" style={{ background: "var(--info)" }} />
                  <div>
                    <div>Version restored by <strong>Zaman S.</strong></div>
                    <div className="activity-meta">Yesterday</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="panel" style={{ padding: 60, textAlign: "center", color: "var(--fg-mute)" }}>
          <div style={{ fontSize: 14 }}>
            The <span style={{ color: "var(--fg)", fontWeight: 500 }}>{tab}</span> editor would live here.
          </div>
          <div style={{ fontSize: 12, marginTop: 6 }}>Hero tab is fully wired in this prototype.</div>
        </div>
      )}
    </>
  );
}

function Toggle({ label, sub, value, onChange }: { label: string; sub: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderTop: "1px solid var(--border)" }}>
      <div>
        <div style={{ fontWeight: 500, fontSize: 14 }}>{label}</div>
        <div style={{ color: "var(--fg-mute)", fontSize: 12.5 }}>{sub}</div>
      </div>
      <button type="button" aria-pressed={value} className={cn("toggle", value && "on")} onClick={() => onChange(!value)} />
    </div>
  );
}
