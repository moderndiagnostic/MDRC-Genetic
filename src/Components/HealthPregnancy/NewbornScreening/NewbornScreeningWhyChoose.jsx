import React from "react";

const NewbornScreeningWhyChoose = () => {
  return (
    <>
    <section className="bg-gray-100 py-8 px-4 lg:py-14 md:px-10 font-roboto">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-snug">
            Why Choose MDRC for Infertility Genetics
          </h2>

          <ul className="space-y-4 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            
            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>Advanced biochemical and molecular diagnostic laboratory.

</p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>Expertise in neonatal and pediatric genetic testing.
</p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>Rapid, accurate results for early clinical decision-making.


</p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>Patient-centered care with confidential reporting and expert guidance.
</p>
            </li>

          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div>
            <img
              src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827894/vite-project/yb0dkzfhcyczjpkit5n1.svg"
              alt="Infertility Genetics"
              className="w-full max-w-md scale-x-[-1]"
            />
          </div>
        </div>

      </div>
    </section>
   
    </>
  );
};

export default NewbornScreeningWhyChoose;