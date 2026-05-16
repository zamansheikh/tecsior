import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from "@nestjs/common";
import { CreateInquiryDto } from "./dto/create-inquiry.dto";
import { UpdateInquiryDto } from "./dto/update-inquiry.dto";
import { InquiriesService } from "./inquiries.service";

@Controller("inquiries")
export class InquiriesController {
  constructor(private readonly svc: InquiriesService) {}

  @Get()
  list() {
    return this.svc.list();
  }

  @Get(":id")
  get(@Param("id") id: string) {
    return this.svc.get(id);
  }

  @Post()
  @HttpCode(201)
  create(@Body() dto: CreateInquiryDto) {
    return this.svc.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateInquiryDto) {
    return this.svc.update(id, dto);
  }

  @Delete(":id")
  @HttpCode(204)
  remove(@Param("id") id: string) {
    this.svc.remove(id);
  }
}
