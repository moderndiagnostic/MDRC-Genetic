import { useState } from "react";
import {
  Send,
  ShieldCheck,
  ChevronDown,
  User,
  Phone,
  MapPin,
  FlaskConical,
} from "lucide-react";
import { GiDna1 } from "react-icons/gi";

const FORM_IMAGE =
  "https://res.cloudinary.com/ddcx08e0s/image/upload/v1782111643/ChatGPT_Image_Jun_22_2026_12_24_57_PM_xtk8ps.png";

const cityOptions = [
  "Gurgaon", "Delhi", "Noida", "Lucknow", "Bareilly", "Varanasi",
  "Panipat", "Amritsar", "Jaipur", "Karnal", "Kurukshetra",
  "Srinagar", "Guwahati", "Jammu", "Kolkata",
];

const geneticTests = [
  "Oncology Genomics",
  "Infectious Disease Panel",
  "Pharmacogenomics",
  "Cytogenetics & FISH",
  "Advanced Sequencing (WGS/WES)",
  "Rare Diseases NGS Panel",
  "Reproductive Health & Pregnancy",
  "Whole Exome & Genome Sequencing",
  "Modern DNA Panels",
  "Tandem Mass Spectrometry (TMS)",
  "Carrier Screening / NIPT",
  "Karyotyping",
  "Other / Not Sure",
];

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-gray-50/90 px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#0ECE91] focus:bg-white focus:ring-2 focus:ring-[#0ECE91]/25";

const selectClass = `${inputClass} appearance-none cursor-pointer`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    test: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field) => (e) =>
    setFormData({ ...formData, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", city: "", test: "", message: "" });
    }, 3000);
  };

  return (
    <div
      id="contact-form"
      className="overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_rgba(0,92,150,0.12)] ring-1 ring-[#005C96]/10 lg:rounded-3xl"
    >
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        <div className="relative h-[200px] w-full shrink-0 overflow-hidden sm:h-[240px] lg:h-auto lg:w-[42%]">
          <img
            src={FORM_IMAGE}
            alt="Genetic counseling at MDRC"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#003A5C]/80 via-[#005E91]/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#003A5C]/20" />
          <div className="absolute bottom-4 left-4 right-4 text-white lg:bottom-6 lg:left-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur-sm">
              <GiDna1 className="text-[#0ECE91]" />
              Free Counseling
            </span>
            <p className="mt-2 text-sm font-semibold sm:text-base">
              Book your genetic test with expert guidance
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-8">
          {submitted ? (
            <div className="flex flex-1 flex-col items-center justify-center py-10 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#0ECE91]/15">
                <ShieldCheck className="h-7 w-7 text-[#05AF79]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Request Submitted!</h3>
              <p className="mt-2 max-w-xs text-sm text-gray-500">
                Our team will contact you within 24 hours.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-5">
                <h2 className="text-xl font-bold text-[#005C96] sm:text-2xl">
                  Book Your Genetic Test
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Enter your details to schedule your test with a specialist.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid gap-3.5 sm:grid-cols-2">
                  <div className="relative">
                    <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Your Name*"
                      value={formData.name}
                      required
                      onChange={updateField("name")}
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                  <div className="relative">
                    <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      placeholder="Phone Number*"
                      value={formData.phone}
                      required
                      onChange={updateField("phone")}
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>

                <div className="relative">
                  <MapPin className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <select
                    value={formData.city}
                    required
                    onChange={updateField("city")}
                    className={`${selectClass} pl-10 pr-10 ${!formData.city ? "text-gray-400" : "text-gray-800"}`}
                  >
                    <option value="" disabled>Select Your City*</option>
                    {cityOptions.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                </div>

                <div className="relative">
                  <FlaskConical className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <select
                    value={formData.test}
                    required
                    onChange={updateField("test")}
                    className={`${selectClass} pl-10 pr-10 ${!formData.test ? "text-gray-400" : "text-gray-800"}`}
                  >
                    <option value="" disabled>Select Genetic Test*</option>
                    {geneticTests.map((test) => (
                      <option key={test} value={test}>{test}</option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                </div>

                <textarea
                  placeholder="Message (optional)..."
                  value={formData.message}
                  onChange={updateField("message")}
                  rows={3}
                  className={`${inputClass} resize-none`}
                />

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#05AF79] to-[#0ECE91] py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(14,206,145,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(14,206,145,0.45)]"
                >
                  Submit Request
                  <Send className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
