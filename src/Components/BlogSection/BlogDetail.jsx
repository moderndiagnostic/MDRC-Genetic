import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Tag,
  Layers,
  Clock,
} from "lucide-react";
import { blogs, blogCategories, formatBlogDate, getBlogBySlug } from "../../data/blogs";

function BlogDetail() {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <div className="py-16 lg:py-24 text-center px-4">
        <h2 className="text-2xl font-bold text-[#1f3a4d]">Blog Not Found</h2>
        <Link
          to="/blogs"
          className="mt-4 inline-flex items-center gap-2 text-[#005E91] font-semibold"
        >
          <ArrowLeft className="h-4 w-4" /> Back to blogs
        </Link>
      </div>
    );
  }

  const categoryList = blogCategories.filter((item) => item !== "All");
  const categoryCounts = categoryList.map((name) => ({
    name,
    count: blogs.filter((item) => item.category === name).length,
  }));

  const otherBlogs = blogs.filter((item) => item.slug !== blog.slug);
  const latestBlogs = [...otherBlogs]
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 4);
  const moreBlogs = latestBlogs.slice(0, 3);

  return (
    <article className="bg-gradient-to-b from-[#F3FAFD] via-white to-white">
      <section className="relative overflow-hidden bg-gradient-to-b from-[#005E91] to-[#0C759A] text-white lg:pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-sm text-white/85 hover:text-white mb-5"
          >
            <ArrowLeft className="h-4 w-4" /> Back to blogs
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-sm text-[#B8E6F8]">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1">
              <Tag className="h-3.5 w-3.5" />
              {blog.category}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              Published: {formatBlogDate(blog.publishedAt)}
            </span>
            <span>{blog.type}</span>
          </div>

          <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            {blog.fullTitle}
          </h1>
        </div>
      </section>

      {/* Attractive category quick-nav, always visible on the blog page */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-5 sm:pt-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0C759A] mr-1">
            <Layers className="h-3.5 w-3.5" /> Browse:
          </span>
          {categoryList.map((cat) => (
            <Link
              key={cat}
              to={`/blogs?category=${encodeURIComponent(cat)}`}
              className={`rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition ${
                cat === blog.category
                  ? "bg-[#005E91] text-white shadow-[0_6px_16px_rgba(0,94,145,0.25)]"
                  : "bg-white text-[#005E91] ring-1 ring-[#005E91]/15 hover:bg-[#E8F6FB]"
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-4 sm:pb-6 pt-6 sm:pt-8">
        <div className="grid lg:grid-cols-[1fr_320px] gap-8 lg:gap-10 items-start">
          {/* Left: article content */}
          <div>
            <div className="overflow-hidden rounded-2xl shadow-[0_18px_50px_rgba(0,94,145,0.18)] ring-1 ring-[#005E91]/10">
              <img
                src={blog.image}
                alt={blog.fullTitle}
                className="w-full h-[220px] sm:h-[300px] md:h-[380px] object-cover"
              />
            </div>

            <div className="mt-8 sm:mt-10 space-y-5 sm:space-y-6 text-[#424040]">
              {blog.content.map((block, index) => {
                if (block.type === "heading") {
                  return (
                    <h2
                      key={index}
                      className="text-xl sm:text-2xl font-bold text-[#005C96] pt-2"
                    >
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === "subheading") {
                  return (
                    <h3
                      key={index}
                      className="text-lg sm:text-xl font-semibold text-[#0C759A] pt-1"
                    >
                      {block.text}
                    </h3>
                  );
                }

                if (block.type === "paragraph") {
                  return (
                    <p
                      key={index}
                      className="text-sm sm:text-base md:text-lg leading-relaxed"
                    >
                      {block.text}
                    </p>
                  );
                }

                if (block.type === "list") {
                  return (
                    <ul key={index} className="space-y-3 pl-1">
                      {block.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm sm:text-base md:text-lg leading-relaxed"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-[#005E91] to-[#15AEE5]" />
                          <span>
                            <strong className="text-[#005C96]">{item.label}</strong>
                            {" — "}
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  );
                }

                if (block.type === "ordered-list") {
                  return (
                    <ol key={index} className="space-y-3 list-decimal pl-5">
                      {block.items.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm sm:text-base md:text-lg leading-relaxed pl-1"
                        >
                          {item}
                        </li>
                      ))}
                    </ol>
                  );
                }

                if (block.type === "disclaimer") {
                  return (
                    <p
                      key={index}
                      className="mt-8 rounded-xl border border-[#C9E4F2] bg-[#F3FAFD] px-4 py-3 text-xs sm:text-sm text-gray-600 italic leading-relaxed"
                    >
                      {block.text}
                    </p>
                  );
                }

                return null;
              })}
            </div>
          </div>

          {/* Right: categories + latest blogs, shown alongside the open blog */}
          <aside className="space-y-5 lg:sticky lg:top-28">
            <div className="rounded-2xl bg-white p-5 shadow-[0_12px_36px_rgba(0,94,145,0.1)] ring-1 ring-[#005E91]/8">
              <div className="mb-4 flex items-center gap-2 text-[#005E91]">
                <Layers className="h-4 w-4" />
                <h3 className="font-bold text-sm sm:text-base">Categories</h3>
              </div>
              <ul className="space-y-1.5">
                {categoryCounts.map(({ name, count }) => (
                  <li key={name}>
                    <Link
                      to={`/blogs?category=${encodeURIComponent(name)}`}
                      className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium transition ${
                        name === blog.category
                          ? "bg-[#005E91] text-white"
                          : "text-gray-600 hover:bg-[#E8F6FB] hover:text-[#005E91]"
                      }`}
                    >
                      <span>{name}</span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs ${
                          name === blog.category
                            ? "bg-white/20"
                            : "bg-[#E8F6FB] text-[#005E91]"
                        }`}
                      >
                        {count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/blogs"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#005E91] hover:gap-2.5 transition-all"
              >
                View all blogs <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-[0_12px_36px_rgba(0,94,145,0.1)] ring-1 ring-[#005E91]/8">
              <div className="mb-4 flex items-center gap-2 text-[#005E91]">
                <Clock className="h-4 w-4" />
                <h3 className="font-bold text-sm sm:text-base">Latest Blogs</h3>
              </div>
              <div className="space-y-4">
                {latestBlogs.map((item) => (
                  <Link
                    key={item.id}
                    to={`/blogs/${item.slug}`}
                    className="group flex items-start gap-3"
                  >
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-[#E8F6FB]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[#1f3a4d] leading-snug line-clamp-2 group-hover:text-[#005E91] transition-colors">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        {formatBlogDate(item.publishedAt)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[#005E91] to-[#0C759A] p-5 text-white shadow-[0_12px_36px_rgba(0,94,145,0.2)]">
              <p className="text-sm text-[#B8E6F8] font-medium">Explore More</p>
              <h4 className="mt-1 font-bold leading-snug">
                Browse every article by category
              </h4>
              <Link
                to="/blogs"
                className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-sm font-semibold text-[#005E91]"
              >
                Explore Blogs <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* Keep Reading: latest blogs grid, shown after the article ends */}
      <section className="border-t border-[#E1F0F7] bg-[#F3FAFD] px-4 py-10 sm:px-6 sm:py-14">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-[#0C759A]">
                Keep Reading
              </p>
              <h2 className="mt-1 text-xl sm:text-2xl md:text-[1.75rem] font-bold text-[#1f3a4d]">
                Latest Blogs
              </h2>
            </div>
            <Link
              to="/blogs"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#005E91] hover:gap-2.5 transition-all"
            >
              View all blogs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {moreBlogs.map((item) => (
              <Link
                key={item.id}
                to={`/blogs/${item.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_12px_36px_rgba(0,94,145,0.1)] ring-1 ring-[#005E91]/8 transition hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(0,94,145,0.16)]"
              >
                <div className="relative h-44 overflow-hidden bg-[#E8F6FB] sm:h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003A5C]/45 via-transparent to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-[#005E91]">
                    {item.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500">
                    <CalendarDays className="h-3.5 w-3.5 text-[#15AEE5]" />
                    <time dateTime={item.publishedAt}>
                      {formatBlogDate(item.publishedAt)}
                    </time>
                    <span className="text-gray-300">•</span>
                    <span>{item.type}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#005C96] leading-snug group-hover:text-[#004E7A] sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="line-clamp-2 text-sm leading-relaxed text-gray-600">
                    {item.excerpt}
                  </p>

                  <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-[#005E91] transition-all group-hover:gap-2.5">
                    Read article <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}

export default BlogDetail;
