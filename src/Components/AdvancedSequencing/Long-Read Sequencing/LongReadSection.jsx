import React from "react";
import LongReadGenomicInfo from "./LongReadGenomicInfo";

const LongReadSection = () => {
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
                <b>Read Length</b> –  Typically 10 kb



              </p>
            </li>

         

            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
                <b>Variant Detection</b> –  Structural variants, repeat expansions, complex rearrangements, phasing of alleles





              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
                <b>Applications</b> –   Genome assembly and haplotype resolution



              </p>
            </li>
           

          </ul>
        </div>



        <div>
          <div className="inline-block bg-gradient-to-b from-[#005C96] to-[#15AEE5] text-white px-6 py-2 rounded-lg font-semibold shadow text-base md:text-lg">
            Clinical Applications
          </div>

          <ul className="mt-5 space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            
            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
Repeat expansion disorders (e.g., Huntington disease, Fragile X syndrome)


              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
Structural rearrangements

              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
Complex genomic regions
       </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
Phasing of compound heterozygous variants
</p>
            </li>

          

          </ul>
        </div>



      

      </div>
    </div>
    <LongReadGenomicInfo/>
    </>
  );
};

export default LongReadSection; 