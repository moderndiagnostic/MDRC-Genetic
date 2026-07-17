import React from "react";

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
      {title}
    </h2>
    <div className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
      {children}
    </div>
  </div>
);

const List = ({ items }) => (
  <ul className="space-y-4">
    {items.map((item, index) => (
      <li key={index} className="flex items-start gap-3">
        <span className="text-green-500 mt-2 text-lg">•</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const TargetedSolidTumorPanelsGenomicInfo = () => {
  return (
    <div className="w-full py-8 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Sample Requirements */}
        <Section title="Sample Requirements">
          <List items={[
            "FFPE tumor tissue or cytology specimens"
          ]} />
        </Section>

        {/* Turnaround Time */}
        <Section title="Turnaround Time">
          <p>2–3 weeks</p>
        </Section>

        {/* Advantages */}
        <Section title="Advantages">
          <List items={[
            "High sensitivity for low variant allele frequency (VAF)",
            "Faster turnaround time compared to broader assays",
            "Cost-effective and clinically focused",
            "Reduced incidental findings"
          ]} />
        </Section>

        {/* MDRC Expertise */}
        <Section title="MDRC Expertise">
          <List items={[
            "Optimized for degraded FFPE samples",
            "Clinically curated gene lists",
            "Actionable and therapy-oriented reporting"
          ]} />
        </Section>

      </div>
    </div>
  );
};

export default TargetedSolidTumorPanelsGenomicInfo;