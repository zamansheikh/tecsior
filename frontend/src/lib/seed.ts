import type {
  Application,
  Career,
  Inquiry,
  PortfolioItem,
  Post,
  Service,
  TeamMember,
  Testimonial,
  User,
} from "./types";

export const SEED_SERVICES: Service[] = [
  { num: "01", title: "Product Engineering", desc: "Multi-disciplinary squads embedded with your team to ship complex software from zero to scale.", icon: "cpu", tags: ["React", "Next.js", "Node", "Go"] },
  { num: "02", title: "Cloud & Platform", desc: "Production-grade infrastructure on AWS, GCP and Azure. Observability, security, and FinOps baked in.", icon: "cloud", tags: ["Kubernetes", "Terraform", "AWS"] },
  { num: "03", title: "AI & Data", desc: "RAG pipelines, model fine-tuning, evals and data platforms that turn proprietary data into product moat.", icon: "bolt", tags: ["LLMs", "Vector DBs", "Evals"] },
  { num: "04", title: "Mobile Engineering", desc: "Native iOS, Android and cross-platform apps with sub-second cold starts and offline-first design.", icon: "phone", tags: ["Swift", "Kotlin", "RN"] },
  { num: "05", title: "Design & Research", desc: "Editorial-grade brand systems, design ops, and user research that compounds with every release.", icon: "brush", tags: ["Figma", "Tokens", "A/B"] },
  { num: "06", title: "Staff Augmentation", desc: "Senior engineers and designers integrated into your roadmap. No middlemen, no warm bodies.", icon: "users", tags: ["Senior+", "Dedicated"] },
];

export const SEED_PORTFOLIO: PortfolioItem[] = [
  { id: "case-01", client: "Helix Bank", industry: "Fintech", title: "Replatformed core onto event-driven Kotlin services", year: 2025, span: 8, status: "Live", thumb: "H", color: "#3DDC9A", metric: "$1.2B daily volume" },
  { id: "case-02", client: "Verde Health", industry: "Healthtech", title: "HIPAA-grade telemedicine for 14M patients", year: 2025, span: 4, status: "Live", thumb: "V", color: "#4F7BE6", metric: "14M patients" },
  { id: "case-03", client: "Atlas Logistics", industry: "Supply chain", title: "Real-time fleet observability across 24 countries", year: 2024, span: 4, status: "Live", thumb: "A", color: "#F5A524", metric: "24 countries" },
  { id: "case-04", client: "Northwind Energy", industry: "Energy", title: "ML pipeline cutting grid forecasting error by 38%", year: 2024, span: 4, status: "Live", thumb: "N", color: "#C792EA", metric: "−38% error" },
  { id: "case-05", client: "Loom Studio", industry: "Media", title: "Editorial CMS used by 400+ newsrooms", year: 2024, span: 4, status: "Live", thumb: "L", color: "#3DDC9A", metric: "400+ rooms" },
];

export const SEED_TEAM: TeamMember[] = [
  { name: "Mehedi Hasan", role: "Chief Executive", initials: "MH", focus: "Strategy, Partnerships" },
  { name: "Zaman Sheikh", role: "Chief Technology Officer", initials: "ZS", focus: "Architecture, Platform" },
  { name: "Aria Mahmud", role: "Head of Design", initials: "AM", focus: "Brand, Research" },
  { name: "Tahsin Rahman", role: "VP, Engineering", initials: "TR", focus: "Mobile, Backend" },
  { name: "Sadia Karim", role: "Head of AI", initials: "SK", focus: "ML, Data" },
  { name: "Junaid Ali", role: "Director of Operations", initials: "JA", focus: "Delivery, PMO" },
];

export const SEED_POSTS: Post[] = [
  { id: "p-01", title: "What we learned shipping 14 RAG systems to production", author: "Sadia Karim", date: "May 12, 2026", read: "9 min", category: "Engineering", status: "Published", views: 12480 },
  { id: "p-02", title: "Designing for trust: how we approached HIPAA-grade UX", author: "Aria Mahmud", date: "May 04, 2026", read: "6 min", category: "Design", status: "Published", views: 8210 },
  { id: "p-03", title: "Inside our 4-day delivery cadence", author: "Junaid Ali", date: "Apr 28, 2026", read: "5 min", category: "Culture", status: "Published", views: 5912 },
  { id: "p-04", title: "Why we built our own internal evals harness", author: "Sadia Karim", date: "Apr 17, 2026", read: "11 min", category: "Engineering", status: "Published", views: 14302 },
  { id: "p-05", title: "From contract to commit: how engagements actually start", author: "Mehedi Hasan", date: "Apr 02, 2026", read: "7 min", category: "Operations", status: "Published", views: 3408 },
  { id: "p-06", title: "Field notes from rewiring a 12-year-old monolith", author: "Zaman Sheikh", date: "Mar 21, 2026", read: "14 min", category: "Engineering", status: "Draft", views: 0 },
];

