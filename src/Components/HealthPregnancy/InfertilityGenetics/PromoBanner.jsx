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
      <div className="w-full flex justify-center px-4 py-6 font-roboto">
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6
          text-white rounded-2xl px-5 sm:px-8 md:px-10 py-5 w-full max-w-5xl
          shadow-lg"
          style={{
            background: `linear-gradient(to right, ${bgFrom}, ${bgTo})`,
          }}
        >
          {/* Text */}
          <p className="min-w-0 flex-1 text-sm md:text-lg font-medium text-center sm:text-left leading-relaxed">
            {text}
          </p>

          {/* Button — stay one line on all breakpoints */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="shrink-0 whitespace-nowrap bg-white text-[#05AF79] font-semibold
            px-5 sm:px-6 py-2.5 rounded-lg shadow
            hover:bg-gray-100 hover:scale-105 transition duration-200"
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
