import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Allied One | AI & Digital Solutions",
  description: "Enterprise AI Automation, Consulting, and Digital Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>
        {/* Minimal Presentation Navbar */}
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto border-b border-gray-100">
          <div className="font-bold text-2xl text-brand-blue tracking-tight">Allied One.</div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-brand-blue transition-colors">Services</a>
            <a href="#" className="hover:text-brand-blue transition-colors">About</a>
            <a href="#" className="hover:text-brand-blue transition-colors">Contact</a>
          </div>
          <button className="bg-brand-blue text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-accent transition-all shadow-md">
            Schedule a Demo
          </button>
        </nav>

        <main>{children}</main>

        {/* Minimal Presentation Footer */}
        <footer className="bg-brand-light py-12 mt-20">
          <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Allied One Ltd. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
