import { Hero } from "@/components/marketing/hero";
import { Marquee } from "@/components/marketing/marquee";
import { ServicesSection } from "@/components/marketing/services-section";
import { PortfolioTeaser } from "@/components/marketing/portfolio-teaser";
import { Process } from "@/components/marketing/process";
import { TestimonialBlock } from "@/components/marketing/testimonial-block";
import { CTABand } from "@/components/marketing/cta-band";
import { getPortfolio, getServices, getTestimonials } from "@/lib/content";

export const revalidate = 30;

export default async function HomePage() {
  const [services, portfolio, testimonials] = await Promise.all([
    getServices(),
    getPortfolio(),
    getTestimonials(),
  ]);

  return (
    <>
      <Hero />
      <Marquee />
      <ServicesSection services={services} />
      <PortfolioTeaser items={portfolio} />
      <Process />
      <TestimonialBlock testimonial={testimonials[0]} />
      <CTABand />
    </>
  );
}
