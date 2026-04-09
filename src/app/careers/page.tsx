
"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function CareersPage() {
  const jobs = [
    { title: "Performance Marketing Manager", type: "Full-Time", location: "Remote / Ahmedabad" },
    { title: "SEO Specialist", type: "Full-Time", location: "Ahmedabad" },
    { title: "AI Creative Producer", type: "Contract", location: "Remote" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-24 px-6 max-w-[1080px] mx-auto">
        <div className="text-primary text-[11px] font-bold uppercase tracking-[4px] mb-4">Join The Team</div>
        <h1 className="text-4xl md:text-6xl font-black text-secondary uppercase tracking-tighter leading-tight mb-12">
          Open <span className="text-primary italic font-light">Positions</span>
        </h1>
        <div className="space-y-6">
          {jobs.map((job, i) => (
            <div key={i} className="p-8 bg-[#fdf6f2] rounded-3xl border border-primary/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:border-primary transition-all">
              <div>
                <h3 className="text-xl font-bold text-secondary mb-1">{job.title}</h3>
                <p className="text-sm text-secondary/40 font-bold uppercase tracking-widest">{job.type} • {job.location}</p>
              </div>
              <Button className="rounded-xl font-bold px-8">Apply Now</Button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
