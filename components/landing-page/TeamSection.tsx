import React from "react";

const TeamSection = () => {
  return (
    <section id="team" className="scroll-mt-24 py-24">
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
              Rambl started as a side project in a small coffee shop in Seattle.
              We were tired of clunky software that slowed us down.
            </p>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Today, we serve over 10,000 teams who value simplicity and
              aesthetics just as much as power. We believe software should be a
              breath of fresh air.
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#FFAEBC]">10k+</span>
                <span className="text-sm font-bold text-gray-400">Users</span>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#FFAEBC]">99%</span>
                <span className="text-sm font-bold text-gray-400">Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
