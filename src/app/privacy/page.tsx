
"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-24 px-6 max-w-[1080px] mx-auto">
        <div className="text-primary text-[11px] font-bold uppercase tracking-[4px] mb-4">Legal Documents</div>
        <h1 className="text-4xl md:text-6xl font-black text-secondary uppercase tracking-tighter leading-tight mb-12">
          Privacy <span className="text-primary italic font-light">Policy</span>
        </h1>
        <div className="prose prose-lg text-secondary/70 italic leading-relaxed space-y-8">
          <p>Last Updated: October 2023</p>
          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4 italic not-italic uppercase tracking-tight">1. Data Collection</h2>
            <p>At Shyama Overseas, we collect only the information necessary to provide our digital growth services. This includes contact details, website analytics, and business objectives provided during audits.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4 italic not-italic uppercase tracking-tight">2. How We Use Information</h2>
            <p>Your data is used to optimize your campaigns, personalize your strategy audits, and communicate results. We never sell your data to third parties.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4 italic not-italic uppercase tracking-tight">3. Security</h2>
            <p>We implement robust industry-standard security measures to protect your account information and campaign data from unauthorized access.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
