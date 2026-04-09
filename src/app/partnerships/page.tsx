
"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function PartnershipsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-24 px-6 max-w-[1080px] mx-auto">
        <div className="text-primary text-[11px] font-bold uppercase tracking-[4px] mb-4">Collaborate</div>
        <h1 className="text-4xl md:text-6xl font-black text-secondary uppercase tracking-tighter leading-tight mb-12">
          Agency <span className="text-primary italic font-light">Partnerships</span>
        </h1>
        <div className="prose prose-lg text-secondary/70 italic leading-relaxed mb-12">
          <p>We work with creative agencies, dev shops, and consultants to deliver world-class performance marketing and AI production to their clients. Let's scale together.</p>
        </div>
        <Button size="lg" className="rounded-xl font-bold px-12 h-16 text-lg shadow-xl shadow-primary/20">Become a Partner</Button>
      </main>
      <Footer />
    </div>
  );
}
