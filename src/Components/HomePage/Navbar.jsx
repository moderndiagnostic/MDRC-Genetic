import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import PopupForm from "../PopupForm";

const logo =
  "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827827/vite-project/vgzwrlq8snrlmmgcsr1l.webp";

  const navLinks = [
      { label: "Home", path: "/" },
      { label: "About MDRC Genomics", path: "/about" },
      { label: "Modern DNA Panels", path: "/services/modern-dna-panels" },
      {
        label: "Metabolomics Services",
        path: "/services/metabolomics-services",
        dropdown: [
          {
            label: "Longevity Panels",
            path: "#",
            dropdown: [
              { label: "Methylation Status Analysis", path: "#" },
              { label: "Omega-3 : Omega-6 Fatty Acid Ratio", path: "#" },
              { label: "NAD+ / NADH Ratio", path: "#" },
              { label: "GSH / GSSG Ratio", path: "#" },
            ],
          },

          {
            label: "Gut Microbiome Health Assessment Panel",
            path: "#",
          },

          
          {
            label: "Neurotransmitter and Catecholamine Assessment",
            path: "#",
          },
          { label: "Autism Assessment Panel", path: "#" },
          { label: "Depression Assessment Panel", path: "#" },
          {
            label: "Complete Fat and Water-Soluble Vitamin Panel",
            path: "#",
          },
          {
            label: "High Precision Assessment of Vitamin D Status",
            path: "#",
          },
          {
            label: "New Born Screening for Errors of Metabolism",
            path: "#",
          },
          { label: "Confirmation of Errors of Metabolism", path: "#" },
          { label: "Therapeutic Drug Monitoring", path: "#" },
          { label: "Drugs of Abuse Levels", path: "#" },
        ],
      },
      {
        label: "Genomic Services",
        path: "/genomic-services",
        dropdown: [
           {
            label: "Oncology",
            path: "/services/oncologygenomics",
            dropdown: [
              { label: "Comprehensive Genomic Profiling (CGP)", path: "/service/comprehensivegenomicprofiling" },
              { label: "Targeted Solid Tumor Gene Panels", path: "/service/targetedsolidtumorpanels" },
              { label: "Hematological Malignancy Genomics", path: "/service/hematologicalmalignancygenomics" },
              { label: "Liquid Biopsy (ctDNA Analysis)", path: "/service/liquidbiopsy" },
              { label: "Hereditary Cancer Genomics (Germline Testing)", path: "/service/hereditarycancergenomics" },
              { label: "RNA Sequencing for Fusion Detection", path: "/service/rnasequencingforfusion" },
              
            ],
          },

          
          {


            label: "Infectious Disease",
            path: "/services/infectious-Disease",
            dropdown: [
              { label: "Spectrum of Infectious Diseases", path: "/service/gastro" },
              { label: "Immuno Suppression", path: "/service/immunosuppression" },
              { label: "Respiratory Panel ", path: "/service/respiratorypanel" },
              { label: "Gastrointestinal Panel ", path: "/service/gastrointestinapanel" },
              { label: "Influenza Panel", path: "/service/influenzapanel" },
              { label: "Tropical Fever Panel", path: "/service/tropicalfeverpanel" },
              { label: "TORCH PCR", path: "/service/torchpcrfeverpanel" },
              { label: "STD / Urethritis Panel", path: "/service/stdurethritispanelfeverpanel" },
              { label: "Swine Flu (H1N1)", path: "/service/swineflufever" },
              { label: "Meningitis Panel", path: "/service/meningitispanel" },
            ],
          },
          {
            label: "Reproductive Health & Pregnancy",
            path: "/services/reproductive-health-pregnancy",
            dropdown: [
              { label: "Infertility Genetics", path: "/services/infertility-genetics" },
              { label: "Carrier Screening", path: "/services/carrier-screening" },
              { label: "Non-Invasive Prenatal Testing (NIPT)", path: "/reproductive-health-pregnancy/services/nipt" },
              { label: "Newborn Screening", path: "/reproductive-health-pregnancy/newbornscreening" },
              { label: "Microarray", path: "/reproductive-health-pregnancy/services/microarray" },
              
            ],
          },
          {
            label: "Cytogenetics and FISH",
            path: "/services/cyto-genetic-and-fish",
            dropdown: [
              { label: "Amniocentesis", path: "/service/amniocentesis" },
              { label: "Chorionic Villus Sampling (CVS)", path: "/service/chorionicvillussamplingfeverpanel" },
              { label: "Fetal Blood and Products of Conception", path: "/service/fetalconception" },
              { label: "Blood Culture and Karyotyping", path: "/service/bloodculturekaryotyping" },
              { label: "High Resolution Banding", path: "/service/highresolutionbanding" },

              
            ],
          },
          {
            label: "Rare Diseases NGS panel",
            path: "/services/rare-nGS-panel",
            dropdown: [
              { label: "Neurological Disorders", path: "/service/neurologicaldisorders" },
              { label: "Pediatric Genetic Disorders", path: "/service/pediatricgeneticgisorders" },
              { label: "Metabolic Disorders", path: "/service/metabolicdisorders" },
              { label: "Cardiogenetic Disorders", path: "/service/cardiogeneticdisorders" },
              { label: "Skeletal Disorders", path: "/service/skeletaldisorders" },
              { label: "Ophthalmic Genetic Disorders", path: "/service/ophthalmicgeneticdisorders" },
              { label: "Renal Genetic Disorders", path: "/service/renalgeneticdisorders" },
              { label: "Hematological Genetic Disorders", path: "/service/hematologicalgeneticdisorders" },
              { label: "Immunological Disorders", path: "/service/immunologicaldisorders" },
              // { label: "Oncogenetics", path: "/service/oncogeneticsdisorders" },
              
            ],
          },
          {
            label: "Whole Exome & Whole Genome",
            path: "/services/whole-exome-and-genome-Sequencing",
            dropdown: [
              { label: "Genome Sequencing", path: "/service/genomesequencing" },
              { label: "Exome Sequencing", path: "/service/exomesequencing" },
              
            ],
          },
          {
            label: "Pharmacogenomics",
            path: "/services/pharmacogenomics",
            dropdown: [
              { label: "Warfarin Pharmacogenomics", path: "/service/warfarinpharmacogenomics" },
              { label: "Statin Pharmacogenomics", path: "/service/statinpharmacogenomics" },
              { label: "Thiopurine and Methotrexate Pharmacogenomics", path: "/service/thiopurine/methotrexate/pharmacogenomics" },
              { label: "Clopidogrel Pharmacogenomics", path: "/service/clopidogrel/pharmacogenomics" },
              
            ],
          },
          {
            label: "Advanced Sequencing",
            path: "/services/advanced-Sequencing",
            dropdown: [
              { label: "Whole Genome Sequencing (WGS)", path: "/servicewholegenomesequencing" },
              { label: "Whole Exome Sequencing (WES)", path: "/service/wholeexomesequencing" },
              { label: "Targeted Gene Panel Sequencing", path: "/service/targetedpanelsequencing" },
              { label: "RNA Sequencing (RNA-Seq / Transcriptome Analysis)", path: "/service/rnasequencing" },
              { label: "Long-Read Sequencing", path: "/service/longreadsequencing" },
              { label: "Metagenomic Next-Generation Sequencing (mNGS)", path: "/service/metagenomicgenerationsequencing" },
              
            ],
          },
         
         ],
      },
      {
        label: "Contact Us",
        path: "/contact",
        dropdown: [
          { label: "Contact Us", path: "/contact" },
          { label: "Blog", path: "/blogs" },
        ],
      },
    ];

  const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openMain, setOpenMain] = useState(null);
    const [openSub, setOpenSub] = useState(null);
    const location = useLocation();
    const [showPopup, setShowPopup] = useState(false);
    useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">

        {/* Top Bar */}
        <div className="h-12 bg-gray-100 flex items-center px-4 gap-4">
          <img
            src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828018/vite-project/xj4xw61kf7ppx5ovzv5w.svg"
            className="h-6"
          />

          <img
            src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828063/vite-project/sdx6ru1wht1omol4ghkh.svg"
            className="h-6"
          />
        </div>

        {/* Main Header */}
        <div className="w-full max-w-[1680px] mx-auto px-4 lg:px-6">

          <div className="flex items-center justify-between gap-4 h-16 lg:h-20">

            {/* Logo */}
            <Link to="/" className="shrink-0">
              <img src={logo} className="h-12 lg:h-14 w-auto" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden xl:flex flex-1 items-center justify-center gap-1 2xl:gap-2 text-[15px] 2xl:text-sm text-gray-700">

              {navLinks.map((link, index) => (
                <div key={index} className="relative group shrink-0 font-semibold">

                  {!link.dropdown ? (
                    <Link
                      to={link.path}
                      className={`block whitespace-nowrap px-2 2xl:px-3 py-2 rounded font-semibold ${
                        location.pathname === link.path &&
                        navLinks.findIndex((item) => item.path === location.pathname) === index
                          ? "bg-gray-100"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <>
                      {link.label === "Metabolomics Services" ? (
                        <Link
                          to={link.path}
                          className="flex items-center gap-1 whitespace-nowrap px-2 2xl:px-3 py-2 hover:text-primary"
                        >
                          {link.label}
                          <ChevronDown className="w-4 h-4" />
                        </Link>
                      ) : (
                        <button className="flex items-center gap-1 whitespace-nowrap px-2 2xl:px-3 py-2 hover:text-primary">
                        {link.label}
                        <ChevronDown className="w-4 h-4" />
                        </button>
                      )}

                      {/* Dropdown */}
                      <div
                        className={`
                          absolute
                          top-full
                          z-[60]
                          bg-white
                          rounded-xl
                          shadow-xl
                          opacity-0
                          invisible
                          group-hover:opacity-100
                          group-hover:visible
                          transition-all
                          duration-200
                          ${
                            link.label === "Metabolomics Services"
                              ? "left-0 w-96 max-h-[calc(100vh-9rem)] overflow-visible"
                              : link.label === "Genomic Services" ||
                                link.label === "Contact Us"
                              ? "right-0 w-72"
                              : "left-0 w-72"
                          }
                        `}
                      >
                        {link.dropdown.map((item, i) => (
  <div key={i} className="relative group/item">

    {item.dropdown ? (
      <>
        <Link
          to={item.path}
          className="flex justify-between items-center gap-2 px-5 py-3 hover:bg-gray-50 font-medium"
        >
          <span>{item.label}</span>
          <ChevronDown className="w-4 h-4 shrink-0 -rotate-90" />
        </Link>

        {/* LEVEL 2 DROPDOWN */}
        <div
          className={`
            absolute
            top-0
            z-[70]
            w-80
            max-h-[calc(100vh-9rem)]
            overflow-y-auto
            bg-white
            rounded-xl
            shadow-xl
            opacity-0
            invisible
            group-hover/item:opacity-100
            group-hover/item:visible
            transition-all
            duration-200
            z-50
            pointer-events-none
            group-hover/item:pointer-events-auto
            ${
              link.label === "Genomic Services"
                ? "right-full"
                : "left-full"
            }
          `}
        >
          {item.dropdown.map((sub, j) => (
            <Link
              key={j}
              to={sub.path}
              className="block px-5 py-3 text-sm hover:bg-gray-50 font-medium leading-snug"
            >
              {sub.label}
            </Link>
          ))}
        </div>
      </>
    ) : (
      <Link
        to={item.path}
        className="block px-5 py-3 hover:bg-gray-50 font-medium"
      >
        {item.label}
      </Link>
    )}

  </div>
))}
                      </div>
                    </>
                  )}
                </div>
              ))}

              {/* BOOK YOUR TEST BUTTON */}
              <button
                onClick={() => setShowPopup(true)}
                className="
                  bg-green-500
                  hover:bg-green-600
                  text-white
                  px-4
                  2xl:px-6
                  py-3
                  rounded-xl
                  font-semibold
                  whitespace-nowrap
                  transition-all
                  duration-300
                  hover:scale-105
                  shadow-lg
                  flex
                  items-center
                  gap-2
                "
              >
                Book Your Test
              </button>

            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden"
            >
              {isOpen ? <X /> : <Menu />}
            </button>

          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100">

            <div className="flex flex-col p-4 text-gray-700">

              {navLinks.map((link, index) => (
                <div key={index}>

                  {!link.dropdown ? (
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-3 hover:bg-gray-50 rounded-lg"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() =>
                          setOpenMain(openMain === index ? null : index)
                        }
                        className="w-full flex justify-between items-center px-3 py-3 font-medium"
                      >
                        {link.label}

                        <ChevronDown
                          className={`w-4 h-4 transition ${
                            openMain === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openMain === index && (
                        <div className="pl-4 border-l border-gray-100">

                      {link.dropdown.map((item, i) => (
  <div key={i}>

    {item.dropdown ? (
      <>
        <div className="flex justify-between items-center">
          <Link
            to={item.path}
            className="px-3 py-2 text-sm font-medium"
          >
            {item.label}
          </Link>

          <button
            onClick={() =>
              setOpenSub(
                openSub === `${index}-${i}`
                  ? null
                  : `${index}-${i}`
              )
            }
          >
            <ChevronDown
              className={`w-4 h-4 transition ${
                openSub === `${index}-${i}`
                  ? "rotate-180"
                  : ""
              }`}
            />
          </button>
        </div>

        {openSub === `${index}-${i}` && (
          <div className="pl-4 border-l border-gray-100 ml-2">


            {item.dropdown.map((sub, j) => (
              <Link
                key={j}
                to={sub.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-1 text-sm hover:bg-gray-50 rounded font-medium"
              >
                {sub.label}
              </Link>
            ))}

          </div>
        )}

      </>
    ) : (
      <Link
        to={item.path}
        onClick={() => setIsOpen(false)}
        className="block px-3 py-2 text-sm hover:bg-gray-50 rounded"
      >
        {item.label}
      </Link>
    )}

  </div>
))}

                        </div>
                      )}
                    </>
                  )}

                </div>
              ))}

              {/* MOBILE BUTTON */}
              <button
                onClick={() => setShowPopup(true)}
                className="
                  mt-4
                  bg-green-500
                  hover:bg-green-600
                  text-white
                  py-3
                  text-center
                  rounded-xl
                  font-semibold
                  w-full
                  transition-all
                  duration-300
                "
              >
                Book Your Test
              </button>

            </div>
          </div>
        )}
      </nav>

      {/* POPUP FORM */}
      {showPopup && (
        <PopupForm
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
};

export default Navbar;
