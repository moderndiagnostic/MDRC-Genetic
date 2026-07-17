import React from "react";

const cards = [
  {
    title: "30+ Labs across 8 States",
    desc: "Haryana, Delhi, Uttar Pradesh, Rajasthan, Punjab, Jammu and Kashmir, West Bengal, Assam, Madhya Pradesh",
    icon: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827773/vite-project/b0xi9ibe3xmhk7oxmmwn.png",
    topBg: "#E6F8FF",
    gradient: "linear-gradient(to right, #005C96, #15AEE5)",
  },
  {
    title: "International Reach",
    desc: "MDRC has international reach and gets samples for testing from foreign countries such as UAE, Kenya, Uganda, Tanzania, Nigeria, Nepal, Myanmar.",
    icon: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827780/vite-project/snznhvqe6fybfux144st.png",
    topBg: "#E0FFF5",
    gradient: "linear-gradient(to right, #05AF79, #0ECE91)",
  },
  {
    title: "2000+ Touch points across India",
    desc: "MDRC offers complete range of diagnostic facilities in Radiology & Pathology under one roof.",
    icon: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827775/vite-project/me6fwfpunxjsdkwoljjv.png",
    topBg: "#E6F8FF",
    gradient: "linear-gradient(to right, #48BEFF, #15A5D9)",
  },
];

function CardsSection() {
  return (
    <div className="mt-10 px-4">
      
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4">
        
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-[280px] md:w-[300px] lg:w-[320px] rounded-xl overflow-hidden bg-white shadow-md hover:-translate-y-1 hover:shadow-lg transition duration-300"
          >
            
            <div
              className="flex justify-center items-center py-6"
              style={{ background: card.topBg }}
            >
              <img
                src={card.icon}
                alt="icon"
                className="w-16 h-16 object-contain"
              />
            </div>

            <div
              className="text-white p-4"
              style={{ background: card.gradient }}
            >
              <h3 className="font-semibold text-base mb-2">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsSection;