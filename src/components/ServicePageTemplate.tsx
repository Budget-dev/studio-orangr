"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ServiceData } from "@/data/services-data";

export function ServicePageTemplate({ data }: { data: ServiceData }) {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      
      <main className="pt-[85px]">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden bg-[#0a0a0a]">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 grayscale"
            style={{ backgroundImage: `url(${data.heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <nav className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                <Link href="/services" className="hover:underline">Services</Link>
                <span>/</span>
                <span className="text-white/60">{data.title}</span>
              </nav>
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-4 uppercase">
                {data.title.split(' ').map((word, i) => (
                  <span key={i} className={i === 0 ? "text-primary" : ""}>{word} </span>
                ))}
              </h1>
              <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl">
                {data.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Overview & Approach */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-xs font-black text-primary mb-4 uppercase tracking-[0.2em]">Overview</div>
              <h2 className="text-3xl font-bold text-[#0a0a0a] mb-6">{data.title} for the Digital Age</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {data.overview}
              </p>
              <div className="bg-primary/5 border border-primary/10 p-8 rounded-2xl">
                <h4 className="font-bold text-primary mb-4">Core Benefits</h4>
                <ul className="space-y-3">
                  {data.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary" /> {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="text-xs font-black text-primary mb-4 uppercase tracking-[0.2em]">Our Approach</div>
              {data.approach.map((step, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="text-4xl font-black text-gray-100 group-hover:text-primary/20 transition-colors">
                    0{i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0a0a0a] mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-[#0a0a0a] text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Service Capabilities</h2>
              <div className="w-20 h-1 bg-primary mx-auto" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.features.map((feature, i) => (
                <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-primary/50 transition-colors">
                  <div className="text-4xl mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metric / Case Study */}
        <section className="py-24 bg-primary">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-12 rounded-3xl inline-block border border-white/20">
              <div className="text-secondary font-black text-6xl md:text-8xl mb-4 tracking-tighter">
                {data.caseStudy.result}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{data.caseStudy.title}</h3>
              <p className="text-secondary/80 font-medium max-w-lg mx-auto italic">
                "{data.caseStudy.description}"
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-8">Ready to Scale Your Business?</h2>
            <p className="text-xl text-gray-600 mb-10">Get in touch with our experts today and let's build something extraordinary together.</p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 bg-[#0a0a0a] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-primary transition-all group"
            >
              Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
