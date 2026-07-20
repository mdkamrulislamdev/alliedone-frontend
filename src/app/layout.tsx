import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
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
      <body className={`${inter.className} bg-brand-light text-slate-900 flex flex-col min-h-screen`}>
        
        {/* Professional Navigation */}
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
          <div className="flex justify-between items-center p-5 max-w-7xl mx-auto">
            <Link href="/" className="flex items-center gap-3">
              {/* Using the attached company logo */}
              <img src="/logo.jpeg" alt="Allied One Logo" className="h-10 w-auto object-contain" />
              <span className="font-extrabold text-2xl text-brand-blue tracking-tight">Allied One</span>
            </Link>
            
            <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
              <Link href="/" className="hover:text-brand-accent transition-colors">Home</Link>
              <Link href="/services" className="hover:text-brand-accent transition-colors">Services</Link>
              <Link href="/about" className="hover:text-brand-accent transition-colors">About</Link>
              <Link href="/contact" className="hover:text-brand-accent transition-colors">Contact</Link>
            </div>
            
            <Link href="/contact" className="bg-brand-accent text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-blue transition-all shadow-md">
              Schedule a Demo
            </Link>
          </div>
        </nav>

        {/* Page Content */}
        <main className="flex-grow">{children}</main>

        {/* Structured Corporate Footer */}
        <footer className="bg-brand-blue text-slate-300 py-16 border-t border-blue-900 mt-20">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
            
            {/* Brand Column */}
            <div className="col-span-1 md:col-span-1">
              <span className="font-extrabold text-2xl text-white tracking-tight block mb-4">Allied One</span>
              <p className="text-sm text-slate-300 leading-relaxed">
                Transforming businesses through intelligent AI automation, operational efficiency, and data-driven digital strategies.
              </p>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Services</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/services" className="hover:text-white transition-colors">AI Business Consulting</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Process Automation</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Digital Marketing & AI</Link></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Connect</h4>
              <Link href="/contact" className="inline-block border border-slate-500 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-white hover:text-brand-blue transition-all">
                Get in Touch
              </Link>
            </div>

          </div>
          <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-slate-700/50 text-sm text-slate-400 flex justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Allied One Ltd. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
