import { Injectable, NotFoundException } from "@nestjs/common";
import {
  SEED_CAREERS,
  SEED_PORTFOLIO,
  SEED_POSTS,
  SEED_SERVICES,
  SEED_TEAM,
  SEED_TESTIMONIALS,
  SEED_USERS,
} from "../common/seed";

type Collection = "services" | "portfolio" | "posts" | "team" | "testimonials" | "careers" | "users";

@Injectable()
export class ContentService {
  private readonly data: Record<Collection, Array<Record<string, unknown>>> = {
    services: SEED_SERVICES.map((s) => ({ ...s })),
    portfolio: SEED_PORTFOLIO.map((p) => ({ ...p })),
    posts: SEED_POSTS.map((p) => ({ ...p })),
    team: SEED_TEAM.map((t) => ({ ...t })),
    testimonials: SEED_TESTIMONIALS.map((t) => ({ ...t })),
    careers: SEED_CAREERS.map((c) => ({ ...c })),
    users: SEED_USERS.map((u) => ({ ...u })),
  };

  list(c: Collection) {
    return this.data[c];
  }

  get(c: Collection, id: string) {
    const item = this.data[c].find((x) => (x as { id?: string }).id === id || (x as { num?: string }).num === id);
    if (!item) throw new NotFoundException(`${c}/${id} not found`);
    return item;
  }

  create(c: Collection, payload: Record<string, unknown>) {
    const id = (payload.id as string) ?? `${c.slice(0, 3)}-${Date.now()}`;
    const item = { id, ...payload };
    this.data[c].unshift(item);
    return item;
  }

  update(c: Collection, id: string, patch: Record<string, unknown>) {
    const idx = this.data[c].findIndex((x) => (x as { id?: string }).id === id);
    if (idx === -1) throw new NotFoundException(`${c}/${id} not found`);
    this.data[c][idx] = { ...this.data[c][idx], ...patch };
    return this.data[c][idx];
  }

  remove(c: Collection, id: string) {
    const idx = this.data[c].findIndex((x) => (x as { id?: string }).id === id);
    if (idx === -1) throw new NotFoundException(`${c}/${id} not found`);
    this.data[c].splice(idx, 1);
  }
}
