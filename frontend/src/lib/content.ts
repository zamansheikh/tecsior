import { api, ApiError } from "./api";
import {
  SEED_PORTFOLIO,
  SEED_POSTS,
  SEED_SERVICES,
  SEED_TEAM,
  SEED_TESTIMONIALS,
  SEED_CAREERS,
  SEED_USERS,
  SEED_INQUIRIES,
  SEED_APPLICATIONS,
} from "./seed";
import type {
  Application, Career, Inquiry, PortfolioItem, Post, Service, TeamMember, Testimonial, User,
} from "./types";

async function fetchOrSeed<T>(path: string, seed: T): Promise<T> {
  try {
    return await api<T>(path, { next: { revalidate: 30 } });
  } catch (err) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[content] falling back to seed for ${path}:`, (err as ApiError).status ?? err);
    }
    return seed;
  }
}

export const getServices       = () => fetchOrSeed<Service[]>("/content/services", SEED_SERVICES);
export const getPortfolio      = () => fetchOrSeed<PortfolioItem[]>("/content/portfolio", SEED_PORTFOLIO);
export const getPosts          = () => fetchOrSeed<Post[]>("/content/posts", SEED_POSTS);
export const getTeam           = () => fetchOrSeed<TeamMember[]>("/content/team", SEED_TEAM);
export const getTestimonials   = () => fetchOrSeed<Testimonial[]>("/content/testimonials", SEED_TESTIMONIALS);
export const getCareers        = () => fetchOrSeed<Career[]>("/content/careers", SEED_CAREERS);
export const getUsers          = () => fetchOrSeed<User[]>("/content/users", SEED_USERS);
export const getInquiries      = () => fetchOrSeed<Inquiry[]>("/inquiries", SEED_INQUIRIES);
export const getApplications   = () => fetchOrSeed<Application[]>("/applications", SEED_APPLICATIONS);
