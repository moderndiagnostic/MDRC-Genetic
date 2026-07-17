import React from "react";

const GutMicrobiomeIntro = () => {
  return (
    <section className="w-full py-6 sm:py-8 bg-[#0C759A] md:bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-6 sm:gap-4 md:gap-10">
        <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left">
          <h2 className="text-lg sm:text-xl md:text-[25px] font-semibold text-white md:text-gray-800 mb-3 sm:mb-4 leading-snug">
            Importance of Gut-Derived Metabolites for Health
          </h2>

          <p className="text-white md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
            Your gut is the ultimate control center for systemic health, immune function, and biological longevity. While everyday digestion is important, the true measure of your gut health lies in its microscopic chemical environment. The gut microbiome continuously produces active metabolic compounds that either protect your body or slowly poison it from within. When harmful bacterial overgrowth takes over, your gut transforms into a primary source of internal friction, toxicity, and systemic aging.
          </p>

          <p className="text-white md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
            With recent breakthroughs in metabolomic testing, we can now capture a precise snapshot of these microbial byproducts. The Gut-Driven Inflammatory Burden Panel measures the specific organic acids that reveal whether your gut bacteria are supporting your health and longevity or actively depleting you and accelerating your biological clock. The best part? Once you identify these toxic microbial pathways, you can take targeted steps to eliminate harmful overgrowth, rebuild your gut barrier, and clear your systemic inflammatory load.
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
                src="https://images.unsplash.com/photo-1649073586751-695a1f9f76de?auto=format&fit=crop&w=1200&q=80"
                alt="Gut Microbiome Health Assessment"
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

export default GutMicrobiomeIntro;
