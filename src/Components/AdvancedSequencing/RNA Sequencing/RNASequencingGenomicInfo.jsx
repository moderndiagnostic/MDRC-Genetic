import React from "react";

const RNASequencingGenomicInfo = () => {
  return (
    <div className="w-full bg-gray-100   py-5 px-6">
      <div className="max-w-5xl mx-auto text-gray-800">

        {/* Advantages */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Advantages
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-10 text-base md:text-lg leading-relaxed">
          <li>Provides functional genomic information
</li>
          <li>Enhances interpretation of DNA-based findings
</li>
          <li>Enables fusion gene detection
</li>
        </ul>

        {/* Limitations */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Limitations
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-10 text-base md:text-lg leading-relaxed">
          <li>RNA instability and tissue specificity
</li>
          <li>Requires high-quality samples
</li>
          <li>Expression variability across tissues

</li>
        </ul>

        {/* MDRC Expertise */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          MDRC Expertise
        </h2>
        <p className="mb-10 text-base md:text-lg leading-relaxed">
MDRC employs clinically validated RNA-Seq workflows for accurate fusion detection and transcriptomic profiling, supporting precision oncology and complex genetic diagnoses.

        </p>

        {/* Sample Requirements */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Sample Requirements
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-10 text-base md:text-lg leading-relaxed">
          <li>Fresh/frozen tissue or blood collected in RNA stabilization tubes
</li>
        </ul>

        {/* Turnaround Time */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Turnaround Time
        </h2>
        <p className="text-base md:text-lg">2–3 weeks</p>

      </div>
    </div>
  );
};

export default RNASequencingGenomicInfo;