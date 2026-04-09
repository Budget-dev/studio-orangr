
"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Globe, Phone, Mail, Building } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    company: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappNumber = "918918348537";
    const text = `*New Strategy Audit Request*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Company:* ${formData.company}%0A*Website:* ${formData.website}%0A*Message:* ${formData.message}`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="animate-in fade-in duration-500">
        <section className="pt-[150px] pb-20 bg-social-gradient relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="text-primary text-[11px] font-bold uppercase tracking-[0.3em] mb-4">Get In Touch</div>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
              Let's <span className="text-primary italic not-italic">Start Your Growth</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl leading-relaxed mb-8">
              Whether you have a campaign ready or are just exploring options, our growth experts will guide you. Response within 2 hours.
            </p>
            <div className="flex items-center gap-3 text-white/40 text-[13px]">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="opacity-50">›</span>
              <span className="text-primary font-bold">Contact</span>
            </div>
          </div>
        </section>

        <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 bg-white p-12 rounded-2xl shadow-2xl border border-[#e0d0c8]">
              <h3 className="text-3xl font-bold mb-2">Request a Strategy Audit</h3>
              <p className="text-muted-foreground text-[14px] mb-10">Fill in the details and our strategist will respond within 2 hours.</p>
              
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <input name="name" onChange={handleInputChange} required type="text" className="w-full bg-[#fdf6f2] border border-[#e0d0c8] rounded-xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Full Name *" />
                  <input name="email" onChange={handleInputChange} required type="email" className="w-full bg-[#fdf6f2] border border-[#e0d0c8] rounded-xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Business Email *" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <input name="phone" onChange={handleInputChange} required type="tel" className="w-full bg-[#fdf6f2] border border-[#e0d0c8] rounded-xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Contact Number *" />
                  <input name="website" onChange={handleInputChange} type="url" className="w-full bg-[#fdf6f2] border border-[#e0d0c8] rounded-xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Company Website" />
                </div>
                <input name="company" onChange={handleInputChange} required type="text" className="w-full bg-[#fdf6f2] border border-[#e0d0c8] rounded-xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Company Name *" />
                <textarea name="message" onChange={handleInputChange} className="w-full bg-[#fdf6f2] border border-[#e0d0c8] rounded-xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary min-h-[160px]" placeholder="Tell us about your digital goals..."></textarea>
                <Button type="submit" className="w-full h-16 rounded-xl text-lg font-bold shadow-xl shadow-primary/30 transition-all active:scale-[0.98]">Send Message</Button>
              </form>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-[#0a0a0a] text-white p-12 rounded-2xl shadow-2xl flex flex-col gap-10 flex-1">
                <div>
                  <h3 className="text-3xl font-bold mb-3">📞 +91 89183 48537</h3>
                  <p className="text-white/40 text-sm">Mon–Sat: 10:00 AM – 6:00 PM IST</p>
                </div>
                
                <div className="space-y-8">
                  <div className="flex gap-5 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-primary uppercase tracking-[0.2em] mb-2">Strategy Hub</div>
                      <div className="text-[14.5px] text-white/80 leading-relaxed">Mumbai • Hyderabad • Kolkata</div>
                    </div>
                  </div>
                  <div className="flex gap-5 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-primary uppercase tracking-[0.2em] mb-2">Email Us</div>
                      <div className="text-[14.5px] text-white/80">Info@shyamaoverseas.com</div>
                    </div>
                  </div>
                  <div className="flex gap-5 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Building className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-primary uppercase tracking-[0.2em] mb-2">Regional Offices</div>
                      <div className="text-[14.5px] text-white/80">Asansol • Mumbai • Bangalore</div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="text-[11px] font-bold text-primary uppercase tracking-widest mb-6">Follow Our Journey</div>
                  <div className="flex gap-4">
                    <a href="https://www.facebook.com/shyamaoverseas" target="_blank" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/30 hover:border-primary/50 transition-all text-lg">📘</a>
                    <a href="https://www.instagram.com/shyamaoverseas/" target="_blank" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/30 hover:border-primary/50 transition-all text-lg">📸</a>
                    <button className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/30 hover:border-primary/50 transition-all text-lg">🔗</button>
                    <button className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/30 hover:border-primary/50 transition-all text-lg">🐦</button>
                    <button className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/30 hover:border-primary/50 transition-all text-lg">▶️</button>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 p-8 rounded-2xl">
                <div className="text-[11px] font-bold text-primary uppercase tracking-widest mb-4">Core Network</div>
                <div className="flex flex-wrap gap-2">
                  {["Mumbai", "Hyderabad", "Kolkata", "Asansol", "Bangalore", "Delhi", "Pune"].map(city => (
                    <span key={city} className="px-4 py-2 bg-white rounded-full text-[11px] font-bold text-muted-foreground border border-border/50">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
