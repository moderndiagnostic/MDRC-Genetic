import React from "react";

const AntiTBWhy = () => {
  return (
    <section className="w-full py-8 sm:py-10 md:py-14 bg-gradient-to-b from-[#0C759A] to-[#005E91] md:bg-none font-roboto">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white md:text-gray-800 text-center md:text-left">
          Why Standard Dosing Fails: The Need for Individual Precision
        </h2>

        <p className="text-white md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4 mt-3 md:font-medium text-center md:text-left">
          To understand your results, it helps to look at our unique biological mechanisms of drug metabolism. Every individual absorbs, metabolizes, and clears anti-TB medications at wildly different speeds based on genetic variations, liver function, kidney health, age, and nutritional status.
        </p>

        <p className="text-white md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed text-center md:text-left">
          A prime example is the genetic variation known as "acetylator status," which determines how fast a patient's liver breaks down drug isoniazid. A fast acetylator may clear the medication too rapidly, risking low drug levels and treatment failure. A slow acetylator clears the drug sluggishly, causing toxic accumulation. Because of these hidden biological differences, giving a standard dose to two people of the same weight can lead to completely different blood concentrations. This panel bypasses generic dosing algorithms by measuring your exact blood levels, eliminating laboratory guesswork.
        </p>
      </div>
    </section>
  );
};

export default AntiTBWhy;
