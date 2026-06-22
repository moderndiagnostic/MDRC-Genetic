import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loader from "./Components/Loader";

import About from './Components/About'
import Home from './Components/HomePage/Home'
import Navbar from "./Components/HomePage/Navbar";
import TickerBar from "./Components/HomePage/TickerBar";
import Footer from "./Components/HomePage/Footer";
import HealthPregnancy from "./Components/HealthPregnancy/HealthPregnancyy";
import InfectiousDisease from "./Components/Infectious Disease/InfectiousDisease";
import CytogeneticandFISH from "./Components/Cytogenetic and FISH/CytogeneticandFISH";
import RarePanel from "./Components/Rare NGS Panel/RarePanel";
import ScrollToTop from "./ScrollToTop.jsx";
import PageLayout from "./Components/PageLayout";
import WholeExome from "./Components/Whole Exome and Genome Sequencing/WholeExome";
import Pharmacogenomics from "./Components/Pharmacogenomics/Pharmacogenomics";
import AdvancedSequencing from "./Components/AdvancedSequencing/AdvancedSequencing";
import InfetilityGenetics from "./Components/HealthPregnancy/InfertilityGenetics/InfertilityGenetics";
import CarrierScreening from "./Components/HealthPregnancy/CarrierScreening/CarrierScreening";
import NIPT from "./Components/HealthPregnancy/NIPT/NIPT";
import Microarray from "./Components/HealthPregnancy/Microarray/Microarray";
import NewbornScreening from "./Components/HealthPregnancy/NewbornScreening/NewbornScreening";
import Tms from "./Components/TMS/Tms";
import ModernDNAPanel from "./Components/ModernDNAPanel/ModernDNAPanel";
import MetabolomicsServices from "./Components/MetabolomicsServices/MetabolomicsServices";
import SpectrumofInfectiousDiseases from "./Components/Infectious Disease/SpectrumofInfectiousDiseases/SpectrumofInfectiousDiseases";
import PopupForm from "./Components/PopupForm";
import ImmunoSuppression from "./Components/Infectious Disease/ImmunoSuppression/ImmunoSuppression";
import RespiratoryPanel from "./Components/Infectious Disease/RespiratoryPanel(BioFire)/RespiratoryPanel";
import GastrointestinalPanel from "./Components/Infectious Disease/Gastrointestinal Panel (BioFire)/GastrointestinalPanel";
import InfluenzaPanel from "./Components/Infectious Disease/Influenza Panel/InfluenzaPanel";
import TropicalFeverPanel from "./Components/Infectious Disease/Tropical Fever Panel/TropicalFeverPanel";
import TORCHPCRFeverPanel from "./Components/Infectious Disease/TORCH PCR/TORCHPCRFeverPanel";
import STDUrethritisPanelFeverPanel from "./Components/Infectious Disease/STDUrethritis Panel/STDUrethritisPanelFeverPanel";
import SwineFluFever from "./Components/Infectious Disease/Swine Flu (H1N1)/SwineFluFever";
import MeningitisPanel from "./Components/Infectious Disease/Meningitis Panel/MeningitisPanel";
import ContactUs from "./Components/ContactUs/ContactUs";
import BlogSection from "./Components/BlogSection/BlogSection";
import BlogDetail from "./Components/BlogSection/BlogDetail";
import AmniocentesisFeverPanel from "./Components/Cytogenetic and FISH/Amniocentesis/AmniocentesisFeverPanel";
import ChorionicVillusSamplingFeverPanel from "./Components/Cytogenetic and FISH/Chorionic Villus Sampling (CVS)/ChorionicVillusSamplingFeverPanel";
import FetalConception from "./Components/Cytogenetic and FISH/Fetal Blood and Products of Conception/FetalConception";
import BloodCultureKaryotyping from "./Components/Cytogenetic and FISH/Blood Culture and Karyotyping/BloodCultureKaryotyping";
import HighResolutionBanding from "./Components/Cytogenetic and FISH/High Resolution Banding/HighResolutionBanding";
import FragileXandDNAStudies from "./Components/Cytogenetic and FISH/Fragile X and DNA Studies/FragileXandDNAStudies";
import NeurologicalDisorders from "./Components/Rare NGS Panel/Neurological Disorders/NeurologicalDisorders";
import PediatricGeneticDisorders from "./Components/Rare NGS Panel/Pediatric Genetic Disorders/PediatricGeneticDisorders";
import MetabolicDisorders from "./Components/Rare NGS Panel/Metabolic Disorders/MetabolicDisorders";
import CardiogeneticDisorders from "./Components/Rare NGS Panel/Cardiogenetic Disorders/CardiogeneticDisorders";
import SkeletalDisorders from "./Components/Rare NGS Panel/Skeletal Disorders/SkeletalDisorders";
import OphthalmicGeneticDisorders from "./Components/Rare NGS Panel/Ophthalmic Genetic Disorders/OphthalmicGeneticDisorders";
import RenalGeneticDisorders from "./Components/Rare NGS Panel/Renal Genetic Disorders/RenalGeneticDisorders";
import HematologicalGeneticDisorders from "./Components/Rare NGS Panel/Hematological Genetic Disorders/HematologicalGeneticDisorders";
import ImmunologicalDisorders from "./Components/Rare NGS Panel/Immunological Disorders/ImmunologicalDisorders";
import OncogeneticsDisorders from "./Components/Rare NGS Panel/Oncogenetics/OncogeneticsDisorders";
import GenomeSequencing from "./Components/Whole Exome and Genome Sequencing/Genome Sequencing/GenomeSequencing";
import ExomeSequencing from "./Components/Whole Exome and Genome Sequencing/Exome Sequencing/ExomeSequencing";
import WarfarinPharmacogenomics from "./Components/Pharmacogenomics/Warfarin Pharmacogenomics/WarfarinPharmacogenomics";
import StatinPharmacogenomics from "./Components/Pharmacogenomics/Statin Pharmacogenomics/StatinPharmacogenomics";
import ThiopurineMethotrexatePharmacogenomics from "./Components/Pharmacogenomics/Thiopurine and Methotrexate Pharmacogenomics/ThiopurineMethotrexatePharmacogenomics";
import ClopidogrelPharmacogenomics from "./Components/Pharmacogenomics/Clopidogrel Pharmacogenomics/ClopidogrelPharmacogenomics";
import WholeGenomeSequencing from "./Components/AdvancedSequencing/Whole Genome Sequencing (WGS)/WholeGenomeSequencing";
import WholeExomeSequencing from "./Components/AdvancedSequencing/Whole Exome Sequencing (WES)/WholeExomeSequencing";
import TargetedPanelSequencing from "./Components/AdvancedSequencing/Targeted Gene Panel Sequencing/TargetedPanelSequencing";
import RNASequencing from "./Components/AdvancedSequencing/RNA Sequencing/RNASequencing";
import LongReadSequencing from "./Components/AdvancedSequencing/Long-Read Sequencing/LongReadSequencing";
import MetagenomicGenerationSequencing from "./Components/AdvancedSequencing/Metagenomic Next-Generation Sequencing (mNGS)/MetagenomicGenerationSequencing";
import Oncology from "./Components/Oncology/Oncology";
import OncologyGenomics from "./Components/Oncology/OncologyGenomics";
import ComprehensiveGenomicProfiling from "./Components/Oncology/Comprehensive Genomic Profiling (CGP)/ComprehensiveGenomicProfiling";
import TargetedSolidTumorPanels from "./Components/Oncology/Targeted Solid Tumor Gene Panels/TargetedSolidTumorPanels";
import HematologicalMalignancyGenomics from "./Components/Oncology/Hematological Malignancy Genomics/HematologicalMalignancyGenomics";
import LiquidBiopsy from "./Components/Oncology/Liquid Biopsy (ctDNA Analysis)/LiquidBiopsy";
import HereditaryCancerGenomics from "./Components/Oncology/Hereditary Cancer Genomics (Germline Testing)/HereditaryCancerGenomics";
import RNASequencingforFusion from "./Components/Oncology/RNA Sequencing for Fusion Detection/RNASequencingforFusion";

function App() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    

    const popupTimer = setTimeout(() => {
      setOpen(true);
    }, 2000);

    return () => {
      clearTimeout(popupTimer);
    };
  }, []);

  return (
 <>
  {/* ✅ APP ALWAYS RENDER */}
  <BrowserRouter>

    <ScrollToTop />

    <Navbar />

    <div className="relative z-[9999]">
      <TickerBar />
    </div>
  <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PageLayout />}>
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<BlogSection />} />
           <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/services/reproductive-health-pregnancy" element={<HealthPregnancy />} />
          <Route path="/services/infectious-Disease" element={<InfectiousDisease />} />
          <Route path="/services/cyto-genetic-and-fish" element={<CytogeneticandFISH />} />
          <Route path="/services/rare-nGS-panel" element={<RarePanel />} />
          <Route path="/services/whole-exome-and-genome-Sequencing" element={<WholeExome />} />
          <Route path="/services/pharmacogenomics" element={<Pharmacogenomics />} />
          <Route path="/services/oncologygenomics" element={<OncologyGenomics />} />
          <Route path="/services/advanced-Sequencing" element={<AdvancedSequencing />} />
          <Route path="/services/tandem-mass-spectrometry-tms" element={<Tms />} />
          <Route path="/services/modern-dna-panels" element={<ModernDNAPanel />} />
          <Route path="/services/metabolomics-services" element={<MetabolomicsServices />} />
          <Route path="/contact" element={<ContactUs />} />

          <Route path="/services/infertility-genetics" element={<InfetilityGenetics />} />
          <Route path="/services/carrier-screening" element={<CarrierScreening />} />
          <Route path="/reproductive-health-pregnancy/services/nipt" element={<NIPT />} />
          <Route path="/reproductive-health-pregnancy/services/microarray" element={<Microarray />} />
          <Route path="/reproductive-health-pregnancy/newbornscreening" element={<NewbornScreening />} />

          <Route path="/service/gastro" element={<SpectrumofInfectiousDiseases />} />
          <Route path="/service/immunosuppression" element={<ImmunoSuppression />} />
          <Route path="/service/respiratorypanel" element={<RespiratoryPanel />} />
          <Route path="/service/gastrointestinapanel" element={<GastrointestinalPanel />} />
          <Route path="/service/influenzapanel" element={<InfluenzaPanel />} />
          <Route path="/service/tropicalfeverpanel" element={<TropicalFeverPanel />} />
          <Route path="/service/torchpcrfeverpanel" element={<TORCHPCRFeverPanel />} />
          <Route path="/service/stdurethritispanelfeverpanel" element={<STDUrethritisPanelFeverPanel />} />
          <Route path="/service/swineflufever" element={<SwineFluFever />} />
          <Route path="/service/meningitispanel" element={<MeningitisPanel />} />


          <Route path="/service/amniocentesis" element={<AmniocentesisFeverPanel/>} />
          <Route path="/service/chorionicvillussamplingfeverpanel" element={<ChorionicVillusSamplingFeverPanel/>} />
          <Route path="/service/fetalconception" element={<FetalConception/>} />
          <Route path="/service/bloodculturekaryotyping" element={<BloodCultureKaryotyping/>} />
          <Route path="/service/highresolutionbanding" element={<HighResolutionBanding/>} />
          <Route path="/service/fragilexanddnastudies" element={<FragileXandDNAStudies/>} />




          <Route path="/service/neurologicaldisorders" element={<NeurologicalDisorders/>} />
          <Route path="/service/pediatricgeneticgisorders" element={<PediatricGeneticDisorders/>} />
          <Route path="/service/metabolicdisorders" element={<MetabolicDisorders/>} />
          <Route path="/service/cardiogeneticdisorders" element={<CardiogeneticDisorders/>} />
          <Route path="/service/skeletaldisorders" element={<SkeletalDisorders/>} />
          <Route path="/service/ophthalmicgeneticdisorders" element={<OphthalmicGeneticDisorders/>} />
          <Route path="/service/renalgeneticdisorders" element={<RenalGeneticDisorders/>} />
          <Route path="/service/hematologicalgeneticdisorders" element={<HematologicalGeneticDisorders/>} />
          <Route path="/service/immunologicaldisorders" element={<ImmunologicalDisorders/>} />
          <Route path="/service/oncogeneticsdisorders" element={<OncogeneticsDisorders/>} />



          <Route path="/service/genomesequencing" element={<GenomeSequencing/>} />
          <Route path="/service/exomesequencing" element={<ExomeSequencing/>} />



          <Route path="/service/warfarinpharmacogenomics" element={<WarfarinPharmacogenomics/>} />
          <Route path="/service/statinpharmacogenomics" element={<StatinPharmacogenomics/>} />
          <Route path="/service/thiopurine/methotrexate/pharmacogenomics" element={<ThiopurineMethotrexatePharmacogenomics/>} />
          <Route path="/service/clopidogrel/pharmacogenomics" element={<ClopidogrelPharmacogenomics/>} />


          <Route path="/servicewholegenomesequencing" element={<WholeGenomeSequencing/>} />
          <Route path="/service/wholeexomesequencing" element={<WholeExomeSequencing/>} />
          <Route path="/service/targetedpanelsequencing" element={<TargetedPanelSequencing/>} />
          <Route path="/service/rnasequencing" element={<RNASequencing/>} />
          <Route path="/service/longreadsequencing" element={<LongReadSequencing/>} />
          <Route path="/service/metagenomicgenerationsequencing" element={<MetagenomicGenerationSequencing/>} />



          <Route path="/service/comprehensivegenomicprofiling" element={<ComprehensiveGenomicProfiling/>} />
          <Route path="/service/targetedsolidtumorpanels" element={<TargetedSolidTumorPanels/>} />
          <Route path="/service/hematologicalmalignancygenomics" element={<HematologicalMalignancyGenomics/>} />
          <Route path="/service/liquidbiopsy" element={<LiquidBiopsy/>} />
          <Route path="/service/hereditarycancergenomics" element={<HereditaryCancerGenomics/>} />
          <Route path="/service/rnasequencingforfusion" element={<RNASequencingforFusion/>} />
          </Route>
        </Routes>

        <Footer />
        <PopupForm isOpen={open} onClose={() => setOpen(false)} />
      </BrowserRouter>

      {/* ✅ Loader overlay */}
      {loading && <Loader />}
    </>
  );
}

export default App;