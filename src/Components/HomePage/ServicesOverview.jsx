import { Link } from "react-router-dom";
import { ArrowRight, Bug, Baby, Microscope, Dna, FlaskConical, Pill } from "lucide-react";

const services = [
  {
    icon: Pill,
    title: "Tandem Mass Spectrometry (TMS)",
    description: "LC-MS/MS (Liquid Chromatography–Tandem Mass Spectrometry) has become one of the most powerful analytical tools.",
    path: "/services/tandem-mass-spectrometry-tms",
  },
  {
    icon: Bug,
    title: "Infectious Disease",
    description: "Molecular diagnostics for rapid and accurate pathogen detection using advanced PCR and NGS technologies.",
    path: "/services/infectious-Disease",
  },
  {
    icon: Baby,
    title: "Reproductive Health & Pregnancy",
    description: "Comprehensive genetic screening for family planning including NIPT, carrier screening, and PGT.",
    path: "/services/reproductive-health-pregnancy",
  },
  {
    icon: Microscope,
    title: "Cytogenetics & FISH",
    description: "Chromosome analysis and fluorescence in situ hybridization for detecting structural abnormalities.",
    path: "/services/cyto-genetic-and-fish",
  },
  {
    icon: Dna,
    title: "Rare NGC Panel",
    description: "Targeted next-generation sequencing panels for identifying rare and inherited genetic disorders.",
    path: "/services/rare-nGS-panel",
  },
  {
    icon: FlaskConical,
    title: "Whole Exome & Genome",
    description: "Comprehensive sequencing of the entire coding or full genome for undiagnosed genetic conditions.",
    path: "/services/whole-exome-and-genome-Sequencing",
  },
 
  {
    icon: Pill,
    title: "Pharmacogenmics",
    description: "Genetic testing to guide personalized medication choices, dosing, and reduce adverse drug reactions.",
    path: "/services/pharmacogenomics",
  },
   {
    icon: Pill,
    title: "Oncology Genomics",
    description: "MDRC Genomics delivers advanced molecular oncology services focused on the identification",
    path: "/services/oncologygenomics",
  },
  {
    icon: Pill,
    title: "Advanced Sequencing",
    description: "Whole Genome Sequencing, Whole Exome Sequencing (WES).",
    path: "/services/advanced-Sequencing",
  },
  
];

const ServicesOverview = () => (
  <section id="services" className="bg-[#F5F7F9] py-6 sm:py-8 md:py-10 lg:py-12">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="text-center mx-auto mb-5 sm:mb-6 md:mb-8">
        <span className="text-[#15AEE5] text-sm sm:text-base font-medium">Our Expertise</span>
        <h2 className="font-heading text-xl sm:text-2xl md:text-[25px] font-bold mt-1 mb-1">
        Specialised Genetic & Molecular Services
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[#424040] leading-relaxed px-2">
          From prenatal screening to rare disease diagnosis, our laboratory delivers clinically validated genomic insights.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-7xl mx-auto">
  {services.map((service, i) => {
    const isLast = i === services.length ;
    return (
      <Link
        key={service.path}
        to={service.path}
        className={`group bg-card rounded-xl p-4 sm:p-5 lg:p-6 
       shadow-[0_0_10px_#7e7e7e] transition-all duration-300 animate-fade-in-up
        ${isLast ? "sm:col-span-2 lg:col-span-2" : ""}`}
        style={{ animationDelay: `${i * 80}ms` }}
      >
        <div
  className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4"
  style={{ background: "linear-gradient(to right, #15AEE5, #0C607F)" }}
>
  <service.icon className="text-white" />
</div>

        <h3 className="font-modium text-base md:text-lg font-semibold mb-1.5 sm:mb-2">
          {service.title}
        </h3>

        <p className="text-[#727070] text-sm sm:text-base md:text-lg leading-relaxed mb-2 sm:mb-3">
          {service.description}
        </p>

        <span className="inline-flex items-center gap-1 text-sm sm:text-base font-medium text-[#15AEE5] group-hover:gap-2 transition-all">
          Learn More <ArrowRight className="w-4 h-4" />
        </span>
      </Link>
    );
  })}
</div>
    </div>
  </section>
);

export default ServicesOverview;
