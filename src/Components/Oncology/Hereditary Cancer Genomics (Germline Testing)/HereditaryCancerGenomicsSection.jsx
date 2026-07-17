import React from "react";
import HereditaryCancerGenomicsGenomicInfo from "./HereditaryCancerGenomicsGenomicInfo";

const HereditaryCancerGenomicsSection = () => {
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
                <b>Technology</b> –    NGS with CNV analysis (MLPA or bioinformatic algorithms)



              </p>
            </li>

         

            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
                <b>Sample Types</b> –   Peripheral blood or saliva

              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
                <b>Variant Types</b> –  SNVs, indels, and exon-level CNVs


              </p>
            </li>
            
            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
                <b>Common Genes</b> –  
                <ul>
                  <li>BRCA1, BRCA2 – Hereditary Breast and Ovarian Cancer</li>
                  <li>MLH1, MSH2, MSH6, PMS2, EPCAM – Lynch Syndrome</li>
                  <li>TP53 – Li-Fraumeni Syndrome</li>
                  <li>APC – Familial Adenomatous Polyposis</li>
                  <li>PTEN, PALB2, CHEK2 – Other predisposition syndromes</li>
                  
                </ul>




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
Cancer risk assessment

              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
Preventive and surveillance strategies

              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
Family cascade testing
       </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
Therapeutic decision-making (e.g., PARP inhibitors)
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
    <HereditaryCancerGenomicsGenomicInfo/>
    </>
  );
};

export default HereditaryCancerGenomicsSection; 