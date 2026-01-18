import React from "react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4"
    >
      {/* Background decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large pastel blob - top left */}
        <div
          className="absolute -top-20 -left-20 w-72 h-72 bg-[#FFAEBC] opacity-20 rounded-blob animate-blob-wobble"
        />
        {/* Medium mint blob - top right */}
        <div
          className="absolute top-40 -right-10 w-48 h-48 bg-[#B4F8C8] opacity-25 rounded-blob animate-blob-wobble animation-delay-2000"
        />
        {/* Small lavender blob - bottom left */}
        <div
          className="absolute bottom-32 left-20 w-32 h-32 bg-[#E0BBE4] opacity-20 rounded-blob animate-blob-wobble animation-delay-1000"
        />
        {/* Peach blob - bottom right */}
        <div
          className="absolute bottom-20 right-32 w-40 h-40 bg-[#FBE7C6] opacity-25 rounded-blob animate-blob-wobble animation-delay-3000"
        />
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#4A4A4A] mb-6 leading-tight">
          don&apos;t keep in your{" "}
          <span className="text-[#7EC8E3] relative inline-block">
            crash outs
            {/* Underline decoration */}
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8C50 2 150 2 198 8"
                stroke="#7EC8E3"
                strokeWidth="4"
                strokeLinecap="round"
                className="animate-pulse-soft"
              />
            </svg>
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#7A7A7A] mb-12">
          are you ready to{" "}
          <span className="text-[#FFAEBC] font-semibold">rambl</span>?
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          {/* Get Started - Primary pill button */}
          <button className="px-10 py-4 bg-[#7EC8E3] text-white font-bold text-lg rounded-[50px] shadow-pastel-blue hover:bg-[#5BA3C0] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            Get Started
          </button>

          {/* Learn More - Ghost pill button */}
          <button className="px-10 py-4 bg-transparent border-3 border-[#7EC8E3] text-[#7EC8E3] font-bold text-lg rounded-[50px] hover:bg-[#7EC8E3]/10 hover:-translate-y-1 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Floating Mascot - Blue Blob Character */}
      <div className="absolute bottom-10 sm:bottom-20 left-1/2 -translate-x-1/2 z-0 pointer-events-none">
        <div className="relative animate-float-slow">
          {/* Main blob body */}
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-[#7EC8E3] rounded-blob animate-blob-wobble opacity-90 relative">
            {/* Face */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Eyes */}
              <div className="flex gap-6 sm:gap-8 md:gap-10 -mt-4">
                {/* Left eye */}
                <div className="relative">
                  <div className="w-6 h-8 sm:w-8 sm:h-10 md:w-10 md:h-12 bg-white rounded-full">
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-[#4A4A4A] rounded-full" />
                  </div>
                </div>
                {/* Right eye */}
                <div className="relative">
                  <div className="w-6 h-8 sm:w-8 sm:h-10 md:w-10 md:h-12 bg-white rounded-full">
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-[#4A4A4A] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            {/* Smile */}
            <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2">
              <svg
                className="w-12 h-6 sm:w-16 sm:h-8 md:w-20 md:h-10"
                viewBox="0 0 60 30"
                fill="none"
              >
                <path
                  d="M5 10 Q30 35 55 10"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          {/* Blush circles */}
          <div className="absolute top-1/2 -left-2 sm:-left-4 w-6 h-4 sm:w-8 sm:h-6 bg-[#FFAEBC] rounded-full opacity-60" />
          <div className="absolute top-1/2 -right-2 sm:-right-4 w-6 h-4 sm:w-8 sm:h-6 bg-[#FFAEBC] rounded-full opacity-60" />
        </div>
      </div>

      {/* Small floating decorative blobs */}
      <div className="absolute top-1/4 left-10 w-8 h-8 bg-[#A0E7E5] rounded-full opacity-60 animate-float animation-delay-1000" />
      <div className="absolute top-1/3 right-16 w-6 h-6 bg-[#FFAEBC] rounded-full opacity-50 animate-float-gentle animation-delay-2000" />
      <div className="absolute bottom-1/3 left-1/4 w-5 h-5 bg-[#FBE7C6] rounded-full opacity-60 animate-float animation-delay-3000" />
      <div className="absolute top-1/2 right-1/4 w-7 h-7 bg-[#B4F8C8] rounded-full opacity-50 animate-float-slow" />
    </section>
  );
};

export default HeroSection;
