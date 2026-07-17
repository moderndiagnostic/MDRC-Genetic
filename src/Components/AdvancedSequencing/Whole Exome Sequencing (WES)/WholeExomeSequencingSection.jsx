import React from "react";
import WholeExomeGenomicInfo from "./WholeExomeGenomicInfo";

const WholeExomeSequencingSection = () => {
  return (
    <>
    <div className="bg-gray-100 py-6 px-4 md:px-10 font-roboto lg:py-12">
      
      <div className="max-w-5xl mx-auto">
        
        {/* Section 1 */}
        <div className="mb-10">
         <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Technical Scope

        </h2>

          <ul className="mt-5 space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            
            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
                <b>Target Region</b> –  ~20,000 genes (exons and splice sites)

              </p>
            </li>

            {/* <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
                <b>Variant Detection</b>
                <ul>
                  <li>Single Nucleotide Variants (SNVs)</li>
                  <li>Insertions and Deletions (Indels)</li>
                  <li>Copy Number Variations (CNVs)</li>
                  <li>Structural Variants (SVs) such as inversions and translocations</li>
                  <li>Mitochondrial DNA variants</li>
                  <li>Repeat expansions (platform-dependent)</li>
                </ul>



              </p>
            </li> */}

            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
                <b>Coverage Depth</b> –  ≥100× mean depth



              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
                <b>Variant Detection</b> –  SNVs, indels, and exon-level CNVs




              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
                <b>Enrichment Method</b> –  Hybrid capture-based target enrichment





              </p>
            </li>

          </ul>
        </div>

        {/* Section 2 */}
        <div>
          

           <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Clinical Applications

        </h2>

          <ul className="mt-5 space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            
            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
Pediatric and adult rare genetic disorders


              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
Neurodevelopmental and intellectual disabilities

              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
Epilepsy and neuromuscular disorders
       </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
Metabolic and syndromic conditions
</p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
Trio-based analysis for de novo variant detection

</p>
            </li>
           

          </ul>
        </div>



    

      </div>
    </div>
    <WholeExomeGenomicInfo/>
    </>
  );
};

export default WholeExomeSequencingSection; 