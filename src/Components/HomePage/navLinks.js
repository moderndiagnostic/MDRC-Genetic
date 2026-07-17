export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  {
    label: "Modern DNA Panels",
    path: "/services/modern-dna-panels",
    dropdown: [
      { label: "Microarray", path: "/services/modern-dna-panels/microarray" },
      { label: "NGS Panels", path: "/services/modern-dna-panels/ngs-panels" },
    ],
  },
  {
    label: "Metabolomics Services",
    path: "/services/metabolomics-services",
    dropdown: [
      {
        label: "Longevity Panel",
        path: "/services/metabolomics-services/longevity-panel",
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
          {
            label: "Comprehensive Genomic Profiling (CGP)",
            path: "/service/comprehensivegenomicprofiling",
          },
          {
            label: "Targeted Solid Tumor Gene Panels",
            path: "/service/targetedsolidtumorpanels",
          },
          {
            label: "Hematological Malignancy Genomics",
            path: "/service/hematologicalmalignancygenomics",
          },
          {
            label: "Liquid Biopsy (ctDNA Analysis)",
            path: "/service/liquidbiopsy",
          },
          {
            label: "Hereditary Cancer Genomics (Germline Testing)",
            path: "/service/hereditarycancergenomics",
          },
          {
            label: "RNA Sequencing for Fusion Detection",
            path: "/service/rnasequencingforfusion",
          },
        ],
      },
      {
        label: "Infectious Disease",
        path: "/services/infectious-Disease",
        dropdown: [
          {
            label: "Spectrum of Infectious Diseases",
            path: "/service/gastro",
          },
          { label: "Immuno Suppression", path: "/service/immunosuppression" },
          { label: "Respiratory Panel ", path: "/service/respiratorypanel" },
          {
            label: "Gastrointestinal Panel ",
            path: "/service/gastrointestinapanel",
          },
          { label: "Influenza Panel", path: "/service/influenzapanel" },
          { label: "Tropical Fever Panel", path: "/service/tropicalfeverpanel" },
          { label: "TORCH PCR", path: "/service/torchpcrfeverpanel" },
          {
            label: "STD / Urethritis Panel",
            path: "/service/stdurethritispanelfeverpanel",
          },
          { label: "Swine Flu (H1N1)", path: "/service/swineflufever" },
          { label: "Meningitis Panel", path: "/service/meningitispanel" },
        ],
      },
      {
        label: "Reproductive Health & Pregnancy",
        path: "/services/reproductive-health-pregnancy",
        dropdown: [
          {
            label: "Infertility Genetics",
            path: "/services/infertility-genetics",
          },
          {
            label: "Carrier Screening",
            path: "/services/carrier-screening",
          },
          {
            label: "NIPT & Extended NIPT",
            path: "/reproductive-health-pregnancy/services/nipt",
          },
          {
            label: "Newborn Screening",
            path: "/reproductive-health-pregnancy/newbornscreening",
          },
          {
            label: "Microarray",
            path: "/reproductive-health-pregnancy/services/microarray",
          },
        ],
      },
      {
        label: "Cytogenetics and FISH",
        path: "/services/cyto-genetic-and-fish",
        dropdown: [
          { label: "Amniocentesis", path: "/service/amniocentesis" },
          {
            label: "Chorionic Villus Sampling (CVS)",
            path: "/service/chorionicvillussamplingfeverpanel",
          },
          {
            label: "Fetal Blood and Products of Conception",
            path: "/service/fetalconception",
          },
          {
            label: "Blood Culture and Karyotyping",
            path: "/service/bloodculturekaryotyping",
          },
          {
            label: "High Resolution Banding",
            path: "/service/highresolutionbanding",
          },
        ],
      },
      {
        label: "Rare Diseases NGS panel",
        path: "/services/rare-nGS-panel",
        dropdown: [
          {
            label: "Neurological Disorders",
            path: "/service/neurologicaldisorders",
          },
          {
            label: "Pediatric Genetic Disorders",
            path: "/service/pediatricgeneticgisorders",
          },
          {
            label: "Metabolic Disorders",
            path: "/service/metabolicdisorders",
          },
          {
            label: "Cardiogenetic Disorders",
            path: "/service/cardiogeneticdisorders",
          },
          {
            label: "Skeletal Disorders",
            path: "/service/skeletaldisorders",
          },
          {
            label: "Ophthalmic Genetic Disorders",
            path: "/service/ophthalmicgeneticdisorders",
          },
          {
            label: "Renal Genetic Disorders",
            path: "/service/renalgeneticdisorders",
          },
          {
            label: "Hematological Genetic Disorders",
            path: "/service/hematologicalgeneticdisorders",
          },
          {
            label: "Immunological Disorders",
            path: "/service/immunologicaldisorders",
          },
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
          {
            label: "Warfarin Pharmacogenomics",
            path: "/service/warfarinpharmacogenomics",
          },
          {
            label: "Statin Pharmacogenomics",
            path: "/service/statinpharmacogenomics",
          },
          {
            label: "Thiopurine and Methotrexate Pharmacogenomics",
            path: "/service/thiopurine/methotrexate/pharmacogenomics",
          },
          {
            label: "Clopidogrel Pharmacogenomics",
            path: "/service/clopidogrel/pharmacogenomics",
          },
        ],
      },
      {
        label: "Advanced Sequencing",
        path: "/services/advanced-Sequencing",
        dropdown: [
          {
            label: "Targeted Gene Panel Sequencing",
            path: "/service/targetedpanelsequencing",
          },
          {
            label: "RNA Sequencing (RNA-Seq / Transcriptome Analysis)",
            path: "/service/rnasequencing",
          },
          {
            label: "Long-Read Sequencing",
            path: "/service/longreadsequencing",
          },
          {
            label: "Metagenomic Next-Generation Sequencing (mNGS)",
            path: "/service/metagenomicgenerationsequencing",
          },
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
