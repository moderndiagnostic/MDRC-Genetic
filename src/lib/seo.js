import { blogs } from "../data/blogs";

export const SITE_URL = "https://genomics.mdrcindia.com";
export const SITE_NAME = "MDRC India — Modern Diagnostic & Research Centre";
export const DEFAULT_OG_IMAGE =
  "https://res.cloudinary.com/ddcx08e0s/image/upload/c_pad,b_white,w_1200,h_630/v1779089464/logo_yivj08.jpg";

const DEFAULT_TITLE = "Genetic Testing Lab in India | NGS & Genomics – MDRC India";
const DEFAULT_DESCRIPTION =
  "MDRC India offers NABL & NABH accredited genetic testing — whole genome & exome sequencing, NIPT, karyotyping, NGS panels and pharmacogenomics. Book your test today.";

/**
 * Static path -> { title, description, keywords? } map.
 * Titles are kept close to ~60 chars and descriptions ~150-160 chars,
 * targeting high-search-volume genetic/genomic testing keywords plus
 * a booking call-to-action, per MDRC's SEO brief.
 */
export const seoMap = {
  "/": {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    keywords:
      "genetic testing, genetic testing lab in India, genomics lab, whole genome sequencing, whole exome sequencing, NIPT test, karyotyping test, NGS panel, pharmacogenomics, carrier screening, newborn screening, cancer genetic testing, MDRC India",
  },
  "/about": {
    title: "About MDRC India | NABL & NABH Accredited Genomics Lab",
    description:
      "Since 1985, MDRC India has delivered trusted diagnostics and genomic testing. Meet our expert doctors and NABL/NABH accredited labs. Book your genetic test today.",
    keywords: "about MDRC India, genetic testing lab India, NABL accredited lab, NABH certified lab, MDRC doctors",
  },
  "/blogs": {
    title: "Genomics & Genetic Testing Blog | Insights by MDRC India",
    description:
      "Explore expert articles on genetic testing, NIPT, pharmacogenomics, rare disease screening and precision medicine from MDRC India's genomics specialists.",
    keywords: "genetic testing blog, genomics articles, NIPT blog, precision medicine India",
  },
  "/contact": {
    title: "Contact MDRC India | Book Your Genetic & Metabolomic Test",
    description:
      "Get in touch with MDRC India to schedule your genetic or metabolomic test. Home sample collection available in 200+ cities. Call, WhatsApp or book online now.",
    keywords: "book genetic test, contact MDRC India, genetic testing appointment, home sample collection",
  },
  "/terms-and-conditions": {
    title: "Terms & Conditions | MDRC India",
    description:
      "Read the terms and conditions governing the use of MDRC India's website and genetic testing services.",
    noindex: false,
  },
  "/privacy-policy": {
    title: "Privacy Policy | MDRC India",
    description:
      "Learn how MDRC India collects, uses and protects your personal and health data across our genetic testing services.",
  },

  // Top-level service hubs
  "/services/reproductive-health-pregnancy": {
    title: "Reproductive Health & Pregnancy Genetic Screening | MDRC India",
    description:
      "Comprehensive prenatal genetic screening — NIPT, carrier screening, microarray & newborn screening — for safer pregnancies. NABL accredited labs. Book your test now.",
    keywords: "NIPT test, carrier screening, prenatal genetic testing, newborn screening, pregnancy genetic test India",
  },
  "/services/infectious-Disease": {
    title: "Infectious Disease Molecular Testing (PCR & NGS) | MDRC India",
    description:
      "Rapid, accurate PCR & NGS-based molecular diagnostics for infectious diseases including respiratory, GI and tropical fever panels. Book a test with MDRC India today.",
    keywords: "infectious disease PCR test, molecular diagnostics India, NGS pathogen detection, fever panel test",
  },
  "/services/cyto-genetic-and-fish": {
    title: "Cytogenetics & FISH Testing | Karyotyping Lab | MDRC India",
    description:
      "Chromosome analysis and FISH testing to detect structural abnormalities — karyotyping, amniocentesis & CVS panels. NABL accredited. Schedule your test today.",
    keywords: "karyotyping test, FISH test, cytogenetics lab India, chromosome analysis, amniocentesis test",
  },
  "/services/rare-nGS-panel": {
    title: "Rare Disease NGS Panels | Genetic Disorder Testing | MDRC India",
    description:
      "Targeted next-generation sequencing panels to diagnose rare and inherited genetic disorders across neurology, cardiology, renal and more. Book your NGS panel now.",
    keywords: "rare disease NGS panel, genetic disorder testing India, inherited disease panel, NGS test",
  },
  "/services/whole-exome-and-genome-Sequencing": {
    title: "Whole Exome & Genome Sequencing Cost in India | MDRC India",
    description:
      "Comprehensive whole exome and whole genome sequencing to diagnose undiagnosed genetic conditions. Fast turnaround, expert reporting. Book your sequencing test today.",
    keywords: "whole exome sequencing cost India, whole genome sequencing test, WES WGS India, undiagnosed genetic disease",
  },
  "/services/pharmacogenomics": {
    title: "Pharmacogenomics Testing | Personalized Medicine | MDRC India",
    description:
      "Genetic testing to guide personalized medication choices and dosing, reducing adverse drug reactions. Warfarin, statin & clopidogrel panels. Book your test now.",
    keywords: "pharmacogenomics test, personalized medicine genetic testing, drug gene test India, PGx testing",
  },
  "/services/oncologygenomics": {
    title: "Oncology Genomics & Cancer Genetic Testing | MDRC India",
    description:
      "Advanced molecular oncology testing — comprehensive genomic profiling, liquid biopsy and hereditary cancer panels — for precise cancer diagnosis. Book a test today.",
    keywords: "cancer genetic testing, oncology genomics India, liquid biopsy test, hereditary cancer panel",
  },
  "/services/advanced-Sequencing": {
    title: "Advanced NGS Sequencing Services | WGS, WES & RNA-Seq | MDRC India",
    description:
      "Whole genome, whole exome, targeted panel, RNA and long-read sequencing services for research and clinical diagnostics. Book advanced sequencing at MDRC India.",
    keywords: "next generation sequencing India, WGS WES RNA sequencing, long read sequencing, targeted gene panel",
  },
  "/services/tandem-mass-spectrometry-tms": {
    title: "Tandem Mass Spectrometry (LC-MS/MS) Testing | MDRC India",
    description:
      "LC-MS/MS tandem mass spectrometry for ultra-sensitive detection of metabolites and drug levels, aiding diagnosis of complex conditions. Book your TMS test today.",
    keywords: "tandem mass spectrometry test, LC-MS/MS testing India, metabolite testing, TMS lab test",
  },
  "/services/modern-dna-panels": {
    title: "Modern DNA Panels | Microarray & NGS Genetic Panels | MDRC India",
    description:
      "Explore MDRC India's modern DNA panels including chromosomal microarray and NGS-based genetic panels for comprehensive genomic insights. Book your DNA panel now.",
    keywords: "DNA panel test India, chromosomal microarray test, NGS panel test",
  },
  "/services/modern-dna-panels/microarray": {
    title: "Chromosomal Microarray (CMA) Testing | MDRC India",
    description:
      "High-resolution chromosomal microarray analysis to detect genetic abnormalities missed by karyotyping. Accurate, NABL accredited. Book your microarray test today.",
    keywords: "chromosomal microarray test, CMA test India, microarray analysis cost",
  },
  "/services/modern-dna-panels/ngs-panels": {
    title: "NGS Gene Panel Testing | Next-Generation Sequencing | MDRC India",
    description:
      "Targeted next-generation sequencing gene panels for precise, rapid detection of genetic variants across multiple conditions. Book your NGS panel test today.",
    keywords: "NGS gene panel test, next generation sequencing panel India",
  },
  "/services/metabolomics": {
    title: "Metabolomics Testing Services | Metabolic Health Panels | MDRC India",
    description:
      "Advanced metabolomic panels — vitamin status, therapeutic drug monitoring, newborn screening and more — using high-precision LC-MS/MS. Book your metabolomics test.",
    keywords: "metabolomics test India, metabolic panel testing, therapeutic drug monitoring, vitamin D test",
  },
  "/services/metabolomics/longevity-panel": {
    title: "Aging Speed Panel for Longevity | Metabolomics | MDRC India",
    description:
      "Measure your biological aging speed through key metabolic ratios and take control of your health trajectory. Includes methylation & omega ratio testing. Book now.",
    keywords: "aging speed test, longevity panel India, methylation status test, biological age test",
  },
  "/services/infertility-genetics": {
    title: "Infertility Genetic Testing | Fertility Genetics | MDRC India",
    description:
      "Genetic testing to identify inherited causes of infertility in men and women, supporting personalized fertility treatment plans. Book your fertility genetic test.",
    keywords: "infertility genetic testing, fertility genetics test India, male female infertility test",
  },
  "/services/carrier-screening": {
    title: "Carrier Screening Test for Genetic Disorders | MDRC India",
    description:
      "Genetic carrier screening to assess your risk of passing inherited disorders to your child — essential for couples planning pregnancy. Book carrier screening today.",
    keywords: "carrier screening test, genetic carrier test India, preconception genetic screening, family planning genetic test",
  },

  // Reproductive health detail
  "/reproductive-health-pregnancy/services/nipt": {
    title: "NIPT Test Cost in India | EVAA\u2122 Prenatal Screening | MDRC India",
    description:
      "EVAA\u2122 Non-Invasive Prenatal Screening (NIPT) for a healthier pregnancy — safe, accurate screening for chromosomal conditions from 10 weeks. Book your NIPT test today.",
    keywords: "NIPT test cost India, non invasive prenatal testing, prenatal screening test, Down syndrome screening, EVAA NIPT",
  },
  "/reproductive-health-pregnancy/services/microarray": {
    title: "Prenatal Microarray Testing | Pregnancy Genetic Test | MDRC India",
    description:
      "Chromosomal microarray testing during pregnancy for high-resolution detection of genetic abnormalities in the fetus. Book your prenatal microarray test today.",
    keywords: "prenatal microarray test, pregnancy genetic testing India, fetal chromosome test",
  },
  "/reproductive-health-pregnancy/newbornscreening": {
    title: "Newborn Screening Test for Genetic Disorders | MDRC India",
    description:
      "Early newborn screening to detect metabolic and genetic disorders in babies, enabling timely treatment and better outcomes. Book your newborn screening test now.",
    keywords: "newborn screening test India, baby genetic test, metabolic disorder screening newborn",
  },

  // Infectious disease detail
  "/service/gastro": {
    title: "Spectrum of Infectious Diseases Panel Test | MDRC India",
    description:
      "Comprehensive PCR-based panel to detect a wide spectrum of infectious pathogens causing systemic and gastrointestinal illness. Book your infection panel test today.",
    keywords: "infectious disease panel test, spectrum of infectious diseases, PCR pathogen panel",
  },
  "/service/immunosuppression": {
    title: "Immunosuppression Infection Panel Test | MDRC India",
    description:
      "Specialized molecular testing to detect opportunistic infections in immunocompromised patients, guiding timely clinical management. Book this panel test today.",
    keywords: "immunosuppression infection test, opportunistic infection panel, immunocompromised patient testing",
  },
  "/service/respiratorypanel": {
    title: "Respiratory Panel Test (BioFire) | MDRC India",
    description:
      "Rapid multiplex PCR respiratory panel testing to detect viral and bacterial pathogens causing respiratory infections. Book your BioFire respiratory panel today.",
    keywords: "respiratory panel test, BioFire respiratory test, multiplex PCR respiratory infection",
  },
  "/service/gastrointestinapanel": {
    title: "Gastrointestinal Panel Test (BioFire) | MDRC India",
    description:
      "Fast, multiplex PCR gastrointestinal panel to identify bacterial, viral and parasitic pathogens causing GI infections. Book your BioFire GI panel test today.",
    keywords: "gastrointestinal panel test, BioFire GI test, stool PCR panel test",
  },
  "/service/influenzapanel": {
    title: "Influenza Panel Test (PCR) | MDRC India",
    description:
      "Accurate PCR-based influenza panel testing for rapid detection of Influenza A & B to guide timely treatment. Book your influenza test with MDRC India today.",
    keywords: "influenza test India, flu PCR test, influenza A B panel",
  },
  "/service/tropicalfeverpanel": {
    title: "Tropical Fever Panel Test | Dengue, Malaria & More | MDRC India",
    description:
      "Comprehensive tropical fever panel testing for dengue, malaria, typhoid and other common tropical infections. NABL accredited. Book your fever panel test now.",
    keywords: "tropical fever panel test, dengue malaria typhoid test, fever panel India",
  },
  "/service/torchpcrfeverpanel": {
    title: "TORCH PCR Panel Test for Pregnancy Infections | MDRC India",
    description:
      "TORCH PCR panel to detect Toxoplasma, Rubella, CMV, Herpes and other infections that can affect pregnancy outcomes. Book your TORCH panel test today.",
    keywords: "TORCH panel test, TORCH PCR pregnancy test, congenital infection screening",
  },
  "/service/stdurethritispanelfeverpanel": {
    title: "STD & Urethritis Panel Test (PCR) | MDRC India",
    description:
      "Confidential, accurate PCR panel testing for sexually transmitted infections and urethritis-causing pathogens. Book your STD panel test with MDRC India today.",
    keywords: "STD panel test, urethritis PCR test, sexually transmitted infection test India",
  },
  "/service/swineflufever": {
    title: "Swine Flu (H1N1) Test | MDRC India",
    description:
      "Rapid RT-PCR testing for Swine Flu (H1N1) to enable early diagnosis and treatment. NABL accredited lab. Book your H1N1 test with MDRC India today.",
    keywords: "swine flu test, H1N1 test India, H1N1 RT-PCR test",
  },
  "/service/meningitispanel": {
    title: "Meningitis Panel Test (PCR) | MDRC India",
    description:
      "Rapid multiplex PCR meningitis/encephalitis panel to identify bacterial, viral and fungal causes of CNS infection. Book your meningitis panel test today.",
    keywords: "meningitis panel test, meningitis PCR test India, encephalitis test",
  },

  // Cytogenetics detail
  "/service/amniocentesis": {
    title: "Amniocentesis Test | Prenatal Cytogenetic Evaluation | MDRC India",
    description:
      "Amniocentesis-based prenatal cytogenetic and molecular evaluation to diagnose chromosomal and genetic conditions during pregnancy. Book your amniocentesis test today.",
    keywords: "amniocentesis test India, amniotic fluid test, prenatal diagnosis test",
  },
  "/service/chorionicvillussamplingfeverpanel": {
    title: "Chorionic Villus Sampling (CVS) Test | MDRC India",
    description:
      "Early prenatal genetic diagnosis through Chorionic Villus Sampling (CVS), detecting chromosomal abnormalities from the first trimester. Book your CVS test today.",
    keywords: "CVS test India, chorionic villus sampling cost, first trimester genetic test",
  },
  "/service/fetalconception": {
    title: "Fetal & Products of Conception Genetic Testing | MDRC India",
    description:
      "Genetic analysis of fetal tissue and products of conception to determine the cause of pregnancy loss and guide future planning. Book this test with MDRC India.",
    keywords: "products of conception testing, fetal genetic test, miscarriage genetic testing India",
  },
  "/service/bloodculturekaryotyping": {
    title: "Karyotyping Test (Blood Culture) | Chromosome Analysis | MDRC India",
    description:
      "Blood culture karyotyping to detect chromosomal abnormalities linked to genetic disorders and infertility. NABL accredited. Book your karyotype test today.",
    keywords: "karyotype test cost, karyotyping test India, chromosome analysis blood test",
  },
  "/service/highresolutionbanding": {
    title: "High Resolution Chromosome Banding Test | MDRC India",
    description:
      "High-resolution chromosome banding for detailed detection of subtle structural chromosomal abnormalities. Book your high resolution banding test today.",
    keywords: "high resolution banding test, chromosome banding analysis India",
  },
  "/service/fragilexanddnastudies": {
    title: "Fragile X Syndrome & DNA Studies Test | MDRC India",
    description:
      "Genetic testing for Fragile X syndrome and related DNA studies to guide diagnosis and reproductive planning. Book your Fragile X test with MDRC India today.",
    keywords: "Fragile X test India, Fragile X syndrome genetic test, DNA studies test",
  },

  // Rare NGS panels
  "/service/neurologicaldisorders": {
    title: "Neurological Genetic Disorders NGS Panel | MDRC India",
    description:
      "Targeted NGS panel to diagnose inherited neurological disorders and guide prognostic assessment. NABL accredited genomics lab. Book your neuro genetic panel today.",
    keywords: "neurological genetic disorder test, neuro NGS panel India, inherited neurological disease testing",
  },
  "/service/pediatricgeneticgisorders": {
    title: "Pediatric Genetic Disorders NGS Panel | MDRC India",
    description:
      "Comprehensive NGS panel to diagnose inherited pediatric genetic disorders, supporting timely clinical management. Book your pediatric genetic panel test today.",
    keywords: "pediatric genetic disorder test, child genetic testing India, pediatric NGS panel",
  },
  "/service/metabolicdisorders": {
    title: "Metabolic Disorders Genetic Panel (NGS) | MDRC India",
    description:
      "NGS-based genetic panel to diagnose inherited metabolic disorders and support family risk assessment. Book your metabolic disorders genetic panel test today.",
    keywords: "metabolic disorder genetic test, inborn error of metabolism test, metabolic NGS panel India",
  },
  "/service/cardiogeneticdisorders": {
    title: "Cardiogenetic Disorders NGS Panel | Heart Genetic Test | MDRC India",
    description:
      "Genetic panel testing for inherited cardiac conditions to guide diagnosis and family screening for at-risk relatives. Book your cardiogenetic panel test today.",
    keywords: "cardiogenetic disorder test, heart genetic testing India, inherited cardiac disease panel",
  },
  "/service/skeletaldisorders": {
    title: "Skeletal Disorders Genetic Panel (NGS) | MDRC India",
    description:
      "NGS panel testing to diagnose inherited skeletal dysplasias and bone disorders, supporting accurate clinical management. Book your skeletal disorders panel today.",
    keywords: "skeletal disorder genetic test, skeletal dysplasia test India, bone disorder NGS panel",
  },
  "/service/ophthalmicgeneticdisorders": {
    title: "Ophthalmic Genetic Disorders NGS Panel | Eye Genetics | MDRC India",
    description:
      "Genetic panel testing for inherited eye disorders, supporting prognostic assessment and family risk evaluation. Book your ophthalmic genetic panel test today.",
    keywords: "ophthalmic genetic disorder test, eye genetic testing India, inherited eye disease panel",
  },
  "/service/renalgeneticdisorders": {
    title: "Renal Genetic Disorders NGS Panel | Kidney Genetic Test | MDRC India",
    description:
      "Comprehensive NGS panel to diagnose inherited kidney disorders and assess genetic risk for family members. Book your renal genetic disorders panel test today.",
    keywords: "renal genetic disorder test, kidney genetic testing India, inherited kidney disease panel",
  },
  "/service/hematologicalgeneticdisorders": {
    title: "Hematological Genetic Disorders Panel (NGS) | MDRC India",
    description:
      "NGS-based genetic panel to diagnose inherited blood disorders and support risk assessment for affected families. Book your hematological genetic panel test today.",
    keywords: "hematological genetic disorder test, blood disorder genetic testing India, hematology NGS panel",
  },
  "/service/immunologicaldisorders": {
    title: "Immunological Genetic Disorders Panel (NGS) | MDRC India",
    description:
      "Genetic panel testing to diagnose inherited immune system disorders and guide family risk evaluation. Book your immunological genetic disorders panel test today.",
    keywords: "immunological genetic disorder test, primary immunodeficiency test India, immune disorder NGS panel",
  },
  "/service/oncogeneticsdisorders": {
    title: "Oncogenetics Panel | Hereditary Cancer Risk Test | MDRC India",
    description:
      "NGS-based oncogenetics panel to assess hereditary cancer risk for at-risk individuals and families. NABL accredited. Book your oncogenetics panel test today.",
    keywords: "oncogenetics test India, hereditary cancer risk panel, cancer predisposition genetic test",
  },

  // Whole exome/genome
  "/service/genomesequencing": {
    title: "Whole Genome Sequencing (WGS) Test | MDRC India",
    description:
      "Comprehensive whole genome sequencing to diagnose rare genetic conditions and inform family planning decisions. Book your whole genome sequencing test today.",
    keywords: "whole genome sequencing test India, WGS cost, genome sequencing lab",
  },
  "/service/exomesequencing": {
    title: "Whole Exome Sequencing (WES) Test | MDRC India",
    description:
      "Whole exome sequencing to identify disease-causing genetic variants and support informed family planning. Book your whole exome sequencing test today.",
    keywords: "whole exome sequencing test India, WES cost, exome sequencing lab",
  },

  // Pharmacogenomics detail
  "/service/warfarinpharmacogenomics": {
    title: "Warfarin Pharmacogenomics Test | Dosing Guidance | MDRC India",
    description:
      "Genetic testing to guide personalized Warfarin dosing and reduce the risk of bleeding or clotting complications. Book your Warfarin pharmacogenomics test today.",
    keywords: "warfarin pharmacogenomics test, warfarin dosing genetic test India",
  },
  "/service/statinpharmacogenomics": {
    title: "Statin Pharmacogenomics Test | MDRC India",
    description:
      "Genetic testing to assess statin-related muscle toxicity risk and guide safer, personalized cholesterol treatment. Book your statin pharmacogenomics test today.",
    keywords: "statin pharmacogenomics test, statin genetic test India, SLCO1B1 test",
  },
  "/service/thiopurine/methotrexate/pharmacogenomics": {
    title: "Thiopurine & Methotrexate Pharmacogenomics Test | MDRC India",
    description:
      "Genetic testing to guide safe, personalized dosing of thiopurine and methotrexate therapies and reduce toxicity risk. Book your pharmacogenomics test today.",
    keywords: "thiopurine pharmacogenomics test, methotrexate genetic test India, TPMT test",
  },
  "/service/clopidogrel/pharmacogenomics": {
    title: "Clopidogrel Pharmacogenomics Test (CYP2C19) | MDRC India",
    description:
      "CYP2C19 genetic testing to guide personalized Clopidogrel therapy and reduce cardiovascular treatment failure risk. Book your clopidogrel pharmacogenomics test.",
    keywords: "clopidogrel pharmacogenomics test, CYP2C19 test India, clopidogrel genetic test",
  },

  // Advanced sequencing
  "/servicewholegenomesequencing": {
    title: "Whole Genome Sequencing (WGS) Services | MDRC India",
    description:
      "End-to-end whole genome sequencing services for research and clinical applications with comprehensive, actionable reporting. Book your WGS test today.",
    keywords: "whole genome sequencing services India, WGS lab, clinical genome sequencing",
  },
  "/service/wholeexomesequencing": {
    title: "Whole Exome Sequencing (WES) Services | MDRC India",
    description:
      "High-depth whole exome sequencing services to detect disease-causing variants across the protein-coding genome. Book your WES test with MDRC India today.",
    keywords: "whole exome sequencing services India, WES lab, clinical exome sequencing",
  },
  "/service/targetedpanelsequencing": {
    title: "Targeted Gene Panel Sequencing | MDRC India",
    description:
      "Focused, high-depth targeted gene panel sequencing for rapid, cost-effective diagnosis of specific genetic conditions. Book your targeted panel sequencing today.",
    keywords: "targeted gene panel sequencing India, gene panel test, NGS targeted panel",
  },
  "/service/rnasequencing": {
    title: "RNA Sequencing (RNA-Seq) Services | MDRC India",
    description:
      "Comprehensive RNA sequencing services to analyze gene expression and detect transcriptomic changes in disease. Book your RNA sequencing test with MDRC India.",
    keywords: "RNA sequencing India, RNA-seq test, transcriptome sequencing",
  },
  "/service/longreadsequencing": {
    title: "Long-Read Sequencing Services | MDRC India",
    description:
      "Advanced long-read sequencing technology for resolving complex genomic regions and structural variants. Book your long-read sequencing test with MDRC India.",
    keywords: "long read sequencing India, structural variant sequencing, long read NGS",
  },
  "/service/metagenomicgenerationsequencing": {
    title: "Metagenomic Next-Generation Sequencing (mNGS) | MDRC India",
    description:
      "Unbiased metagenomic NGS testing to detect and identify infectious pathogens directly from clinical samples. Book your mNGS test with MDRC India today.",
    keywords: "metagenomic sequencing India, mNGS test, pathogen detection sequencing",
  },

  // Oncology
  "/service/comprehensivegenomicprofiling": {
    title: "Comprehensive Genomic Profiling (CGP) for Cancer | MDRC India",
    description:
      "Comprehensive genomic profiling to identify actionable mutations and guide targeted cancer therapy decisions. Book your CGP test with MDRC India today.",
    keywords: "comprehensive genomic profiling India, CGP cancer test, tumor genomic profiling",
  },
  "/service/targetedsolidtumorpanels": {
    title: "Targeted Solid Tumor Gene Panel Test | MDRC India",
    description:
      "Targeted solid tumor gene panels to detect key cancer mutations and inform precision oncology treatment. Book your solid tumor gene panel test today.",
    keywords: "solid tumor gene panel test, targeted tumor sequencing India, cancer gene panel",
  },
  "/service/hematologicalmalignancygenomics": {
    title: "Hematological Malignancy Genomics Test | MDRC India",
    description:
      "Genomic testing for blood cancers to guide diagnosis, prognosis and targeted treatment of hematological malignancies. Book your test with MDRC India today.",
    keywords: "hematological malignancy genomics test, blood cancer genetic test India",
  },
  "/service/liquidbiopsy": {
    title: "Liquid Biopsy (ctDNA) Test for Cancer | MDRC India",
    description:
      "Non-invasive liquid biopsy testing to detect circulating tumor DNA (ctDNA) for cancer diagnosis, monitoring and therapy selection. Book your liquid biopsy today.",
    keywords: "liquid biopsy test India, ctDNA test cost, circulating tumor DNA test",
  },
  "/service/hereditarycancergenomics": {
    title: "Hereditary Cancer Genomics (Germline) Test | MDRC India",
    description:
      "Germline genetic testing to assess hereditary cancer risk and guide family screening for at-risk relatives. Book your hereditary cancer genomics test today.",
    keywords: "hereditary cancer genetic test India, germline cancer testing, BRCA test India",
  },
  "/service/rnasequencingforfusion": {
    title: "RNA Sequencing for Gene Fusion Detection | MDRC India",
    description:
      "RNA sequencing to detect clinically significant gene fusions that drive cancer, guiding targeted therapy selection. Book your fusion detection test today.",
    keywords: "gene fusion detection test, RNA sequencing cancer India, fusion transcript testing",
  },

  // Metabolomics / TDM panels
  "/service/gut-microbiome-health-assessment-panel": {
    title: "Gut Microbiome Health Assessment Panel | MDRC India",
    description:
      "Precision metabolomic panel measuring gut-derived organic acids that drive systemic inflammation and biological aging. Book your gut microbiome panel test today.",
    keywords: "gut microbiome test India, microbiome health assessment, gut health panel test",
  },
  "/service/neurotransmitter-and-catecholamine-assessment": {
    title: "Neurotransmitter & Catecholamine Assessment Panel | MDRC India",
    description:
      "Non-invasive urinary panel measuring your complete catecholamine, neurotransmitter and kynurenine pathway balance. Book this metabolomics panel test today.",
    keywords: "neurotransmitter test India, catecholamine panel test, mood metabolomics panel",
  },
  "/service/neuro-metabolic-and-inflammatory": {
    title: "Neuro-Metabolic & Inflammatory Panel | MDRC India",
    description:
      "Precision metabolomic panel measuring the neurotransmitters and pathway markers that drive neuroinflammation and cognitive vitality. Book your panel test today.",
    keywords: "neuro metabolic panel test, inflammatory marker test India, neurological metabolomics test",
  },
  "/service/autism-assessment-panel": {
    title: "Autism Assessment Metabolomics Panel | MDRC India",
    description:
      "Comprehensive neuro-metabolic, methylation & gut-brain axis panel mapping 35 biomarkers for autism-related biochemical insight. Book your autism panel test today.",
    keywords: "autism assessment test India, autism metabolomics panel, ASD biomarker test",
  },
  "/service/depression-assessment-panel": {
    title: "Depression Assessment Metabolomics Panel | MDRC India",
    description:
      "Advanced neuro-metabolic, methylation & brain-axis panel mapping 35 biomarkers linked to mood, energy and emotional resilience. Book your depression panel today.",
    keywords: "depression test India, depression assessment panel, mood disorder biomarker test",
  },
  "/service/methylation-status-analysis": {
    title: "Methylation Status Analysis | Longevity Panel | MDRC India",
    description:
      "Advanced methylation & cellular regulation panel mapping eleven markers that dictate DNA repair, detoxification and epigenetic health. Book this test today.",
    keywords: "methylation status test India, DNA methylation panel, biological aging test",
  },
  "/service/omega-3-omega-6-fatty-acid-ratio": {
    title: "Omega-3 : Omega-6 Fatty Acid Ratio Test | MDRC India",
    description:
      "Essential fatty acid & cellular friction panel measuring eight markers that reveal your systemic inflammatory potential. Book your fatty acid ratio test today.",
    keywords: "omega 3 omega 6 ratio test, fatty acid test India, inflammation marker test",
  },
  "/service/complete-fat-and-water-soluble-vitamin-panel": {
    title: "Water & Fat-Soluble Comprehensive Vitamin Panel | MDRC India",
    description:
      "Advanced blood panel measuring active fat- and water-soluble vitamins that fuel metabolism, immunity and daily vitality. Book your complete vitamin panel today.",
    keywords: "vitamin panel test India, fat soluble vitamin test, water soluble vitamin test",
  },
  "/service/high-precision-assessment-of-vitamin-d-status": {
    title: "High-Precision Vitamin D Status Test (LC-MS/MS) | MDRC India",
    description:
      "Gold-standard LC-MS/MS Vitamin D testing that isolates exact molecular forms and eliminates immunoassay guesswork. Book your Vitamin D status test today.",
    keywords: "vitamin D test India, vitamin D deficiency test, LC-MS/MS vitamin D",
  },
  "/service/new-born-screening-for-errors-of-metabolism": {
    title: "Newborn Screening for Inborn Errors of Metabolism | MDRC India",
    description:
      "Dried blood spot MS/MS panel screening amino acids and acylcarnitines to detect inborn errors of metabolism before symptoms appear. Book your test today.",
    keywords: "newborn metabolic screening India, inborn errors of metabolism test, baby metabolic test",
  },
  "/service/tdm-first-line-anti-tuberculosis-drugs": {
    title: "TDM for First-Line Anti-Tuberculosis Drugs | MDRC India",
    description:
      "LC-MS/MS therapeutic drug monitoring of all four first-line anti-TB drugs via dried blood spot for safer, personalized dosing. Book your test with MDRC India today.",
    keywords: "anti tuberculosis TDM test, TB drug monitoring India, therapeutic drug monitoring TB",
  },
  "/service/tdm-neuropsychiatric-drugs": {
    title: "TDM for Neuropsychiatric Drugs (Neuroleptics) | MDRC India",
    description:
      "LC-MS/MS therapeutic drug monitoring for antipsychotics and anticonvulsants to personalize dosing and protect organ safety. Book your drug monitoring test today.",
    keywords: "neuropsychiatric drug monitoring test, TDM psychiatric drugs India",
  },
  "/service/tdm-methotrexate": {
    title: "Methotrexate Therapeutic Drug Monitoring (TDM) | MDRC India",
    description:
      "LC-MS/MS therapeutic drug monitoring that maps your Methotrexate clearance curve for safer oncology and autoimmune protocols. Book your TDM test today.",
    keywords: "methotrexate TDM test, methotrexate level monitoring India",
  },
};

