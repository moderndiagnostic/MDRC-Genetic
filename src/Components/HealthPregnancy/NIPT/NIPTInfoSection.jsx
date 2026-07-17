import React from "react";
import {
  Calendar,
  Scan,
  ClipboardCheck,
  History,
  User,
  Users,
  Heart,
} from "lucide-react";

const whoShould = [
  {
    icon: Calendar,
    title: "Women at 10 Weeks Gestation or Beyond",
    description:
      "Testing can be performed from the 10th week of pregnancy onwards.",
  },
  {
    icon: Scan,
    title: "Abnormal Ultrasound Findings",
    description:
      "When fetal abnormalities are detected during routine ultrasound examinations.",
  },
  {
    icon: ClipboardCheck,
    title: "Positive Maternal Screening Results",
    description:
      "For confirmation and further evaluation of abnormal first or second trimester screening results.",
  },
  {
    icon: History,
    title: "Previous Pregnancy with Chromosomal Abnormality",
    description:
      "Women with a history of genetic disorders or abnormal pregnancies.",
  },
  {
    icon: User,
    title: "Advanced Maternal Age",
    description: "Pregnant women aged 35 years or older.",
  },
  {
    icon: Users,
    title: "Family History of Genetic Disorders",
    description:
      "Families with known chromosomal or genetic conditions.",
  },
  {
    icon: Heart,
    title: "Assisted Reproductive Pregnancies",
    description:
      "Suitable for IVF pregnancies, egg donor pregnancies, surrogacy pregnancies, and twin pregnancies.",
  },
];

const limitations = [
  "Maternal cancer",
  "Previous stem cell therapy",
  "Organ transplantation recipients",
  "Triplet pregnancies",
  "Vanishing twin pregnancies",
  "Certain rare chromosomal conditions",
];

const NIPTInfoSection = () => {
  return (
    <div className="bg-gray-100 py-6 sm:py-8 px-4 lg:py-12 sm:px-6 md:px-10 font-roboto">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-[25px] font-semibold text-gray-800">
            Who Should Consider EVAA™ NIPS?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {whoShould.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-xl p-5 shadow-[0_0_8px_#d0d0d0] hover:shadow-md transition-all duration-300"
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-3"
                  style={{
                    background: "linear-gradient(to right, #15AEE5, #0C607F)",
                  }}
                >
                  <Icon className="text-white w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-[#005C96] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 text-center">
          Understanding Your Results
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-green-600 mb-2">
              Low-Risk Result
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              A low-risk result indicates that the pregnancy is unlikely to be
              affected by the screened chromosomal abnormalities.
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-[#005C96]">
            <h3 className="text-lg font-semibold text-[#005C96] mb-2">
              Aneuploidy Detected
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              If a chromosomal abnormality is detected, confirmatory diagnostic
              testing such as amniocentesis may be recommended by your
              healthcare provider.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-xl p-5 sm:p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#005C96] mb-3">
              Sample Requirement
            </h3>
            <ul className="space-y-2 text-sm sm:text-base text-gray-700">
              <li>
                <strong>Sample Type:</strong> Maternal Peripheral Blood
              </li>
              <li>
                <strong>Volume Required:</strong> 10 ml
              </li>
              <li>
                <strong>Minimum Gestational Age:</strong> 10 Weeks
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-[#005C96] to-[#15AEE5] text-white rounded-xl p-5 sm:p-6 shadow-lg flex flex-col justify-center">
            <h3 className="text-lg font-semibold mb-2">
              International Recommendation
            </h3>
            <p className="text-sm sm:text-base leading-relaxed opacity-95">
              The American College of Obstetricians and Gynecologists (ACOG)
              recommends Non-Invasive Prenatal Screening (NIPS) for all
              pregnancies regardless of maternal risk status.
            </p>
          </div>
        </div>

        <div>
          <div className="inline-block bg-gradient-to-b from-[#005C96] to-[#15AEE5] text-white px-5 sm:px-6 py-2 rounded-lg font-semibold shadow text-base sm:text-lg mb-4">
            Important Limitations
          </div>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            EVAA™ Prenatal Screening may not be suitable in certain situations
            including:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {limitations.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-white rounded-lg p-3 sm:p-4 shadow-sm text-sm sm:text-base text-gray-700"
              >
                <span className="text-red-400 shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-gray-600 mt-4 italic">
            Consult your healthcare provider to determine whether NIPS is
            appropriate for your pregnancy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NIPTInfoSection;
