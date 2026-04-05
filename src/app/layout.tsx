
import type { Metadata } from 'next';
import { Sora, Inter } from 'next/font/google';
import './globals.css';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['300', '400', '500', '600', '700', '800']
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Shyama Overseas | Digital Growth Maestros',
  description: 'Data-first. Creative-led. Results-obsessed. Leading Performance Marketing and Digital Strategy Solutions for Ambitious Brands.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sora.variable} ${inter.variable} font-inter antialiased selection:bg-accent/30 selection:text-accent-foreground`}>
        {children}
        <div className="fixed bottom-8 right-8 z-[9999]">
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
