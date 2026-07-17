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
import { FaPhoneAlt } from "react-icons/fa";

const Home = () => (
  <>
   

    {/* ✅ HERO SECTION */}
    <div className="overflow-x-hidden pt-28 lg:pt-32">
      <HeroSection />
    </div>

    {/* <TrustBanner /> */}
    <FoundationSection />

    <section
      className="w-full py-6 px-4 sm:px-6 md:py-8 md:px-8 lg:px-10 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827997/vite-project/c0mcnqdruhqlbeg9ahxi.svg')",
      }}
    >
      <div className="absolute inset-0"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 items-center">
        
        {/* IMAGE */}
        <div className="order-2 md:order-1">
          <img
            src="/assets/mdoctor.svg"
            alt="section"
            className="w-full h-auto"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-1 order-1 md:order-2">
<<<<<<< HEAD
          <h2 className="text-xl sm:text-2xl md:text-[25px] font-semibold text-[#424040]">
            Genomics & Molecular Division
          </h2>

          <p className="text-[#424040] text-sm sm:text-base md:text-lg leading-relaxed">
=======
          <h2 className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-bold text-[#424040]">
            Genomics & Molecular Division
          </h2>

          <p className="text-[#424040] text-sm sm:text-[15px] md:text-[16px] lg:text-[18px] font-medium leading-relaxed">
>>>>>>> dfcb555ac04c72e4bac571defe511b797624b2e1
            <strong>Genomics</strong> is the cornerstone of precision medicine, moving diagnostics from reactive treatment to proactive prevention. By analyzing an individual’s unique {" "}
            <strong>genetic architecture</strong>
            we can identify molecular markers that traditional pathology often overlooks or is unable to determine
          </p>

<<<<<<< HEAD
          <p className="mt-1.5 text-[#424040] text-sm sm:text-base md:text-lg leading-relaxed">
=======
          <p className="mt-1.5 text-[#424040] text-sm sm:text-[15px] md:text-[16px] lg:text-[18px] font-medium leading-relaxed">
>>>>>>> dfcb555ac04c72e4bac571defe511b797624b2e1
            Our topline QTof LC-MS/MS system can identify very minute quantities of metabolites up to picogram level and this helps in certain disease conditions that can not be identified by other means.
          </p>


<<<<<<< HEAD
         <p className="mt-1.5 text-[#424040] text-sm sm:text-base md:text-lg leading-relaxed">
=======
         <p className="mt-1.5 text-[#424040] text-sm sm:text-[15px] md:text-[16px] lg:text-[18px] font-medium leading-relaxed">
>>>>>>> dfcb555ac04c72e4bac571defe511b797624b2e1
            This data-driven approach allows for the
            <strong> detection of hereditary predispositions </strong>, the diagnosis of complex rare diseases, and the optimization of therapeutic interventions based on an individual's specific biological makeup.
          </p>





          {/* BUTTON */}
          <Link to={"/about"}>
<<<<<<< HEAD
            <button className="cursor-pointer mt-4 w-max bg-gradient-to-r from-[#05AF79] to-[#0ECE91] text-white text-sm sm:text-base px-4 sm:px-5 md:px-6 py-2 md:py-2.5 rounded-lg hover:opacity-90 transition">
=======
            <button className="cursor-pointer mt-4 w-max bg-gradient-to-r from-[#05AF79] to-[#0ECE91] text-white text-sm sm:text-base md:text-lg px-4 sm:px-5 md:px-6 py-2 md:py-2.5 rounded-lg hover:opacity-90 transition">
>>>>>>> dfcb555ac04c72e4bac571defe511b797624b2e1
              KNOW MORE ABOUT MDRC GENOMICS
            </button>
          </Link>
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
