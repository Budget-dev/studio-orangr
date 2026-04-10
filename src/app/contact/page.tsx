"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Globe, Phone, Mail, Building, Instagram, Facebook, Twitter, Youtube, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

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
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      
      <main className="pt-20 md:pt-28">
        {/* Header Section */}
        <section className="bg-secondary py-12 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="text-primary text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-primary" /> Get In Touch
              </div>
              <h1 className="text-4xl md:text-7xl font-sora font-black text-white leading-tight uppercase tracking-tighter mb-6">
                Let's <span className="text-primary italic font-light">Start Your Growth</span>
              </h1>
              <p className="text-white/60 text-base md:text-xl font-light leading-relaxed">
                Whether you have a campaign ready or are just exploring options, our growth experts are ready to guide you. Response within 2 hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-24 bg-[#FAFAF8]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-8 md:gap-16 items-start">
              
              {/* Form Side */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[32px] shadow-2xl shadow-black/5 border border-border/50"
              >
                <div className="mb-10">
                  <h3 className="text-2xl md:text-3xl font-sora font-bold text-secondary mb-2">Request a Strategy Audit</h3>
                  <p className="text-muted-foreground text-sm">Fill in the details and our strategist will respond shortly.</p>
                </div>
                
                <form className="space-y-5" onSubmit={handleFormSubmit}>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-secondary/40 ml-1">Full Name *</label>
                      <input name="name" onChange={handleInputChange} required type="text" className="w-full bg-[#fdfaf8] border border-border/60 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="e.g. John Doe" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-secondary/40 ml-1">Business Email *</label>
                      <input name="email" onChange={handleInputChange} required type="email" className="w-full bg-[#fdfaf8] border border-border/60 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="john@company.com" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-secondary/40 ml-1">Contact Number *</label>
                      <input name="phone" onChange={handleInputChange} required type="tel" className="w-full bg-[#fdfaf8] border border-border/60 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="+91 00000 00000" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-secondary/40 ml-1">Website URL</label>
                      <input name="website" onChange={handleInputChange} type="url" className="w-full bg-[#fdfaf8] border border-border/60 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="https://yoursite.com" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-secondary/40 ml-1">Company Name *</label>
                    <input name="company" onChange={handleInputChange} required type="text" className="w-full bg-[#fdfaf8] border border-border/60 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Your Brand Ltd." />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-secondary/40 ml-1">Your Growth Goals</label>
                    <textarea name="message" onChange={handleInputChange} className="w-full bg-[#fdfaf8] border border-border/60 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all min-h-[140px] resize-none" placeholder="Tell us what you want to achieve..."></textarea>
                  </div>
                  <Button type="submit" className="w-full h-14 md:h-16 rounded-xl text-xs md:text-sm font-black uppercase tracking-widest shadow-xl shadow-primary/30 transition-all active:scale-[0.98] mt-4">
                    Send via WhatsApp <MessageCircle className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </motion.div>

              {/* Info Side */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="lg:col-span-5 flex flex-col gap-6"
              >
                <div className="bg-secondary text-white p-8 md:p-12 rounded-[32px] shadow-2xl relative overflow-hidden flex flex-col h-full">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full -mr-24 -mt-24 blur-3xl" />
                  
                  <div className="relative z-10 space-y-10">
                    <div>
                      <h3 className="text-xl md:text-2xl font-sora font-black text-primary mb-4 italic tracking-tighter">+91 89183 48537</h3>
                      <p className="text-white/40 text-[9px] font-bold uppercase tracking-[0.3em]">Available Mon–Sat: 10:00 – 18:00 IST</p>
                    </div>
                    
                    <div className="space-y-8">
                      <div className="flex gap-5 group">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-500">
                          <Globe className="w-6 h-6 text-primary group-hover:text-white" />
                        </div>
                        <div>
                          <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">Strategy Hub</div>
                          <div className="text-sm md:text-base text-white/80 font-bold">Mumbai • Hyderabad • Kolkata</div>
                        </div>
                      </div>
                      
                      <div className="flex gap-5 group">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-500">
                          <Building className="w-6 h-6 text-primary group-hover:text-white" />
                        </div>
                        <div>
                          <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">Regional Offices</div>
                          <div className="text-sm md:text-base text-white/80 font-bold">Asansol • Mumbai • Bangalore</div>
                        </div>
                      </div>

                      <div className="flex gap-5 group">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-500">
                          <Mail className="w-6 h-6 text-primary group-hover:text-white" />
                        </div>
                        <div>
                          <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">Official Email</div>
                          <div className="text-sm md:text-base text-white/80">Info@shyamaoverseas.com</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-10 border-t border-white/10 mt-auto">
                      <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-6">Digital Presence</div>
                      <div className="flex gap-3">
                        {[
                          { icon: Instagram, href: "https://instagram.com/shyamaoverseas" },
                          { icon: Facebook, href: "https://facebook.com/shyamaoverseas" },
                          { icon: Twitter, href: "#" },
                          { icon: Youtube, href: "#" }
                        ].map((social, i) => (
                          <Link 
                            key={i} 
                            href={social.href} 
                            target="_blank"
                            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-all group"
                          >
                            <social.icon className="w-4 h-4 text-white group-hover:scale-110" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 border border-primary/20 p-8 rounded-2xl">
                  <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-4">Strategic Cities</div>
                  <div className="flex flex-wrap gap-2">
                    {["Mumbai", "Hyderabad", "Kolkata", "Asansol", "Bangalore", "Delhi", "Pune"].map(city => (
                      <span key={city} className="px-4 py-2 bg-white rounded-full text-[9px] font-black text-secondary/60 border border-border shadow-sm uppercase tracking-wider">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
