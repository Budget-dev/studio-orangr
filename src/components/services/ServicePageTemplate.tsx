"use client";

import React from "react";
import { HeroSplitLeft } from "./HeroSplitLeft";
import { ServiceOverview } from "./ServiceOverview";
import { ApproachTimeline } from "./ApproachTimeline";
import { FeatureGrid } from "./FeatureGrid";
import { BenefitsBentoGrid } from "./BenefitsBentoGrid";
import { ResultsStatsRow } from "./ResultsStatsRow";
import { ServiceCTABanner } from "./ServiceCTABanner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export function ServicePageTemplate({ data }: { data: any }) {
  if (!data) return null;

  return (
    <div className="min-h-screen bg-background font-body">
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
