import React from "react";

const GenomicInfo = () => {
  return (
    <div className="w-full bg-gray-100 py-5a px-6">
      <div className="max-w-5xl mx-auto text-gray-800">

        {/* Advantages */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Advantages
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-10 text-base md:text-lg leading-relaxed">
          <li>Most comprehensive genomic assessment</li>
          <li>Detection of variants beyond coding regions</li>
          <li>Improved diagnostic yield for complex cases</li>
          <li>Single-test solution for heterogeneous disorders</li>
        </ul>

        {/* Limitations */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Limitations
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-10 text-base md:text-lg leading-relaxed">
          <li>Higher cost and data complexity</li>
          <li>Potential for incidental or secondary findings</li>
          <li>Interpretation challenges in non-coding regions</li>
        </ul>

        {/* MDRC Expertise */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          MDRC Expertise
        </h2>
        <p className="mb-10 text-base md:text-lg leading-relaxed">
          MDRC Genetics utilizes advanced sequencing platforms and validated
          bioinformatics pipelines to deliver clinically actionable WGS reports
          with high analytical sensitivity and specificity. Multidisciplinary
          review ensures accurate interpretation and meaningful clinical
          correlation.
        </p>

        {/* Sample Requirements */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Sample Requirements
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-10 text-base md:text-lg leading-relaxed">
          <li>3–5 mL peripheral blood in EDTA tube (preferred)</li>
          <li>Saliva or extracted DNA (acceptable)</li>
        </ul>

        {/* Turnaround Time */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Turnaround Time
        </h2>
        <p className="text-base md:text-lg">6–8 weeks</p>

      </div>
    </div>
  );
};

export default GenomicInfo;