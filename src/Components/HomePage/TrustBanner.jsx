import { Shield, Clock, Building2, Users } from "lucide-react";

const stats = [
  { icon: Shield, value: "NABH & NABL", label: "Accredited", color: "text-secondary" },
  { icon: Clock, value: "40+", label: "Years of Trust", color: "text-secondary" },
  { icon: Building2, value: "21+", label: "Centers / Labs", color: "text-secondary" },
  { icon: Users, value: "1.5 Cr+", label: "Patients Served", color: "text-secondary" },
];
const data = [
    {
      img: "assets/m1.svg",
      title: "NABH & NABL",
      desc: "Certified Labs",
    },
    {
      img: "assets/m2.svg",
      title: "40+",
      desc: "Years Of Experience",
    },
    {
      img: "assets/m5.svg",
      title: "21+",
      desc: "Labs in India",
    },
    {
      img: "assets/m6.svg",
      title: "1.5Crore+",
      desc: "Satisfied Customers",
    },
  ];
const TrustBanner = () => (
  <section className="bg-gradient-to-b from-[#FFFFFF] to-[#E6F8FF] border-b border-border">
    <div className="container mx-auto px-4 py-10 lg:py-14">
      <div className="pb-9 text-center">
      <h2 className=" font-semibold text-[32px] text-[#005C96]">Our Foundation of Trust</h2>
      <p className="text-[#424040] text-[20px] pt-2">Decades of experience & A network of certified labs.</p>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
      {data.map((item, index) => (
        <div key={index} className="flex justify-start lg:justify-center mt-6 lg:mt-0">
          <img src={item.img} alt="icon" className="pr-2" />
          <div className="flex flex-col">
            <h3 className="text-[#189ED3] text-[25px] font-semibold">
              {item.title}
            </h3>
            <p className="text-[20px] text-[#727070] font-medium">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
    </div>
  </section>
);

export default TrustBanner;
