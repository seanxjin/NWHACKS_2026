"use client";

import React, { useState, useEffect } from "react";

const FeaturesSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const features = [
    {
      icon: "💬",
      title: "Voice Your Thoughts",
      description: "Speak freely into the void. Our AI companion listens without judgment, helping you process your emotions through conversation.",
      color: "#7EC8E3",
    },
    {
      icon: "🎭",
      title: "Express Yourself",
      description: "Sometimes words aren't enough. Use our mood tracking and expressive tools to capture how you're really feeling.",
      color: "#FFAEBC",
    },
    {
      icon: "🌱",
      title: "Grow Together",
      description: "Track your emotional journey over time. Watch patterns emerge and celebrate small victories along the way.",
      color: "#B4F8C8",
    },
  ];

  const screens = [
    {
      title: "Hey, how are you feeling today?",
      content: "I'm here to listen. Just start talking whenever you're ready...",
      mood: "🫂",
    },
    {
      title: "I hear you...",
      content: "That sounds really tough. It's okay to feel overwhelmed sometimes.",
      mood: "💙",
    },
    {
      title: "Let's take a breath",
      content: "You're doing great by opening up. Want to continue, or take a moment?",
      mood: "🌸",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % screens.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [screens.length]);

  return (
    <section id="features" className="scroll-mt-24 py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A4A4A] mb-4">
            how it works
          </h2>
          <p className="text-lg md:text-xl text-[#7A7A7A] max-w-2xl mx-auto">
            A gentle companion that&apos;s always there when you need to rambl
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - App Mockup / Slideshow */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Phone Frame */}
              <div className="bg-[#F5F5F5] rounded-[40px] p-4 shadow-soft-lg max-w-sm mx-auto">
                <div className="bg-white rounded-[32px] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-[#7EC8E3] px-6 py-4 flex items-center justify-between">
                    <span className="text-white font-semibold text-lg">rambl</span>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-white/50 rounded-full" />
                      <div className="w-3 h-3 bg-white/50 rounded-full" />
                      <div className="w-3 h-3 bg-white/50 rounded-full" />
                    </div>
                  </div>

                  {/* Chat Screen */}
                  <div className="p-6 min-h-[350px] flex flex-col justify-between">
                    {/* Messages */}
                    <div className="space-y-4">
                      {/* Bot Message */}
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-[#7EC8E3] rounded-full flex items-center justify-center flex-shrink-0 animate-float-gentle">
                          <span className="text-lg">{screens[activeSlide].mood}</span>
                        </div>
                        <div className="bg-[#F5F5F5] rounded-[20px] rounded-tl-sm p-4 max-w-[85%]">
                          <p className="font-semibold text-[#4A4A4A] mb-1">
                            {screens[activeSlide].title}
                          </p>
                          <p className="text-[#7A7A7A] text-sm">
                            {screens[activeSlide].content}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Input Area */}
                    <div className="mt-6">
                      <div className="flex items-center gap-3 bg-[#F5F5F5] rounded-[50px] p-3 pr-4">
                        <div className="flex-1 text-[#7A7A7A] text-sm pl-2">
                          Type or tap to speak...
                        </div>
                        <button className="w-10 h-10 bg-[#7EC8E3] rounded-full flex items-center justify-center hover:bg-[#5BA3C0] transition-colors">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                            <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {screens.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeSlide === idx
                        ? "bg-[#7EC8E3] w-8"
                        : "bg-[#E5E5E5] hover:bg-[#CCCCCC]"
                    }`}
                  />
                ))}
              </div>

              {/* Floating decorations */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#FBE7C6] rounded-full opacity-60 animate-float-slow" />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#B4F8C8] rounded-full opacity-50 animate-float animation-delay-2000" />
            </div>
          </div>

          {/* Right Column - Feature List with Connector */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Vertical dotted line connector */}
              <div className="absolute left-7 top-12 bottom-12 w-px border-l-2 border-dashed border-[#E5E5E5] hidden md:block" />

              {/* Features */}
              <div className="space-y-8">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex gap-6 items-start group"
                  >
                    {/* Icon Circle */}
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-soft group-hover:scale-110 transition-transform duration-300 relative z-10"
                      style={{ backgroundColor: `${feature.color}30` }}
                    >
                      <span className="text-2xl">{feature.icon}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-[#4A4A4A] mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-[#7A7A7A] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
