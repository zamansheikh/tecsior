import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Sparkline, AreaChart, Donut } from "@/components/ui/charts";
import { StatusPill } from "@/components/admin/status-pill";
import { getInquiries } from "@/lib/content";
import { SEED_ACTIVITY, SEED_KPI } from "@/lib/seed";

export const revalidate = 30;

export default async function OverviewPage() {
  const inquiries = await getInquiries();

  const kpis = [
    { label: "Visitors / mo", val: "118K", trend: "+15.2%", spark: SEED_KPI.visitors, color: "var(--accent)" },
    { label: "Inquiries", val: "42", trend: "+20.0%", spark: SEED_KPI.inquiries, color: "#4F7BE6" },
    { label: "Revenue (MRR)", val: "$640K", trend: "+8.5%", spark: SEED_KPI.revenue, color: "#F5A524" },
    { label: "Open positions", val: "5", trend: "+2", spark: SEED_KPI.hires, color: "#C792EA" },
  ];

  return (
    <>
      <div className="page-head">
        <div>
          <h1 className="page-title">Welcome back, Zaman.</h1>
          <p className="page-sub">
            Tuesday, May 17, 2026 · You have <span style={{ color: "var(--accent)" }}>2 new inquiries</span> and 3 applications to review.
          </p>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <Button variant="ghost" size="sm"><Icon name="download" size={14} /> Export report</Button>
          <Button variant="primary" size="sm"><Icon name="plus" size={14} /> Quick action</Button>
        </div>
      </div>

      <div className="kpi-grid">
        {kpis.map((k) => (
          <div key={k.label} className="kpi">
            <div className="kpi-label">{k.label}</div>
            <div className="kpi-val">{k.val}</div>
            <span className="kpi-trend">
              <Icon name="arrow" size={10} /> {k.trend}
            </span>
            <div className="kpi-spark">
              <Sparkline values={k.spark} color={k.color} width={240} height={36} />
            </div>
          </div>
        ))}
      </div>

      <div className="two-col">
        <div className="panel" style={{ padding: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
            <div>
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 500 }}>Site performance — 12 months</h3>
              <div style={{ color: "var(--fg-mute)", fontSize: 12.5, marginTop: 4 }}>Visitors and inquiries trend</div>
            </div>
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--fg-dim)" }}>
                <span style={{ width: 8, height: 8, background: "var(--accent)", borderRadius: 2 }} /> Visitors (k)
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--fg-dim)" }}>
                <span style={{ width: 8, height: 8, background: "#4F7BE6", borderRadius: 2 }} /> Inquiries
              </span>
            </div>
          </div>
          <AreaChart
            series={[
              { values: SEED_KPI.visitors, color: "var(--accent)" },
              { values: SEED_KPI.inquiries.map((v) => v * 2.6), color: "#4F7BE6" },
            ]}
            labels={SEED_KPI.months}
            height={260}
          />
        </div>

        <div className="panel" style={{ padding: 24 }}>
          <h3 style={{ margin: 0, fontSize: 16, fontWeight: 500 }}>Traffic sources</h3>
          <div style={{ color: "var(--fg-mute)", fontSize: 12.5, marginTop: 4 }}>Last 30 days · 118,420 sessions</div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "16px 0" }}>
            <div style={{ position: "relative" }}>
              <Donut data={SEED_KPI.sources} size={180} />
              <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 22, fontWeight: 500 }}>118K</div>
                  <div style={{ fontSize: 10, color: "var(--fg-faint)", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "var(--font-mono)" }}>
                    sessions
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: 14 }}>
            {SEED_KPI.sources.map((s) => (
              <div key={s.label} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", fontSize: 13 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 8, height: 8, background: s.color, borderRadius: 2 }} />
                  {s.label}
                </span>
                <span style={{ color: "var(--fg-mute)" }}>{s.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="two-col" style={{ marginTop: 16 }}>
        <div className="panel" style={{ padding: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 500 }}>Latest inquiries</h3>
            <Link href="/admin/inquiries" className="btn btn-link">
              View all <Icon name="arrow" size={12} />
            </Link>
          </div>
          <table className="dt">
            <thead>
              <tr><th>ID</th><th>Client</th><th>Subject</th><th>Status</th><th>Date</th></tr>
            </thead>
            <tbody>
              {inquiries.slice(0, 5).map((q) => (
                <tr key={q.id}>
                  <td><span className="row-id">{q.id}</span></td>
                  <td>
                    <div className="cell-title">{q.name}</div>
                    <div style={{ color: "var(--fg-mute)", fontSize: 12 }}>{q.company}</div>
                  </td>
                  <td style={{ maxWidth: 260, color: "var(--fg-dim)" }}>{q.subject}</td>
                  <td><StatusPill status={q.status} /></td>
                  <td className="mono" style={{ fontSize: 11.5, color: "var(--fg-faint)" }}>
                    {q.date.slice(0, 10)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="panel" style={{ padding: 24 }}>
          <h3 style={{ margin: 0, fontSize: 16, fontWeight: 500 }}>Activity</h3>
          <div style={{ marginTop: 8 }}>
            {SEED_ACTIVITY.map((a, i) => (
              <div key={i} className="activity-item">
                <div className="activity-dot" />
                <div style={{ flex: 1 }}>
                  <div style={{ color: "var(--fg-dim)" }}>
                    <span style={{ color: "var(--fg)", fontWeight: 500 }}>{a.who}</span> {a.action}{" "}
                    <span style={{ color: "var(--fg)" }}>{a.target}</span>
                  </div>
                  <div className="activity-meta">{a.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