export const SEED_CAREERS: Career[] = [
  { id: "j-01", title: "Senior Platform Engineer", team: "Platform", location: "Remote (GMT+0 to GMT+6)", type: "Full-time", level: "Senior", posted: "3d ago", status: "Open", applicants: 28 },
  { id: "j-02", title: "Staff Frontend Engineer", team: "Product", location: "Hybrid · Dhaka", type: "Full-time", level: "Staff", posted: "1w ago", status: "Open", applicants: 41 },
  { id: "j-03", title: "ML Engineer, Applied", team: "AI", location: "Remote (Global)", type: "Full-time", level: "Senior", posted: "1w ago", status: "Open", applicants: 64 },
  { id: "j-04", title: "Lead Product Designer", team: "Design", location: "Hybrid · Dhaka", type: "Full-time", level: "Lead", posted: "2w ago", status: "Open", applicants: 22 },
  { id: "j-05", title: "Engineering Manager, Mobile", team: "Mobile", location: "Remote (GMT+0 to GMT+6)", type: "Full-time", level: "Manager", posted: "3w ago", status: "Open", applicants: 17 },
  { id: "j-06", title: "DevRel Engineer", team: "Marketing", location: "Remote (Global)", type: "Contract", level: "Mid", posted: "4w ago", status: "Closed", applicants: 51 },
];

export const SEED_TESTIMONIALS: Testimonial[] = [
  { id: "t-01", quote: "Programmer Nexus rebuilt our core trading platform in nine months. The team operates more like a partner than a vendor.", author: "Daniel Okafor", role: "CTO, Meridian Capital", featured: true },
  { id: "t-02", quote: "Their AI team shipped an evals harness that finally let us release with confidence. Production hallucinations dropped 84%.", author: "Priya Iyer", role: "VP Engineering, Stellar Health", featured: true },
  { id: "t-03", quote: "The most senior bench we've worked with. No warm bodies, every engineer pulls their weight from day one.", author: "Wren Beaumont", role: "Head of Product, Loom Studio", featured: false },
  { id: "t-04", quote: "They replaced a 14-person consultancy with a 4-person squad and we shipped three times faster.", author: "Hana Sato", role: "Founder, Origami Labs", featured: true },
];

export const SEED_INQUIRIES: Inquiry[] = [
  { id: "INQ-2418", name: "Daniel Okafor", company: "Meridian Capital", email: "d.okafor@meridiancap.com", subject: "Replatforming our trading interface", budget: "$250k–$500k", message: "", date: "2026-05-16T14:32:00Z", status: "New", priority: "High" },
  { id: "INQ-2417", name: "Priya Iyer", company: "Stellar Health", email: "priya@stellarhealth.io", subject: "HIPAA migration audit", budget: "$100k–$250k", message: "", date: "2026-05-16T09:14:00Z", status: "New", priority: "Medium" },
  { id: "INQ-2416", name: "Mateo Reyes", company: "Voltflow", email: "mateo@voltflow.com", subject: "AI pricing optimization", budget: "$50k–$100k", message: "", date: "2026-05-15T17:48:00Z", status: "In review", priority: "Medium" },
  { id: "INQ-2415", name: "Hana Sato", company: "Origami Labs", email: "hana.sato@origami.jp", subject: "iOS app rebuild — quote needed", budget: "$100k–$250k", message: "", date: "2026-05-15T11:02:00Z", status: "Replied", priority: "High" },
  { id: "INQ-2414", name: "Wren Beaumont", company: "Loom Studio", email: "wren@loomstudio.co", subject: "Renewal + new module", budget: "$500k+", message: "", date: "2026-05-14T16:21:00Z", status: "Replied", priority: "Critical" },
  { id: "INQ-2413", name: "Yusuf Adekunle", company: "Atlas Logistics", email: "y.adekunle@atlas-log.com", subject: "Q3 capacity request", budget: "$250k–$500k", message: "", date: "2026-05-13T08:55:00Z", status: "Won", priority: "High" },
  { id: "INQ-2412", name: "Lina Marchetti", company: "Forte Retail", email: "lina@forte.co", subject: "POS integration consult", budget: "$50k–$100k", message: "", date: "2026-05-12T13:08:00Z", status: "Closed", priority: "Low" },
];

