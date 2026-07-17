import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Spectrum of Infectious Diseases",
    desc: "Infectious diseases arise from viruses, bacteria, fungi, and parasites affecting multiple organ systems..",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828067/vite-project/kcnzekzpsppo7tmkdycb.svg",
    path: "/service/gastro",
  },
  {
    title: "Immuno Suppression",
    desc: "Immuno suppression testing includes molecular and serological evaluation of infections such as HIV, HCV, and HPV..",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827957/vite-project/gjtexmqbtfa4zyxkpujg.svg",
    path: "/service/immunosuppression",
  },
  {
    title: "Respiratory Panel ",
    desc: "Respiratory panels utilize multiplex PCR technology for simultaneous detection of viral and bacterial pathogens..",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828067/vite-project/kcnzekzpsppo7tmkdycb.svg",
    path: "/service/respiratorypanel",
  },
  {
    title: "Gastrointestinal Panel ",
    desc: "Gastrointestinal panels detect a wide range of viral, bacterial, and parasitic agents responsible for infectious diarrhea..",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827957/vite-project/gjtexmqbtfa4zyxkpujg.svg",
    path: "/service/gastrointestinapanel",
  },
  {
    title: "Influenza Panel",
    desc: "Gastrointestinal panels detect a wide range of viral, bacterial, and parasitic agents responsible for infectious diarrhea..",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827957/vite-project/gjtexmqbtfa4zyxkpujg.svg",
    path: "/service/influenzapanel",
  },
  {
    title: "Tropical Fever Panel",
    desc: "Gastrointestinal panels detect a wide range of viral, bacterial, and parasitic agents responsible for infectious diarrhea..",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827957/vite-project/gjtexmqbtfa4zyxkpujg.svg",
    path: "/service/tropicalfeverpanel",
  },
  {
    title: "TORCH PCR",
    desc: "Gastrointestinal panels detect a wide range of viral, bacterial, and parasitic agents responsible for infectious diarrhea..",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827957/vite-project/gjtexmqbtfa4zyxkpujg.svg",
    path: "/service/torchpcrfeverpanel",
  },
  {
    title: "STD / Urethritis Panel",
    desc: "Gastrointestinal panels detect a wide range of viral, bacterial, and parasitic agents responsible for infectious diarrhea..",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827957/vite-project/gjtexmqbtfa4zyxkpujg.svg",
    path: "/service/stdurethritispanelfeverpanel",
  },
  {
    title: "Swine Flu (H1N1)",
    desc: "Gastrointestinal panels detect a wide range of viral, bacterial, and parasitic agents responsible for infectious diarrhea..",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827957/vite-project/gjtexmqbtfa4zyxkpujg.svg",
    path: "/service/swineflufever",
  },
  {
    title: "Meningitis Panel",
    desc: "Gastrointestinal panels detect a wide range of viral, bacterial, and parasitic agents responsible for infectious diarrhea..",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827957/vite-project/gjtexmqbtfa4zyxkpujg.svg",
    path: "/service/meningitispanel",
  },
];

const GeneticServices = () => {
  return (
    <section className="bg-[#f4f6f8] py-8 px-4 lg:py-14">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-xl sm:text-2xl md:text-[26px] font-semibold text-[#1f4e79] mb-8 sm:mb-12 px-2 leading-snug">
          Explore our specialized reproductive genetic services below
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">

          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-5 sm:p-6 md:p-8 flex flex-col sm:flex-row gap-4 sm:gap-5 hover:shadow-xl hover:-translate-y-1 transition duration-300 h-full"
            >
              
              {/* Image Box */}
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

               <Link
  to={item.path}
  className="text-[#00a3e0] text-[15px] font-medium hover:underline flex items-center gap-1"
>
  Learn More →
</Link>
              </div>

            </div>
          ))}

        </div>
        
      </div>
       {/* <div className="text-center mt-5">
        <button className="bg-[#1bb56d] font-semibold text-white text-sm md:text-base px-6 py-2.5 rounded shadow hover:bg-[#17a45f] transition">
           Book Your Test
          </button>
          </div> */}

    </section>
  );
};

export default GeneticServices;