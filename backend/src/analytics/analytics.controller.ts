import { Controller, Get } from "@nestjs/common";
import { AnalyticsService } from "./analytics.service";

@Controller("analytics")
export class AnalyticsController {
  constructor(private readonly svc: AnalyticsService) {}

  @Get("overview")
  overview() {
    return this.svc.overview();
  }

  @Get("series")
  series() {
    return this.svc.series();
  }
}
