import Link from "next/link";
import LeadCaptureForm from "@/components/sections/LeadCaptureForm";

export default function Home() {
  return (
    <div className="w-full">

      {/* ══════════════════════════════════════════════
          HERO — Full-bleed gradient banner
      ══════════════════════════════════════════════ */}
      <section className="bg-hero-gradient relative overflow-hidden">
        {/* Decorative background rings */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full border border-white/5"></div>
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full border border-white/5"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-28 md:py-36 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-brand-light text-xs font-bold mb-8 uppercase tracking-widest border border-white/20">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
              Enterprise AI Solutions
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Automate. Scale.{" "}
              <span className="text-brand-gold">Dominate.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Allied One architects and deploys custom AI automation, business process workflows, and intelligent digital marketing systems — so your business grows on autopilot.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-brand-gold text-white px-8 py-4 rounded-full font-bold hover:bg-brand-goldHov transition-all shadow-lg hover:shadow-xl text-center text-base"
              >
                Start Your AI Journey
              </Link>
              <Link
                href="/services"
                className="bg-white/10 text-white px-8 py-4 rounded-full font-bold border border-white/30 hover:bg-white/20 transition-all text-center text-base backdrop-blur-sm"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="h-16 bg-gradient-to-b from-transparent to-brand-slate absolute bottom-0 left-0 right-0"></div>
      </section>

      {/* ══════════════════════════════════════════════
          TRUST BAR — "As used by..."
      ══════════════════════════════════════════════ */}
      <section className="bg-brand-slate border-b border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-brand-muted uppercase tracking-widest mb-6">Delivering results across industries</p>
          <div className="flex flex-wrap justify-center gap-10 items-center text-brand-muted text-sm font-bold">
            {["Retail & E-Commerce", "Healthcare", "Finance & FinTech", "Education", "Real Estate", "Logistics"].map((industry) => (
              <span key={industry} className="opacity-60 hover:opacity-100 transition-opacity cursor-default">{industry}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PRIORITY SERVICES — B, F, H (3-col feature cards)
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-mid text-sm font-bold uppercase tracking-widest">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mt-2 mb-4">Core Service Lines</h2>
            <p className="text-brand-muted max-w-2xl mx-auto text-lg">Three specialized technology domains delivering measurable ROI for modern businesses.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                letter: "B",
                title: "AI Business Consulting",
                desc: "We help companies identify where to use AI, what to automate, design SOPs and workflows, and create comprehensive AI implementation roadmaps — so you invest in the right places.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                ),
                href: "/services",
                cta: "View Consulting Scope"
              },
              {
                letter: "F",
                title: "Business Process Automation",
                desc: "Streamline critical operations through custom approval workflows, inventory syncing, HR and leave management, and automated internal systems that eliminate manual repetition.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                ),
                href: "/services",
                cta: "View Automation Tools"
              },
              {
                letter: "H",
                title: "Digital Marketing & AI Agency",
                desc: "Scale audience reach using data-backed Facebook/Google Ads, SEO, AI-generated content, and smart lead capturing — the company's own proof of concept for what we build for clients.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                ),
                href: "/services",
                cta: "View Agency Services"
              },
            ].map((service) => (
              <div key={service.letter} className="group relative bg-white border border-slate-100 rounded-2xl p-10 hover:shadow-soft hover:-translate-y-1 transition-all duration-300">
                {/* Service letter badge */}
                <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-brand-light flex items-center justify-center">
                  <span className="text-xs font-extrabold text-brand-blue">{service.letter}</span>
                </div>
                <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-navy">{service.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-8">{service.desc}</p>
                <Link href={service.href} className="text-brand-mid text-sm font-bold hover:text-brand-navy flex items-center gap-1 group-hover:gap-2 transition-all">
                  {service.cta} <span>&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FULL SERVICE CATALOGUE — All 8 lines
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-brand-slate">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-brand-mid text-sm font-bold uppercase tracking-widest">Full Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mt-2 mb-4">Everything We Offer</h2>
            <p className="text-brand-muted max-w-xl mx-auto">A complete suite of AI-powered services designed to modernize every layer of your business.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { letter: "A", title: "AI Automation", desc: "Chatbots, WhatsApp/Messenger bots, lead capture, email automation, CRM setup & AI customer support." },
              { letter: "B", title: "AI Business Consulting", desc: "Strategy, SOPs, workflow design, and full AI implementation plans tailored to your operations." },
              { letter: "C", title: "Corporate AI Training", desc: "ChatGPT, Copilot, AI productivity, and AI for HR / Marketing / Finance teams." },
              { letter: "D", title: "Website + AI Package", desc: "Website, domain, business email, AI chatbot, SEO, and Google Business Profile." },
              { letter: "E", title: "AI-Powered Recruitment", desc: "ATS-ready CVs, AI candidate screening, interview automation, and hiring support." },
              { letter: "F", title: "Process Automation", desc: "Approval workflows, inventory, attendance, HR, and leave management automation." },
              { letter: "G", title: "AI Content Studio", desc: "Social media content, video scripts, blog posts, product descriptions, and marketing copy." },
              { letter: "H", title: "Digital Marketing & AI", desc: "Facebook/Google Ads, SEO, AI-generated content, and smart lead generation." },
            ].map((item) => (
              <div key={item.letter} className="bg-white rounded-xl p-6 border border-slate-100 hover:border-brand-blue/30 hover:shadow-card transition-all group">
                <div className="w-9 h-9 rounded-lg bg-brand-navy text-white flex items-center justify-center text-sm font-extrabold mb-4">
                  {item.letter}
                </div>
                <h4 className="font-bold text-brand-navy mb-2 text-sm">{item.title}</h4>
                <p className="text-brand-muted text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          HOW IT WORKS — 3-step process
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-brand-mid text-sm font-bold uppercase tracking-widest">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mt-2 mb-4">How Allied One Works</h2>
            <p className="text-brand-muted max-w-xl mx-auto">From discovery to deployment, we handle every step with precision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line (hidden on mobile) */}
            <div className="hidden md:block absolute top-10 left-[calc(16.666%+2rem)] right-[calc(16.666%+2rem)] h-0.5 bg-brand-light"></div>

            {[
              { step: "01", title: "Discovery & Audit", desc: "We assess your current workflows, identify AI opportunities, and map out where automation creates the highest ROI." },
              { step: "02", title: "Design & Build", desc: "Our team architects and builds your custom AI system — from chatbots and automations to full CRM and marketing infrastructure." },
              { step: "03", title: "Deploy & Scale", desc: "We go live, monitor performance, and continuously optimize so your systems improve over time without manual effort." },
            ].map((step) => (
              <div key={step.step} className="text-center relative z-10">
                <div className="w-20 h-20 rounded-full bg-brand-navy text-white text-2xl font-extrabold flex items-center justify-center mx-auto mb-6 shadow-glow">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{step.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CRM / MDS HIGHLIGHT — Sprint deliverable
      ══════════════════════════════════════════════ */}
      <section className="py-20 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="flex-1">
            <span className="text-brand-gold text-sm font-bold uppercase tracking-widest">Live CRM + MDS Pipeline</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-5">Your Leads. Captured. Stored. Ready.</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Every contact form submission on this site flows directly into our live CRM directory and is simultaneously logged into our Modern Data Stack — ready for future analytics, reporting, and automation triggers.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              {["Real-time CRM capture", "MDS ingestion log", "Status tracking", "Timestamped records"].map((feat) => (
                <span key={feat} className="px-4 py-2 bg-white/10 border border-white/20 text-white rounded-full font-medium backdrop-blur-sm">✓ {feat}</span>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/contact"
              className="inline-block bg-brand-gold text-white px-8 py-4 rounded-full font-bold hover:bg-brand-goldHov transition-all shadow-xl text-lg"
            >
              Submit Your Details &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          AD-BOT HIGHLIGHT — Sprint deliverable H
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-brand-slate">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Visual mock */}
          <div className="bg-white rounded-2xl shadow-soft p-8 border border-slate-100">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
              </div>
              <div>
                <p className="text-xs text-brand-muted">Allied One Bot &bull; Instant Response</p>
                <p className="text-xs text-green-500 font-medium">● Online</p>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="bg-brand-light rounded-lg rounded-tl-none p-3 max-w-xs text-brand-dark">
                Hi! Thanks for your interest. Here's what Allied One offers: 🤖
              </div>
              <div className="bg-brand-light rounded-lg rounded-tl-none p-3 max-w-xs text-brand-dark leading-relaxed">
                ✅ AI Automation & Chatbots<br/>
                ✅ AI Business Consulting<br/>
                ✅ Process Automation<br/>
                ✅ Digital Marketing & AI<br/>
                ✅ AI Content Studio<br/>
                <span className="text-brand-muted text-xs mt-1 block">...and more. Reply to learn about any service!</span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="text-brand-mid text-sm font-bold uppercase tracking-widest">Service Line H</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mt-2 mb-5">Instant AI Responses to Your Ads</h2>
            <p className="text-brand-muted text-lg leading-relaxed mb-6">
              When someone comments on, clicks, or messages via your Facebook or LinkedIn ad, our AI bot sends them an instant, personalized services list — keeping your brand responsive 24/7 without any manual effort.
            </p>
            <ul className="space-y-3 text-sm text-brand-muted">
              {[
                "Facebook Messenger auto-responder",
                "LinkedIn ad-interaction bot",
                "Instant service list delivery",
                "Scalable to full conversational AI"
              ].map((feat) => (
                <li key={feat} className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                  {feat}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="inline-block mt-8 bg-brand-navy text-white px-6 py-3 rounded-full font-bold hover:bg-brand-blue transition-all">
              Set Up Your Bot &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CONTACT FORM — Embedded on homepage
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-white border-t border-slate-100" id="contact">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-brand-mid text-sm font-bold uppercase tracking-widest">Work With Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mt-2 mb-4">
              Ready to <span className="text-brand-mid">Automate?</span>
            </h2>
            <p className="text-brand-muted max-w-2xl mx-auto text-lg">
              Fill out the form below and our team will get back to you with a tailored strategy for your business.
            </p>
          </div>
          <LeadCaptureForm />
        </div>
      </section>

    </div>
  );
}
