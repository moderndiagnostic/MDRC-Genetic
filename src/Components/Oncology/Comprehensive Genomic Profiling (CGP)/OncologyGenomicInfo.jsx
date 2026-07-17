import React from "react";

const OncologyGenomicInfo = () => {
  return (
    <div className="w-full bg-gray-100   py-5 px-6">
      <div className="max-w-5xl mx-auto text-gray-800">

        {/* Advantages */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Sample Requirements

        </h2>
        <ul className="mt-5 space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            
            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
                <b>Preferred</b> –  FFPE tumor tissue (≥20% tumor cellularity)


              </p>
            </li>

         

            <li className="flex items-start gap-3">
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
                <b>Alternative</b> –  Fresh/frozen tissue or plasma (ctDNA)





              </p>
            </li>
           

          </ul>

      
        {/* Turnaround Time */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Turnaround Time
        </h2>
        <p className="text-base md:text-lg">3–4 weeks
</p>

      </div>
    </div>
  );
};

export default OncologyGenomicInfo;