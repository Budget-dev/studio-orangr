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
// (Repeat for other JSON files if you have them, or use a map)

const SERVICES_MAP: Record<string, any> = {
  "performance-marketing": performanceMarketing,
  "seo": seo,
  "cro": cro,
  // Add placeholders for others if data exists
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

// Optional: Static params for performance
export async function generateStaticParams() {
  return Object.keys(SERVICES_MAP).map((slug) => ({
    slug,
  }));
}
