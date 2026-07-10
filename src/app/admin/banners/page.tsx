
'use client';

import { useState, useEffect } from 'react';
import { useFirestore } from '@/firebase/provider';
import { collection, addDoc, deleteDoc, doc, updateDoc, serverTimestamp, getDocs, query, orderBy } from 'firebase/firestore';
import { useUser } from '@/firebase/auth/use-user';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Plus, Trash2, Edit2, Check, X, GripVertical, Eye, PlayCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';

export default function BannerManager() {
  const [banners, setBanners] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    videoUrl: '',
    ctaText: 'Start Strategy Chat',
    isEnabled: true,
    order: 0
  });

  const firestore = useFirestore();
  const { user } = useUser();
  const { toast } = useToast();

  const fetchBanners = async () => {
    if (!firestore) return;
    setLoading(true);
    const q = query(collection(firestore, "banners"), orderBy("order", "asc"));
    const snapshot = await getDocs(q);
    setBanners(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    setLoading(false);
  };

  useEffect(() => {
    fetchBanners();
  }, [firestore]);

  const logActivity = async (action: string, details: string) => {
    if (!firestore || !user) return;
    await addDoc(collection(firestore, "activityLogs"), {
      adminEmail: user.email,
      action,
      details,
      timestamp: serverTimestamp()
    });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firestore) return;

    try {
      if (editingId) {
        await updateDoc(doc(firestore, "banners", editingId), {
          ...formData,
          updatedAt: serverTimestamp()
        });
        await logActivity("Update Banner", `Updated banner: ${formData.title}`);
        toast({ title: "Banner updated", description: "The changes are now live." });
      } else {
        await addDoc(collection(firestore, "banners"), {
          ...formData,
          order: banners.length,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        });
        await logActivity("Create Banner", `Added new banner: ${formData.title}`);
        toast({ title: "Banner created", description: "The new banner has been added." });
      }
      setEditId(null);
      setIsAdding(false);
      setFormData({ title: '', description: '', videoUrl: '', ctaText: 'Start Strategy Chat', isEnabled: true, order: 0 });
      fetchBanners();
    } catch (error: any) {
      toast({ variant: "destructive", title: "Operation failed", description: error.message });
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!firestore || !confirm("Are you sure you want to delete this banner?")) return;
    try {
      await deleteDoc(doc(firestore, "banners", id));
      await logActivity("Delete Banner", `Deleted banner: ${title}`);
      toast({ title: "Banner deleted" });
      fetchBanners();
    } catch (error: any) {
      toast({ variant: "destructive", title: "Delete failed", description: error.message });
    }
  };

  const toggleStatus = async (id: string, currentStatus: boolean, title: string) => {
    if (!firestore) return;
    try {
      await updateDoc(doc(firestore, "banners", id), { isEnabled: !currentStatus });
      fetchBanners();
      toast({ title: currentStatus ? "Banner disabled" : "Banner enabled" });
    } catch (error: any) {
      toast({ variant: "destructive", title: "Toggle failed", description: error.message });
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-black text-secondary uppercase tracking-tight">Banner Manager</h2>
          <p className="text-muted-foreground text-sm font-medium">Control the hero section of your website</p>
        </div>
        {!isAdding && !editingId && (
          <Button onClick={() => setIsAdding(true)} className="rounded-xl font-black uppercase tracking-widest text-xs h-12 px-6">
            <Plus className="w-4 h-4 mr-2" /> Add New Banner
          </Button>
        )}
      </div>

      {(isAdding || editingId) && (
        <Card className="border-none shadow-xl rounded-3xl overflow-hidden animate-in slide-in-from-top duration-300">
          <CardHeader className="bg-secondary text-white">
            <CardTitle className="text-lg font-black uppercase tracking-widest">
              {editingId ? 'Edit Banner' : 'Create New Banner'}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-secondary/40 ml-1">Banner Title *</label>
                  <Input 
                    value={formData.title} 
                    onChange={(e) => setFormData({...formData, title: e.target.value})} 
                    className="rounded-xl h-12 border-gray-100 bg-gray-50"
                    placeholder="e.g. Cinematic Milk Splash"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-secondary/40 ml-1">Video URL (Direct MP4) *</label>
                  <Input 
                    value={formData.videoUrl} 
                    onChange={(e) => setFormData({...formData, videoUrl: e.target.value})} 
                    className="rounded-xl h-12 border-gray-100 bg-gray-50"
                    placeholder="https://example.com/video.mp4"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-secondary/40 ml-1">CTA Button Text</label>
                  <Input 
                    value={formData.ctaText} 
                    onChange={(e) => setFormData({...formData, ctaText: e.target.value})} 
                    className="rounded-xl h-12 border-gray-100 bg-gray-50"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-secondary/40 ml-1">Description / Subheadline</label>
                  <Textarea 
                    value={formData.description} 
                    onChange={(e) => setFormData({...formData, description: e.target.value})} 
                    className="rounded-xl min-h-[120px] border-gray-100 bg-gray-50 resize-none"
                    placeholder="Describe the cinematic experience..."
                  />
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-secondary">Active Status</span>
                    <span className="text-[8px] font-bold text-muted-foreground uppercase">Visible on frontend</span>
                  </div>
                  <Switch 
                    checked={formData.isEnabled} 
                    onCheckedChange={(val) => setFormData({...formData, isEnabled: val})}
                  />
                </div>
              </div>
              <div className="md:col-span-2 flex gap-4 pt-4">
                <Button type="submit" className="h-12 px-10 rounded-xl font-black uppercase tracking-widest text-xs">
                  {editingId ? 'Update Banner' : 'Publish Banner'}
                </Button>
                <Button variant="outline" onClick={() => { setIsAdding(false); setEditId(null); }} className="h-12 px-10 rounded-xl font-black uppercase tracking-widest text-xs border-gray-200">
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 gap-6">
        {loading ? (
          [1,2,3].map(i => <div key={i} className="h-32 bg-gray-100 animate-pulse rounded-3xl" />)
        ) : banners.length === 0 ? (
          <div className="p-20 text-center bg-white rounded-3xl border-2 border-dashed border-gray-100">
            <PlayCircle className="w-12 h-12 text-gray-200 mx-auto mb-4" />
            <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">No banners found. Add your first video banner above.</p>
          </div>
        ) : (
          banners.map((banner) => (
            <Card key={banner.id} className="border-none shadow-sm rounded-[32px] overflow-hidden group hover:shadow-xl transition-all duration-500 bg-white">
              <div className="p-1 flex flex-col md:flex-row gap-6">
                <div className="md:w-64 aspect-video bg-black rounded-[28px] overflow-hidden relative">
                  <video src={banner.videoUrl} className="w-full h-full object-cover opacity-60" muted loop playsInline onMouseEnter={(e) => e.currentTarget.play()} onMouseLeave={(e) => e.currentTarget.pause()} />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute top-3 left-3">
                    <Badge variant={banner.isEnabled ? "default" : "secondary"} className="rounded-full px-3 py-1 text-[8px] font-black uppercase border-none shadow-lg">
                      {banner.isEnabled ? "Active" : "Hidden"}
                    </Badge>
                  </div>
                </div>
                <div className="flex-1 p-6 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-black text-secondary uppercase tracking-tight group-hover:text-primary transition-colors">{banner.title}</h3>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">Order: #{banner.order + 1}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-all" onClick={() => { setEditId(banner.id); setFormData(banner); }}>
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full hover:bg-red-50 hover:text-red-500 transition-all" onClick={() => handleDelete(banner.id, banner.title)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 italic line-clamp-2 pr-12">{banner.description}</p>
                  <div className="mt-4 flex items-center gap-4">
                     <div className="h-px flex-1 bg-gray-100" />
                     <span className="text-[8px] font-black text-gray-300 uppercase tracking-[4px]">Shyama Overseas</span>
                  </div>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
