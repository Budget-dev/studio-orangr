
'use client';

import { useState } from 'react';
import { useAuth } from '@/firebase/provider';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Lock } from 'lucide-react';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth) return;

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "Welcome back",
        description: "Successfully signed in to admin panel.",
      });
      router.push('/admin/dashboard');
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Login failed",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAF8] px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-secondary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-xl">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl font-black text-secondary uppercase tracking-tighter">Admin Portal</h1>
          <p className="text-muted-foreground text-sm font-medium mt-2">Sign in to manage Shyama Overseas</p>
        </div>

        <Card className="border-none shadow-2xl rounded-[32px] overflow-hidden">
          <CardHeader className="bg-secondary text-white pb-8">
            <CardTitle className="text-lg font-black uppercase tracking-widest">Authentication</CardTitle>
            <CardDescription className="text-white/60">Secure access for authorized personnel only</CardDescription>
          </CardHeader>
          <CardContent className="pt-8 space-y-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-secondary/40 ml-1">Email Address</label>
                <Input 
                  type="email" 
                  placeholder="admin@shyamaoverseas.com" 
                  className="rounded-xl h-12 border-gray-100 bg-gray-50 focus:ring-primary/20"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-secondary/40 ml-1">Password</label>
                <Input 
                  type="password" 
                  placeholder="••••••••" 
                  className="rounded-xl h-12 border-gray-100 bg-gray-50 focus:ring-primary/20"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full h-14 rounded-xl font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20 transition-all active:scale-[0.98]"
                disabled={loading}
              >
                {loading ? 'Authenticating...' : 'Sign In Now'}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="bg-gray-50 flex flex-col gap-2 pt-6">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Forgot password? Contact IT support</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
