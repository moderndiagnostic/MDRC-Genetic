import React from "react";

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
      {title}
    </h2>
<<<<<<< HEAD
    <div className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
=======
    <div className="text-lg md:text-xl text-gray-700 leading-relaxed">
>>>>>>> dfcb555ac04c72e4bac571defe511b797624b2e1
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

const HereditaryCancerGenomicsGenomicInfo = () => {
  return (
    <div className="w-full py-8 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Sample Requirements */}
        {/* <Section title="Limitations">
          <List items={[
            "Reduced sensitivity in low tumor burden",
            "Negative results do not completely exclude tumor mutations",
          ]} />
        </Section> */}

        {/* Turnaround Time */}
        <Section title="Turnaround Time">
          <p>2–3 weeks</p>
        </Section>

        {/* Advantages */}
        {/* <Section title="Advantages">
          <List items={[
            "Non-invasive and repeatable",
            "Reflects tumor heterogeneity",
            "Enables real-time therapeutic monitoring",
          ]} />
        </Section> */}

        {/* MDRC Expertise */}
        <Section title="Why Choose MDRC Genetics">
          <List items={[
            "Comprehensive multi-gene panels",
            "ACMG/AMP-compliant variant classification",
            "Genetic counseling support",
            "Family risk assessment and management guidance "
          ]} />
        </Section>

      </div>
    </div>
  );
};

export default HereditaryCancerGenomicsGenomicInfo;