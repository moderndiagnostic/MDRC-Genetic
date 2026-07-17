import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Filter, Search } from "lucide-react";
import {
  blogs,
  blogCategories,
  blogTypes,
  formatBlogDate,
} from "../../data/blogs";

function BlogSection() {
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");
  const [query, setQuery] = useState("");

  const filteredBlogs = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogs.filter((blog) => {
      const matchCategory = category === "All" || blog.category === category;
      const matchType = type === "All" || blog.type === type;
      const matchQuery =
        !q ||
        blog.title.toLowerCase().includes(q) ||
        blog.fullTitle.toLowerCase().includes(q) ||
        blog.excerpt.toLowerCase().includes(q);
      return matchCategory && matchType && matchQuery;
    });
  }, [category, type, query]);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#005E91] to-[#0C759A] text-white lg:pt-20">
        <div className="pointer-events-none absolute -right-16 top-10 h-64 w-64 rounded-full bg-[#15AEE5]/25 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-12 md:py-16">
          <p className="text-[#B8E6F8] text-sm sm:text-base font-medium mb-2">
            Insights & Education
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Blog
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-white/90 max-w-2xl">
            Evidence-based articles on medication safety, genomics, and modern diagnostics.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-[#F3FAFD] via-white to-[#F3FAFD] py-8 sm:py-10 md:py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_300px] gap-8 lg:gap-10 items-start">
          {/* Left: blog cards */}
          <div>
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-[1.75rem] font-bold text-[#1f3a4d]">
                Latest Blogs
              </h2>
              <p className="mt-1 text-sm sm:text-base text-gray-500">
                {filteredBlogs.length} article{filteredBlogs.length === 1 ? "" : "s"} found
              </p>
            </div>

            {filteredBlogs.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-[#C9E4F2] bg-white p-10 text-center text-gray-500">
                No blogs match your filters. Try another category or type.
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                {filteredBlogs.map((blog) => (
                  <Link
                    key={blog.id}
                    to={`/blogs/${blog.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_12px_36px_rgba(0,94,145,0.1)] ring-1 ring-[#005E91]/8 transition hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(0,94,145,0.16)]"
                  >
                    <div className="relative h-44 sm:h-48 overflow-hidden bg-[#E8F6FB]">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#003A5C]/45 via-transparent to-transparent" />
                      <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-[#005E91]">
                        {blog.category}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
                      <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500">
                        <CalendarDays className="h-3.5 w-3.5 text-[#15AEE5]" />
                        <time dateTime={blog.publishedAt}>
                          {formatBlogDate(blog.publishedAt)}
                        </time>
                        <span className="text-gray-300">•</span>
                        <span>{blog.type}</span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-[#005C96] leading-snug group-hover:text-[#004E7A]">
                        {blog.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                        {blog.excerpt}
                      </p>

                      <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-[#005E91] group-hover:gap-2.5 transition-all">
                        Read article <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Right: filters */}
          <aside className="lg:sticky lg:top-28 space-y-4">
            <div className="rounded-2xl bg-white p-5 shadow-[0_12px_36px_rgba(0,94,145,0.1)] ring-1 ring-[#005E91]/8">
              <div className="mb-4 flex items-center gap-2 text-[#005E91]">
                <Filter className="h-4 w-4" />
                <h3 className="font-bold text-sm sm:text-base">Filter blogs</h3>
              </div>

              <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                Search
              </label>
              <div className="relative mb-4">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="h-10 w-full rounded-xl border border-gray-200 bg-gray-50 pl-9 pr-3 text-sm outline-none transition focus:border-[#005E91] focus:bg-white focus:ring-2 focus:ring-[#15AEE5]/20"
                />
              </div>

              <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mb-4 h-10 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 text-sm text-gray-700 outline-none transition focus:border-[#005E91] focus:bg-white focus:ring-2 focus:ring-[#15AEE5]/20"
              >
                {blogCategories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                Type
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="h-10 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 text-sm text-gray-700 outline-none transition focus:border-[#005E91] focus:bg-white focus:ring-2 focus:ring-[#15AEE5]/20"
              >
                {blogTypes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              {(category !== "All" || type !== "All" || query) && (
                <button
                  type="button"
                  onClick={() => {
                    setCategory("All");
                    setType("All");
                    setQuery("");
                  }}
                  className="mt-4 w-full rounded-xl border border-[#C9E4F2] px-3 py-2 text-sm font-semibold text-[#005E91] transition hover:bg-[#E8F6FB]"
                >
                  Clear filters
                </button>
              )}
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[#005E91] to-[#0C759A] p-5 text-white shadow-[0_12px_36px_rgba(0,94,145,0.2)]">
              <p className="text-sm text-[#B8E6F8] font-medium">Featured</p>
              <h4 className="mt-1 font-bold leading-snug">
                {blogs[0].title}
              </h4>
              <p className="mt-2 text-xs text-white/80">
                Published {formatBlogDate(blogs[0].publishedAt)}
              </p>
              <Link
                to={`/blogs/${blogs[0].slug}`}
                className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-sm font-semibold text-[#005E91]"
              >
                Read now <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

export default BlogSection;
