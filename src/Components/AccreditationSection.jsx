import React from "react";

const AccreditationSection = () => {
  return (
    <>
      {/* ✅ Roboto Font Import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />

      <section
        className="py-12 px-4 "
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        <div className="max-w-5xl mx-auto">
          
          {/* Heading */}
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Our Accreditations
          </h2>

          {/* CARD 1 */}
          <div className="pb-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              
              <div className="flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827776/vite-project/q4pd8znepjv2gvae6fxv.png"
                  alt="NABL Logo"
                  className="w-28 h-28 object-contain mx-auto"
                />
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-[#005C96] font-semibold text-2xl">
                  NABL Accredited Lab
                </h3>

                <p className="text-gray-700 text-base mt-4 leading-relaxed">
                  MDRC has earned highest emphasis on its Quality Control in all
                  the labs across India. To reflect our commitment towards accurate
<<<<<<< HEAD
                  reports, we have 7 NABL accredited Labs across India following high standards
                  of quality control to get accurate and consistent results.
                </p>
=======
                  reports, we have 6 NABL Labs across India following high standards
                  of quality control to get accurate and consistent results.
                </p>

                

                <p className="text-gray-700 text-base mt-3 leading-relaxed">
                  Our labs have latest fully automatic equipments which gives
                  consistent and correct results in all fields such as Haematology,
                  Serology, Immunology, Electrophoresis, Clinical Pathology,
                  Microbiology, Molecular and Cytogenetics, Real time PCR etc.
                </p>
>>>>>>> dfcb555ac04c72e4bac571defe511b797624b2e1
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              
              <div className="flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827777/vite-project/guwq9zgijuv8au9rju4u.png"
                  alt="NABH Logo"
                  className="w-28 h-28 object-contain mx-auto"
                />
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-[#005C96] font-semibold text-2xl">
                  NABH Accredited Imaging Centre
                </h3>

                <p className="text-gray-700 text-base mt-4 leading-relaxed">
<<<<<<< HEAD
                  MDRC Diagnostic centre at Sector 40, Gurugram and our Imaging centre at Reference
=======
                  MDRC Diagnostic centre at Sector 40, Gurugram and our Imaging at Reference
>>>>>>> dfcb555ac04c72e4bac571defe511b797624b2e1
                  Lab at New Railway Road, Gurugram are NABH accredited.
                </p>

                <p className="text-gray-700 text-base mt-3 leading-relaxed">
                  Medical Imaging Services cover all investigations of patients
                  which are helpful in diagnosis, prevention and treatment of
                  diseases or ascertaining the health of patients. It includes wide
<<<<<<< HEAD
                  variety of imaging techniques using latest technologies such as
                  PET CT, SPECT CT, CBCT, Ultrasound, MRI scan etc.
=======
                  variety of imaging techniques using latest technologies such as 
                  as PET CT, SPECT CT, CBCT, Ultrasound, MRI scan etc
>>>>>>> dfcb555ac04c72e4bac571defe511b797624b2e1
                </p>

                <p className="text-gray-700 text-base mt-3 leading-relaxed">
                  MDRC follows strict internal and external quality control
                  programs. We run daily controls and regular calibrations and
<<<<<<< HEAD
                  routine External Quality Assurance Programs with Biorad
                  Laboratories, AIIMS, RML, IAMM, CDC and CMC Vellore.
=======
                  routine External Quality Assurance Programs with Randox
                  Laboratories UK, Aiims and CMC, Vellore.
>>>>>>> dfcb555ac04c72e4bac571defe511b797624b2e1
                </p>

                <p className="text-gray-900 text-base mt-5 font-semibold">
                  Patient Safety:
                </p>

                <ul className="mt-3 space-y-2 text-base text-gray-700 text-left">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">●</span>
<<<<<<< HEAD
                    Maintain accuracy of test results and ensure accurate patient diagnosis
=======
                    Maintain accuracy of test results and ensure accurate patient diagnosis.
>>>>>>> dfcb555ac04c72e4bac571defe511b797624b2e1
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-green-500">●</span>
<<<<<<< HEAD
                    Manage rapidly evolving changes in laboratory medicine and technology
=======
                    Manage rapidly evolving changes in laboratory medicine and technology.
>>>>>>> dfcb555ac04c72e4bac571defe511b797624b2e1
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-green-500">●</span>
<<<<<<< HEAD
                    Exchange ideas and best practices among peers
=======
                    Exchange ideas and best practices among peers.
>>>>>>> dfcb555ac04c72e4bac571defe511b797624b2e1
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-green-500">●</span>
                    Offer professional development and learning opportunities for laboratory and technical staff.
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default AccreditationSection;