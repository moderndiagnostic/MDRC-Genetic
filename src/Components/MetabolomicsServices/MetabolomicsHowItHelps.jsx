import React from "react";

const benefits = [
  "Understand your body's biological aging process",
  "Identify nutritional deficiencies that may affect health and appearance",
  "Assess oxidative stress (a key contributor to aging)",
  "Evaluate metabolic health and energy production",
  "Support personalised nutrition and lifestyle recommendations",
  "Help optimise overall wellness and healthy aging",
];

const MetabolomicsHowItHelps = () => {
  return (
    <section className="bg-white px-4 py-6 lg:py-10 font-roboto sm:px-6 sm:py-14">
      <div className="mx-auto grid max-w-6xl items-center gap-9 text-gray-800 lg:grid-cols-[minmax(0,1fr)_minmax(380px,0.9fr)] lg:gap-14">
        <div>
          <h2 className="mb-6 text-center text-xl font-semibold sm:text-2xl lg:text-left lg:text-[28px]">
            How Can It Help?
          </h2>

          <ol className="space-y-4 text-sm leading-relaxed sm:text-base sm:leading-7 lg:text-[17px]">
            {benefits.map((item, index) => (
              <li key={item} className="flex items-start gap-3">
                <span className="min-w-7 font-semibold text-[#005C96]">
                  {index + 1}.
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>

          <p className="mt-7 text-sm leading-relaxed text-gray-700 sm:text-base sm:leading-7">
            Advanced LC-MS/MS technology enables the simultaneous quantification
            of multiple metabolites, supporting precise clinical diagnosis and
            personalised healthcare.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -inset-3 rounded-[30px] bg-gradient-to-br from-[#dff5fc] to-[#e7f0f8]" />
          <div className="relative overflow-hidden rounded-3xl border border-[#cce9f4] bg-[#eef8fc] shadow-[0_18px_50px_rgba(0,92,150,0.16)]">
            <img
              src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1780985533/doctorfds_nomivs.png"
              alt="Metabolomics laboratory analysis showing cellular energy and molecular pathways"
              className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[470px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetabolomicsHowItHelps;
