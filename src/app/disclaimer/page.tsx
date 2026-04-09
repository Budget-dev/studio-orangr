
"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ShieldAlert, Scale, Info, Mail, Phone } from "lucide-react";

export default function DisclaimerPage() {
  const sections = [
    {
      id: "1",
      title: "1. General Information",
      content: "All services provided by Shyama Overseas are for informational and marketing purposes only. We do not provide legal, financial, or professional advisory services."
    },
    {
      id: "2",
      title: "2. No Guarantee of Results",
      content: [
        "• No guarantee of sales, leads, revenue, engagement, or ROI",
        "• Results depend on external factors beyond our control"
      ]
    },
    {
      id: "3",
      title: "3. Use at Your Own Risk",
      content: "All services are used at your own risk. We are not liable for any direct or indirect consequences."
    },
    {
      id: "4",
      title: "4. Advertising & Platform Disclaimer",
      content: [
        "• Not responsible for ad account bans",
        "• Not responsible for policy violations",
        "• Not responsible for algorithm changes"
      ]
    },
    {
      id: "5",
      title: "5. AI Content Disclaimer",
      content: [
        "• AI content may contain errors",
        "• Not guaranteed to be 100% accurate or unique",
        "• No liability for use of AI-generated content"
      ]
    },
    {
      id: "6",
      title: "6. Client Responsibility",
      content: [
        "• Client responsible for content and claims",
        "• Client responsible for legal compliance",
        "• No liability for copyright or legal issues from client content"
      ]
    },
    {
      id: "7",
      title: "7. Third-Party Tools",
      content: "We use third-party tools and assume no liability for their policies or performance."
    },
    {
      id: "8",
      title: "8. Limitation of Liability",
      content: "We are not liable for business loss, revenue loss, data loss, or indirect damages."
    },
    {
      id: "9",
      title: "9. Indemnification",
      content: "You agree to hold Shyama Overseas harmless from any claims arising from your use of services."
    },
    {
      id: "10",
      title: "10. External Links",
      content: "We are not responsible for third-party website content or practices."
    },
    {
      id: "11",
      title: "11. Updates",
      content: "We may update this Disclaimer at any time without notice."
    },
    {
      id: "12",
      title: "12. Governing Law",
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
              Legal <span className="text-primary italic font-light">Disclaimer</span>
            </h1>
            <p className="text-lg text-secondary/60 italic max-w-2xl border-l-4 border-primary pl-8 py-2">
              By using our services, you accept all risks, understand no guarantees are provided, and waive claims beyond our control.
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
                <h2 className="text-xl md:text-2xl font-bold text-secondary mb-6">13. Contact Information</h2>
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
                <ShieldAlert className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Legal Summary</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-8 italic">
                  Shyama Overseas operates as a performance agency. All strategies and AI content are provided "as-is" without explicit warranties of revenue or accuracy.
                </p>
                <Link href="/terms" className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest hover:gap-4 transition-all">
                  Full Terms <Scale className="w-4 h-4" />
                </Link>
              </div>

              <div className="p-8 bg-primary/5 border border-primary/20 rounded-[32px]">
                <Info className="w-6 h-6 text-primary mb-4" />
                <h4 className="font-bold text-secondary mb-2">Governing Law</h4>
                <p className="text-xs text-secondary/60 leading-relaxed italic">
                  These terms are governed by the laws of India. Any disputes will be settled in Asansol, West Bengal jurisdiction.
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
