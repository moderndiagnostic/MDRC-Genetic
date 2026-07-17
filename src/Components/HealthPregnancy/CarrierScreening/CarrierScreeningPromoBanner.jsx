export default function CarrierScreeningPromoBanner() {
  return (
    <div className="w-full flex justify-center  py-6 font-roboto">
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 
        bg-gradient-to-r from-[#05AF79] via-[#06c48a] to-[#04a56f]
        text-white rounded-2xl px-6 md:px-10 py-5 w-full max-w-5xl 
        shadow-lg shadow-green-500/20">
        
        {/* Text */}
        <p className="text-sm md:text-lg font-medium text-center md:text-left leading-relaxed">
          Need specialized genetic and molecular solutions? We're here to help.
        </p>

        {/* Button */}
        <button className="bg-white text-[#05AF79] font-semibold px-6 py-2.5 rounded-lg 
          shadow hover:bg-gray-100 hover:scale-105 transition duration-200">
          Enquire Now
        </button>
        
      </div>
    </div>
  );
}