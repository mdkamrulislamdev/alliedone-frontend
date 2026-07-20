import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      
      {/* Hero Section */}
      <section className="relative bg-white pt-20 pb-32 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-brand-accent text-xs font-bold mb-8 uppercase tracking-wide">
            <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
            Enterprise Digital Solutions
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight max-w-4xl mx-auto">
            Automate and Scale with <span className="text-brand-accent">Intelligent Systems.</span>
          </h1>
          
          <p className="text-lg text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto">
            We architect and deploy custom AI automation, business process workflows, and targeted marketing infrastructures to drive sustainable growth.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/services" className="bg-brand-accent text-white px-8 py-4 rounded-full font-bold hover:bg-brand-blue transition-all shadow-lg hover:shadow-xl text-center">
              Explore Our Services
            </Link>
            <Link href="/contact" className="bg-white text-slate-700 px-8 py-4 rounded-full font-bold border-2 border-slate-200 hover:border-slate-300 transition-all text-center">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section (Focusing on B, F, H) */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Capabilities</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Delivering specialized technological interventions across three key service domains.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Service Line B - AI Business Consulting */}
            <div className="bg-white p-10 rounded-2xl shadow-soft border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-brand-accent mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">AI Business Consulting</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                We assist companies in identifying strategic AI use-cases, designing operational workflows, and creating comprehensive implementation roadmaps.
              </p>
              <Link href="/services" className="text-brand-accent text-sm font-bold hover:text-brand-blue flex items-center gap-1">
                View Consulting Scope <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            {/* Service Line F - Business Process Automation */}
            <div className="bg-white p-10 rounded-2xl shadow-soft border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-brand-accent mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Process Automation</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Streamline critical operations through custom approval workflows, inventory syncing, and automated internal systems.
              </p>
              <Link href="/services" className="text-brand-accent text-sm font-bold hover:text-brand-blue flex items-center gap-1">
                View Automation Tools <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            {/* Service Line H - Digital Marketing + AI Agency */}
            <div className="bg-white p-10 rounded-2xl shadow-soft border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-brand-accent mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Digital Marketing & AI</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Scale audience reach using data-backed ad campaigns, SEO, automated AI content generation, and smart lead capturing.
              </p>
              <Link href="/services" className="text-brand-accent text-sm font-bold hover:text-brand-blue flex items-center gap-1">
                View Agency Services <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Value Proposition CTA */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to upgrade your infrastructure?</h2>
          <p className="text-slate-500 mb-10 text-lg">
            Let our team build a seamless, AI-integrated digital environment tailored specifically for your business operations.
          </p>
          <Link href="/contact" className="inline-block bg-brand-blue text-white px-8 py-4 rounded-full font-bold hover:bg-brand-accent transition-colors shadow-lg">
            Start Your Project
          </Link>
        </div>
      </section>

    </div>
  );
}
