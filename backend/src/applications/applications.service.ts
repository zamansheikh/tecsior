import { Injectable, NotFoundException } from "@nestjs/common";
import { SEED_APPLICATIONS } from "../common/seed";
import { CreateApplicationDto } from "./dto/create-application.dto";

export type ApplicationStage =
  | "New"
  | "Tech screen"
  | "Portfolio review"
  | "Hiring manager"
  | "Onsite"
  | "Offer"
  | "Hired"
  | "Rejected";

export interface Application {
  id: string;
  candidate: string;
  email: string;
  role: string;
  stage: ApplicationStage;
  score: number;
  date: string;
  source: string;
}

@Injectable()
export class ApplicationsService {
  private readonly store = new Map<string, Application>();
  private counter = 1043;

  constructor() {
    for (const a of SEED_APPLICATIONS) {
      this.store.set(a.id, { ...a } as Application);
    }
  }

  list(): Application[] {
    return [...this.store.values()].sort((a, b) => b.date.localeCompare(a.date));
  }

  get(id: string): Application {
    const a = this.store.get(id);
    if (!a) throw new NotFoundException(`Application ${id} not found`);
    return a;
  }

  create(dto: CreateApplicationDto): Application {
    const id = `APP-${this.counter++}`;
    const app: Application = {
      id,
      candidate: dto.candidate,
      email: dto.email,
      role: dto.roleId,
      stage: "New",
      score: 0,
      date: new Date().toISOString().slice(0, 10),
      source: dto.source ?? "Careers page",
    };
    this.store.set(id, app);
    return app;
  }

  update(id: string, patch: Partial<Pick<Application, "stage" | "score">>): Application {
    const current = this.get(id);
    const next = { ...current, ...patch };
    this.store.set(id, next);
    return next;
  }

  remove(id: string): void {
    if (!this.store.delete(id)) throw new NotFoundException(`Application ${id} not found`);
  }
}
