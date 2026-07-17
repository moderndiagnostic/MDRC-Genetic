import React from "react";

const NewbornScreeningPrevention = () => {
  return (
    <section className="w-full py-8 sm:py-10 md:py-14 bg-gradient-to-b from-[#0C759A] to-[#005E91] md:bg-none font-roboto">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white md:text-gray-800 text-center md:text-left">
          The Preventative Power of Early Detection
        </h2>

        <p className="text-white md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4 mt-3 md:font-medium text-center md:text-left">
          To understand the urgency of this screen, it helps to look at our biological design. At birth, a newborn transitions instantly from maternal life support to operating their own metabolic machinery. A baby with an Inborn Error of Metabolism may appear perfectly healthy at birth because the maternal placenta cleaned their blood during pregnancy.
        </p>

        <p className="text-white md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed text-center md:text-left">
          However, as soon as feeding begins, the infant's body must process amino acids (from proteins) and fatty acids (for energy). If an essential enzyme is missing or defective, toxic metabolic waste immediately begins to accumulate in the bloodstream, while the brain and muscles are starved of fuel. Because the damage from an undetected IEM can be irreversible, this high-precision screen acts as an essential safety net—identifying metabolic bottlenecks at the molecular level during the critical window of early infancy.
        </p>
      </div>
    </section>
  );
};

export default NewbornScreeningPrevention;
