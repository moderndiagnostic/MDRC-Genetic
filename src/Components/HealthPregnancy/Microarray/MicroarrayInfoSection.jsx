import React from "react";

const SectionList = ({ title, items }) => (
  <div className="mb-10">
    <div className="inline-block bg-gradient-to-b from-[#005C96] to-[#15AEE5] text-white px-5 sm:px-6 py-2 rounded-lg font-semibold shadow text-base sm:text-lg">
      {title}
    </div>
    <ul className="mt-5 space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="text-green-500 shrink-0 mt-0.5">•</span>
          <p>{item}</p>
        </li>
      ))}
    </ul>
  </div>
);

const MicroarrayInfoSection = () => {
  return (
    <div className="bg-gray-100 py-6 sm:py-8 px-4 lg:py-12 sm:px-6 md:px-10 font-roboto">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h2 className="text-xl sm:text-2xl md:text-[25px] font-semibold text-gray-800 mb-4">
            What is Chromosomal Microarray Analysis?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            Chromosomal Microarray Analysis is a genome-wide screening technique
            that evaluates DNA for gains and losses of genetic material that may
            not be visible through traditional chromosome analysis. Unlike
            conventional karyotyping, CMA can detect submicroscopic chromosomal
            changes responsible for developmental disorders, congenital
            anomalies, intellectual disabilities, and pregnancy-related
            complications.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            By offering significantly higher resolution, CMA enables clinicians
            to identify clinically relevant genetic abnormalities that would
            otherwise remain undiagnosed.
          </p>
        </div>

        <SectionList
          title="Why Choose Microarray Testing? — Superior Detection Capability"
          items={[
            "High-resolution analysis (approximately 100 KB–1 MB)",
            "Detection of microdeletions and microduplications",
            "Genome-wide Copy Number Variation (CNV) analysis",
            "Loss of Heterozygosity (LOH) assessment",
            "Increased diagnostic sensitivity compared to conventional karyotyping",
            "Faster turnaround time",
            "Higher success rate due to reduced culture dependency",
          ]}
        />

        <SectionList
          title="Prenatal Indications for Chromosomal Microarray"
          items={[
            "Fetal Structural Abnormalities — One or more abnormalities detected on ultrasound",
            "Abnormal Prenatal Screening Results — Confirmation of positive cell-free fetal DNA (cfDNA/NIPT) screening results",
            "Intrauterine Fetal Demise or Stillbirth",
            "Product of Conception (POC) Testing — Investigation of recurrent miscarriages and unexplained pregnancy losses",
            "Known Familial Genetic Abnormality — When a chromosomal abnormality is known within the family",
          ]}
        />

        <SectionList
          title="Postnatal Indications for Chromosomal Microarray"
          items={[
            "Developmental Delay — Identification of genetic causes associated with delayed developmental milestones",
            "Intellectual Disability — Detection of chromosomal abnormalities contributing to cognitive impairment",
            "Autism Spectrum Disorder (ASD) — Recommended as a first-tier genetic test for individuals with suspected Autism Spectrum Disorders",
            "Multiple Congenital Anomalies — Assessment of underlying chromosomal imbalances associated with birth defects",
          ]}
        />

        <div className="mb-10">
          <h2 className="text-xl sm:text-2xl md:text-[25px] font-semibold text-gray-800 mb-4">
            Product of Conception (POC) Microarray Testing
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            Pregnancy loss is often associated with underlying chromosomal
            abnormalities. Two major genetic causes include Chromosomal
            Aneuploidy (the most common genetic cause of first-trimester
            miscarriages) and Inherited Unbalanced Translocations from parents
            carrying balanced translocations, which can lead to recurrent
            pregnancy loss.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            POC Microarray Testing helps identify these genetic causes and
            assists clinicians in planning future pregnancies and reproductive
            strategies.
          </p>
        </div>

        <SectionList
          title="Clinical Benefits of Microarray Testing"
          items={[
            "Improved Diagnostic Yield — Detects genetic abnormalities that may not be identified through standard chromosome analysis",
            "Better Reproductive Planning — Supports informed decision-making for future pregnancies and assisted reproductive technologies",
            "Reduced Need for Additional Testing — Helps avoid multiple unnecessary and costly investigations",
            "Psychological Reassurance — Provides clarity and answers for families affected by developmental disorders or recurrent pregnancy loss",
            "Internationally Recommended — Endorsed by ACOG and ACMG guidelines for appropriate prenatal and postnatal genetic evaluation",
          ]}
        />
      </div>
    </div>
  );
};

export default MicroarrayInfoSection;
