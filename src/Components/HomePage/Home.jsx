import HeroSection from "./HeroSection";
import TrustBanner from "./TrustBanner";
import ServicesOverview from "./ServicesOverview";
import BookingCTA from "./BookingCTA";
import { Link } from "react-router-dom";
// import { ArrowRight, Microscope, Shield, HeartPulse } from "lucide-react";
// import Health from "../components/Health";
import Nationwide from "./Nationwide";
import Blog from "./Blog";
// import OncologySection from "../components/Oncology";
import Repro from "./Repro";
import FAQ from "./FAQ";
import FoundationSection from "../FoundationSection";
import MediaGallery from "./MediaGallery";

const Home = () => (
  <>
   

    {/* ✅ HERO SECTION */}
    <div className="overflow-x-hidden pt-[6.25rem] lg:pt-[7.25rem]">
      <HeroSection />
    </div>

    {/* <TrustBanner /> */}
    <FoundationSection />

    <section className="relative w-full overflow-hidden py-10 sm:py-12 md:py-16 lg:py-20">
      {/* Generated atmospheric background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/genomics-division-bg.png')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/88 to-[#E8F6FB]/75" />
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#15AEE5]/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-[#005E91]/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* IMAGE */}
          <div className="order-2 md:order-1 group">
            <div className="relative mx-auto max-w-lg md:max-w-none">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#15AEE5]/25 via-transparent to-[#005E91]/20 blur-xl opacity-80 transition duration-500 group-hover:opacity-100" />
              <div className="relative overflow-hidden rounded-[1.75rem] rounded-tr-[3rem] rounded-bl-[3rem] shadow-[0_24px_60px_rgba(0,94,145,0.22)] ring-1 ring-[#005E91]/10">
                <img
                  src="/assets/genomics-division-hero.png"
                  alt="MDRC Genomics and Molecular Division — DNA and precision diagnostics"
                  className="w-full h-auto object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#005E91]/35 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5">
                  <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-xs sm:text-sm font-semibold text-[#005E91] shadow-sm">
                    Precision Genomics · LC-MS/MS
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT — all original copy kept */}
          <div className="flex flex-col gap-3 sm:gap-4 order-1 md:order-2">
            <p className="text-[#15AEE5] text-sm sm:text-base font-medium tracking-wide">
              MDRC Genomics
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-[2rem] lg:text-[2.15rem] font-bold text-[#1f3a4d] leading-tight">
              Genomics & Molecular Division
            </h2>

            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#005E91] to-[#15AEE5]" />

            <p className="text-[#424040] text-sm sm:text-base md:text-lg leading-relaxed">
              <strong>Genomics</strong> is the cornerstone of precision medicine, moving diagnostics from reactive treatment to proactive prevention. By analyzing an individual’s unique{" "}
              <strong>genetic architecture</strong>
              {" "}we can identify molecular markers that traditional pathology often overlooks or is unable to determine
            </p>

            <p className="text-[#424040] text-sm sm:text-base md:text-lg leading-relaxed">
              Our topline QTof LC-MS/MS system can identify very minute quantities of metabolites up to picogram level and this helps in certain disease conditions that can not be identified by other means.
            </p>

            <p className="text-[#424040] text-sm sm:text-base md:text-lg leading-relaxed">
              This data-driven approach allows for the
              <strong> detection of hereditary predispositions </strong>, the diagnosis of complex rare diseases, and the optimization of therapeutic interventions based on an individual's specific biological makeup.
            </p>

            <Link to="/about" className="mt-2 sm:mt-3 w-max">
              <button className="cursor-pointer inline-flex items-center gap-2 bg-gradient-to-r from-[#05AF79] to-[#0ECE91] text-white text-sm sm:text-base font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-[0_10px_28px_rgba(5,175,121,0.28)] hover:opacity-95 hover:-translate-y-0.5 transition-all duration-300">
                KNOW MORE ABOUT MDRC GENOMICS
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <ServicesOverview />

    <Repro />

    {/* <OncologySection /> */}

    {/* <Health /> */}

    <Nationwide />

    <Blog />

    <BookingCTA />

    <FAQ />

    <MediaGallery />
  </>
);

export default Home;
