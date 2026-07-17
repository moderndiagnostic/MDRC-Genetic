import React from "react";

const NeuropsychWhy = () => {
  return (
    <section className="w-full py-8 sm:py-10 md:py-14 bg-gradient-to-b from-[#0C759A] to-[#005E91] md:bg-none font-roboto">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white md:text-gray-800 text-center md:text-left">
          Why Standard Dosing Fails: The Need for Individual Precision
        </h2>
        <p className="text-white md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4 mt-3 md:font-medium text-center md:text-left">
          To understand your results, it helps to look at our unique biological engines. Every individual absorbs, metabolizes, and clears neuropsychiatric medications at wildly different speeds based on genetic variations in liver enzymes (such as the CYP450 system), kidney function, age, and interactions with other medications or dietary habits.
        </p>
        <p className="text-white md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed text-center md:text-left">
          For instance, a person classified as a "poor metabolizer" for a specific liver pathway will clear neuroleptics sluggishly, causing the drug to build up to toxic levels on a standard dose. Conversely, an "ultra-rapid metabolizer" will burn through anti-epileptic drugs too quickly, leaving their nervous system unprotected and highly vulnerable to breakthrough events. Because of these hidden biological differences, giving the exact same dose to two people of identical weight can lead to completely different blood concentrations. This panel bypasses generic dosing algorithms by measuring your exact blood levels, completely eliminating clinical guesswork.
        </p>
      </div>
    </section>
  );
};

export default NeuropsychWhy;