export const SEED_APPLICATIONS: Application[] = [
  { id: "APP-1042", candidate: "Sara Chen", email: "sara@example.com", role: "Senior Platform Engineer", stage: "Onsite", score: 92, date: "2026-05-16", source: "Referral" },
  { id: "APP-1041", candidate: "Marcus Bell", email: "marcus@example.com", role: "Staff Frontend Engineer", stage: "Tech screen", score: 88, date: "2026-05-16", source: "Careers page" },
  { id: "APP-1040", candidate: "Adaeze Nnamani", email: "adaeze@example.com", role: "ML Engineer, Applied", stage: "Offer", score: 95, date: "2026-05-15", source: "Recruiter" },
  { id: "APP-1039", candidate: "Tomás Ribeiro", email: "tomas@example.com", role: "Lead Product Designer", stage: "Portfolio review", score: 81, date: "2026-05-15", source: "Careers page" },
  { id: "APP-1038", candidate: "Iris Park", email: "iris@example.com", role: "Engineering Manager, Mobile", stage: "Hiring manager", score: 84, date: "2026-05-14", source: "LinkedIn" },
  { id: "APP-1037", candidate: "Felix Wagner", email: "felix@example.com", role: "ML Engineer, Applied", stage: "Rejected", score: 62, date: "2026-05-14", source: "Careers page" },
  { id: "APP-1036", candidate: "Noor Al-Sabah", email: "noor@example.com", role: "Senior Platform Engineer", stage: "Tech screen", score: 79, date: "2026-05-13", source: "Referral" },
];

export const SEED_USERS: User[] = [
  { id: "u-01", name: "Zaman Sheikh", email: "zaman@programmernexus.com", role: "Owner", lastActive: "2 min ago", initials: "ZS", you: true },
  { id: "u-02", name: "Mehedi Hasan", email: "mehedi@programmernexus.com", role: "Admin", lastActive: "11 min ago", initials: "MH" },
  { id: "u-03", name: "Aria Mahmud", email: "aria@programmernexus.com", role: "Editor", lastActive: "1h ago", initials: "AM" },
  { id: "u-04", name: "Sadia Karim", email: "sadia@programmernexus.com", role: "Editor", lastActive: "3h ago", initials: "SK" },
  { id: "u-05", name: "Tahsin Rahman", email: "tahsin@programmernexus.com", role: "Author", lastActive: "Yesterday", initials: "TR" },
  { id: "u-06", name: "Junaid Ali", email: "junaid@programmernexus.com", role: "Viewer", lastActive: "2d ago", initials: "JA" },
];

export const SEED_ACTIVITY = [
  { who: "Aria M.", action: "published", target: "Designing for trust: how we approached HIPAA-grade UX", time: "12 min ago" },
  { who: "System", action: "received new inquiry from", target: "Meridian Capital · $250k–$500k", time: "37 min ago" },
  { who: "Sadia K.", action: "updated case study", target: "Northwind Energy — ML pipeline", time: "1h ago" },
  { who: "Zaman S.", action: "moved candidate to Offer:", target: "Adaeze Nnamani — ML Engineer", time: "2h ago" },
  { who: "Mehedi H.", action: "edited homepage hero copy", target: "Engineered for production. Trusted by serious teams.", time: "3h ago" },
  { who: "System", action: "auto-archived 4 closed inquiries", target: "older than 90 days", time: "Yesterday" },
];

export const SEED_KPI = {
  visitors: [42, 38, 51, 49, 62, 70, 68, 75, 84, 91, 102, 118],
  inquiries: [8, 12, 11, 14, 18, 22, 19, 26, 24, 31, 35, 42],
  revenue: [180, 220, 210, 260, 310, 340, 360, 410, 480, 520, 590, 640],
  hires: [1, 0, 1, 2, 1, 2, 3, 2, 3, 4, 3, 5],
  months: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"],
  sources: [
    { label: "Direct", value: 38, color: "#3DDC9A" },
    { label: "Referrals", value: 28, color: "#4F7BE6" },
    { label: "Search", value: 22, color: "#F5A524" },
    { label: "Social", value: 12, color: "#C792EA" },
  ],
};
