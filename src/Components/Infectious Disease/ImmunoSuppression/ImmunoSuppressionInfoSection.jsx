import React from "react";

const ImmunoSuppressionInfoSection = () => {
  return (
    <div className="bg-gray-100 py-6 px-4 md:px-10 font-roboto lg:py-12">
      
      <div className="max-w-5xl mx-auto">
        
        {/* Section 1 */}
        <div className="mb-10">
          <div className="inline-block bg-gradient-to-b from-[#005C96] to-[#15AEE5] text-white px-6 py-2 rounded-lg font-semibold shadow text-base md:text-lg">
            Key Diagnostic Evaluations
          </div>

          <ul className="mt-5 space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            
            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
                <b>Quantitative Viral Load Testing</b> – Measures viral burden in infections such as HIV, HCV, and HPV.


              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
                <b>Serological Profiling</b> – Detects pathogen-specific antibodies and antigens to assess immune response.

              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
                <b>Molecular Assays</b> – High-precision PCR-based testing for early detection and monitoring of viral infections.

              </p>
            </li>

          </ul>
        </div>

        {/* Section 2 */}
        <div>
          <div className="inline-block bg-gradient-to-b from-[#005C96] to-[#15AEE5] text-white px-6 py-2 rounded-lg font-semibold shadow text-base md:text-lg">
            Clinical Applications
          </div>

          <ul className="mt-5 space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            
            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
                Enables continuous monitoring of chronic viral infections.

              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
                Supports assessment of treatment efficacy and therapeutic adjustments.

              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
Provides prognostic insights for long-term clinical management.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
                Guides infection control and clinical management for immunocompromised individuals.

</p>
            </li>

          </ul>
        </div>

      </div>
    </div>
  );
};

export default ImmunoSuppressionInfoSection;