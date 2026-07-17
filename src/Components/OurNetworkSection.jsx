import React from "react";

const mapImage = "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827778/vite-project/v5fgle0fuzp80plq7grp.png";

const networkImages = [
  "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827785/vite-project/sax2p4w039dbcpyljalw.png",
  "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827782/vite-project/lumkhx3ikwn8a6ql4spb.png",
  "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827814/vite-project/mtnejjvsvm61ytwfhl9a.jpg",
  "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827812/vite-project/i6a0ymp2cwr68almsvay.jpg",
  "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827811/vite-project/upsh6dyz0kg8cwgmzfbh.jpg",
  "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827808/vite-project/klin5v5llgcwjbkht3b9.jpg",
  "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827807/vite-project/dfsjnhvpta8tqeoj8fxv.jpg",
  "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827837/vite-project/bbbg2i4ehelm7mkfmlpv.webp",
];

function OurNetworkSection() {
  return (
    <section className="py-8 px-4 lg:py-16 bg-gray-50">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0b4a80] mb-12">
        Our Network
      </h2>

      <div className="max-w-7xl mx-auto">
        {/* Map */}
        <div className="flex justify-center mb-12">
          <img
            src={mapImage}
            alt="Map"
            className="w-full max-w-5xl h-auto object-contain rounded-2xl"
          />
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {networkImages.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={src}
                alt={`Network ${index + 1}`}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurNetworkSection;