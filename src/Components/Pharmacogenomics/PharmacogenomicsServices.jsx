import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Warfarin",
    desc: "Warfarin response is influenced by variants in CYP2C9 and VKORC1 affecting drug metabolism and sensitivity..",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828067/vite-project/kcnzekzpsppo7tmkdycb.svg",
    path: "/service/warfarinpharmacogenomics",
  },
  {
    title: "Statins",
    desc: "Statin therapy response is associated with genetic variation in SLCO1B1 influencing drug transport and risk of myopathy..",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827957/vite-project/gjtexmqbtfa4zyxkpujg.svg",
    path: "/service/statinpharmacogenomics",
  },
  {
    title: "Warfarin",
    desc: "Warfarin response is influenced by variants in CYP2C9 and VKORC1 affecting drug metabolism and sensitivity..",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828067/vite-project/kcnzekzpsppo7tmkdycb.svg",
    path: "/service/thiopurine/methotrexate/pharmacogenomics",
  },
  {
    title: "Statins",
    desc: "Statin therapy response is associated with genetic variation in SLCO1B1 influencing drug transport and risk of myopathy..",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827957/vite-project/gjtexmqbtfa4zyxkpujg.svg",
    path: "/service/clopidogrel/pharmacogenomics",
  },
];

const GeneticServices = () => {
  return (
    <section className="bg-[#f4f6f8] py-8 px-4 lg:py-14">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-[24px] md:text-[26px] font-semibold text-[#1f4e79] mb-12">
          Explore our specialized reproductive genetic services below
        </h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">

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
      <div className="text-center mt-5">
        <Link to="/contact">
          <button className="bg-[#1bb56d] font-semibold text-white text-sm md:text-base px-6 py-2.5 rounded shadow hover:bg-[#17a45f] transition cursor-pointer">
            Book Your Test
          </button>
        </Link>
      </div>

    </section>
  );
};

export default GeneticServices;