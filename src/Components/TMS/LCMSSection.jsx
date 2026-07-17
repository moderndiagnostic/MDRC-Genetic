import React from "react";

const LCMSSection = () => {
  return (
    <div className="py-6 px-4 font-roboto">
      <div className="max-w-6xl mx-auto text-gray-800">
        
        {/* Section 1 */}
        <h2 className="text-3xl md:text-[25px] font-semibold mb-6">
          Why LC-MS/MS is Important in Diagnostics
        </h2>

        <div className="space-y-6 text-base md:text-lg leading-7 md:leading-8">
          
          <p>
            <span className="font-semibold text-[#005C96] text-base md:text-lg">
              1. Highly Accurate Biomarker Measurement
            </span>
            <br />
            LC-MS/MS measures molecules directly based on their mass-to-charge ratio, minimizing interference from similar compounds. This leads to highly precise and reproducible results, which are essential for clinical decision-making.
          </p>

          <p>
            <span className="font-semibold text-[#005C96] text-base md:text-lg">
              2. Detection of Low-Concentration Analytes
            </span>
            <br />
            Many clinically important biomarkers occur at very low concentrations in blood or urine. LC-MS/MS allows detection of these analytes with extremely low detection limits.
          </p>

          <p>
            <span className="font-semibold text-[#005C96] text-base md:text-lg">
              3. Superior Specificity Compared to Immunoassays
            </span>
            <br />
            Traditional immunoassays can sometimes suffer from cross-reactivity (false signal from similar molecules). LC-MS/MS provides structural identification, ensuring accurate analyte measurement.
          </p>

          <p>
            <span className="font-semibold text-[#005C96] text-base md:text-lg">
              4. Simultaneous Multi-Analyte Testing
            </span>
            <br />
            LC-MS/MS can analyze multiple compounds in a single run, increasing laboratory efficiency and reducing sample volume requirements.
          </p>

        </div>

        {/* Section 2 */}
        <h2 className="text-3xl md:text-[25px] font-semibold mt-12 mb-6">
          Why LC-MS/MS is preferred over Immunoassays?
        </h2>

        <p className="mb-6 text-base md:text-lg">
          Both Immunoassays and LC-MS/MS can be used for measuring analytes in biological samples, however, LC-MS offers following advantages over immunoassays
        </p>

        <div className="space-y-5 text-base md:text-lg leading-7 md:leading-8">

          <p>
            <span className="font-semibold text-[#005C96] text-base md:text-lg">
              Higher Specificity & Sensitivity
            </span>
            <br />
            LC-MS/MS effectively reduces background noise, resulting in lower limits of detection and quantification compared to traditional methods.
          </p>

          <p>
            <span className="font-semibold text-[#005C96] text-base md:text-lg">
              Reduced Matrix Interference
            </span>
            <br />
            It is less susceptible to cross-reactivity with other substances (e.g., metabolites, structurally similar compounds), which can cause false-positive/negative results in immunoassays.
          </p>

          <p>
            <span className="font-semibold text-[#005C96] text-base md:text-lg">
              Multiplexing Capabilities
            </span>
            <br />
            A single LC-MS/MS run can detect and quantify multiple analytes simultaneously, whereas immunoassays typically require separate tests for each analyte.
          </p>

          <p>
            <span className="font-semibold text-[#005C96] text-base md:text-lg">
              Reliability for Small Molecules
            </span>
            <br />
            It is considered the "gold standard" for measuring steroids, drug screening, and small metabolites, overcoming the limitations of antibody binding.
          </p>

          <p>
            <span className="font-semibold text-[#005C96] text-base md:text-lg">
              Wide Dynamic Range
            </span>
            <br />
            It is effective at quantifying analytes across a broad concentration range.
          </p>

        </div>

      </div>
    </div>
  );
};

export default LCMSSection;