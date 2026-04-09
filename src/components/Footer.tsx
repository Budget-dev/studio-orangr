
"use client";

import React from 'react';
import { Instagram, Linkedin, Twitter, Youtube, Rocket, Facebook } from 'lucide-react';
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Link from 'next/link';

const footerColumns = [
  {
    title: 'Expertise',
    links: [
      { label: 'Performance Marketing', href: '/services/performance-marketing' },
      { label: 'Social Media SEO', href: '/services/seo' },
      { label: 'Conversion (CRO)', href: '/services/cro' },
      { label: 'E-Commerce Growth', href: '/services/ecommerce-marketing' },
      { label: 'App Marketing', href: '/services/mobile-app-marketing' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Case Studies', href: '/portfolio' },
      { label: 'Growth Blog', href: '/blog' },
      { label: 'Strategy Audit', href: '/contact' },
      { label: 'Client Portal', href: '/client-portal' },
      { label: 'Agency Network', href: '/sectors' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Partnerships', href: '/partnerships' },
      { label: 'Disclaimer', href: '/disclaimer' },
    ],
  },
];

const legalLinks = [
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Cookie Settings', href: '/cookies' },
  { label: 'Accessibility', href: '/accessibility' },
];

const socialIcons = [
  { icon: <Instagram className="h-5 w-5" />, href: 'https://www.instagram.com/shyamaoverseas/' },
  { icon: <Facebook className="h-5 w-5" />, href: 'https://www.facebook.com/shyamaoverseas' },
  { icon: <Twitter className="h-5 w-5" />, href: '#' },
  { icon: <Linkedin className="h-5 w-5" />, href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-white text-secondary relative w-full pt-20 pb-10 overflow-hidden border-t border-border/40">
      {/* Background Decorative Blobs */}
      <div className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full overflow-hidden">
        <div className="bg-primary absolute top-1/3 left-1/4 h-64 w-64 rounded-full opacity-5 blur-3xl" />
        <div className="bg-secondary absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full opacity-5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="bg-secondary text-white mb-16 rounded-[32px] p-8 md:p-16 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-primary/20 transition-colors" />
          <div className="grid items-center gap-12 md:grid-cols-2 relative z-10">
            <div>
              <h3 className="mb-4 text-3xl md:text-5xl font-black font-sora leading-tight uppercase">
                Accelerate your <span className="text-primary italic">Digital growth</span>
              </h3>
              <p className="text-white/60 mb-8 text-lg font-light">
                Join 500+ growth-focused brands receiving our weekly performance insights and market trends.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your business email"
                  className="flex-1 border-white/10 bg-white/5 focus:ring-primary rounded-2xl border px-6 py-4 focus:ring-2 focus:outline-none text-white transition-all"
                />
                <button className="bg-primary text-secondary shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] rounded-2xl px-10 py-4 font-black uppercase tracking-widest shadow-lg transition text-xs">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="hidden justify-end md:flex">
              <div className="relative">
                <div className="bg-primary/20 absolute inset-0 rotate-6 rounded-3xl" />
                <div className="relative w-80 h-60 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                    alt="Growth Strategy Session"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="flex items-center gap-2 text-primary">
                      <Rocket className="w-5 h-5" />
                      <span className="font-black text-xs uppercase tracking-widest">Shyama Strategy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="mb-16 grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-8 flex flex-col gap-2">
              <span className="text-2xl font-black uppercase tracking-tight text-secondary">Shyama Overseas</span>
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">Digital Growth Agency</span>
            </div>
            <p className="text-secondary/60 mb-8 max-w-sm leading-relaxed italic">
              Empowering global brands with reliable, scalable, and innovative digital solutions from the heart of India.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-secondary/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-6 text-[11px] font-black uppercase tracking-[0.2em] text-primary">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-secondary/60 hover:text-primary transition-colors font-medium text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Big Animated Text */}
        <div className="py-10 border-t border-secondary/5">
          <TextHoverEffect text="SHYAMA" />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary/5 flex flex-col items-center justify-between pt-10 md:flex-row">
          <p className="text-secondary/40 mb-6 text-[10px] font-bold uppercase tracking-widest md:mb-0">
            © {new Date().getFullYear()} Shyama Overseas. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {legalLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-secondary/40 hover:text-primary text-[10px] font-bold uppercase tracking-widest transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
