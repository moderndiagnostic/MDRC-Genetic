import React from "react";

function Nationwide() {
  const data = [
    {
      img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827873/vite-project/dfcullcyjtvxyrm5mzwc.svg",
      title: "State-of-the-Art Labs",
      desc: "Equipped with latest NGS platforms, real-time PCR, and automated sample processing systems.",
    },
    {
      img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827868/vite-project/grxo6ubd3uis4whlmc3b.svg",
      title: "NABH & NABL Certified",
      desc: "Every result is backed by internationally recognized quality standards and rigorous validation.",
    },
    {
      img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827866/vite-project/jaiu1rf2kikefkj5jysz.svg",
      title: "Patient-Centric Care",
      desc: "Genetic counseling support, fast turnaround times, and transparent reporting for every patient.",
    },
  ];

  return (
  <>
    <section className="py-4 sm:py-5 md:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        
        <h2 className="text-sm sm:text-base font-medium text-[#15AEE5] mb-1 sm:mb-2">
          WHY MDRC
        </h2>

        <h3 className="text-xl sm:text-2xl md:text-[25px] font-semibold text-[#005C96] mb-5 sm:mb-6 md:mb-8">
          Trusted by Clinicians Nationwide
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className=""
            >
                <div className="flex justify-center mb-2 sm:mb-3">
              <img
                src={item.img}
                alt={item.title}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-auto md:h-auto"
              />
              </div>

              <h4 className="text-base md:text-lg font-semibold text-[#1160A5] mb-1 sm:mb-2">
                {item.title}
              </h4>
              <p className="text-[#727070] text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
    
    </>
  );
}

export default Nationwide;