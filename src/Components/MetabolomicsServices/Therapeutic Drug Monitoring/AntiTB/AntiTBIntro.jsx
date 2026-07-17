import React from "react";
import introImg from "../../../../assets/tdm-antitb-intro.png";

const AntiTBIntro = () => {
  return (
    <section className="w-full py-6 sm:py-8 bg-[#0C759A] md:bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-5 sm:gap-6 md:gap-10">
        <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left">
          <h2 className="text-lg sm:text-xl md:text-[25px] font-semibold text-white md:text-gray-800 mb-3 sm:mb-4 leading-snug">
            Therapeutic Drug Monitoring (TDM) of First-Line Anti-Tuberculosis Drugs 
          </h2>

          <p className="text-white md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
            Your long-term treatment success, organ safety, and full recovery from TB depend on a highly precise balance of your medication levels. First-line anti-tuberculosis (TB) drugs are powerful, life-saving antibiotics designed to eradicate Mycobacterium tuberculosis from your system. However, these medications have a narrow therapeutic window and are handled differently by every individual. If your blood levels drop too low, the bacteria can become drug-resistant, leading to treatment failure. If they spike too high, they trigger serious side effects, resulting in profound liver toxicity, nerve damage, and systemic side effects.
          </p>

          <p className="text-white md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
            The Therapeutic Drug Monitoring (TDM) Panel for First-Line Anti-TB Drugs utilizes high-precision Liquid Chromatography-Tandem Mass Spectrometry (LC-MS/MS) to track exactly how your body processes these vital medications. Rather than relying on standard weight-based dosing, this panel measures your exact blood concentrations at critical time intervals. This provides your medical team with the precise data needed to adjust your dosage for maximum safety, speed, and success.
          </p>

          <p className="text-white md:text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
            Modern Diagnostic is the first lab in the world offering TDM of all four first-line anti-TB drugs (rifampicin, isoniazid, pyrazinamide, and ethambutol) by dried blood spot and LC-MS/MS-based technology.
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
                alt="First-Line Anti-Tuberculosis Drugs TDM"
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

export default AntiTBIntro;
