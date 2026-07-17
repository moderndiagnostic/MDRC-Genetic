import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Comprehensive Genomic Profiling (CGP)",
    desc: "Warfarin response is influenced by variants in CYP2C9 and VKORC1 affecting drug metabolism and sensitivity..",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828067/vite-project/kcnzekzpsppo7tmkdycb.svg",
    path: "/service/comprehensivegenomicprofiling",
  },
  {
    title: "Cancer Hotspot Panels",
    desc: "Statin therapy response is associated with genetic variation in SLCO1B1 influencing drug transport and risk of myopathy..",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827957/vite-project/gjtexmqbtfa4zyxkpujg.svg",
    path: "/service/targetedsolidtumorpanels",
  },
  {
    title: "Organ-Specific Panels",
    desc: "Warfarin response is influenced by variants in CYP2C9 and VKORC1 affecting drug metabolism and sensitivity..",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828067/vite-project/kcnzekzpsppo7tmkdycb.svg",
    path: "/service/hematologicalmalignancygenomics",
  },
  {
    title: "Liquid Biopsy (ctDNA Analysis)",
    desc: "Statin therapy response is associated with genetic variation in SLCO1B1 influencing drug transport and risk of myopathy..",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827957/vite-project/gjtexmqbtfa4zyxkpujg.svg",
    path: "/service/liquidbiopsy",
  },
  {
    title: "Germline Cancer Testing",
    desc: "Warfarin response is influenced by variants in CYP2C9 and VKORC1 affecting drug metabolism and sensitivity..",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828067/vite-project/kcnzekzpsppo7tmkdycb.svg",
    path: "/service/hereditarycancergenomics",
  },
  {
    title: "Statins",
    desc: "Statin therapy response is associated with genetic variation in SLCO1B1 influencing drug transport and risk of myopathy..",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827957/vite-project/gjtexmqbtfa4zyxkpujg.svg",
    path: "/service/rnasequencingforfusion",
  },
];

const OncologyServices = () => {
  return (
    <section className="bg-[#f4f6f8] py-8 px-4 lg:py-14">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-[24px] md:text-[26px] font-semibold text-[#1f4e79] mb-12">
         Our Oncology Expertise

        </h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 flex gap-5 hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >

              {/* Image */}
              <div className="min-w-[70px] h-[70px] flex items-center justify-center rounded-lg bg-gradient-to-r from-[#15AEE5] to-[#0C607F]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-[20px] font-semibold text-[#1f4e79] mb-2">
                  {item.title}
                </h3>

                <p className="text-[15px] text-gray-600 mb-3 leading-relaxed">
                  {item.desc}
                </p>

                {/* ✅ Learn More with Path */}
                <Link
                  to={item.path}
                  className="text-[#00a3e0] text-[15px] font-medium hover:underline flex items-center gap-1 cursor-pointer"
                >
                  Learn More →
                </Link>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* ✅ Bottom Button */}
      {/* <div className="text-center mt-5">
        <Link to="/contact">
          <button className="bg-[#1bb56d] font-semibold text-white text-sm md:text-base px-6 py-2.5 rounded shadow hover:bg-[#17a45f] transition cursor-pointer">
            Book Your Test
          </button>
        </Link>
      </div> */}

    </section>
  );
};

export default OncologyServices;