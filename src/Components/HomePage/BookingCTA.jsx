import { useState } from "react";
import PopupForm from "../PopupForm";

export default function BookingCTA() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <section className="px-4 py-4 sm:px-6 sm:py-5 md:py-6">
        <div className="mx-auto max-w-[1000px] rounded-2xl bg-[#1DB980] px-4 py-6 text-center shadow-[0_10px_35px_rgba(0,0,0,0.08)] sm:rounded-3xl sm:px-6 sm:py-8 md:px-8 md:py-10 lg:rounded-[40px]">
          <h2 className="mb-2 text-2xl font-bold leading-tight text-white sm:mb-3 sm:text-3xl md:text-4xl lg:text-[42px]">
            Book Your Genetic Test
          </h2>

          <p className="mx-auto mb-4 max-w-[620px] text-sm sm:text-base md:text-lg leading-relaxed text-white/90 sm:mb-5 md:mb-6">
            Enter your information below to schedule your testing appointment.
            Our team will contact you to confirm the details.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => setIsPopupOpen(true)}
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl border-none bg-white px-4 py-2.5 text-sm font-semibold text-[#0F6E56] shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:bg-[#f5f5f5] active:scale-[0.97] sm:px-5 sm:py-3 sm:text-[15px]"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Book Your Test
            </button>

            <a
              href="tel:01246713000"
              className="inline-flex items-center gap-2 rounded-xl border-[1.5px] border-white/55 bg-white/20 px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/30 active:scale-[0.97] sm:px-5 sm:py-3 sm:text-[15px]"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.1 1.18 2 2 0 012.08 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              01246713000
            </a>
          </div>
        </div>
      </section>

      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}
