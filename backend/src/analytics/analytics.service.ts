import { Injectable } from "@nestjs/common";
import { SEED_ACTIVITY, SEED_KPI } from "../common/seed";

@Injectable()
export class AnalyticsService {
  overview() {
    const visitors = sum(SEED_KPI.visitors);
    const inquiries = sum(SEED_KPI.inquiries);
    const revenue = sum(SEED_KPI.revenue);
    const hires = sum(SEED_KPI.hires);

    return {
      kpis: [
        { label: "Visitors", value: visitors, unit: "", trend: pctTrend(SEED_KPI.visitors), spark: SEED_KPI.visitors },
        { label: "Inquiries", value: inquiries, unit: "", trend: pctTrend(SEED_KPI.inquiries), spark: SEED_KPI.inquiries },
        { label: "Pipeline", value: revenue, unit: "k", trend: pctTrend(SEED_KPI.revenue), spark: SEED_KPI.revenue },
        { label: "Hires", value: hires, unit: "", trend: pctTrend(SEED_KPI.hires), spark: SEED_KPI.hires },
      ],
      months: SEED_KPI.months,
      sources: SEED_KPI.sources,
      activity: SEED_ACTIVITY,
    };
  }

  series() {
    return {
      months: SEED_KPI.months,
      visitors: SEED_KPI.visitors,
      inquiries: SEED_KPI.inquiries,
      revenue: SEED_KPI.revenue,
      hires: SEED_KPI.hires,
      sources: SEED_KPI.sources,
    };
  }
}

function sum(xs: number[]): number {
  return xs.reduce((a, b) => a + b, 0);
}
function pctTrend(xs: number[]): number {
  if (xs.length < 2) return 0;
  const last = xs[xs.length - 1];
  const prev = xs[xs.length - 2];
  return Math.round(((last - prev) / Math.max(prev, 1)) * 1000) / 10;
}
