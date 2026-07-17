import React from "react";

const MetagenomicGenomicInfo = () => {
  return (
    <div className="w-full bg-gray-100   py-5 px-6">
      <div className="max-w-5xl mx-auto text-gray-800">

        {/* Advantages */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Advantages
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-10 text-base md:text-lg leading-relaxed">
          <li>Hypothesis-free pathogen detection
</li>
          <li>Simultaneous identification of multiple organisms</li>
          <li>Rapid and comprehensive analysis</li>
        </ul>

        {/* Limitations */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Limitations
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-10 text-base md:text-lg leading-relaxed">
          <li>Potential background contamination

</li>
          <li>Requirement for advanced bioinformatics


</li>
          <li>Interpretation within clinical context is essential


</li>
        </ul>

        {/* MDRC Expertise */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          MDRC Expertise
        </h2>
        <p className="mb-10 text-base md:text-lg leading-relaxed">
MDRC provides clinically validated mNGS testing with stringent contamination controls and expert interpretation, enabling accurate diagnosis of complex infectious diseases.

        </p>

        {/* Sample Requirements */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Sample Requirements
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-10 text-base md:text-lg leading-relaxed">
          <li>CSF, blood, BAL, tissue, or other sterile body fluids


</li>
        </ul>

        {/* Turnaround Time */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Turnaround Time
        </h2>
        <p className="text-base md:text-lg">5–7 days

</p>

      </div>
    </div>
  );
};

export default MetagenomicGenomicInfo;