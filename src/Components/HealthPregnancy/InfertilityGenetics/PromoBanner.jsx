import React, { useState } from "react";
import PopupForm from "../../../Components/PopupForm";

export default function PromoBanner({
  text = "Need specialized genetic and molecular solutions? We're here to help.",
  buttonText = "Enquire Now",
  bgFrom = "#05AF79",
  bgTo = "#04a56f",
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-full flex justify-center py-6 font-roboto">
        
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 
          text-white rounded-2xl px-6 md:px-10 py-5 w-full max-w-5xl 
          shadow-lg"
          style={{
            background: `linear-gradient(to right, ${bgFrom}, ${bgTo})`,
          }}
        >
          
          {/* Text */}
          <p className="text-sm md:text-lg font-medium text-center md:text-left leading-relaxed">
            {text}
          </p>

          {/* Button */}
          <button
            onClick={() => setOpen(true)}
            className="bg-white text-[#05AF79] font-semibold px-6 py-2.5 rounded-lg 
            shadow hover:bg-gray-100 hover:scale-105 transition duration-200"
          >
            {buttonText}
          </button>
          
        </div>
      </div>

      {/* Modal */}
      <PopupForm isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}