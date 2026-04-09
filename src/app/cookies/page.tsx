
"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-24 px-6 max-w-[1080px] mx-auto">
        <div className="text-primary text-[11px] font-bold uppercase tracking-[4px] mb-4">Legal Documents</div>
        <h1 className="text-4xl md:text-6xl font-black text-secondary uppercase tracking-tighter leading-tight mb-12">
          Cookie <span className="text-primary italic font-light">Settings</span>
        </h1>
        <div className="prose prose-lg text-secondary/70 italic leading-relaxed space-y-8">
          <p>We use cookies to enhance your browsing experience and analyze our traffic.</p>
          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4 italic not-italic uppercase tracking-tight">1. Necessary Cookies</h2>
            <p>These are required for the website to function correctly, including security and basic navigation.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4 italic not-italic uppercase tracking-tight">2. Analytical Cookies</h2>
            <p>We use tools like Google Analytics to understand how visitors interact with our site, helping us improve our content.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
