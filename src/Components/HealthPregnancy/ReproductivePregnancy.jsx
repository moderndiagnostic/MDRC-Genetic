import React from "react";

const ReproductivePregnancy = () => {
  return (
    <section className="w-full py-10 md:py-14 bg-gradient-to-b from-[#0C759A] to-[#005E91] md:bg-none">
      
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-20">

        {/* Image */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <img
            src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827894/vite-project/yb0dkzfhcyczjpkit5n1.svg"
            alt="Reproductive Health"
            className="w-full scale-x-[-1]"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          
          {/* Desktop only heading */}
          <h2 className="hidden md:block text-2xl md:text-3xl font-semibold text-gray-800">
            Reproductive Health & Pregnancy
          </h2>

          {/* Sub heading */}
          <p className="font-bold text-white md:text-gray-700 mb-4 mt-2">
            Comprehensive Maternal & Fetal Care
          </p>

          {/* Description */}
          <p className="text-white md:text-gray-600 text-base md:text-lg leading-relaxed">
            Comprehensive reproductive health care integrates preconception evaluation, antenatal screening, and fetal monitoring to ensure optimal maternal and neonatal outcomes. Evidence-based protocols include genetic screening, infection profiling, and metabolic assessment, enabling early risk identification and clinical intervention. Regular antenatal care supports continuous monitoring, diagnosis, and prevention of complications, significantly improving pregnancy outcomes and ensuring a safe transition from conception to childbirth.
          </p>

        </div>

      </div>
    </section>
  );
};

export default ReproductivePregnancy;