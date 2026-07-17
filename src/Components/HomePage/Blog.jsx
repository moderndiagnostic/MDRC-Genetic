import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const BlogSection = () => {
  // Blog data with slugs for routing
  const blogs = [
    { 
      image: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827990/vite-project/efz4bpbqd3ncja6w5vq7.svg", 
      text: "Identifies the right drug and dosage",
      slug: "/"
    },
    { 
      image: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827975/vite-project/mz256jtzvr4q6uvrfszf.svg", 
      text: "Uses Next-Generation Sequencing",
      slug: "/"
    },
    { 
      image: "/assets/bl2.svg", 
      text: "Offers clarity through non-invasive prenatal",
      slug: "/"
    },
    { 
      image: "/assets/bl2.svg", 
      text: "Is It in Your Genes?",
      slug: "/"
    },
  ];

  const [current, setCurrent] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Responsive slides per view
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth >= 1024) setSlidesPerView(3);
      else if (window.innerWidth >= 640) setSlidesPerView(2);
      else setSlidesPerView(1);
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // Swipe handling
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (touchStartX.current - touchEndX.current > 50) next();
    if (touchEndX.current - touchStartX.current > 50) prev();
  };

  const next = () => {
    if (current < blogs.length - slidesPerView) setCurrent(prev => prev + 1);
  };
  const prev = () => {
    if (current > 0) setCurrent(prev => prev - 1);
  };

  return (
    <section className="bg-white py-4 sm:py-5 md:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-xl sm:text-2xl md:text-[25px] text-black font-bold">Blog</h2>
        <p className="opacity-80 text-[#424040] text-sm sm:text-base md:text-lg mb-3 sm:mb-4 leading-relaxed">
          How Genomics Predicts Your Future Health
        </p>

        {/* Slider */}
        <div
          className="relative overflow-hidden pb-3 sm:pb-4"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * (100 / slidesPerView)}%)`,
            }}
          >
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-3 flex-shrink-0"
              >
                <Link to={`/blogs/${blog.slug}`}>
                  <div className="bg-white rounded-xl shadow-lg h-full flex flex-col hover:shadow-xl transition cursor-pointer">
                    <img
                      src={blog.image}
                      alt={blog.text}
                      className="w-full h-40 sm:h-48 md:h-52 object-cover p-2 rounded-xl"
                    />
                    <div className="p-3 sm:p-4 flex-1 flex items-center">
                      <p className="text-[#005C96] text-sm sm:text-base md:text-lg font-medium">
                        {blog.text}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {blogs.map((_, i) => {
            const isActive = i === current;
            return (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                className={`
                  cursor-pointer flex items-center justify-center
                  rounded-full transition-all duration-500 ease-in-out
                  ${isActive
                    ? "bg-gradient-to-r from-[#999999] to-[#C1C1C1] w-10 h-6 -mt-1"
                    : "bg-[#D9D9D9] w-3 h-3"
                  }
                `}
              >
                <span
                  className={`
                    text-white text-xs transition-all duration-300
                    ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"}
                  `}
                >
                  {i + 1}/{blogs.length}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
