import React from "react";
import GenomicInfo from "./GenomicInfo";

const WholeGenomeSequencingSection = () => {
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
                <b>Genome Coverage</b> –  Coding and non-coding regions
              </p>
            </li>

            <li className="flex items-start gap-3">
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
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
                <b>Typical Coverage Depth</b> –  ≥30× for germline applications


              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
                <b>Sequencing Strategy</b> –  Paired-end short-read sequencing with optional long-read integration



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
Rare and undiagnosed genetic disorders


              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
Neurodevelopmental conditions

              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
Congenital anomalies
       </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
Hereditary cancers
</p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
Pharmacogenomics
</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
Carrier screening

</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
Mitochondrial disorders
</p>
            </li>

          </ul>
        </div>



        <div>
  <div className="inline-block  text-black px-6 py-2 rounded-lg font-semibold  text-3xl">
    Workflow
  </div>

  <ol className="mt-5 space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed list-decimal pl-5">
    
    <li>
Sample collection (peripheral blood, saliva, or tissue)
    </li>

    <li>
High-quality genomic DNA extraction
    </li>

    <li>
Library preparation with fragmentation and adapter ligation
    </li>

    <li>
Massively parallel sequencing
    </li>

    <li>
Bioinformatics analysis (alignment, variant calling, annotation)
    </li>

    <li>
Variant interpretation following ACMG/AMP guidelines
    </li>

    <li>
Clinical reporting with actionable clinical recommendations
    </li>

  </ol>
</div>

      </div>
    </div>
    <GenomicInfo/>
    </>
  );
};

export default WholeGenomeSequencingSection; 