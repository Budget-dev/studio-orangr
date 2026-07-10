'use client';

import { useState, useEffect } from 'react';
import { useFirestore } from '@/firebase/provider';
import { collection, getDocs, query, orderBy, limit, addDoc, serverTimestamp, writeBatch, doc } from 'firebase/firestore';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Activity, PlaySquare, TrendingUp, ArrowUpRight, History, Users, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useUser } from '@/firebase/auth/use-user';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalBanners: 0,
    activeBanners: 0,
    totalLogs: 0,
    recentLogs: [] as any[]
  });
  const [isSeeding, setIsSeeding] = useState(false);
  const firestore = useFirestore();
  const { user } = useUser();
  const { toast } = useToast();

  const fetchStats = async () => {
    if (!firestore) return;
    
    try {
      const bannerSnap = await getDocs(collection(firestore, "banners"));
      const logsSnap = await getDocs(query(collection(firestore, "activityLogs"), orderBy("timestamp", "desc"), limit(5)));
      
      const banners = bannerSnap.docs.map(d => d.data());
      
      setStats({
        totalBanners: banners.length,
        activeBanners: banners.filter(b => b.isEnabled).length,
        totalLogs: (await getDocs(collection(firestore, "activityLogs"))).size,
        recentLogs: logsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchStats();
  }, [firestore]);

  const handleSeedData = async () => {
    if (!firestore || !user) return;
    setIsSeeding(true);
    try {
      const initialData = [
        {
          videoUrl: "https://1234567890.sirv.com/WhatsApp%20Video%202026-04-01%20at%2012.26.30%20PM%20(8).mp4",
          title: "Cinematic Milk Splash",
          description: "High-speed fluid simulation and photorealistic lighting.",
          ctaText: "Start Strategy Chat",
          isEnabled: true,
          order: 0
        },
        {
          videoUrl: "https://1234567890.sirv.com/WhatsApp%20Video%202026-04-01%20at%2012.26.30%20PM%20(7).mp4",
          title: "Analytics Visualization",
          description: "Visualizing the entire business ecosystem.",
          ctaText: "View Case Studies",
          isEnabled: true,
          order: 1
        },
        {
          videoUrl: "https://1234567890.sirv.com/WhatsApp%20Video%202026-04-01%20at%2012.26.30%20PM%20(5).mp4",
          title: "Gourmet Experience",
          description: "Photorealistic textures and cinematic food motion.",
          ctaText: "See Our Work",
          isEnabled: true,
          order: 2
        }
      ];

      const batch = writeBatch(firestore);
      initialData.forEach((data) => {
        const newDocRef = doc(collection(firestore, "banners"));
        batch.set(newDocRef, {
          ...data,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        });
      });

      await batch.commit();
      await addDoc(collection(firestore, "activityLogs"), {
        adminEmail: user.email,
        action: "Seed Data",
        details: "System initialized with default cinematic content",
        timestamp: serverTimestamp()
      });

      toast({ title: "System Seeded", description: "Original banners migrated to database successfully." });
      fetchStats();
    } catch (error: any) {
      toast({ variant: "destructive", title: "Seeding failed", description: error.message });
    } finally {
      setIsSeeding(false);
    }
  };

  const statCards = [
    { title: "Total Banners", value: stats.totalBanners, icon: PlaySquare, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Active Banners", value: stats.activeBanners, icon: TrendingUp, color: "text-green-600", bg: "bg-green-50" },
    { title: "System Health", value: "Optimal", icon: Activity, color: "text-primary", bg: "bg-primary/5" },
    { title: "Total Audits", value: stats.totalLogs, icon: History, color: "text-purple-600", bg: "bg-purple-50" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
        <div>
          <h1 className="text-3xl font-black text-secondary uppercase tracking-tighter">Growth Dashboard</h1>
          <p className="text-muted-foreground text-sm font-medium">Welcome back, {user?.email?.split('@')[0]}</p>
        </div>
        {stats.totalBanners === 0 && (
          <Button onClick={handleSeedData} disabled={isSeeding} className="rounded-xl h-12 px-6 font-black uppercase tracking-widest text-[10px]">
            <Sparkles className="w-4 h-4 mr-2" /> Seed Original Data
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="border-none shadow-sm rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-500">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">{stat.title}</p>
                  <p className="text-3xl font-black text-secondary tracking-tighter">{stat.value}</p>
                </div>
                <div className={`${stat.bg} ${stat.color} w-12 h-12 rounded-2xl flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-none shadow-xl rounded-[32px] overflow-hidden bg-white">
          <CardHeader className="bg-secondary text-white p-8">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg font-black uppercase tracking-widest">Recent Activity</CardTitle>
              <Activity className="w-5 h-5 text-primary" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-gray-50">
              {stats.recentLogs.length > 0 ? stats.recentLogs.map((log) => (
                <div key={log.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-xs font-black text-secondary uppercase tracking-tight">{log.action}</span>
                    <span className="text-[10px] font-bold text-muted-foreground">{log.timestamp?.toDate().toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-gray-500 italic mb-2">{log.details}</p>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-2.5 h-2.5 text-primary" />
                    </div>
                    <span className="text-[10px] font-bold text-secondary/60">{log.adminEmail}</span>
                  </div>
                </div>
              )) : (
                <div className="p-12 text-center text-gray-400 font-bold uppercase tracking-widest text-xs">
                  No activity recorded yet
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-xl rounded-[32px] overflow-hidden bg-secondary text-white relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <CardHeader className="p-8 pb-4">
            <CardTitle className="text-lg font-black uppercase tracking-widest">System Overview</CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-0 space-y-6 relative z-10">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
               <h4 className="text-primary font-black uppercase tracking-tighter text-3xl mb-1">Architecture</h4>
               <p className="text-white/60 text-sm font-light leading-relaxed">System optimizations including dynamic code splitting and Firestore caching are active.</p>
               <div className="mt-4 flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest">
                  Performance: Optimal <ArrowUpRight className="w-3 h-3" />
               </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-1">Database</p>
                  <p className="text-lg font-black text-white">Firestore</p>
               </div>
               <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-1">Engine</p>
                  <p className="text-lg font-black text-white">Next.js 15</p>
               </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
