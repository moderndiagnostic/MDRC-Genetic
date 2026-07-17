import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays } from "lucide-react";
import { blogs, formatBlogDate } from "../../data/blogs";

const BlogSection = () => {
  const [current, setCurrent] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

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

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (touchStartX.current - touchEndX.current > 50) next();
    if (touchEndX.current - touchStartX.current > 50) prev();
  };

  const maxIndex = Math.max(blogs.length - slidesPerView, 0);
  const next = () => {
    if (current < maxIndex) setCurrent((prev) => prev + 1);
  };
  const prev = () => {
    if (current > 0) setCurrent((prev) => prev - 1);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F3FAFD] to-white py-8 sm:py-10 md:py-14">
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#15AEE5]/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-[#15AEE5] text-sm sm:text-base font-medium">Insights</p>
          <h2 className="text-xl sm:text-2xl md:text-[1.75rem] text-[#1f3a4d] font-bold mt-1">
            Blog
          </h2>
          <p className="opacity-80 text-[#424040] text-sm sm:text-base md:text-lg mt-1 leading-relaxed">
            How Genomics Predicts Your Future Health
          </p>
        </div>

        <div
          className="relative overflow-hidden pb-2"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * (100 / slidesPerView)}%)`,
            }}
          >
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-3 flex-shrink-0"
              >
                <Link to={`/blogs/${blog.slug}`} className="block h-full">
                  <div className="group bg-white rounded-2xl shadow-[0_12px_36px_rgba(0,94,145,0.1)] ring-1 ring-[#005E91]/8 h-full flex flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(0,94,145,0.16)]">
                    <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden bg-[#E8F6FB]">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#003A5C]/40 via-transparent to-transparent" />
                    </div>
                    <div className="p-4 sm:p-5 flex-1 flex flex-col gap-2 text-left">
                      <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500">
                        <CalendarDays className="h-3.5 w-3.5 text-[#15AEE5]" />
                        <time dateTime={blog.publishedAt}>
                          {formatBlogDate(blog.publishedAt)}
                        </time>
                      </div>
                      <p className="text-[#005C96] text-sm sm:text-base md:text-lg font-semibold leading-snug">
                        {blog.title}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[#005E91] group-hover:gap-2 transition-all">
                        Read more <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-5 gap-2">
          {blogs.map((_, i) => {
            const isActive = i === current;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(Math.min(i, maxIndex))}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-500 ${
                  isActive
                    ? "bg-gradient-to-r from-[#005E91] to-[#15AEE5] w-10 h-2.5"
                    : "bg-[#D9D9D9] w-2.5 h-2.5 hover:bg-[#15AEE5]/50"
                }`}
              />
            );
          })}
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#005E91] to-[#0C759A] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(0,94,145,0.25)] hover:opacity-95 transition"
          >
            View all blogs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
