import React from "react";
import { FlaskConical, Globe, MapPinned } from "lucide-react";

const cards = [
  {
    title: "30+ Labs across 8 States",
    desc: "Haryana, Delhi, Uttar Pradesh, Rajasthan, Punjab, Jammu and Kashmir, West Bengal, Assam, Madhya Pradesh",
    Icon: FlaskConical,
    topBg: "#E6F8FF",
    iconColor: "#005C96",
    gradient: "linear-gradient(to right, #005C96, #15AEE5)",
  },
  {
    title: "International Reach",
    desc: "MDRC has international reach and gets samples for testing from foreign countries such as UAE, Kenya, Uganda, Tanzania, Nigeria, Nepal, Myanmar.",
    Icon: Globe,
    topBg: "#E0FFF5",
    iconColor: "#05AF79",
    gradient: "linear-gradient(to right, #05AF79, #0ECE91)",
  },
  {
    title: "2000+ Touch points across India",
    desc: "MDRC offers complete range of diagnostic facilities in Radiology & Pathology under one roof.",
    Icon: MapPinned,
    topBg: "#E6F8FF",
    iconColor: "#15A5D9",
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
            className="flex flex-col w-full sm:w-[280px] md:w-[300px] lg:w-[320px] rounded-xl overflow-hidden bg-white shadow-md hover:-translate-y-1 hover:shadow-lg transition duration-300"
          >
            
            <div
              className="flex justify-center items-center py-6"
              style={{ background: card.topBg }}
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                <card.Icon
                  className="h-8 w-8"
                  style={{ color: card.iconColor }}
                  strokeWidth={1.75}
                />
              </span>
            </div>

            <div
              className="flex-1 text-white p-4"
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