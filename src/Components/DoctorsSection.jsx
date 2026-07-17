import React, { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const doctors = [
  {
    name: "Dr. D.S Yadav",
    role: "CMD",
    image: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827831/vite-project/wo6pp7mys6x9fst8fl9w.webp",
  },
  {
    name: "Dr. Deepali Yadav",
    role: "Director, Radiology & Imaging, NRR",
    image: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827836/vite-project/js33xlvuie3vosat09dv.webp",
  },
  {
    name: "Dr. Nitin Kumar",
    role: "Director, Radiology & Imaging",
    image: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827830/vite-project/q6wa62adnuvljrg6uquy.webp",
  },
  {
    name: "Dr. Rashmi Kumari",
    role: "Radiologist",
    image: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827828/vite-project/cvi4tcm62auw17ub12et.webp",
  },
  {
    name: "Dr. Satish Magu",
    role: "Lab Director",
    image: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827832/vite-project/llqbaa4lvcnk51n2n7ow.webp",
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
  },
  {
    name: "Dr. Anjali Kwatra",
    role: "Pathologist",
    image: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827835/vite-project/ckt7np44nhancnnyjow9.webp",
  },
];

function DoctorsSection() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    const interval = setInterval(() => {
      if (container) {
        container.scrollLeft += 280; // scroll by one card
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          container.scrollLeft = 0;
        }
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 280;
  };

  const scrollRight = () => {
    scrollRef.current.scrollLeft += 280;
  };

  return (
    <section className="bg-[#E6F8FF] py-8 px-4 lg:py-16 mt-5 relative ">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#005C96]">
          Our Doctors
        </h2>
      </div>

      {/* Carousel Wrapper */}
      <div className="relative max-w-6xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex  absolute top-1/2 -left-6 transform -translate-y-1/2  bg-green-500 rounded-full p-2 shadow-lg z-10 text-white hover:bg-white hover:text-green-500 transition"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="hidden md:flex absolute top-1/2 -right-6 transform -translate-y-1/2 bg-green-500 rounded-full p-2 shadow-lg z-10 text-white hover:bg-white hover:text-green-500 transition"
        >
          <ArrowRight className="w-6 h-6" />
        </button>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-2 snap-x snap-mandatory"
        >
          {doctors.map((doc, index) => (
            <div
              key={index}
              className="min-w-[260px] bg-white rounded-2xl p-6 text-center flex-shrink-0 hover:shadow-md transition snap-start"
            >
              {/* Image */}
              <div className="flex justify-center mb-4">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-40 h-40 rounded-full object-cover"
                />
              </div>

              {/* Content */}
              <h3 className="text-[#1160A5] font-semibold text-lg">{doc.name}</h3>
              <p className="text-gray-500 text-sm mt-1 leading-snug">{doc.role}</p>

<button className="mt-4 px-4 py-1 bg-blue-500 text-white border border-blue-500 rounded-full text-sm hover:bg-white hover:text-blue-500 transition">
                Know More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DoctorsSection;