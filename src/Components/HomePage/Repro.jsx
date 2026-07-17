import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    title: "KARYOTYPING",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827820/vite-project/qkdwtp5jzkfigoccsbwt.jpg",
    path: "/service/bloodculturekaryotyping",
    tag: "Chromosomes",
  },
  {
    title: "CARRIER SCREENING",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828008/vite-project/yv8hyanavztk9j6k0snd.svg",
    path: "/services/carrier-screening",
    tag: "Family Planning",
  },
  {
    title: "NIPT",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827820/vite-project/qkdwtp5jzkfigoccsbwt.jpg",
    path: "/reproductive-health-pregnancy/services/nipt",
    tag: "Prenatal",
  },
  {
    title: "GENETIC TESTING",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828008/vite-project/yv8hyanavztk9j6k0snd.svg",
    path: "/services/modern-dna-panels",
    tag: "DNA Panels",
  },
  {
    title: "GENOTYPING TESTS",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827824/vite-project/b3mwmwygppili0vqesfw.jpg",
    path: "/services/pharmacogenomics",
    tag: "Precision Med",
  },
  {
    title: "DRUG RESISTANCE TESTING",
    img: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827824/vite-project/b3mwmwygppili0vqesfw.jpg",
    path: "/services/pharmacogenomics",
    tag: "Therapeutics",
  },
  {
    title: "CYTOGENETIC TESTS",
    img: "/assets/highend-cytogenetic.png",
    path: "/services/cyto-genetic-and-fish",
    tag: "FISH & Karyotype",
  },
  {
    title: "MICROARRAY",
    img: "/assets/highend-microarray.png",
    path: "/reproductive-health-pregnancy/services/microarray",
    tag: "CMA",
  },
];

const ServiceCard = ({ card }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const isLinked = card.path && card.path !== "#";

  const inner = (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_12px_36px_rgba(0,94,145,0.12)] ring-1 ring-[#005E91]/8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(0,94,145,0.2)]">
      <div className="relative h-[170px] sm:h-[190px] md:h-[210px] overflow-hidden bg-[#E8F6FB]">
        {!loaded && !error && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-[#E8F6FB] via-white to-[#E8F6FB]" />
        )}

        {error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#005E91] to-[#0C759A]">
            <span className="text-sm font-semibold text-white/90">{card.title}</span>
          </div>
        )}

        <img
          src={card.img}
          alt={card.title}
          onLoad={() => setLoaded(true)}
          onError={() => {
            setError(true);
            setLoaded(true);
          }}
          className={`h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105 ${
            loaded && !error ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#003A5C]/75 via-[#003A5C]/15 to-transparent" />

        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-[#005E91] shadow-sm backdrop-blur">
          {card.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 px-4 py-4 sm:px-5 sm:py-5">
        <h3 className="text-sm sm:text-base font-bold tracking-wide text-[#005C96] leading-snug">
          {card.title}
        </h3>

        <span
          className={`mt-auto inline-flex w-max items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-300 ${
            isLinked
              ? "bg-gradient-to-r from-[#005E91] to-[#0C759A] text-white shadow-[0_6px_16px_rgba(0,94,145,0.28)] group-hover:gap-2.5"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
        >
          Know More
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  );

  if (!isLinked) return inner;

  return (
    <Link to={card.path} className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#15AEE5] rounded-2xl">
      {inner}
    </Link>
  );
};

const Repro = () => {
  const sliderRef = useRef(null);
  const scrollEndTimerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const getScrollStep = () => {
    const slider = sliderRef.current;
    if (!slider?.firstElementChild) return 300;
    const gap = window.innerWidth >= 768 ? 24 : 16;
    return slider.firstElementChild.offsetWidth + gap;
  };

  const scrollByDir = (dir) => {
    const slider = sliderRef.current;
    if (!slider) return;
    setIsPaused(true);
    slider.scrollBy({ left: dir * getScrollStep(), behavior: "smooth" });
    window.clearTimeout(scrollEndTimerRef.current);
    scrollEndTimerRef.current = window.setTimeout(() => setIsPaused(false), 2500);
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
    <section className="relative overflow-hidden">
      {/* Atmosphere */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/highend-testing-bg.png')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#005E91]/95 via-[#0C759A]/92 to-[#E8F6FB]" />
      <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-[#15AEE5]/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-white/20 blur-3xl" />

      {/* Header */}
      <div className="relative z-10 text-center px-4 pt-10 sm:pt-12 md:pt-14 pb-6 sm:pb-8">
        <p className="text-[#B8E6F8] text-sm sm:text-base font-medium mb-2">
          Advanced Genetic Diagnostics
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-[2.1rem] font-bold text-white tracking-tight">
          High-End Testing
        </h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#15AEE5] to-white/80" />
        <p className="mt-3 text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
          Our comprehensive range of next-generation genetic tests.
        </p>
      </div>

      {/* Cards carousel */}
      <div className="relative z-10 pb-10 sm:pb-12 md:pb-14">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <button
            type="button"
            onClick={() => scrollByDir(-1)}
            aria-label="Previous tests"
            className="absolute left-1 sm:left-2 top-1/2 z-20 hidden md:flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#005E91] shadow-lg ring-1 ring-[#005E91]/10 transition hover:bg-[#005E91] hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByDir(1)}
            aria-label="Next tests"
            className="absolute right-1 sm:right-2 top-1/2 z-20 hidden md:flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#005E91] shadow-lg ring-1 ring-[#005E91]/10 transition hover:bg-[#005E91] hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            ref={sliderRef}
            onScroll={handleScroll}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
            className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2 px-1"
          >
            {[...cards, ...cards].map((card, index) => (
              <div
                key={`${card.title}-${index}`}
                style={{ width: "260px", minWidth: "260px" }}
                className="md:min-w-[300px] md:w-[300px] lg:min-w-[320px] lg:w-[320px] flex-shrink-0 snap-start"
              >
                <ServiceCard card={card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Repro;
