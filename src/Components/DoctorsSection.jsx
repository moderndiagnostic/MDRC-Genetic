import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const doctors = [
  {
    name: "Dr. D.S Yadav",
    role: "CMD",
    image: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827831/vite-project/wo6pp7mys6x9fst8fl9w.webp",
    points: [
      "Radiology Imaging experience exceeding 41 years.",
      "Over the years, Dr. Yadav has earned multiple laurels for his expertise in Radio Diagnosis.",
    ],
  },
  {
    name: "Dr. Deepali Yadav",
    role: "Director, Radiology & Imaging, NRR",
    image: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827836/vite-project/js33xlvuie3vosat09dv.webp",
    points: [
      "More than a decade of experience with expertise in all kinds of Imaging studies such as MRI, CT, Ultrasound.",
      "Special interest in Cardiac CT studies.",
    ],
  },
  {
    name: "Dr. Nitin Kumar",
    role: "Director, Radiology & Imaging",
    image: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827830/vite-project/q6wa62adnuvljrg6uquy.webp",
    points: [
      "More than a decade of expertise in all kinds of Imaging studies such as MRI, CT, Ultrasound and heading Sector 40 Centre, Gurugram.",
      "Special interest in Cardiac MRI imaging.",
    ],
  },
  {
    name: "Dr. Rashmi Kumari",
    role: "Radiologist",
    image: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827828/vite-project/cvi4tcm62auw17ub12et.webp",
    points: [
      "Experience in all kinds of Imaging studies such as MRI, CT, Ultrasound.",
    ],
  },
  {
    name: "Dr. Sonal Jain",
    role: "Director Hematology",
    image: "",
    points: [
      "15+ yrs. of experience in Haematology.",
      "DM Hematopathology, AIIMS.",
      "Expert in Haematology, MRD and flow cytometry based assays.",
    ],
  },
  {
    name: "Dr. Satish Magu",
    role: "Lab Director",
    image: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827832/vite-project/llqbaa4lvcnk51n2n7ow.webp",
    points: [
      "Special interest in Onco-pathology.",
      "28+ years of experience.",
      "17+ years of teaching experience.",
      "Former Head of Pathology - Command Hospital.",
    ],
  },
  {
    name: "Dr. Kanika Yadav",
    role: (
      <>
        QM & Head- Genetics <br />
        and Molecular Department
      </>
    ),
    image: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827833/vite-project/rz9dpg91yv3vmsgugin3.webp",
    points: [
      "Special interest in Prenatal Diagnosis.",
      "Pursuing PhD in Genetics.",
    ],
  },
  {
    name: "Dr. Anjali Kwatra",
    role: "Pathologist",
    image: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827835/vite-project/ckt7np44nhancnnyjow9.webp",
    points: [],
  },
];

const getInitials = (name) =>
  name
    .replace(/^Dr\.\s*/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

function DoctorsSection() {
  const scrollRef = useRef(null);
  const indexRef = useRef(0);
  const [paused, setPaused] = useState(false);

  // Card width changes across breakpoints, so measure it instead of hardcoding.
  const getMetrics = () => {
    const container = scrollRef.current;
    const card = container?.firstElementChild;
    if (!card) return null;

    const gap = parseFloat(getComputedStyle(container).columnGap) || 0;
    const step = card.getBoundingClientRect().width + gap;
    const maxScroll = container.scrollWidth - container.clientWidth;
    return { container, step, maxScroll, lastIndex: Math.ceil(maxScroll / step) };
  };

  // Track the index rather than reading scrollLeft, so an in-flight smooth
  // scroll can never leave the carousel re-targeting its current position.
  const scrollByCard = (direction) => {
    const m = getMetrics();
    if (!m) return;

    const next = indexRef.current + direction;
    indexRef.current = next > m.lastIndex ? 0 : next < 0 ? m.lastIndex : next;

    m.container.scrollTo({
      left: Math.min(indexRef.current * m.step, m.maxScroll),
      behavior: "smooth",
    });
  };

  // Manual swiping desyncs the tracked index, so recover it from the position.
  const syncIndex = () => {
    const m = getMetrics();
    if (m) indexRef.current = Math.round(m.container.scrollLeft / m.step);
  };

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => scrollByCard(1), 2500);
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section className="bg-[#E6F8FF] py-8 px-4 lg:py-16 mt-5 relative ">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#005C96]">
          Our Doctors
        </h2>
      </div>

      {/* Carousel Wrapper */}
      <div
        className="relative max-w-6xl mx-auto"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => {
          syncIndex();
          setPaused(false);
        }}
        onTouchCancel={() => setPaused(false)}
      >
        {/* Left Arrow */}
        <button
          onClick={() => scrollByCard(-1)}
          aria-label="Previous doctors"
          className="hidden md:flex  absolute top-1/2 -left-6 transform -translate-y-1/2  bg-green-500 rounded-full p-2 shadow-lg z-10 text-white hover:bg-white hover:text-green-500 transition"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scrollByCard(1)}
          aria-label="Next doctors"
          className="hidden md:flex absolute top-1/2 -right-6 transform -translate-y-1/2 bg-green-500 rounded-full p-2 shadow-lg z-10 text-white hover:bg-white hover:text-green-500 transition"
        >
          <ArrowRight className="w-6 h-6" />
        </button>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar px-2 py-2 snap-x snap-proximity"
        >
          {doctors.map((doc, index) => (
            <div
              key={index}
              className="flex w-[250px] shrink-0 flex-col rounded-2xl border border-[#005C96]/15 bg-white p-5 text-center transition hover:border-[#0ECE91]/50 hover:shadow-md sm:w-[280px] sm:p-6 snap-start"
            >
              {/* Image */}
              <div className="flex justify-center mb-4">
                {doc.image ? (
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="h-32 w-32 rounded-full object-cover sm:h-40 sm:w-40"
                  />
                ) : (
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[#E6F8FF] text-3xl font-semibold text-[#1160A5] sm:h-40 sm:w-40">
                    {getInitials(doc.name)}
                  </div>
                )}
              </div>

              {/* Content */}
              <h3 className="text-[#1160A5] font-semibold text-lg">{doc.name}</h3>
              <p className="text-gray-500 text-sm mt-1 leading-snug">{doc.role}</p>

              {doc.points?.length > 0 && (
                <ul className="mt-3 space-y-1.5 text-left">
                  {doc.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-[13px] leading-relaxed text-gray-600"
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0ECE91]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DoctorsSection;