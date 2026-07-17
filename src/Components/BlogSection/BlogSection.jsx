// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function BlogSection() {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   const fetchBlogs = async () => {
//     try {
//       const res = await axios.get(
//         "https://langmainternational.com/api/blog-list"
//       );

//       console.log(res.data);

//       // 👇 API structure ke hisaab se adjust karo
//       setBlogs(res.data.data || res.data);
//     } catch (error) {
//       console.error("Error fetching blogs:", error);
//     }
//   };

//   return (
//     <section className="py-8 px-4 lg:py-16 bg-gray-50">
//       <h2 className="text-3xl font-bold text-center mb-5 lg:mb-10 text-[#0b4a80]">
//         Our Blogs
//       </h2>

//       <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {blogs.map((blog, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
//           >
//             {/* Image */}
//             <img
//               src={`https://langmainternational.com/uploads/${blog.image}`}
//               alt={blog.title}
//               className="w-full h-[200px] object-cover"
//             />

//             {/* Content */}
//             <div className="p-4">
//               <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
//                 {blog.title}
//               </h3>

//               <a
//                 href={`/blog/${blog.slug}`}
//                 className="text-blue-600 text-sm mt-2 inline-block hover:underline"
//               >
//                 Know More →
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default BlogSection;


import React from "react";
import blogsData from "../../../blog.json";

function BlogSection() {
  const blogs = blogsData.blogs || [];
  const fallbackImage = "/images/default-blog.jpg";

  return (
    <>
      {/* 🔥 Hero Section */}
      <section className="relative w-full h-[180px] md:h-[300px] bg-gradient-to-r from-[#005E91] to-[#0077B6] flex items-center justify-center">
        <div className="text-center mt-0 lg:mt-20 text-white">
          <h1 className=" text-3xl md:text-5xl font-bold">Blog</h1>
          <p className="mt-2 text-sm md:text-lg opacity-90">
            Home / Blog
          </p>
        </div>
      </section>

      {/* 🔥 Blog Grid Section */}
      <section className="py-8 px-4 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          {/* Title */}
          <div className="text-center mb-5 lg:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Latest Blogs
            </h2>
            <p className="text-gray-500 mt-2 text-sm md:text-base">
              Explore our latest insights and updates
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 group"
              >
                {/* Image */}
                <div className="w-full h-[200px] overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = fallbackImage;
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                    {blog.title}
                  </h3>

                  <a
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center gap-1 text-blue-600 text-sm mt-3 hover:gap-2 transition-all"
                  >
                    Know More →
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

export default BlogSection;