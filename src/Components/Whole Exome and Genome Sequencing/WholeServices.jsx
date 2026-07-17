import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Genome Sequencing",
    desc: "Genome sequencing evaluates the complete DNA sequence including coding and non coding regions to identify..",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828067/vite-project/kcnzekzpsppo7tmkdycb.svg",
    path: "/service/genomesequencing", // ✅ ADD PATH
  },
  {
    title: "Exome Sequencing",
    desc: "Exome sequencing focuses on analysis of coding regions that represent the majority of clinically relevant genetic variants..",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827957/vite-project/gjtexmqbtfa4zyxkpujg.svg",
    path: "/service/exomesequencing", // ✅ ADD PATH
  },
];

const RareServices = () => {
  return (
    <section className="bg-[#f4f6f8] py-8 px-4 lg:py-14">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-xl sm:text-2xl md:text-[26px] font-semibold text-[#1f4e79] mb-8 sm:mb-12 px-2 leading-snug">
          Explore our specialized reproductive genetic services below
        </h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-5 sm:p-6 md:p-8 flex flex-col sm:flex-row gap-4 sm:gap-5 hover:shadow-xl hover:-translate-y-1 transition duration-300 h-full"
            >

              {/* Image */}
              <div className="w-[56px] h-[56px] sm:min-w-[70px] sm:w-[70px] sm:h-[70px] shrink-0 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#15AEE5] to-[#0C607F]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-base sm:text-lg md:text-[20px] font-semibold text-[#1f4e79] mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-[15px] text-gray-600 mb-3 leading-relaxed">
                  {item.desc}
                </p>

                {/* ✅ Learn More Link */}
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

export default RareServices;