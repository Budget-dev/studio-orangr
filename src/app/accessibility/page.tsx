
"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-24 px-6 max-w-[1080px] mx-auto">
        <div className="text-primary text-[11px] font-bold uppercase tracking-[4px] mb-4">Commitment</div>
        <h1 className="text-4xl md:text-6xl font-black text-secondary uppercase tracking-tighter leading-tight mb-12">
          Accessibility <span className="text-primary italic font-light">Statement</span>
        </h1>
        <div className="prose prose-lg text-secondary/70 italic leading-relaxed space-y-8">
          <p>Shyama Overseas is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>
          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4 italic not-italic uppercase tracking-tight">1. Standards</h2>
            <p>We aim to comply with WCAG 2.1 level AA standards across our digital presence.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
