"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/cn";

type Variant = "animated" | "split" | "editorial";

const STATS = [
  { num: "142", label: "Products shipped" },
  { num: "$2.4B", label: "Volume served" },
  { num: "98.4%", label: "SLA retention" },
  { num: "12", label: "Countries · clients" },
];

export function Hero({ initialVariant = "animated" }: { initialVariant?: Variant }) {
  const [variant, setVariant] = useState<Variant>(initialVariant);
  return (
    <>
      {variant === "animated" && <HeroAnimated />}
      {variant === "split" && <HeroSplit />}
      {variant === "editorial" && <HeroEditorial />}
      <HeroSwitcher value={variant} onChange={setVariant} />
    </>
  );
}

function HeroSwitcher({ value, onChange }: { value: Variant; onChange: (v: Variant) => void }) {
  const opts: Array<{ v: Variant; label: string }> = [
    { v: "animated", label: "Grid" },
    { v: "split", label: "Code" },
    { v: "editorial", label: "Serif" },
  ];
  return (
    <div className="hero-switcher">
      {opts.map((o) => (
        <button
          key={o.v}
          onClick={() => onChange(o.v)}
          className={cn("btn", "btn-sm", value === o.v ? "btn-primary" : "btn-ghost")}
          style={value === o.v ? undefined : { borderColor: "transparent" }}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function HeroAnimated() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-glow-a" />
        <div className="hero-glow-b" />
      </div>
      <div className="wrap hero-inner">
        <div className="fade-up" style={{ maxWidth: 1000 }}>
          <div className="eyebrow"><span className="dot" /> Tecsior / Engineered software</div>
          <h1 className="h1 gradient-text display-mix" style={{ marginTop: 28 }}>
            We build the software<br />
            <em>serious teams</em> stake<br />
            their roadmap on.
            <span className="sup">est. 2019</span>
          </h1>
          <p className="lead" style={{ marginTop: 32 }}>
            A senior-only engineering studio for fintech, health, and AI-native products.
            We embed with your team, ship to production, and stay until the metric moves.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" href="/contact">
              Start a project <Icon name="arrow" size={16} />
            </Button>
            <Button variant="ghost" size="lg" href="/portfolio">
              See selected work
            </Button>
          </div>
        </div>
        <div className="hero-statline fade-up fade-up-d2">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroSplit() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-glow-a" style={{ opacity: 0.35 }} />
      </div>
      <div className="wrap hero-inner">
        <div className="hero-split">
          <div className="fade-up">
            <div className="eyebrow"><span className="dot" /> Senior engineering · since 2019</div>
            <h1 className="h1 gradient-text display-mix" style={{ marginTop: 28, fontSize: "clamp(40px, 5.5vw, 76px)" }}>
              Engineering<br />
              that ships to <em>production</em>.
            </h1>
            <p className="lead" style={{ marginTop: 28 }}>
              Embedded squads of senior engineers, designers and ML practitioners.
              We replace the consultancy you don&apos;t trust with the team you wish you&apos;d hired.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
              <Button variant="primary" size="lg" href="/contact">
                Book a discovery call <Icon name="arrow" size={16} />
              </Button>
              <Button variant="ghost" size="lg" href="/services">
                What we do
              </Button>
            </div>
          </div>
          <div className="fade-up fade-up-d2">
            <div className="code-card">
              <div className="code-head">
                <span className="code-dot" /><span className="code-dot" /><span className="code-dot" />
                <span className="code-title">engagement.ts — tecsior</span>
              </div>
              <div className="code-body">
                <div><span className="c">// What you get on day one</span></div>
                <div><span className="k">const</span> <span className="f">engagement</span> = <span className="k">await</span> <span className="f">nexus</span>.<span className="f">start</span>({"{"}</div>
                <div>&nbsp;&nbsp;<span className="f">team</span>: [<span className="s">&quot;staff-eng&quot;</span>, <span className="s">&quot;design&quot;</span>, <span className="s">&quot;ml&quot;</span>],</div>
                <div>&nbsp;&nbsp;<span className="f">cadence</span>: <span className="s">&quot;4-day delivery&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span className="f">commit</span>: <span className="s">&quot;production by week 6&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span className="f">guarantees</span>: {"{"}</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="f">sla</span>: <span className="n">99.9</span>,</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="f">handover</span>: <span className="s">&quot;full IP transfer&quot;</span>,</div>
                <div>&nbsp;&nbsp;{"}"}</div>
                <div>{"})"};</div>
                <div style={{ marginTop: 8 }}><span className="c">// → engagement #2418 · Meridian Capital</span></div>
                <div><span className="c">// → first commit in 7d · live in 42d</span></div>
              </div>
            </div>
            <div className="hero-statline" style={{ marginTop: 32, gap: 40 }}>
              <div><div className="stat-num">142</div><div className="stat-label">Shipped</div></div>
              <div><div className="stat-num">98%</div><div className="stat-label">SLA</div></div>
              <div><div className="stat-num">$2.4B</div><div className="stat-label">Volume</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroEditorial() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-grid" style={{ opacity: 0.5 }} />
      </div>
      <div className="wrap hero-inner">
        <div className="hero-center fade-up">
          <div className="eyebrow" style={{ justifyContent: "center", display: "inline-flex" }}><span className="dot" /> Issue №07 — May 2026</div>
          <h1 className="h1 display-mix" style={{ marginTop: 32, fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, letterSpacing: "-0.04em" }}>
            Software,<br />
            <span style={{ fontFamily: "var(--font-sans)", fontStyle: "normal", fontWeight: 500 }} className="gradient-text">
              built like infrastructure.
            </span>
          </h1>
          <p className="lead" style={{ marginTop: 28 }}>
            Tecsior is a senior engineering studio. We design, build, and operate
            production systems for fintech, health and AI-native products. No juniors, no warm bodies.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 36, justifyContent: "center", flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" href="/contact">
              Start a project <Icon name="arrow" size={16} />
            </Button>
            <Button variant="ghost" size="lg" href="/portfolio">
              Read our case files
            </Button>
          </div>
        </div>
        <div className="hero-statline fade-up fade-up-d2" style={{ justifyContent: "center", borderTop: "1px solid var(--border)", marginTop: 80 }}>
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
