"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle, Sparkles, Video, Zap, ArrowRight, PlayCircle, Layers, Cpu } from "lucide-react";

export default function AICoursePage() {
  const whatsappNumber = "918918348537";
  const whatsappMessage = encodeURIComponent("Hi, I'm interested in joining the AI Video Generation Course. Please share the details.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const tools = [
    { name: "Higsfield", desc: "Advanced AI Video Motion", icon: <PlayCircle className="w-8 h-8" /> },
    { name: "ChatGPT", desc: "Prompt Engineering & Scripting", icon: <Cpu className="w-8 h-8" /> },
    { name: "Adobe Suite", desc: "Professional AI Transitions", icon: <Layers className="w-8 h-8" /> },
    { name: "Midjourney", desc: "Hyper-realistic Visual Assets", icon: <Sparkles className="w-8 h-8" /> },
  ];

  const curriculum = [
    { title: "Prompt Engineering", desc: "Mastering the art of commanding AI for specific cinematic results." },
    { title: "Cinematic Transitions", desc: "Creating seamless flow between AI-generated sequences." },
    { title: "Motion Dynamics", desc: "Controlling camera movement and fluid simulations." },
    { title: "Audio Sync & Sound Design", desc: "Matching AI visuals with professional soundscapes." },
  ];

  return (
    <div className="min-h-screen bg-white font-inter overflow-x-hidden">
      <Navbar />
      <main className="pt-20 md:pt-28">
        {/* Page Hero */}
        <section className="bg-secondary py-16 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] social-grid-texture" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-primary text-[10px] md:text-[11px] font-black uppercase tracking-[4px] mb-8 flex items-center justify-center gap-3">
                <span className="w-8 h-px bg-primary" /> NEW GENERATION LEARNING
              </div>
              <h1 className="text-4xl md:text-8xl text-white font-sora font-black leading-tight mb-8 uppercase tracking-tighter">
                AI Video <span className="text-primary italic font-light">Masterclass</span>
              </h1>
              <p className="text-white/60 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed mb-12 italic">
                The definitive course for producing cinematic brand films, high-speed fluid simulations, and hyper-realistic product ads using the world's most advanced AI tools.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button asChild className="h-16 md:h-20 px-10 md:px-16 rounded-2xl bg-primary text-secondary hover:bg-primary/90 font-black uppercase tracking-widest text-xs md:text-sm shadow-2xl shadow-primary/30 transition-all active:scale-[0.98]">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Join The Course <MessageCircle className="ml-3 w-5 h-5 md:w-6 md:h-6" />
                  </a>
                </Button>
                <div className="text-white/40 font-bold uppercase tracking-[2px] text-[10px]">
                  Limited Slots Per Batch
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-24 bg-[#FAFAF8]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 md:mb-24">
              <div className="text-primary text-[10px] font-black uppercase tracking-[4px] mb-4">THE TECH STACK</div>
              <h2 className="text-3xl md:text-5xl font-sora font-light text-secondary uppercase tracking-tighter">Tools You'll <span className="text-primary font-bold italic">Master</span></h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {tools.map((tool, i) => (
                <div key={i} className="bg-white p-12 rounded-[40px] border border-primary/10 shadow-sm hover:shadow-2xl transition-all group flex flex-col items-center text-center">
                   <div className="w-20 h-20 rounded-[24px] bg-primary/5 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      {tool.icon}
                   </div>
                   <h4 className="text-xl font-black text-secondary uppercase tracking-tight mb-3">{tool.name}</h4>
                   <p className="text-sm text-secondary/40 font-medium italic leading-relaxed">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="text-primary text-[10px] font-black uppercase tracking-[4px] mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-primary" /> COURSE SYLLABUS
                </div>
                <h2 className="text-3xl md:text-6xl font-sora font-light text-secondary leading-tight mb-10 uppercase tracking-tighter">
                  From <span className="font-bold text-primary italic">Prompts</span> <br /> to <span className="font-bold">Production</span>
                </h2>
                <div className="space-y-8">
                  {curriculum.map((item, i) => (
                    <div key={i} className="flex gap-8 group">
                       <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center shrink-0 shadow-lg group-hover:bg-primary transition-colors duration-500">
                          <Zap className="w-6 h-6 text-primary group-hover:text-white" />
                       </div>
                       <div className="pt-1">
                          <h4 className="text-lg md:text-xl font-black text-secondary uppercase tracking-tight mb-2">{item.title}</h4>
                          <p className="text-secondary/60 text-sm md:text-base italic leading-relaxed">{item.desc}</p>
                       </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative group">
                 <div className="absolute -inset-4 bg-primary/20 rounded-[40px] blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
                 <div className="relative aspect-video rounded-[32px] overflow-hidden border-2 border-primary/20 shadow-2xl bg-secondary">
                    <img 
                      src="https://vennky.sirv.com/ChatGPT%20Image%20Apr%207%2C%202026%2C%2004_47_12%20PM.png" 
                      alt="AI Production Masterclass"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-80" />
                    <div className="absolute bottom-10 left-10 right-10">
                       <div className="flex items-center gap-3 text-primary font-black uppercase tracking-[4px] text-[10px] mb-4">
                          <Video className="w-5 h-5" /> Live Production Workflow
                       </div>
                       <h3 className="text-white text-2xl font-black uppercase tracking-tighter">Become a Creative Disruptor</h3>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 md:py-32 bg-secondary relative overflow-hidden border-t border-white/5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -mr-48 -mt-48 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full -ml-48 -mb-48 blur-3xl" />
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
             <h2 className="text-4xl md:text-7xl font-sora font-black text-white uppercase tracking-tighter mb-8 leading-[1.1]">
                Ready to Lead the <br /> <span className="italic font-light text-primary">AI Revolution?</span>
             </h2>
             <p className="text-white/50 text-lg md:text-xl mb-12 italic max-w-2xl mx-auto leading-relaxed">
                Skip the generic tutorials. Get direct knowledge from a team managing 80+ global brands. Professional equipment is not required — only your ambition.
             </p>
             <Button asChild size="lg" className="h-16 md:h-20 px-12 md:px-16 rounded-2xl bg-primary text-secondary hover:bg-primary/90 font-black uppercase tracking-widest text-xs md:text-sm shadow-2xl transition-all active:scale-[0.98]">
               <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                 Get Full Course Details <ArrowRight className="ml-3 w-5 h-5 md:w-6 md:h-6" />
               </a>
             </Button>
             <div className="mt-10 flex items-center justify-center gap-4 text-white/30 text-[9px] font-bold uppercase tracking-[3px]">
                <span className="w-6 h-px bg-white/10" /> ONE-ON-ONE MENTORSHIP AVAILABLE <span className="w-6 h-px bg-white/10" />
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
