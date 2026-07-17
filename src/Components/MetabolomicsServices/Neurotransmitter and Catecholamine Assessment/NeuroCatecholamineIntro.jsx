import React from "react";

const NeuroCatecholamineIntro = () => {
  return (
    <section className="w-full py-6 sm:py-8 bg-[#0C759A] md:bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-5 sm:gap-6 md:gap-10">
        <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left">
          <h2 className="text-lg sm:text-xl md:text-[25px] font-semibold text-white md:text-gray-800 mb-3 sm:mb-4 leading-snug">
            Your Chemical Symphony of Mood, Focus, and Resilience
          </h2>

          <p className="text-white md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
            Your mood, focus, mental stamina, and stress resilience depend on a delicate chemical symphony. While these processes manifest in your mind, their physical foundation relies heavily on your body's systemic neuro-metabolic and endocrine health. Disrupted neurotransmitter synthesis, chronic adrenal overactivation, poor chemical clearance, and localized inflammation force your nervous system to operate under constant friction—resulting in brain fog, anxiety, chronic fatigue, sleep disturbances, and executive burnout.
          </p>

          <p className="text-white md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
            The Neuro-Endocrine, Catecholamine & Pathway Balance Panel utilizes advanced, non-invasive urinary testing to capture a real-time snapshot of your peripheral neurochemistry and stress axis. By analyzing your entire catecholamine pathway, primary neurotransmitters, direct breakdown metabolites, and inflammatory switches, this panel evaluates your systemic neuro-metabolic tone. It provides actionable data to help you identify chemical imbalances, optimize clearance pathways, and restore your baseline physical and mental vitality.
          </p>
        </div>

        <div className="group w-full md:w-1/2 order-2 md:order-1 max-w-xs sm:max-w-md md:max-w-none mx-auto px-1 sm:px-4 md:px-0">
          <div className="relative isolate">
            <div
              aria-hidden="true"
              className="absolute -inset-2 sm:-inset-3 bg-[#0C759A]/20 transition-transform duration-500 ease-out md:group-hover:-rotate-2"
              style={{
                clipPath:
                  "polygon(0 0, 93% 0, 100% 16%, 100% 100%, 7% 100%, 0 84%)",
              }}
            />

            <div
              className="relative overflow-hidden bg-white shadow-[0_18px_45px_rgba(15,23,42,0.22)] transition-transform duration-500 ease-out md:group-hover:rotate-1 md:group-hover:scale-[1.015]"
              style={{
                clipPath:
                  "polygon(0 0, 93% 0, 100% 16%, 100% 100%, 7% 100%, 0 84%)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80"
                alt="Neurotransmitter and Catecholamine Assessment"
                className="w-full h-auto object-cover transition-transform duration-700 ease-out md:group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-tr from-[#0C759A]/15 via-transparent to-white/10"
              />
            </div>

            <span
              aria-hidden="true"
              className="absolute -bottom-4 left-8 h-1 w-24 rounded-full bg-[#0C759A] shadow-[0_5px_14px_rgba(12,117,154,0.45)] transition-all duration-500 md:group-hover:w-36"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeuroCatecholamineIntro;
