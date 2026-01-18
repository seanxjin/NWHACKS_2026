import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
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
        Rambl helps teams navigate chaos with a lightweight, intuitive platform
        designed for speed. Stop drifting, start driving.
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
  );
};

export default HeroSection;
