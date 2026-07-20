export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-16 pb-24">
      
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto mb-24">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-accent text-xs font-bold mb-6">
          <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
          AI-Powered Solutions
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
          Automate, Scale, and Innovate with <span className="text-brand-blue">Intelligent Systems.</span>
        </h1>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          We deliver digital solutions that combine cutting-edge artificial intelligence, business process automation, and targeted marketing to help your business stay ahead.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-brand-blue text-white px-8 py-3.5 rounded-full font-semibold hover:bg-brand-accent transition-all shadow-lg hover:shadow-xl">
            Explore our work &rarr;
          </button>
          <button className="bg-white text-gray-700 px-8 py-3.5 rounded-full font-semibold border border-gray-200 hover:border-gray-300 transition-all">
            Set a demo
          </button>
        </div>
      </section>

      {/* Priority Service Lines Grid */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Capabilities</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Transforming operations through targeted AI implementation and data-driven digital strategies.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Service Line B */}
          <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-50 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue text-xl mb-6">
              📊
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">AI Business Consulting</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Helping companies identify where to use AI, what to automate, SOPs, workflow design, and comprehensive implementation plans.
            </p>
            <a href="#" className="text-brand-accent text-sm font-semibold hover:underline">Learn more &rarr;</a>
          </div>

          {/* Service Line F */}
          <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-50 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue text-xl mb-6">
              ⚙️
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Process Automation</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Streamline operations with approval workflows, inventory, attendance, HR, and comprehensive leave management automation.
            </p>
            <a href="#" className="text-brand-accent text-sm font-semibold hover:underline">Learn more &rarr;</a>
          </div>

          {/* Service Line H */}
          <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-50 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue text-xl mb-6">
              🚀
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Digital Marketing + AI</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Scale your reach with Facebook/Google Ads, advanced SEO, AI-generated content workflows, and optimized lead generation.
            </p>
            <a href="#" className="text-brand-accent text-sm font-semibold hover:underline">Learn more &rarr;</a>
          </div>

        </div>
      </section>

    </div>
  );
}
