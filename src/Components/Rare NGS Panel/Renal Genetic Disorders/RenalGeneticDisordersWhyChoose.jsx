import React from "react";

const RenalGeneticDisordersWhyChoose = () => {
  const items = [
    {
      text: "State-of-the-art Genetic Testing Lab",
      img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827860/vite-project/pg5fgeexuuhnn24qdxzi.svg",
    },
    {
      text: "Accurate, Timely Results to Inform Clinical Decisions",
      img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827856/vite-project/hgz7at4mmcebxuzp4ahi.svg",
    },
    {
      text: "Expert Geneticists",
      img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827994/vite-project/coz3skknninkovklmflj.svg",
    },
    {
      text: "Confidential & Patient-focused Care",
      img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827862/vite-project/n1zhhxb83gxvjqgpt3kz.svg",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#1CA3D8] to-[#0B5C8E] py-8 px-4 text-white font-roboto">
      
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-6">
        Why Choose MDRC For Genetic Testing
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center border border-white/40 rounded-full  bg-white/10 backdrop-blur-sm"
          >
            {/* Image Circle */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white mr-3 shrink-0">
              <img
                src={item.img}
                alt="icon"
                className="w-5 h-5 object-contain"
              />
            </div>

            {/* Text */}
            <p className="text-sm md:text-base font-medium">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RenalGeneticDisordersWhyChoose;