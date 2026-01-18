import React from "react";
import { Clock, Heart, TrendingUp, Users } from "lucide-react";

const MotivationSection = () => {
  const stats = [
    {
      icon: <Clock size={24} />,
      value: "20hrs",
      label: "Saved per week",
      desc: "Average time reclaimed by switching from fragmented tools.",
    },
    {
      icon: <TrendingUp size={24} />,
      value: "300%",
      label: "ROI Increase",
      desc: "Teams report faster ship times and higher output quality.",
    },
    {
      icon: <Heart size={24} />,
      value: "4.9/5",
      label: "User Happiness",
      desc: "Consistently rated top-tier for ease of use and design.",
    },
    {
      icon: <Users size={24} />,
      value: "10k+",
      label: "Active Teams",
      desc: "Trusted by startups and agencies around the globe.",
    },
  ];

  return (
    <section id="motivation" className="scroll-mt-24 py-24 bg-[#FFF9F1]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* --- Left: The "Why" Text --- */}
          <div className="lg:w-1/2">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wider text-[#FFAEBC] uppercase bg-white border border-[#FFAEBC]/30 rounded-full">
              Our Mission
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#4A4A4A] mb-6 leading-tight">
              We were tired of <br />
              <span className="text-[#FFAEBC]">working blindly.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              In 2023, our small team realized we spent more time managing
              tickets than actually building products. The joy of creation was
              buried under administrative chaos.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We built Rambl to prove that professional software doesn't have to
              be complicated. It should be a quiet, powerful engine that pushes
              you forward, not a wall that holds you back.
            </p>

            <button className="text-[#4A4A4A] font-bold border-b-2 border-[#FFAEBC] pb-1 hover:text-[#FFAEBC] transition-colors">
              Read our full story
            </button>
          </div>

          {/* --- Right: Stats Cards Grid --- */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-[#FFAEBC] group-hover:text-white transition-colors duration-300">
                      {stat.icon}
                    </div>
                    {/* Visual decoration dots */}
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-100 group-hover:bg-[#FFAEBC]/40"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-100 group-hover:bg-[#FFAEBC]/40"></div>
                    </div>
                  </div>

                  <div className="text-3xl font-black text-[#4A4A4A] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-[#FFAEBC] mb-3 uppercase tracking-wide">
                    {stat.label}
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotivationSection;
