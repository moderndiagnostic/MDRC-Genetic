import React from "react";
import FoundationSection from "./FoundationSection";
// import NewbornSection from "./NewbornSection";
import AccreditationSection from "./AccreditationSection";
import CardsSection from "./CardsSection";
import DoctorsSection from "./DoctorsSection";
import OurNetworkSection from "./OurNetworkSection";

const About = () => {
  return (
    <div className="font-roboto">
      <section className="relative overflow-hidden text-white bg-gradient-to-b from-[#005E91] to-[#0C759A] lg:pt-10">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-6 md:py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-8">
          
          <div className="text-white text-center md:text-left mt-0 lg:mt-10">
            {/* <button
              onClick={() => window.location.href = "/"}
              className="flex items-center justify-center md:justify-start gap-2 text-xl mb-4"
            >
              ← Back to Home
            </button> */}

            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight">
              About MDRC Genomics
            </h1>

            <p className="mt-4 text-sm sm:text-base md:text-xl opacity-90 max-w-xl">
              MDRC started its operations in the year 1985 from New Railway Road, Gurugram and have become the pioneer in the field of Pathology and Imaging. The journey which started with a Lab and X-Ray machine in the beginning, has today reached a stage where MDRC today is in top league in terms of the range and quality of diagnostic facilities, with the capability to perform more than 2500 tests in house.
              <br />
              <br />
              Modern Diagnostic & Research Centre offers complete range of diagnostic facilities in Radiology and High end Pathology.
            </p>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="overflow-hidden">
              <img
                src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828070/vite-project/wqwrfkukbzfqfj5liylf.svg"
                alt="About"
                className="rounded-full lg:mt-0"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl"></div>
          </div>
        </div>
      </section>

      <FoundationSection />
      {/* <NewbornSection /> */}
      <AccreditationSection />
      <CardsSection />
      <DoctorsSection />
      <OurNetworkSection />
    </div>
  );
};

export default About;