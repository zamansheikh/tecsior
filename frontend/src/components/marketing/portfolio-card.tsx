import Link from "next/link";
import type { PortfolioItem } from "@/lib/types";

export function PortfolioCard({ item, span = 4, large = false }: { item: PortfolioItem; span?: number; large?: boolean }) {
  return (
    <Link href={`/portfolio#${item.id}`} className="pf-card" style={{ gridColumn: `span ${span}` }}>
      <div className="pf-thumb" style={{ background: `linear-gradient(135deg, ${item.color}26, ${item.color}06)` }}>
        <div className="pf-thumb-bg" style={{ color: `${item.color}30`, fontSize: large ? 240 : 160 }}>{item.thumb}</div>
        <div style={{ position: "absolute", top: 16, left: 16, display: "flex", gap: 8 }}>
          <span className="tag" style={{ background: "rgba(0,0,0,0.4)" }}>{item.industry}</span>
          <span className="tag tag-accent">{item.status}</span>
        </div>
        <div style={{ position: "absolute", bottom: 16, right: 16, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-mute)" }}>
          {item.year} · {item.id}
        </div>
      </div>
      <div className="pf-meta">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-mute)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{item.client}</span>
          <span className="tag tag-accent">{item.metric}</span>
        </div>
        <div className="pf-title">{item.title}</div>
      </div>
    </Link>
  );
}
