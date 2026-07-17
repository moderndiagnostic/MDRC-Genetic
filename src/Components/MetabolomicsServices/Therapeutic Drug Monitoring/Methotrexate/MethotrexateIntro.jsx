import React from "react";
import introImg from "../../../../assets/tdm-methotrexate-intro.png";

const MethotrexateIntro = () => {
  return (
    <section className="w-full py-6 sm:py-8 bg-[#0C759A] md:bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-6 sm:gap-4 md:gap-10">
        <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left">
          <h2 className="text-lg sm:text-xl md:text-[25px] font-semibold text-white md:text-gray-800 mb-3 sm:mb-4 leading-snug">
            Therapeutic Drug Monitoring (TDM) of Methotrexate
          </h2>
          <p className="text-white md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
            Your treatment safety, organ preservation, and successful clinical recovery depend on a highly precise timeline of your medication levels. Methotrexate is a powerful, life-saving medication used across two major clinical domains: low-dose regimens for autoimmune conditions (such as rheumatoid arthritis or psoriasis) and high-dose regimens for oncology protocols (such as leukemia, lymphoma, or osteosarcoma). Methotrexate functions by blocking folate pathways to halt rapidly dividing cells. However, it features an incredibly narrow therapeutic window. If your body clears it too slowly, the drug shifts into a state of severe internal friction—triggering profound bone marrow suppression, acute kidney injury, liver strain, and painful mucosal ulcerations.
          </p>
          <p className="text-white md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
            The Therapeutic Drug Monitoring (TDM) Panel for Methotrexate utilizes high-precision Liquid Chromatography-Tandem Mass Spectrometry (LC-MS/MS) to track exactly how your body processes this medication in real time. Rather than relying on generic predictions, this panel maps your precise personal drug clearance curve. This delivers the high-density data required to adjust your doses or initiate timely, life-saving antidote strategies (such as Leucovorin rescue) with absolute precision.
          </p>
        </div>
        <div className="group w-full md:w-1/2 order-2 md:order-1 max-w-md md:max-w-none mx-auto px-2 sm:px-4 md:px-0">
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
                alt="Methotrexate TDM"
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

export default MethotrexateIntro;
