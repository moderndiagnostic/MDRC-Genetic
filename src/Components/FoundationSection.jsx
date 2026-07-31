import React, { useEffect, useState } from "react";
import { ShieldCheck, Award, Microscope, Users } from "lucide-react";

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

const stats = [
  {
    Icon: ShieldCheck,
    title: "NABH & NABL",
    label: "Certified Labs",
    gradient: "linear-gradient(135deg, #005C96, #15AEE5)",
  },
  {
    Icon: Award,
    count: 40,
    suffix: "+",
    label: "Years Of Experience",
    gradient: "linear-gradient(135deg, #05AF79, #0ECE91)",
  },
  {
    Icon: Microscope,
    count: 30,
    suffix: "+",
    label: "Labs in India",
    gradient: "linear-gradient(135deg, #1e88c8, #48BEFF)",
  },
  {
    Icon: Users,
    count: 150,
    suffix: "K+",
    label: "Satisfied Customers",
    gradient: "linear-gradient(135deg, #0083B0, #0ECE91)",
  },
];

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

            {stats.map(({ Icon, title, count, suffix, label, gradient }) => (
              <div
                key={label}
                className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 text-center md:text-left"
              >
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-sm md:h-14 md:w-14"
                  style={{ background: gradient }}
                >
                  <Icon className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-[#1e88c8] font-semibold text-base md:text-lg">
                    {title ?? <Counter end={count} suffix={suffix} />}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">{label}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundationSection;