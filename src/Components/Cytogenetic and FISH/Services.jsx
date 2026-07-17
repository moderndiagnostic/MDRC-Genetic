import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Amniocentesis",
    desc: "Prenatal diagnostic sampling of amniotic fluid for cytogenetic, microarray, and molecular evaluation of fetal chromosomal and genetic abnormalities.",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828067/vite-project/kcnzekzpsppo7tmkdycb.svg",
    path: "/service/amniocentesis",
  },
  {
    title: "Chorionic Villus Sampling (CVS)",
    desc: "Early prenatal collection of placental tissue enabling karyotyping and targeted genetic analysis during the first trimester of pregnancy.",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827957/vite-project/gjtexmqbtfa4zyxkpujg.svg",
    path: "/service/chorionicvillussamplingfeverpanel",
  },
  {
    title: "Fetal Blood and Products of Conception",
    desc: "Cytogenetic assessment of fetal blood or pregnancy tissue to investigate chromosomal causes of fetal anomalies and recurrent pregnancy loss.",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828067/vite-project/kcnzekzpsppo7tmkdycb.svg",
    path: "/service/fetalconception",
  },
  {
    title: "Blood Culture and Karyotyping",
    desc: "Peripheral blood karyotyping to detect numerical and structural chromosomal abnormalities associated with genetic disorders and infertility.",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827957/vite-project/gjtexmqbtfa4zyxkpujg.svg",
    path: "/service/bloodculturekaryotyping",
  },
  {
    title: "High Resolution Banding",
    desc: "Enhanced G-banding karyotype analysis for improved detection of subtle chromosomal rearrangements and structural abnormalities.",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828067/vite-project/kcnzekzpsppo7tmkdycb.svg",
    path: "/service/highresolutionbanding",
  },
];

const Services = () => {
  return (
    <section className="bg-[#f4f6f8] py-8 px-4 lg:py-16 font-roboto">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-[24px] md:text-[28px] font-semibold text-[#1f4e79] mb-14">
          Explore our specialized cytogenetic and FISH services below
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((item) => (
            <Link to={item.path} key={item.title} className="group h-full">
              <div className="bg-white rounded-2xl shadow-md p-6 flex gap-5 h-full cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">
                <div className="min-w-[65px] h-[65px] flex items-center justify-center rounded-xl bg-gradient-to-r from-[#15AEE5] to-[#0C607F] group-hover:scale-110 transition shrink-0">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>

                <div className="flex flex-col flex-1 min-w-0">
                  <h3 className="text-[18px] font-semibold text-[#1f4e79] mb-2 group-hover:text-[#0C607F] transition">
                    {item.title}
                  </h3>

                  <p className="text-[14px] text-gray-600 leading-relaxed line-clamp-4">
                    {item.desc}
                  </p>

                  <span className="mt-auto pt-3 text-[#00a3e0] text-[14px] font-medium flex items-center gap-1 group-hover:underline">
                    Learn More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
