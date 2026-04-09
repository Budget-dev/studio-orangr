
"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-24 px-6 max-w-[1080px] mx-auto">
        <div className="text-primary text-[11px] font-bold uppercase tracking-[4px] mb-4">Legal Documents</div>
        <h1 className="text-4xl md:text-6xl font-black text-secondary uppercase tracking-tighter leading-tight mb-12">
          Terms of <span className="text-primary italic font-light">Service</span>
        </h1>
        <div className="prose prose-lg text-secondary/70 italic leading-relaxed space-y-8">
          <p>By engaging with Shyama Overseas, you agree to the following terms.</p>
          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4 italic not-italic uppercase tracking-tight">1. Service Scope</h2>
            <p>Our services include performance marketing, SEO, and AI production as defined in individual project scopes.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4 italic not-italic uppercase tracking-tight">2. Payment Terms</h2>
            <p>Services are billed monthly or on a project basis. Late payments may result in the suspension of active campaigns.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4 italic not-italic uppercase tracking-tight">3. Client Responsibilities</h2>
            <p>Clients are responsible for providing accurate business information and adhering to platform policies (Meta, Google, etc.).</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