function getBlogSeo(pathname) {
  const match = pathname.match(/^\/blogs?\/([^/]+)\/?$/);
  if (!match) return null;
  const slug = match[1];
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) {
    return {
      title: "Blog Not Found | MDRC India",
      description: DEFAULT_DESCRIPTION,
      noindex: true,
    };
  }
  const title = `${blog.fullTitle || blog.title} | MDRC India Blog`;
  return {
    title: title.length > 65 ? `${blog.title} | MDRC India Blog` : title,
    description: blog.excerpt || DEFAULT_DESCRIPTION,
    keywords: `${blog.category}, ${blog.title}, genetic testing blog, MDRC India`,
    image: blog.image,
  };
}

/**
 * Resolve SEO metadata for a given pathname, falling back to sensible
 * defaults so every route always renders a title + description.
 */
export function getSeoForPath(pathname) {
  const clean = pathname.replace(/\/+$/, "") || "/";
  if (seoMap[clean]) return seoMap[clean];

  const blogSeo = getBlogSeo(clean);
  if (blogSeo) return blogSeo;

  return {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  };
}

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Applies title + meta description + canonical + OG/Twitter tags to the
 * document head for the given pathname. Safe to call on every route change;
 * it only mutates existing tags, it never removes the static defaults set
 * in index.html (favicon, JSON-LD, org-level OG image, etc.).
 */
export function applySeoForPath(pathname) {
  const seo = getSeoForPath(pathname);
  const canonicalHref = pathname === "/" ? `${SITE_URL}/` : `${SITE_URL}${pathname}`;

  if (seo.title) document.title = seo.title;
  upsertMeta("name", "description", seo.description);
  if (seo.keywords) upsertMeta("name", "keywords", seo.keywords);
  upsertMeta(
    "name",
    "robots",
    seo.noindex
      ? "noindex, follow"
      : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
  );
  upsertLink("canonical", canonicalHref);

  upsertMeta("property", "og:title", seo.title);
  upsertMeta("property", "og:description", seo.description);
  upsertMeta("property", "og:url", canonicalHref);
  if (seo.image) {
    const absoluteImage = seo.image.startsWith("http") ? seo.image : `${SITE_URL}${seo.image}`;
    upsertMeta("property", "og:image", absoluteImage);
  }

  upsertMeta("name", "twitter:title", seo.title);
  upsertMeta("name", "twitter:description", seo.description);
}
