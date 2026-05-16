import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Resend } from "resend";
import { SEED_INQUIRIES } from "../common/seed";
import { CreateInquiryDto } from "./dto/create-inquiry.dto";

export type InquiryStatus = "New" | "In review" | "Replied" | "Won" | "Closed";
export type InquiryPriority = "Low" | "Medium" | "High" | "Critical";

export interface Inquiry {
  id: string;
  name: string;
  company: string;
  email: string;
  subject: string;
  budget: string;
  message: string;
  date: string;
  status: InquiryStatus;
  priority: InquiryPriority;
}

@Injectable()
export class InquiriesService {
  private readonly logger = new Logger(InquiriesService.name);
  private readonly store = new Map<string, Inquiry>();
  private counter = 2419;

  constructor(private readonly config: ConfigService) {
    for (const i of SEED_INQUIRIES) {
      this.store.set(i.id, { ...i } as Inquiry);
    }
  }

  list(): Inquiry[] {
    return [...this.store.values()].sort((a, b) => b.date.localeCompare(a.date));
  }

  get(id: string): Inquiry {
    const i = this.store.get(id);
    if (!i) throw new NotFoundException(`Inquiry ${id} not found`);
    return i;
  }

  async create(dto: CreateInquiryDto): Promise<Inquiry> {
    const id = `INQ-${this.counter++}`;
    const inquiry: Inquiry = {
      id,
      name: dto.name,
      company: dto.company,
      email: dto.email,
      subject: dto.subject ?? "(no subject)",
      budget: dto.budget,
      message: dto.message,
      date: new Date().toISOString(),
      status: "New",
      priority: dto.budget === "$500k+" ? "Critical" : dto.budget === "$250k–$500k" ? "High" : "Medium",
    };
    this.store.set(id, inquiry);
    void this.notify(inquiry);
    return inquiry;
  }

  update(id: string, patch: Partial<Pick<Inquiry, "status" | "priority">>): Inquiry {
    const current = this.get(id);
    const next = { ...current, ...patch };
    this.store.set(id, next);
    return next;
  }

  remove(id: string): void {
    if (!this.store.delete(id)) throw new NotFoundException(`Inquiry ${id} not found`);
  }

  private async notify(inquiry: Inquiry): Promise<void> {
    const apiKey = this.config.get<string>("RESEND_API_KEY");
    const to = this.config.get<string>("CONTACT_EMAIL");
    const from = this.config.get<string>("FROM_EMAIL") ?? "Programmer Nexus <hello@programmernexus.com>";
    if (!apiKey || !to) {
      this.logger.warn(`Resend not configured — would email ${inquiry.email}`);
      return;
    }
    try {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from,
        to: [to],
        replyTo: inquiry.email,
        subject: `[${inquiry.id}] ${inquiry.subject} — ${inquiry.company}`,
        text: [
          `New inquiry · ${inquiry.id}`,
          `From: ${inquiry.name} <${inquiry.email}> · ${inquiry.company}`,
          `Budget: ${inquiry.budget}`,
          `Priority: ${inquiry.priority}`,
          ``,
          inquiry.message,
        ].join("\n"),
      });
    } catch (err) {
      this.logger.error("Failed to send inquiry notification", err as Error);
    }
  }
}
