import { Controller, Get, UseGuards } from "@nestjs/common";
import { AdminGuard } from "../auth/admin.guard";
import { AnalyticsService } from "./analytics.service";

@Controller("analytics")
@UseGuards(AdminGuard)
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
