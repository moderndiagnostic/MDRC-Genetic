import React from "react";
import introImg from "../../../assets/depression-assessment-intro.png";

const DepressionIntro = () => {
  return (
    <section className="w-full py-6 sm:py-8 bg-[#0C759A] md:bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-5 sm:gap-6 md:gap-10">
        <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left">
          <h2 className="text-lg sm:text-xl md:text-[25px] font-semibold text-white md:text-gray-800 mb-3 sm:mb-4 leading-snug">
            The Chemical Foundation of Mood and Emotional Resilience
          </h2>

          <p className="text-white md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
            Your mood, emotional resilience, physical stamina, and cognitive clarity depend on a delicate chemical symphony. While depression is often discussed purely as a psychological state, its physical foundation is deeply rooted in your body's systemic neuro-metabolic, methylation, and gut-brain pathways. When these internal systems suffer from cellular energy shortages, impaired clearance, toxic microbial overgrowths, or chronic low-grade neuroinflammation, your brain shifts into a state of structural friction—manifesting as persistent low mood, anhedonia, brain fog, and mood disorders. This panel helps in identifying any underlying biochemical disturbances that are known to be associated with mood disorders and depression, helping in diagnosis as well as treatment management.
          </p>

          <p className="text-white md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
            The Advanced Neuro-Metabolic, Methylation & Brain-Axis Panel utilizes state-of-the-art biomarker analysis to look far past abstract symptoms. By integrating advanced blood and urinary organic acid metrics, this panel provides an objective, high-density map of your internal chemistry. It pinpoints the exact biological bottlenecks driving mental exhaustion, allowing you to implement data-driven interventions to cool internal friction and restore your daily vitality.
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
                src={introImg}
                alt="Depression Assessment Panel laboratory analysis"
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

export default DepressionIntro;
