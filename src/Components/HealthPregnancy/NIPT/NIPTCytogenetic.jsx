import React from "react";

const NIPTCytogenetic = () => {
  return (
    <section className="w-full py-8 sm:py-10 md:py-14 bg-gradient-to-b from-[#0C759A] to-[#005E91] md:bg-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-20">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <img
            src="/assets/male-doctor-looking-virtual-dna-coming-out-tablet-gray-wall 1 (7).svg"
            alt="EVAA NIPS"
            className="w-full max-w-md mx-auto scale-x-[-1]"
          />
        </div>

        <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left">
          <p className="text-white md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-5">
            EVAA™ Prenatal Screening is an advanced Non-Invasive Prenatal
            Screening (NIPS) test that assesses the risk of chromosomal
            abnormalities in a developing fetus using a simple maternal blood
            sample. This highly accurate screening method analyzes fetal DNA
            circulating in the mother&apos;s bloodstream, providing reliable
            insights into common chromosomal disorders without posing any risk to
            the pregnancy.
          </p>
          <p className="text-white md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Recognized as one of the most sensitive prenatal screening
            technologies available today, EVAA™ helps expectant parents and
            healthcare providers make informed decisions with greater confidence.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-8 md:mt-12">
        <div className="bg-white/10 md:bg-gray-50 rounded-xl p-5 sm:p-6 md:p-8 border border-white/20 md:border-gray-100">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white md:text-gray-800 mb-4">
            What is Non-Invasive Prenatal Screening (NIPS)?
          </h2>
          <p className="text-white/90 md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            Non-Invasive Prenatal Screening (NIPS) is a DNA-based screening test
            that evaluates cell-free fetal DNA (cfDNA) present in maternal
            blood. The test estimates the likelihood of chromosomal abnormalities
            in the fetus, offering significantly higher accuracy compared to
            conventional maternal serum screening methods.
          </p>
          <p className="text-white/90 md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Unlike invasive procedures such as amniocentesis or chorionic villus
            sampling (CVS), NIPS requires only a maternal blood sample and
            carries no risk of miscarriage.
          </p>
        </div>

        <div className="bg-white/10 md:bg-gray-50 rounded-xl p-5 sm:p-6 md:p-8 border border-white/20 md:border-gray-100 mt-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white md:text-gray-800 mb-4">
            What is Extended Non-Invasive Prenatal Screening (NIPS)?
          </h2>
          <p className="text-white/90 md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            Extended Non-Invasive Prenatal Screening (Extended NIPS) builds on
            standard NIPS by adding targeted assessment for selected
            sub-chromosomal microdeletion syndromes, in addition to screening
            for common autosomal trisomies, sex chromosome aneuploidies, and
            broader chromosomal imbalance across all autosomes.
          </p>
          <p className="text-white/90 md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            Like standard NIPS, Extended NIPS analyzes cell-free fetal DNA
            (cfDNA) from a maternal blood sample using next-generation
            sequencing and bioinformatics algorithms to detect copy-number
            changes at clinically relevant genomic regions associated with
            conditions such as DiGeorge syndrome, 1p36 deletion syndrome,
            Prader-Willi/Angelman syndromes, and other selected microdeletion
            disorders.
          </p>
          <p className="text-white/90 md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Extended NIPS remains a screening test—not a diagnostic test.
            Microdeletion screening generally has a lower positive predictive
            value than trisomy screening, and any high-risk or positive result
            should be confirmed through diagnostic evaluation such as
            chromosomal microarray analysis, karyotyping, or other appropriate
            fetal diagnostic testing as advised by the treating clinician.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NIPTCytogenetic;
