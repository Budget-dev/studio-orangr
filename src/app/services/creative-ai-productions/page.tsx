"use client";

import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { AICreativeGallery } from "@/components/services/AICreativeGallery";
import data from "@/data/services/creative-ai-productions.json";

export default function CreativeAIProductionsPage() {
  return (
    <ServicePageTemplate data={data}>
      <AICreativeGallery />
    </ServicePageTemplate>
  );
}