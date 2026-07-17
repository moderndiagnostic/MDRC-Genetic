import React from "react";

const LongReadGenomicInfo = () => {
  return (
    <div className="w-full bg-gray-100   py-5 px-6">
      <div className="max-w-5xl mx-auto text-gray-800">

        {/* Advantages */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Advantages
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-10 text-base md:text-lg leading-relaxed">
          <li>Superior detection of structural and repetitive variants
</li>
          <li>Improved genome assembly and variant phasing
</li>
          <li>Enhanced resolution of complex loci
</li>
        </ul>

        {/* Limitations */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Limitations
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-10 text-base md:text-lg leading-relaxed">
          <li>Higher cost compared to short-read sequencing
</li>
          <li>Lower throughput in some platforms

</li>
          <li>Specialized data analysis requirements

</li>
        </ul>

        {/* MDRC Expertise */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          MDRC Expertise
        </h2>
        <p className="mb-10 text-base md:text-lg leading-relaxed">
MDRC integrates long-read sequencing approaches for cases requiring enhanced structural resolution, complementing standard NGS diagnostics.

        </p>

        {/* Sample Requirements */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Sample Requirements
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-10 text-base md:text-lg leading-relaxed">
          <li>High molecular weight DNA from peripheral blood or tissue

</li>
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

export default LongReadGenomicInfo;