import type {Metadata} from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Nihan Najeeb P | UI/UX Designer & Frontend Developer",
  description: "Personal portfolio of Nihan Najeeb P, a 15-year-old UI/UX designer and frontend developer specializing in HTML, CSS, JavaScript, Bootstrap, and jQuery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
