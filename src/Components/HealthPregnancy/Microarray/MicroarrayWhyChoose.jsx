import React from "react";
import PromoBanner from "../InfertilityGenetics/PromoBanner";

const MicroarrayWhyChoose = () => {
  return (
    <>
      <section className="bg-gray-100 py-10 sm:py-8 px-4 lg:py-14 sm:px-6 md:px-10 font-roboto">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-5 sm:mb-6 leading-snug">
              Why Choose MDRC for Microarray Testing?
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-5">
              At MDRC, our advanced molecular genetics platform combines
              cutting-edge genomic technology with expert clinical
              interpretation to deliver accurate, reliable, and actionable
              results. Our specialized genetics team works closely with
              clinicians to support prenatal diagnosis, developmental disorders,
              autism evaluation, recurrent pregnancy loss investigations, and
              personalized patient care.
            </p>

            <ul className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              {[
                "Advanced molecular genetics platform with genome-wide CNV analysis",
                "Expert clinical interpretation by specialized genetics team",
                "Support for prenatal, postnatal, and POC testing",
                "Trusted genetic diagnostic solutions across India",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-green-500 mt-1 shrink-0">•</span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827894/vite-project/yb0dkzfhcyczjpkit5n1.svg"
              alt="Microarray Testing at MDRC"
              className="w-full max-w-md scale-x-[-1]"
            />
          </div>
        </div>
      </section>
      <PromoBanner text="Book your Chromosomal Microarray Analysis at MDRC for accurate, genome-wide genetic insights." />
    </>
  );
};

export default MicroarrayWhyChoose;
