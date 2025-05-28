import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Using Inter as a base, but CSS sets playful font
import './globals.css';
import { Toaster } from '@/components/ui/toaster'; // Import Toaster

// Using Inter as a fallback, primary font set in globals.css
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Ankit's's Bday Surprise",
  description: 'Happy Birthday Ankit!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Toaster /> {/* Add Toaster component here */}
      </body>
    </html>
  );
}
