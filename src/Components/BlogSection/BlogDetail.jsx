import React from "react";
import { useParams } from "react-router-dom";
import blogsData from "../../../blog.json";

function BlogDetail() {
  const { slug } = useParams();

  const blogs = blogsData.blogs || [];

  // 👇 slug se blog find karo
  const blog = blogs.find((item) => item.slug === slug);

  const fallbackImage = "/images/default-blog.jpg";

  // ❌ agar blog nahi mila
  if (!blog) {
    return (
      <div className="py-8 lg:py-20 text-center">
        <h2 className="text-2xl font-bold">Blog Not Found</h2>
      </div>
    );
  }

  return (
    <section className="py-8 px-4 lg:py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto  overflow-hidden">

        {/* Image */}
        <div className="w-full h-[300px] bg-gray-100">
          <img
            src={blog.image}
            alt={blog.title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = fallbackImage;
            }}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-[#0b4a80]">
            {blog.title}
          </h1>

          {/* Dummy content (abhi ke liye) */}
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Genomic technologies are transforming healthcare by enabling 
            personalized medicine and advanced diagnostics. This blog explains 
            key concepts and their real-world applications.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BlogDetail;