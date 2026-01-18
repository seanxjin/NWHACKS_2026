import Navbar from "@/components/Navbar"; // Adjust path if needed
import { Check, Zap, Shield, Globe, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section
        id="home"
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF9F1] text-[#FFAEBC] text-sm font-bold mb-8">
          <span className="w-2 h-2 rounded-full bg-[#FFAEBC]"></span>
          New v2.0 is live
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[#4A4A4A] mb-6">
          Breathe life into <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFAEBC] to-pink-400">
            your workflow.
          </span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-gray-500 mb-10 leading-relaxed">
          Rambl helps teams navigate chaos with a lightweight, intuitive
          platform designed for speed. Stop drifting, start driving.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="px-8 py-4 bg-[#4A4A4A] text-white font-bold rounded-2xl shadow-xl hover:bg-black hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
            Start for free <ArrowRight size={18} />
          </button>
          <button className="px-8 py-4 bg-gray-100 text-gray-600 font-bold rounded-2xl hover:bg-gray-200 transition-all duration-300">
            View Demo
          </button>
        </div>

        {/* Hero Visual Placeholder */}
        <div className="mt-16 w-full h-64 md:h-96 bg-gradient-to-b from-gray-50 to-white rounded-3xl border border-gray-100 shadow-2xl flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
          <p className="text-gray-300 font-bold text-xl">Dashboard Preview</p>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section id="features" className="scroll-mt-24 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#4A4A4A] mb-4">
              Everything you need, nothing you don't.
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We stripped away the complexity to leave you with tools that
              actually matter.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap size={24} />,
                title: "Lightning Fast",
                desc: "Optimized for speed. Pages load in under 100ms so you never break your flow.",
              },
              {
                icon: <Shield size={24} />,
                title: "Bank-Grade Security",
                desc: "Your data is encrypted at rest and in transit. Safety is not an afterthought.",
              },
              {
                icon: <Globe size={24} />,
                title: "Global Sync",
                desc: "Collaborate with your team in real-time, no matter where they are in the world.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-[#FFF9F1] rounded-xl flex items-center justify-center text-[#FFAEBC] mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="scroll-mt-24 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="w-full aspect-square bg-[#FFAEBC] rounded-3xl opacity-10 absolute -top-4 -left-4"></div>
              <div className="w-full aspect-square bg-gray-100 rounded-3xl relative flex items-center justify-center overflow-hidden">
                {/* Placeholder for About Image */}
                <span className="text-gray-400 font-bold">Team Photo</span>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-[#4A4A4A] mb-6">
                Built by creators, for creators.
              </h2>
              <p className="text-gray-500 text-lg mb-6 leading-relaxed">
                Rambl started as a side project in a small coffee shop in
                Seattle. We were tired of clunky software that slowed us down.
              </p>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Today, we serve over 10,000 teams who value simplicity and
                aesthetics just as much as power. We believe software should be
                a breath of fresh air.
              </p>
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-[#FFAEBC]">
                    10k+
                  </span>
                  <span className="text-sm font-bold text-gray-400">Users</span>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-[#FFAEBC]">
                    99%
                  </span>
                  <span className="text-sm font-bold text-gray-400">
                    Uptime
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl tracking-tight">Rambl</span>
          </div>
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Twitter
            </a>
          </div>
          <div className="text-gray-500 text-sm">© 2024 Rambl Inc.</div>
        </div>
      </footer>
    </div>
  );
}
