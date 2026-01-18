"use client";

import React from "react";

const MotivationSection = () => {
  const factCards = [
    {
      stat: "1 in 5",
      title: "young adults",
      description: "experience a mental health condition each year, yet many don't have a safe space to express their feelings.",
      source: "NAMI",
    },
    {
      stat: "75%",
      title: "of mental illness",
      description: "begins by age 24. Early expression and support can make a significant difference in outcomes.",
      source: "WHO",
    },
    {
      stat: "60%",
      title: "of youth",
      description: "with depression don't receive any treatment. Sometimes, just talking about it can be the first step.",
      source: "MHA",
    },
  ];

  return (
    <section id="motivation" className="scroll-mt-24 py-24 bg-[#FFF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Half - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column - Text */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A4A4A] mb-6 leading-tight">
              motivations
            </h2>
            <p className="text-lg md:text-xl text-[#7A7A7A] mb-6 leading-relaxed">
              We believe everyone deserves a space to let their thoughts flow freely,
              without judgment. Sometimes the weight of unexpressed emotions can feel
              overwhelming—but it doesn&apos;t have to be that way.
            </p>
            <p className="text-lg md:text-xl text-[#7A7A7A] mb-8 leading-relaxed">
              Rambl was built with one simple goal: give you a friendly companion
              to ramble to, whenever you need it.
            </p>

            {/* Tagline with heart */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFAEBC]/20 rounded-[50px]">
              <span className="text-[#FFAEBC] text-xl">we</span>
              <svg className="w-6 h-6 text-[#FFAEBC] animate-pulse-soft" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span className="text-[#FFAEBC] text-xl font-semibold">mental health</span>
            </div>
          </div>

          {/* Right Column - Sad/Thinking Mascot */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-float-gentle">
              {/* Mascot - Thinking blob */}
              <div className="w-64 h-64 md:w-80 md:h-80 bg-[#A0E7E5] rounded-blob animate-blob-wobble opacity-90 relative">
                {/* Face */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Eyes - Looking up/thinking */}
                  <div className="flex gap-8 md:gap-10 -mt-4">
                    {/* Left eye */}
                    <div className="relative">
                      <div className="w-8 h-10 md:w-10 md:h-12 bg-white rounded-full">
                        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 h-4 md:w-5 md:h-5 bg-[#4A4A4A] rounded-full" />
                      </div>
                    </div>
                    {/* Right eye */}
                    <div className="relative">
                      <div className="w-8 h-10 md:w-10 md:h-12 bg-white rounded-full">
                        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 h-4 md:w-5 md:h-5 bg-[#4A4A4A] rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Slight frown / neutral expression */}
                <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2">
                  <div className="w-10 h-2 md:w-12 md:h-2 bg-white/80 rounded-full" />
                </div>
              </div>

              {/* Thought bubble */}
              <div className="absolute -top-4 -right-4 md:-top-8 md:-right-8">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-soft flex items-center justify-center animate-float animation-delay-1000">
                  <span className="text-2xl md:text-3xl">💭</span>
                </div>
                <div className="absolute bottom-0 left-2 w-4 h-4 bg-white rounded-full shadow-soft" />
                <div className="absolute -bottom-2 left-0 w-2 h-2 bg-white rounded-full shadow-soft" />
              </div>

              {/* Blush circles */}
              <div className="absolute top-1/2 -left-4 w-8 h-6 bg-[#FFAEBC] rounded-full opacity-50" />
              <div className="absolute top-1/2 -right-4 w-8 h-6 bg-[#FFAEBC] rounded-full opacity-50" />
            </div>
          </div>
        </div>

        {/* Bottom Half - Three Fact Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {factCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-[24px] shadow-soft hover:shadow-soft-lg hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Stat */}
              <div className="text-5xl md:text-6xl font-bold text-[#7EC8E3] mb-2">
                {card.stat}
              </div>

              {/* Title */}
              <div className="text-xl font-bold text-[#4A4A4A] mb-4">
                {card.title}
              </div>

              {/* Description */}
              <p className="text-[#7A7A7A] leading-relaxed mb-6">
                {card.description}
              </p>

              {/* Source link */}
              <a
                href="#"
                className="text-sm font-medium text-[#FFAEBC] hover:text-[#ff8fa3] transition-colors inline-flex items-center gap-1"
              >
                Source: {card.source}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MotivationSection;
