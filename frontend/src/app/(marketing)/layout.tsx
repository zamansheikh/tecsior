import { Footer } from "@/components/marketing/footer";
import { TopNav } from "@/components/marketing/top-nav";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app">
      <TopNav />
      {children}
      <Footer />
    </div>
  );
}
