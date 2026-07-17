import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays, Tag } from "lucide-react";
import { formatBlogDate, getBlogBySlug } from "../../data/blogs";

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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-4 sm:-mt-6 pb-12 sm:pb-16">
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
    </article>
  );
}

export default BlogDetail;
