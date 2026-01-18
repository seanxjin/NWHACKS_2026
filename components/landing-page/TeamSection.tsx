import React from "react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "David",
      title: "Full Stack Developer",
      color: "#7EC8E3",
      emoji: "🚀",
    },
    {
      name: "Sean",
      title: "AI/ML Engineer",
      color: "#FFAEBC",
      emoji: "🤖",
    },
    {
      name: "Daniel",
      title: "Backend Developer",
      color: "#B4F8C8",
      emoji: "⚡",
    },
    {
      name: "Cindy",
      title: "UI/UX Designer",
      color: "#FBE7C6",
      emoji: "🎨",
    },
  ];

  return (
    <section id="team" className="scroll-mt-24 py-24 bg-[#FFF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A4A4A] mb-4">
            the minds behind the mascots
          </h2>
          <p className="text-lg md:text-xl text-[#7A7A7A] max-w-2xl mx-auto">
            A small team with big hearts, building something meaningful
          </p>
        </div>

        {/* Team Cards - Horizontal Flex Wrap */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center group"
            >
              {/* Circular Avatar Frame */}
              <div className="relative mb-4">
                {/* Outer ring with pastel color */}
                <div
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full p-2 transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: member.color }}
                >
                  {/* Inner circle - placeholder for photo */}
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    {/* Blob mascot as avatar placeholder */}
                    <div
                      className="w-20 h-20 md:w-24 md:h-24 rounded-blob animate-blob-wobble flex items-center justify-center"
                      style={{ backgroundColor: `${member.color}80` }}
                    >
                      <span className="text-3xl md:text-4xl">{member.emoji}</span>
                    </div>
                  </div>
                </div>

                {/* Floating decoration */}
                <div
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center animate-float-gentle shadow-soft"
                  style={{ backgroundColor: member.color }}
                >
                  <span className="text-white text-sm">✨</span>
                </div>
              </div>

              {/* Name */}
              <h3 className="text-xl md:text-2xl font-bold text-[#4A4A4A] mb-1">
                {member.name}
              </h3>

              {/* Title */}
              <p className="text-[#7A7A7A] font-medium">
                {member.title}
              </p>
            </div>
          ))}
        </div>

        {/* Optional: Fun tagline */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-[50px] shadow-soft">
            <span className="text-2xl animate-float-gentle">🎉</span>
            <span className="text-[#4A4A4A] font-medium">Built with love at nwHacks 2026</span>
            <span className="text-2xl animate-float-gentle animation-delay-1000">💙</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
