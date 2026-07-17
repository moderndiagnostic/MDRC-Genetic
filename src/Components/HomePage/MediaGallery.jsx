const galleryImages = {
  left: {
    src: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827967/vite-project/ms4y2uifdn8lesorqe1t.svg",
    alt: "MDRC laboratory team conducting genetic research",
    label: "Advanced Laboratory",
    objectPosition: "object-center",
  },
  centerTop: {
    src: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827889/vite-project/l9cbqqbsyvrcm38olewl.svg",
    alt: "Modern Diagnostic & Research Centre reception",
    label: "Modern Facility",
    objectPosition: "object-center",
  },
  centerBottom: {
    src: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827885/vite-project/cjhj8jn5xk3vxxfykq81.svg",
    alt: "Patient waiting area at MDRC",
    label: "Patient Care",
    objectPosition: "object-center",
  },
  right: {
    src: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827883/vite-project/rkor9gmxcdp8kbu98ksl.svg",
    alt: "Scientist examining samples under microscope",
    label: "Clinical Excellence",
    objectPosition: "object-top",
  },
};

const GalleryCard = ({ src, alt, label, objectPosition = "object-center", className = "" }) => (
  <div
    className={`group relative overflow-hidden rounded-2xl bg-[#E8F4FA] shadow-[0_8px_30px_rgba(0,92,150,0.1)] ring-1 ring-[#005C96]/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,92,150,0.18)] ${className}`}
  >
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`absolute inset-0 h-full w-full object-cover ${objectPosition} transition-transform duration-700 ease-out group-hover:scale-[1.04]`}
    />

    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#003A5C]/80 via-[#003A5C]/15 to-transparent" />

    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
      <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-white/90 backdrop-blur-sm sm:text-xs">
        MDRC India
      </span>
      <p className="mt-2 text-sm font-semibold text-white sm:text-base">{label}</p>
    </div>
  </div>
);

const MediaGallery = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-[#F0FBFF] via-white to-[#F0FBFF] px-4 py-10 sm:px-6 sm:py-12 md:py-14">
    <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#15AEE5]/10 blur-3xl" />
    <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-[#0ECE91]/10 blur-3xl" />

    <div className="relative mx-auto max-w-7xl">
      <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
        <span className="text-sm font-medium text-[#15AEE5] sm:text-base">
          INSIDE MDRC
        </span>
<<<<<<< HEAD
        <h2 className="mt-1 text-xl font-semibold text-[#005C96] sm:text-2xl md:text-[25px]">
          Media & Gallery
        </h2>
        <p className="mt-2 text-sm sm:text-base md:text-lg text-[#424040] leading-relaxed">
=======
        <h2 className="mt-1 text-xl font-bold text-[#005C96] sm:text-2xl md:text-[28px] lg:text-[32px]">
          Media & Gallery
        </h2>
        <p className="mt-2 text-sm font-medium text-[#424040] sm:text-base md:text-lg lg:text-[20px]">
>>>>>>> dfcb555ac04c72e4bac571defe511b797624b2e1
          Showcasing Care, Compassion and Clinical Excellence
        </p>
      </div>

      {/* Desktop: 3 equal columns, middle split — all bottoms align */}
      <div className="mx-auto hidden max-w-6xl gap-5 lg:flex lg:h-[520px] xl:h-[560px]">
        <GalleryCard
          {...galleryImages.left}
          className="h-full flex-1"
        />

        <div className="flex h-full flex-1 flex-col gap-5">
          <GalleryCard
            {...galleryImages.centerTop}
            className="min-h-0 flex-1"
          />
          <GalleryCard
            {...galleryImages.centerBottom}
            className="min-h-0 flex-1"
          />
        </div>

        <GalleryCard
          {...galleryImages.right}
          className="h-full flex-1"
        />
      </div>

      {/* Tablet: 2x2 equal grid */}
      <div className="mx-auto hidden max-w-6xl grid-cols-2 gap-4 sm:grid md:grid lg:hidden">
        <GalleryCard {...galleryImages.left} className="aspect-[4/3]" />
        <GalleryCard {...galleryImages.right} className="aspect-[4/3]" />
        <GalleryCard {...galleryImages.centerTop} className="aspect-[4/3]" />
        <GalleryCard {...galleryImages.centerBottom} className="aspect-[4/3]" />
      </div>

      {/* Mobile: stacked equal cards */}
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:hidden">
        <GalleryCard {...galleryImages.left} className="aspect-[16/10]" />
        <GalleryCard {...galleryImages.centerTop} className="aspect-[16/10]" />
        <GalleryCard {...galleryImages.centerBottom} className="aspect-[16/10]" />
        <GalleryCard {...galleryImages.right} className="aspect-[16/10]" />
      </div>
    </div>
  </section>
);

export default MediaGallery;
