import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Amniocentesis",
<<<<<<< HEAD
    desc: "Prenatal diagnostic sampling of amniotic fluid for cytogenetic, microarray, and molecular evaluation of fetal chromosomal and genetic abnormalities.",
=======
    desc: "Infectious diseases arise from viruses, bacteria, fungi, and parasites affecting multiple organ systems.",
>>>>>>> dfcb555ac04c72e4bac571defe511b797624b2e1
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828067/vite-project/kcnzekzpsppo7tmkdycb.svg",
    path: "/service/amniocentesis",
  },
  {
    title: "Chorionic Villus Sampling (CVS)",
<<<<<<< HEAD
    desc: "Early prenatal collection of placental tissue enabling karyotyping and targeted genetic analysis during the first trimester of pregnancy.",
=======
    desc: "Chorionic Villus Sampling (CVS) suppression testing includes molecular and serological evaluation of infections such as HIV, HCV, and HPV.",
>>>>>>> dfcb555ac04c72e4bac571defe511b797624b2e1
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827957/vite-project/gjtexmqbtfa4zyxkpujg.svg",
    path: "/service/chorionicvillussamplingfeverpanel",
  },
  {
    title: "Fetal Blood and Products of Conception",
<<<<<<< HEAD
    desc: "Cytogenetic assessment of fetal blood or pregnancy tissue to investigate chromosomal causes of fetal anomalies and recurrent pregnancy loss.",
=======
    desc: "Respiratory panels utilize multiplex PCR technology for simultaneous detection of viral and bacterial pathogens.",
>>>>>>> dfcb555ac04c72e4bac571defe511b797624b2e1
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828067/vite-project/kcnzekzpsppo7tmkdycb.svg",
    path: "/service/fetalconception",
  },
  {
    title: "Blood Culture and Karyotyping",
<<<<<<< HEAD
    desc: "Peripheral blood karyotyping to detect numerical and structural chromosomal abnormalities associated with genetic disorders and infertility.",
=======
    desc: "Gastrointestinal panels detect a wide range of viral, bacterial, and parasitic agents responsible for infectious diarrhea.",
>>>>>>> dfcb555ac04c72e4bac571defe511b797624b2e1
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827957/vite-project/gjtexmqbtfa4zyxkpujg.svg",
    path: "/service/bloodculturekaryotyping",
  },
  {
    title: "High Resolution Banding",
<<<<<<< HEAD
    desc: "Enhanced G-banding karyotype analysis for improved detection of subtle chromosomal rearrangements and structural abnormalities.",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828067/vite-project/kcnzekzpsppo7tmkdycb.svg",
    path: "/service/highresolutionbanding",
  },
=======
    desc: "Influenza panel testing helps detect multiple strains of flu viruses for accurate and timely diagnosis.",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828067/vite-project/kcnzekzpsppo7tmkdycb.svg",
    path: "/service/highresolutionbanding",
  },
  {
    title: "Fragile X and DNA Studies",
    desc: "Tropical fever panel identifies pathogens responsible for diseases like dengue, malaria, chikungunya, and more.",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827957/vite-project/gjtexmqbtfa4zyxkpujg.svg",
    path: "/service/fragilexanddnastudies",
  },
>>>>>>> dfcb555ac04c72e4bac571defe511b797624b2e1
];

const Services = () => {
  return (
<<<<<<< HEAD
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
=======
    <section className="bg-[#f4f6f8] py-8 px-4 lg:py-16">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-[24px] md:text-[28px] font-semibold text-[#1f4e79] mb-14">
          Explore our specialized reproductive genetic services below
        </h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">

          {services.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="group h-full"
            >
              <div className="bg-white rounded-2xl shadow-md p-6 flex gap-5 h-full cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">

                {/* Icon */}
                <div className="min-w-[65px] h-[65px] flex items-center justify-center rounded-xl bg-gradient-to-r from-[#15AEE5] to-[#0C607F] group-hover:scale-110 transition">
>>>>>>> dfcb555ac04c72e4bac571defe511b797624b2e1
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>

<<<<<<< HEAD
                <div className="flex flex-col flex-1 min-w-0">
=======
                {/* Content */}
                <div className="flex flex-col flex-1">

>>>>>>> dfcb555ac04c72e4bac571defe511b797624b2e1
                  <h3 className="text-[18px] font-semibold text-[#1f4e79] mb-2 group-hover:text-[#0C607F] transition">
                    {item.title}
                  </h3>

<<<<<<< HEAD
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
=======
                  <p className="text-[14px] text-gray-600 leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>

                  {/* Bottom aligned */}
                  <span className="mt-auto pt-3 text-[#00a3e0] text-[14px] font-medium flex items-center gap-1 group-hover:underline">
                    Learn More →
                  </span>

                </div>

              </div>
            </Link>
          ))}

        </div>

>>>>>>> dfcb555ac04c72e4bac571defe511b797624b2e1
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default Services;
=======
export default Services;
>>>>>>> dfcb555ac04c72e4bac571defe511b797624b2e1
