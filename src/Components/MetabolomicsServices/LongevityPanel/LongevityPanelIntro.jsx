import React from "react";

const LongevityPanelIntro = () => {
  return (
    <section className="w-full py-6 sm:py-8 md:py-10 bg-[#0C759A] md:bg-white font-roboto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-[#15AEE5] md:text-[#005C96] mb-4 sm:mb-5">
          The Aging Speed Panel
        </h2>

        <p className="text-white md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-5">
          Aging is no longer a mystery we cannot track—it is a measurable process.
        </p>

        <p className="text-white md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
          Aging is a complex, multifactorial process. While chronological age
          measures the passage of time, biological age reflects the functional
          health of your tissues and organs. Through modern metabolic science, we
          can now examine the chemical processes that drive aging to provide a
          snapshot of your cellular status—and, more importantly, your aging
          speed.
        </p>

        <div className="bg-white/10 md:bg-gray-50 rounded-xl p-5 sm:p-6 md:p-8 border border-white/20 md:border-gray-100">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white md:text-[#005C96] mb-4">
            How Fast Are You Aging Right Now?
          </h2>

          <p className="text-white/90 md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            Most people rely on a calendar to gauge their age, but your body's
            internal clock runs on a different schedule. Just as two cars of the
            same model year can have vastly different mileage and wear and tear,
            two people of the same chronological age can have very different
            biological ages.
          </p>

          <p className="text-white/90 md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Think of your body as having an internal speedometer. While time moves
            at the same rate for everyone, your body may be aging faster or slower
            based on how well four critical metabolic systems are functioning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LongevityPanelIntro;
