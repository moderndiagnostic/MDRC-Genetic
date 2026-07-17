import React from "react";

const WholeExomeGenomicInfo = () => {
  return (
    <div className="w-full bg-gray-100   py-5 px-6">
      <div className="max-w-5xl mx-auto text-gray-800">

        {/* Advantages */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Advantages
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-10 text-base md:text-lg leading-relaxed">
          <li>High diagnostic yield for Mendelian diseases</li>
          <li>Cost-effective compared to WGS</li>
          <li>Reduced incidental findings</li>
          <li>Efficient data interpretation</li>
        </ul>

        {/* Limitations */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Limitations
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-10 text-base md:text-lg leading-relaxed">
          <li>Limited detection of non-coding and deep intronic variants
</li>
          <li>Reduced sensitivity for certain structural variants
</li>
          <li>ncomplete coverage of GC-rich or repetitive regions
</li>
        </ul>

        {/* MDRC Expertise */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          MDRC Expertise
        </h2>
        <p className="mb-10 text-base md:text-lg leading-relaxed">
          MDRC provides high-depth exome sequencing with comprehensive clinical interpretation, periodic reanalysis options, and adherence to ACMG/AMP variant classification standards.

        </p>

        {/* Sample Requirements */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Sample Requirements
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-10 text-base md:text-lg leading-relaxed">
          <li>3–5 mL peripheral blood in EDTA tube</li>
        </ul>

        {/* Turnaround Time */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Turnaround Time
        </h2>
        <p className="text-base md:text-lg">4–6 weeks
</p>

      </div>
    </div>
  );
};

export default WholeExomeGenomicInfo;