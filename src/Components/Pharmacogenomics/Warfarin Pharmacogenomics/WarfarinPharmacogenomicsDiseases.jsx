import React from "react";

const WarfarinPharmacogenomicsDiseases = () => {
  return (
    <section className="w-full py-10 md:py-14 bg-gradient-to-b from-[#0C759A] to-[#005E91] md:bg-none">
      
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-20">

        {/* Image */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <img
            src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827923/vite-project/awcj7ti3nh4dfx5nrk3t.svg"
            alt="Warfarin Pharmacogenomics"
            className="w-full scale-x-[-1]"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          
          {/* Desktop Heading */}
          <h2 className="hidden md:block text-2xl md:text-3xl font-semibold text-gray-800">
            Genotype-Guided Anticoagulant Therapy
          </h2>

          {/* Description */}
          <p className="text-white md:text-gray-600 text-base md:text-lg leading-relaxed mb-6 mt-3">
            MDRC provides pharmacogenomic testing to guide Warfarin
            therapy by identifying genetic variants in CYP2C9 and
            VKORC1 that influence drug metabolism and sensitivity.
            This personalized approach supports optimized dosing,
            reduces response variability, and minimizes bleeding or
            thrombotic risks.
          </p>

        </div>

      </div>
    </section>
  );
};

export default WarfarinPharmacogenomicsDiseases;