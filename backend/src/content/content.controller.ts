import { BadRequestException, Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from "@nestjs/common";
import { ContentService } from "./content.service";

const COLLECTIONS = ["services", "portfolio", "posts", "team", "testimonials", "careers", "users"] as const;
type Collection = (typeof COLLECTIONS)[number];

function assertCollection(value: string): Collection {
  if (!(COLLECTIONS as readonly string[]).includes(value)) {
    throw new BadRequestException(`Unknown collection '${value}'`);
  }
  return value as Collection;
}

@Controller("content/:collection")
export class ContentController {
  constructor(private readonly svc: ContentService) {}

  @Get()
  list(@Param("collection") c: string) {
    return this.svc.list(assertCollection(c));
  }

  @Get(":id")
  get(@Param("collection") c: string, @Param("id") id: string) {
    return this.svc.get(assertCollection(c), id);
  }

  @Post()
  @HttpCode(201)
  create(@Param("collection") c: string, @Body() body: Record<string, unknown>) {
    return this.svc.create(assertCollection(c), body);
  }

  @Patch(":id")
  update(@Param("collection") c: string, @Param("id") id: string, @Body() body: Record<string, unknown>) {
    return this.svc.update(assertCollection(c), id, body);
  }

  @Delete(":id")
  @HttpCode(204)
  remove(@Param("collection") c: string, @Param("id") id: string) {
    this.svc.remove(assertCollection(c), id);
  }
}
