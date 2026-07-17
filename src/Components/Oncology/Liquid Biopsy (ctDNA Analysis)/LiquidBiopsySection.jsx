import React from "react";
import LiquidBiopsyGenomicInfo from "./LiquidBiopsyGenomicInfo";

const LiquidBiopsySection = () => {
  return (
    <>
    <div className="bg-gray-100 py-6 px-4 md:px-10 font-roboto lg:py-12">
      
      <div className="max-w-5xl mx-auto">
        
        {/* Section 1 */}
        <div className="mb-10">
          <div className="inline-block bg-gradient-to-b from-[#005C96] to-[#15AEE5] text-white px-6 py-2 rounded-lg font-semibold shadow text-base md:text-lg">
Technical Scope
          </div>

          <ul className="mt-5 space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            
            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
                <b>Sample Type</b> –   Peripheral blood (10–20 mL)


              </p>
            </li>

         

            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
                <b>Technology</b> –  Ultra-deep NGS with molecular barcoding
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
                <b>Sensitivity</b> –  Detection of variants with VAF as low as 0.1%




              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
                <b>Variant Types</b> –  SNVs, indels, CNVs, and selected fusions
              </p>
            </li>
            {/* <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
                <b>Variant Types Detected</b> –  
                <ul>
                  <li>Single Nucleotide Variants (SNVs)</li>
                  <li>Insertions and Deletions (Indels)</li>
                  <li>Copy Number Variations (CNVs)</li>
                  <li>Structural Variants (SVs)</li>
                  <li>Gene Fusions (via RNA sequencing)</li>
                  <li>Tumor Mutational Burden (TMB)</li>
                  <li>Microsatellite Instability (MSI)</li>
                </ul>




              </p>
            </li> */}

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
Identification of actionable mutations

              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
Detection of resistance mutations (e.g., EGFR T790M)

              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
Monitoring treatment response
       </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
Minimal residual disease (MRD) assessment
</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
Detection of disease relapse
</p>
            </li>
            {/* <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
Eligibility for clinical trials
</p>
            </li> */}

          

          </ul>
        </div>

        



      

      </div>
    </div>
    <LiquidBiopsyGenomicInfo/>
    </>
  );
};

export default LiquidBiopsySection; 