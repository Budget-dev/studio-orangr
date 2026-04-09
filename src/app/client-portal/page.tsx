
"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function ClientPortalPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-24 px-6 flex items-center justify-center min-h-[70vh]">
        <div className="max-w-md w-full p-12 bg-secondary rounded-[40px] text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-3xl" />
          <h1 className="text-3xl font-black uppercase tracking-tighter mb-4">Client <span className="text-primary italic font-light">Portal</span></h1>
          <p className="text-white/40 text-sm mb-8">Access your live campaign dashboards and strategy reports.</p>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/20" placeholder="Business Email" />
            <input className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/20" type="password" placeholder="Password" />
            <Button className="w-full h-14 rounded-xl font-bold bg-primary text-secondary hover:bg-primary/90">Sign In</Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
