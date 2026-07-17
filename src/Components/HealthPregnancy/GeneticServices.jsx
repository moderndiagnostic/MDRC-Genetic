import React from "react";
import { Link } from "react-router-dom";
import PromoBanner from "../HealthPregnancy/CarrierScreening/CarrierScreeningPromoBanner";

const services = [
  {
    title: "Infertility Genetics",
    path: "/services/infertility-genetics",
    desc: "Assessment of genetic factors contributing to infertility and recurrent pregnancy loss includes karyotyping..",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828067/vite-project/kcnzekzpsppo7tmkdycb.svg",
  },
  {
    title: "Carrier Screening",
    path: "/services/carrier-screening",
    desc: "Carrier screening identifies individuals carrying pathogenic variants associated with autosomal recessive..",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827957/vite-project/gjtexmqbtfa4zyxkpujg.svg",
  },
  {
    title: "NIPT",
    path: "/reproductive-health-pregnancy/services/nipt",
    desc: "NIPT analyzes circulating cell free fetal DNA in maternal blood to screen for common chromosomal aneuploidies.",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828067/vite-project/kcnzekzpsppo7tmkdycb.svg",
  },
  {
    title: "Newborn Screening",
    path: "/reproductive-health-pregnancy/newbornscreening",
    desc: "Newborn screening involves biochemical and molecular testing to detect congenital metabolic and genetic..",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827957/vite-project/gjtexmqbtfa4zyxkpujg.svg",
  },
];

const GeneticServices = () => {
  return (
    <>
    <section className="bg-[#f4f6f8] py-8 px-4 lg:py-14">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-[24px] md:text-[26px] font-semibold text-[#1f4e79] mb-12">
          Explore our specialized reproductive genetic services below
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="bg-white rounded-xl shadow-md p-8 flex gap-5 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition duration-300 cursor-pointer"
            >
              {/* Icon */}
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

                <span className="text-[#00a3e0] text-[15px] font-medium hover:underline">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Button */}
        {/* <div className="text-center mt-10">
          <button className="bg-gradient-to-r from-[#05AF79] to-[#0ECE91] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300">
            Book Your Test
          </button>
        </div> */}

      </div>
    </section>
    <PromoBanner/>
    </>
  );
};

export default GeneticServices;