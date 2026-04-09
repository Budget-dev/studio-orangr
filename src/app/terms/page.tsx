
"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Scale, FileText, AlertTriangle, Mail, Phone, ShieldCheck } from "lucide-react";

export default function TermsPage() {
  const sections = [
    {
      id: "1",
      title: "1. Company Overview",
      content: "Shyama Overseas is a digital marketing and AI-based creative service provider offering services including but not limited to: Social Media Marketing, AI-based Content Creation (Image/Video), Branding & Creative Design, and Advertising & Campaign Management."
    },
    {
      id: "2",
      title: "2. Acceptance of Terms",
      content: [
        "• You are at least 18 years old",
        "• You agree to all terms mentioned on this page",
        "• You understand the nature of digital and AI-based services"
      ]
    },
    {
      id: "3",
      title: "3. Services & Deliverables",
      content: [
        "• All services are delivered digitally",
        "• Timelines are approximate and may vary",
        "• We may modify service structure to improve results"
      ]
    },
    {
      id: "4",
      title: "4. Payment Terms",
      content: [
        "• 100% advance payment required",
        "• All payments are non-refundable",
        "• Payments are final and binding"
      ]
    },
    {
      id: "5",
      title: "5. No Refund Policy (IMPORTANT)",
      isHighlighted: true,
      content: [
        "• Strict No Refund Policy applies to all services",
        "• No refund under any condition (including dissatisfaction, delay, or change of mind)",
        "• By proceeding with payment, you acknowledge and waive any right to refund requests"
      ]
    },
    {
      id: "6",
      title: "6. Revisions Policy",
      content: [
        "• Limited revisions depending on the selected package",
        "• Extra revisions beyond the package scope may be chargeable",
        "• Major changes to the initial brief are treated as a new project"
      ]
    },
    {
      id: "7",
      title: "7. Client Responsibilities",
      content: [
        "• Provide accurate business and campaign information",
        "• Respond to queries and feedback requests on time",
        "• Avoid any illegal or misleading marketing practices"
      ]
    },
    {
      id: "8",
      title: "8. No Guarantee of Results",
      content: "We provide professional expertise, but offer no explicit guarantee of sales, leads, or specific revenue targets. Results depend on external market factors beyond our control."
    },
    {
      id: "9",
      title: "9. Intellectual Property",
      content: [
        "• Client owns the final deliverables after full payment is received",
        "• We reserve the right to use the work for our agency portfolio and marketing"
      ]
    },
    {
      id: "10",
      title: "10. Limitation of Liability",
      content: [
        "• No liability for business loss or revenue fluctuations",
        "• No liability for platform-level ad account bans or suspensions",
        "• No liability for third-party service failures"
      ]
    },
    {
      id: "11",
      title: "11. Third-Party Tools & AI Usage",
      content: "We utilize advanced AI and external software tools. We are not responsible for downtime, updates, or changes in these third-party platforms."
    },
    {
      id: "12",
      title: "12. Termination of Service",
      content: "We reserve the right to terminate services at any time for policy violations. No refunds will be issued in such cases."
    },
    {
      id: "13",
      title: "13. Confidentiality",
      content: "Client data will be kept confidential; however, we are not liable for breaches caused by third-party tool failures."
    },
    {
      id: "14",
      title: "14. Governing Law",
      content: "Governed by the laws of India. All disputes are subject to the jurisdiction of Asansol, West Bengal."
    },
    {
      id: "15",
      title: "15. Updates to Terms",
      content: "We may update these terms at any time without prior notice. Continued use of services implies acceptance."
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
              Terms of <span className="text-primary italic font-light">Service</span>
            </h1>
            <p className="text-lg text-secondary/60 italic max-w-2xl border-l-4 border-primary pl-8 py-2">
              By engaging with our services, you agree to the following binding terms and our strict non-refundable payment policy.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
            <div className="space-y-12">
              {sections.map((s) => (
                <div key={s.id} className={`group ${s.isHighlighted ? 'p-8 bg-red-50/50 rounded-3xl border border-red-100' : ''}`}>
                  <h2 className={`text-xl md:text-2xl font-bold mb-4 transition-colors ${s.isHighlighted ? 'text-red-700' : 'text-secondary group-hover:text-primary'}`}>
                    {s.title}
                  </h2>
                  <div className="text-secondary/70 leading-relaxed">
                    {Array.isArray(s.content) ? (
                      <ul className="space-y-2">
                        {s.content.map((line, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span className="shrink-0">{line.startsWith('•') ? '' : '•'}</span>
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>{s.content}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="pt-12 border-t border-secondary/10">
                <h2 className="text-xl md:text-2xl font-bold text-secondary mb-6">16. Contact Information</h2>
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

              <div className="p-8 bg-secondary rounded-[32px] text-white border border-primary/20">
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-primary" /> Final Legal Protection
                </h3>
                <p className="text-white/70 italic leading-relaxed">
                  By purchasing services, the client agrees to all terms and the strict no-refund policy and waives any right to dispute or chargeback.
                </p>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="bg-[#0a0a0a] p-8 rounded-[32px] text-white sticky top-24 shadow-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/20 transition-colors" />
                <Scale className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Binding Agreement</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-8 italic">
                  Engagement with Shyama Overseas constitutes a full legal acceptance of these terms. All payments are final and non-refundable.
                </p>
                <div className="flex flex-col gap-3">
                  <Link href="/privacy" className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest hover:gap-4 transition-all">
                    Privacy Policy <FileText className="w-4 h-4" />
                  </Link>
                  <Link href="/disclaimer" className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest hover:gap-4 transition-all">
                    Disclaimer <AlertTriangle className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="p-8 bg-primary/5 border border-primary/20 rounded-[32px]">
                <h4 className="font-bold text-secondary mb-2">Notice on AI</h4>
                <p className="text-xs text-secondary/60 leading-relaxed italic">
                  Our services heavily utilize generative AI. By accepting these terms, you acknowledge the probabilistic nature of AI-generated content.
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
