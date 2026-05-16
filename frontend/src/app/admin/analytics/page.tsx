import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Sparkline, BarChart } from "@/components/ui/charts";
import { SEED_KPI } from "@/lib/seed";

const TOP_PAGES: Array<[string, string, string, string]> = [
  ["/", "302,418", "5m 12s", "28%"],
  ["/portfolio", "168,802", "6m 04s", "22%"],
  ["/services", "142,008", "4m 28s", "31%"],
  ["/blog/rag-systems", "98,140", "9m 11s", "12%"],
  ["/careers", "62,341", "3m 22s", "38%"],
  ["/about", "41,002", "2m 18s", "44%"],
];

const REFERRERS: Array<[string, string, string]> = [
  ["Hacker News", "28,402", "5.8%"],
  ["GitHub", "18,140", "3.2%"],
  ["Google", "16,802", "2.1%"],
  ["Twitter / X", "12,008", "4.4%"],
  ["LinkedIn", "8,322", "6.1%"],
  ["Direct", "32,108", "—"],
];

export default function AnalyticsPage() {
  const kpis = [
    { label: "Page views", val: "892K", trend: "+12.1%", spark: SEED_KPI.visitors.map((v) => v * 7), color: "var(--accent)" },
    { label: "Avg. session", val: "4m 38s", trend: "+11s", spark: [42, 48, 52, 46, 51, 55, 58, 62, 60, 65, 68, 72], color: "#4F7BE6" },
    { label: "Bounce rate", val: "32%", trend: "-3.4%", spark: [42, 41, 38, 39, 37, 36, 35, 34, 33, 33, 32, 32], color: "#F5A524" },
    { label: "Conv. rate", val: "4.2%", trend: "+0.6%", spark: [2.1, 2.4, 2.6, 2.9, 3.1, 3.2, 3.4, 3.6, 3.8, 3.9, 4.0, 4.2], color: "#C792EA" },
  ];

  return (
    <>
      <div className="page-head">
        <div>
          <h1 className="page-title">Analytics</h1>
          <p className="page-sub">Site traffic, conversion and engagement</p>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <select className="select" style={{ width: 160 }}>
            <option>Last 12 months</option>
            <option>Last 30 days</option>
            <option>Last 7 days</option>
          </select>
          <Button variant="ghost" size="sm"><Icon name="download" size={14} /> Export CSV</Button>
        </div>
      </div>

      <div className="kpi-grid">
        {kpis.map((k) => (
          <div key={k.label} className="kpi">
            <div className="kpi-label">{k.label}</div>
            <div className="kpi-val">{k.val}</div>
            <span className="kpi-trend">{k.trend}</span>
            <div className="kpi-spark">
              <Sparkline values={k.spark} color={k.color} width={240} height={36} />
            </div>
          </div>
        ))}
      </div>

      <div className="panel" style={{ padding: 24, marginBottom: 16 }}>
        <h3 style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 500 }}>Pageviews by month</h3>
        <p style={{ color: "var(--fg-mute)", fontSize: 12.5, marginTop: 0 }}>892,140 total · +12.1% vs prior year</p>
        <div style={{ marginTop: 16 }}>
          <BarChart values={SEED_KPI.visitors.map((v) => v * 7)} labels={SEED_KPI.months} height={240} />
        </div>
      </div>

      <div className="two-col">
        <div className="panel" style={{ padding: 24 }}>
          <h3 style={{ margin: "0 0 16px", fontSize: 16, fontWeight: 500 }}>Top pages</h3>
          <table className="dt">
            <thead><tr><th>Path</th><th>Views</th><th>Avg. time</th><th>Bounce</th></tr></thead>
            <tbody>
              {TOP_PAGES.map(([p, v, t, b]) => (
                <tr key={p}>
                  <td className="mono" style={{ fontSize: 12.5, color: "var(--accent)" }}>{p}</td>
                  <td>{v}</td>
                  <td style={{ color: "var(--fg-dim)" }}>{t}</td>
                  <td style={{ color: "var(--fg-dim)" }}>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="panel" style={{ padding: 24 }}>
          <h3 style={{ margin: "0 0 16px", fontSize: 16, fontWeight: 500 }}>Top referrers</h3>
          <table className="dt">
            <thead><tr><th>Source</th><th>Sessions</th><th>Conv.</th></tr></thead>
            <tbody>
              {REFERRERS.map(([s, v, c]) => (
                <tr key={s}>
                  <td><span style={{ fontWeight: 500 }}>{s}</span></td>
                  <td>{v}</td>
                  <td><span className="tag tag-accent">{c}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
