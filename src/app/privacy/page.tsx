
"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ShieldCheck, Lock, Eye, Mail, Phone } from "lucide-react";

export default function PrivacyPage() {
  const sections = [
    {
      id: "1",
      title: "1. Information We Collect",
      content: [
        "• Personal information (name, email, phone, business details)",
        "• Technical data (IP, browser, device, usage data)",
        "• Payment records (no sensitive banking data stored)"
      ]
    },
    {
      id: "2",
      title: "2. Lawful Basis for Processing",
      content: [
        "• User consent",
        "• Contractual necessity",
        "• Legitimate business interest"
      ]
    },
    {
      id: "3",
      title: "3. How We Use Your Data",
      content: [
        "• Service delivery",
        "• Communication",
        "• Improvement and marketing",
        "• Legal compliance"
      ]
    },
    {
      id: "4",
      title: "4. Data Sharing",
      content: [
        "• Advertising platforms",
        "• AI tools and SaaS",
        "• Payment gateways",
        "• Hosting providers"
      ]
    },
    {
      id: "5",
      title: "5. International Data Transfer",
      content: "Your data may be processed globally. By using services, you consent to this transfer."
    },
    {
      id: "6",
      title: "6. Third-Party & AI Tools",
      content: "We use external tools. We have no control or liability over their data practices."
    },
    {
      id: "7",
      title: "7. User Responsibility",
      content: [
        "• Accuracy of data",
        "• Legal ownership",
        "• Permissions for usage"
      ]
    },
    {
      id: "8",
      title: "8. Data Security Disclaimer",
      content: "We use safeguards but do not guarantee absolute security. Use is at your own risk."
    },
    {
      id: "9",
      title: "9. Data Retention",
      content: "We retain data for service delivery, legal compliance, and dispute resolution."
    },
    {
      id: "10",
      title: "10. Your Rights",
      content: "You may request access or correction. Deletion is not guaranteed."
    },
    {
      id: "11",
      title: "11. Cookies & Tracking",
      content: "We use cookies and analytics for performance and marketing."
    },
    {
      id: "12",
      title: "12. Indemnification",
      content: "You agree to hold us harmless from claims related to your data or use of services."
    },
    {
      id: "13",
      title: "13. Limitation of Liability",
      content: "We are not liable for third-party failures, data breaches, or losses."
    },
    {
      id: "14",
      title: "14. No Guarantee",
      content: "No guarantee of data safety, performance, or results."
    },
    {
      id: "15",
      title: "15. Children's Privacy",
      content: "Not intended for users under 18."
    },
    {
      id: "16",
      title: "16. Policy Updates",
      content: "We may update this policy anytime without notice."
    },
    {
      id: "17",
      title: "17. Governing Law",
      content: "Governed by laws of India. Jurisdiction: Asansol, West Bengal."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      <main className="pt-24 md:pt-32 pb-24">
        <section className="max-w-[1080px] mx-auto px-6">
          <div className="mb-16">
            <div className="text-primary text-[11px] font-bold uppercase tracking-[4px] mb-4">Legal Documents</div>
            <h1 className="text-4xl md:text-6xl font-black text-secondary uppercase tracking-tighter leading-tight mb-6">
              Privacy <span className="text-primary italic font-light">Policy</span>
            </h1>
            <p className="text-lg text-secondary/60 italic max-w-2xl border-l-4 border-primary pl-8 py-2">
              By using our services, you accept all risks, third-party involvement, and waive claims beyond our control.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
            <div className="space-y-12">
              {sections.map((s) => (
                <div key={s.id} className="group">
                  <h2 className="text-xl md:text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                    {s.title}
                  </h2>
                  <div className="text-secondary/70 leading-relaxed">
                    {Array.isArray(s.content) ? (
                      <ul className="space-y-2">
                        {s.content.map((line, idx) => (
                          <li key={idx}>{line}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{s.content}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="pt-12 border-t border-secondary/10">
                <h2 className="text-xl md:text-2xl font-bold text-secondary mb-6">18. Contact Information</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <a href="mailto:info@shyamaoverseas.com" className="flex items-center gap-4 p-6 bg-[#fdf6f2] rounded-2xl hover:bg-primary/10 transition-colors group">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Email Us</div>
                      <div className="text-secondary font-bold">info@shyamaoverseas.com</div>
                    </div>
                  </a>
                  <a href="https://wa.me/918918348537" className="flex items-center gap-4 p-6 bg-[#fdf6f2] rounded-2xl hover:bg-primary/10 transition-colors group">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">WhatsApp</div>
                      <div className="text-secondary font-bold">+91 8918348537</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="bg-secondary p-8 rounded-[32px] text-white sticky top-24 shadow-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/20 transition-colors" />
                <ShieldCheck className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Privacy Summary</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-8 italic">
                  Your privacy is a priority. We process data globally to deliver growth, using third-party AI and advertising tools.
                </p>
                <Link href="/terms" className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest hover:gap-4 transition-all">
                  Terms of Service <Lock className="w-4 h-4" />
                </Link>
              </div>

              <div className="p-8 bg-primary/5 border border-primary/20 rounded-[32px]">
                <Eye className="w-6 h-6 text-primary mb-4" />
                <h4 className="font-bold text-secondary mb-2">Transparency</h4>
                <p className="text-xs text-secondary/60 leading-relaxed italic">
                  We are transparent about our data usage. If you have questions about how your business data is handled, please contact us.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
