import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const cards = [
  {
    title: "KARYOTYPING",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827820/vite-project/qkdwtp5jzkfigoccsbwt.jpg",
    path: "/service/bloodculturekaryotyping",
  },
  {
    title: "CARRIER SCREENING",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828008/vite-project/yv8hyanavztk9j6k0snd.svg",
    path: "/services/carrier-screening",
  },
  {
    title: "NIPT",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827820/vite-project/qkdwtp5jzkfigoccsbwt.jpg",
    path: "/reproductive-health-pregnancy/services/nipt",
  },
  {
    title: "GENETIC TESTING",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828008/vite-project/yv8hyanavztk9j6k0snd.svg",
    path: "#",
  },
  {
    title: "GENOTYPING TESTS",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827824/vite-project/b3mwmwygppili0vqesfw.jpg",
    path: "#",
  },
  {
    title: "DRUG RESISTANCE TESTING",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827824/vite-project/b3mwmwygppili0vqesfw.jpg",
    path: "#",
  },
  {
    title: "CYTOGENETIC TESTS",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827826/vite-project/pjqg8lwymfisjcjex5ad.jpg",
    path: "#",
  },
  {
    title: "MICROARRAY",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827826/vite-project/pjqg8lwymfisjcjex5ad.jpg",
    path: "#",
  },
];

// ✅ Single card with its own image loaded state
const ServiceCard = ({ card }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const isLinked = card.path && card.path !== "#";

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition h-full">
      {/* Header */}
      <div className="bg-gray-100 px-3 py-2 sm:px-4 sm:py-2.5 flex items-center justify-center font-semibold text-[#005C96] text-xs sm:text-sm md:text-base text-center min-h-[40px] sm:min-h-[44px]">
        {isLinked ? (
          <Link to={card.path} className="hover:underline">
            {card.title}
          </Link>
        ) : (
          <span>{card.title}</span>
        )}
      </div>

      {/* Image area */}
      <div className="relative h-[150px] sm:h-[170px] md:h-[200px] lg:h-[220px] overflow-hidden bg-white flex items-center justify-center">

        {/* Skeleton loader */}
        {!loaded && !error && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse" />
        )}

        {/* Error fallback */}
        {error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <span className="text-xs text-gray-400">{card.title}</span>
          </div>
        )}

        <img
          src={card.img}
          alt={card.title}
          onLoad={() => setLoaded(true)}
          onError={() => { setError(true); setLoaded(true); }}
          className={`w-full h-full object-contain p-2 bg-white transition-opacity duration-500 ${
            loaded && !error ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

        {/* Know More Button */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-max">
          {isLinked ? (
            <Link
              to={card.path}
              className="bg-white text-[#005C96] px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold shadow-lg border border-gray-200 hover:bg-[#005C96] hover:text-white transition-all duration-300 inline-block whitespace-nowrap"
            >
              Know More →
            </Link>
          ) : (
            <span className="bg-white text-gray-400 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold shadow-lg border border-gray-200 inline-block whitespace-nowrap cursor-not-allowed">
              Know More →
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const Repro = () => {
  const sliderRef = useRef(null);
  const scrollEndTimerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const getScrollStep = () => {
    const slider = sliderRef.current;
    if (!slider?.firstElementChild) return 276;
    const gap = window.innerWidth >= 768 ? 24 : 16;
    return slider.firstElementChild.offsetWidth + gap;
  };

  const resetLoopPosition = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const firstClone = slider.children[cards.length];
    if (!firstClone) return;

    const loopWidth =
      firstClone.getBoundingClientRect().left -
      slider.firstElementChild.getBoundingClientRect().left;

    if (slider.scrollLeft >= loopWidth - 2) {
      slider.style.scrollBehavior = "auto";
      slider.style.scrollSnapType = "none";
      slider.scrollLeft -= loopWidth;

      requestAnimationFrame(() => {
        slider.style.scrollBehavior = "";
        slider.style.scrollSnapType = "";
      });
    }
  };

  const handleScroll = () => {
    window.clearTimeout(scrollEndTimerRef.current);
    scrollEndTimerRef.current = window.setTimeout(resetLoopPosition, 350);
  };

  const handleTouchStart = () => {
    window.clearTimeout(scrollEndTimerRef.current);
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    window.clearTimeout(scrollEndTimerRef.current);
    scrollEndTimerRef.current = window.setTimeout(() => {
      resetLoopPosition();
      setIsPaused(false);
    }, 500);
  };

  // Auto-rotate carousel on all screen sizes
  useEffect(() => {
    if (isPaused) return;

    const autoScroll = setInterval(() => {
      const slider = sliderRef.current;
      if (!slider) return;

      resetLoopPosition();
      requestAnimationFrame(() => {
        slider.scrollBy({ left: getScrollStep(), behavior: "smooth" });
      });
    }, 3000);

    return () => {
      clearInterval(autoScroll);
      window.clearTimeout(scrollEndTimerRef.current);
    };
  }, [isPaused]);

  return (
    <>
      {/* 🔹 Header */}
      <div className="text-center pt-4 pb-3 sm:pt-5 sm:pb-4 bg-gradient-to-r from-[#0C759A] to-[#005E91] text-white">
        <h2 className="text-lg sm:text-xl md:text-[25px] font-semibold px-4">
          High-End Testing
        </h2>
        <p className="text-sm sm:text-base md:text-lg opacity-90 px-4 mt-0.5 leading-relaxed">
          Our comprehensive range of next-generation genetic tests.
        </p>
      </div>

      {/* 🔹 Section */}
      <div
        className="py-5 sm:py-6 md:py-8 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827793/vite-project/jn3lx6mi0bepp3pvc0u6.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="relative">
            {/* 🔹 Cards — KEY FIX: w-[75vw] on mobile instead of min-w */}
            <div
              ref={sliderRef}
              onScroll={handleScroll}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onTouchCancel={handleTouchEnd}
              className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2"
            >
              {[...cards, ...cards].map((card, index) => (
                <div
                  key={`${card.title}-${index}`}
                  // ✅ Fixed pixel width — not relative to parent
                  style={{ width: "260px", minWidth: "260px" }}
                  className="md:min-w-[320px] md:w-[320px] lg:min-w-[350px] lg:w-[350px] flex-shrink-0 snap-start"
                >
                  <ServiceCard card={card} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Bottom Strip */}
      <div className="bg-[#005E91] h-2" />
    </>
  );
};

export default Repro;
