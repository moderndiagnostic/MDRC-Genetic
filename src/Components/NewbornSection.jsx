import React from "react";

const NewbornSection = () => {
  return (
    <section className="w-full  py-10 md:py-14">
      
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        
       
        <div className="w-full md:w-1/2">
          <img
            src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827772/vite-project/sj0xz2a7ki2fwc0sp3ln.png"
            alt="Newborn Screening"
            className="w-full "
          />
        </div>

        
        <div className="w-full md:w-1/2">
          
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Newborn Screening
          </h2>

        
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text 
            ever since the 1500s, when an unknown printer took a galley of type 
            and scrambled it to make a type specimen book. It has survived not 
            only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged.
          </p>

          
          <button className="bg-[#1bb56d] text-white text-sm md:text-base px-6 py-2.5 rounded shadow hover:bg-[#17a45f] transition">
            KNOW MORE ABOUT MDRC GENOMICS
          </button>

        </div>

      </div>
    </section>
  );
};

export default NewbornSection;