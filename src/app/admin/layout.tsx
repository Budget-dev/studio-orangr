
'use client';

import { useUser } from '@/firebase/auth/use-user';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { LayoutDashboard, Image as ImageIcon, History, LogOut, Globe } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/firebase/provider';
import { signOut } from 'firebase/auth';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useUser();
  const router = useRouter();
  const pathname = usePathname();
  const auth = useAuth();

  useEffect(() => {
    if (!loading && !user && pathname !== '/admin/login') {
      router.push('/admin/login');
    }
  }, [user, loading, router, pathname]);

  const handleLogout = async () => {
    if (auth) {
      await signOut(auth);
      router.push('/admin/login');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user && pathname !== '/admin/login') {
    return null;
  }

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gray-50 w-full">
        <Sidebar className="border-r border-gray-200">
          <SidebarHeader className="p-6">
            <div className="flex flex-col gap-1">
              <span className="text-lg font-black uppercase tracking-tight text-secondary">Admin Panel</span>
              <span className="text-[9px] font-bold text-primary uppercase tracking-[0.2em]">Shyama Overseas</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu className="px-4 py-2">
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === '/admin/dashboard'}>
                  <Link href="/admin/dashboard" className="flex items-center gap-3">
                    <LayoutDashboard className="w-4 h-4" />
                    <span className="font-bold text-sm">Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === '/admin/banners'}>
                  <Link href="/admin/banners" className="flex items-center gap-3">
                    <ImageIcon className="w-4 h-4" />
                    <span className="font-bold text-sm">Banner Manager</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === '/admin/logs'}>
                  <Link href="/admin/logs" className="flex items-center gap-3">
                    <History className="w-4 h-4" />
                    <span className="font-bold text-sm">Activity Logs</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <div className="my-4 border-t border-gray-100" />
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/" target="_blank" className="flex items-center gap-3">
                    <Globe className="w-4 h-4" />
                    <span className="font-bold text-sm">View Website</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={handleLogout} className="flex items-center gap-3 text-red-500 hover:text-red-600 hover:bg-red-50">
                  <LogOut className="w-4 h-4" />
                  <span className="font-bold text-sm">Sign Out</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <SidebarInset className="flex-1 overflow-auto">
          <header className="h-16 flex items-center px-8 border-b border-gray-200 bg-white sticky top-0 z-50">
            <SidebarTrigger />
            <div className="ml-4 font-black text-secondary uppercase tracking-tight">
              {pathname.split('/').pop()?.replace('-', ' ')}
            </div>
            <div className="ml-auto flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-black text-secondary">{user?.email}</p>
                <p className="text-[10px] font-bold text-primary uppercase">Administrator</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black uppercase">
                {user?.email?.[0]}
              </div>
            </div>
          </header>
          <main className="p-8">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
