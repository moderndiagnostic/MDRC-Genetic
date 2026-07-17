import React, { useEffect, useState } from "react";

/* ===== COUNTER COMPONENT ===== */
const Counter = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += 1;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

/* ===== FOUNDATION SECTION ===== */
const FoundationSection = () => {
  return (
    <section
      className="w-full 
                 bg-transparent md:bg-gradient-to-b md:from-[#FFFFFF] md:to-[#E6F8FF] 
                 border-t-4 border-[#1e88c8] font-roboto py-4 md:py-6"
    >
      {/* Container */}
      <div className="max-w-6xl mx-auto px-3 md:px-4">

        {/* Card wrapper */}
        <div className="rounded-2xl bg-gradient-to-b from-[#FFFFFF] to-[#E6F8FF] p-3 sm:p-4 shadow-md md:shadow-none md:rounded-none md:bg-transparent transition-all duration-300 relative z-10">

          {/* Heading */}
          <div className="text-center mb-4 md:mb-5">
            <h2 className="text-xl sm:text-2xl md:text-[25px] font-semibold text-[#005c96]">
              Our Foundation of Trust
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-1 leading-relaxed">
              Decades of experience & A network of certified labs.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">

            {/* Item 1 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 text-center md:text-left">
              <img src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827843/vite-project/qaajs5qrdc1cgsnh4lqb.svg" className="w-10 h-10 md:w-12 md:h-12" alt="" />
              <div>
                <h3 className="text-[#1e88c8] font-semibold text-base md:text-lg">
                  NABH & NABL
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">Certified Labs</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 text-center md:text-left">
              <img src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827846/vite-project/lvwxyse50n74x769qyxv.svg" className="w-10 h-10 md:w-12 md:h-12" alt="" />
              <div>
                <h3 className="text-[#1e88c8] font-semibold text-base md:text-lg">
                  <Counter end={40} suffix="+" />
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">Years Of Experience</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 text-center md:text-left">
              <img src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827850/vite-project/xacfm0sqfiqaihvxib37.svg" className="w-10 h-10 md:w-12 md:h-12" alt="" />
              <div>
                <h3 className="text-[#1e88c8] font-semibold text-base md:text-lg">
                  <Counter end={25} suffix="+" />
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">Labs in India</p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 text-center md:text-left">
              <img src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827848/vite-project/ql0shvzjflyue2llzgla.svg" className="w-10 h-10 md:w-12 md:h-12" alt="" />
              <div>
                <h3 className="text-[#1e88c8] font-semibold text-base md:text-lg">
                  <Counter end={150} suffix="K+" />
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">Satisfied Customers</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundationSection;