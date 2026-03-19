import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shyama Overseas | Global Trade & Logistics Solutions',
  description: 'Connecting India to the world since 2005. Expert freight forwarding, customs clearance, and supply chain solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary/30 selection:text-primary-foreground">
        {children}
      </body>
    </html>
  );
}