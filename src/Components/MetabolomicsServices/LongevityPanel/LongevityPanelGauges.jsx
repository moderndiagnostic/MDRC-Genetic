import React from "react";
import { Battery, Wrench, Shield, Flame } from "lucide-react";

const gauges = [
  {
    icon: Battery,
    title: "Your Energy Battery (NAD+ / NADH Ratio)",
    shows:
      "Whether your cells have enough energy to perform the repairs and regeneration necessary to stay young.",
    connection:
      "As this ratio lowers, you may experience age-related stamina loss, sluggish metabolism, and brain fog often seen in middle age. Low NAD+ levels impair longevity genes (Sirtuins), pushing the body toward metabolic stress, premature cellular senescence, and chronic inflammation that accelerates aging.",
  },
  {
    icon: Wrench,
    title: "Your Repair System (SAM / SAH Ratio)",
    shows:
      "Your body's capacity to perform daily maintenance and repair your genetic code through methylation.",
    connection:
      "A healthy ratio indicates efficient methylation, supporting mental sharpness and tissue resilience. When this system is slow or compromised, everyday wear and tear is not repaired quickly enough, and biological aging accelerates.",
  },
  {
    icon: Shield,
    title: "Your Stress Shield (GSH / GSSG Ratio)",
    shows:
      "The status of glutathione, your body's most powerful antioxidant buffer against oxidative damage.",
    connection:
      "A high ratio means your stress shield is strong and cellular defenses are intact. A low ratio indicates severe oxidative stress—a state that rapidly ages cells and depletes the body's protective resources.",
  },
  {
    icon: Flame,
    title: "Your Internal Friction (Omega-6 to Omega-3 Ratio)",
    shows:
      "The balance between pro-inflammatory and anti-inflammatory fatty acids in your system.",
    connection:
      "Humans evolved with a roughly 1:1 ratio, while modern diets often reach 15:1 or higher. This imbalance keeps the inflammatory switch turned on, slowly damaging cellular health and accelerating biological aging.",
  },
];

const LongevityPanelGauges = () => {
  return (
    <section className="bg-[#F5F7F9] py-8 sm:py-10 px-4 sm:px-6 font-roboto lg:py-14">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-[#005C96] mb-3 text-center md:text-left">
          The Four Gauges on Your Speedometer
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-4xl">
          To find out your current aging speed, this panel measures four critical
          internal body systems and ratios:
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {gauges.map(({ icon: Icon, title, shows, connection }, index) => (
            <div
              key={title}
              className="bg-white rounded-xl p-5 sm:p-6 shadow-md border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: "linear-gradient(to right, #15AEE5, #0C607F)",
                  }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-[#005C96] leading-snug pt-1">
                  {index + 1}. {title}
                </h3>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                <p>
                  <span className="font-semibold text-gray-800">
                    What it shows:
                  </span>{" "}
                  {shows}
                </p>
                <p>
                  <span className="font-semibold text-gray-800">
                    The Aging Speed Connection:
                  </span>{" "}
                  {connection}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LongevityPanelGauges;
