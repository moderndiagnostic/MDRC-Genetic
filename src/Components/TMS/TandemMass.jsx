import React from "react";

import tmsInstrument from "../../assets/tms-lcmsms-instrument.webp";

const Rare = () => {
  return (
    <section className="w-full py-5 bg-[#0C759A] md:bg-white">
      
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-10">
        
        {/* TEXT */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          
         <h2 className="hidden md:block text-2xl md:text-[25px] font-semibold text-white md:text-gray-800">
  Tandem Mass Spectrometry  (TMS)
</h2>

          <p className="text-white md:text-gray-600 text-base md:text-lg leading-relaxed mb-6">
            LC-MS/MS (Liquid Chromatography–Tandem Mass Spectrometry) has become one of the most powerful analytical tools in modern clinical diagnostics. It combines liquid chromatography (separation of compounds) with mass spectrometry (precise molecular detection) to identify and quantify biomolecules in biological samples with exceptional accuracy.
          </p>

          <p className="text-white md:text-gray-600 text-base md:text-lg leading-relaxed mb-6">
            Because of its high specificity (ability to distinguish very similar molecules) and high sensitivity (ability to detect extremely low concentrations), LC-MS/MS is increasingly used as the reference method (most reliable analytical technique) for many diagnostic tests.
          </p>

        </div>

        {/* IMAGE */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <img
            src={tmsInstrument}
            alt="Waters LC-MS/MS (Tandem Mass Spectrometry) system at MDRC India"
            className="w-full max-w-[400px] mx-auto rounded-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Rare;