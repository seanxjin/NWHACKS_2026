import React from "react";
import { Zap, Shield, Globe } from "lucide-react";

const FeaturesSection = () => {
  const featuresList = [
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
  ];

  return (
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
          {featuresList.map((feature, idx) => (
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
  );
};

export default FeaturesSection;
