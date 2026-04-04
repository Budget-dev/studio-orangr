
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSplitLeft } from "@/components/services/HeroSplitLeft";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { ApproachTimeline } from "@/components/services/ApproachTimeline";
import { FeatureGrid } from "@/components/services/FeatureGrid";
import { BenefitsBentoGrid } from "@/components/services/BenefitsBentoGrid";
import { ResultsStatsRow } from "@/components/services/ResultsStatsRow";
import { ServiceCTABanner } from "@/components/services/ServiceCTABanner";

// Import all JSON data
import performanceMarketing from "@/data/services/performance-marketing.json";
import seo from "@/data/services/seo.json";
import cro from "@/data/services/cro.json";
import ecommerceMarketing from "@/data/services/ecommerce-marketing.json";
import mobileAppMarketing from "@/data/services/mobile-app-marketing.json";
import contentMarketing from "@/data/services/content-marketing.json";
import socialMediaMarketing from "@/data/services/social-media-marketing.json";
import creativeAIProductions from "@/data/services/creative-ai-productions.json";

const SERVICES_MAP: Record<string, any> = {
  "performance-marketing": performanceMarketing,
  "seo": seo,
  "cro": cro,
  "ecommerce-marketing": ecommerceMarketing,
  "mobile-app-marketing": mobileAppMarketing,
  "content-marketing": contentMarketing,
  "social-media-marketing": socialMediaMarketing,
  "creative-ai-productions": creativeAIProductions,
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = SERVICES_MAP[slug];

  if (!data) return { title: "Service Not Found" };

  return {
    title: `${data.serviceName} | Shyama Overseas`,
    description: data.hero.subheadline,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const data = SERVICES_MAP[slug];

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="animate-in fade-in duration-500">
        <HeroSplitLeft 
          badge={data.hero.badge}
          headline={data.hero.headline}
          subheadline={data.hero.subheadline}
          primaryCTA={data.hero.primaryCTA}
          secondaryCTA={data.hero.secondaryCTA}
          image={data.hero.image}
        />

        <ServiceOverview 
          pullQuote={data.overview.pullQuote}
          body={data.overview.body}
          inlineStats={data.overview.inlineStats}
        />

        <ApproachTimeline steps={data.approach} />

        <FeatureGrid features={data.features} />

        <BenefitsBentoGrid 
          heroBenefit={data.benefits.hero}
          benefits={data.benefits.list}
        />

        <ResultsStatsRow stats={data.caseStudies} />

        <ServiceCTABanner 
          headline={data.cta.headline}
          supporting={data.cta.supporting}
          primaryCTA={data.cta.primaryCTA}
          secondaryCTA={data.cta.secondaryCTA}
        />
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(SERVICES_MAP).map((slug) => ({
    slug,
  }));
}
