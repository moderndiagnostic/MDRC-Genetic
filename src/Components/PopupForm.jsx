import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  X,
  Send,
  ShieldCheck,
  ChevronDown,
  User,
  Phone,
  MapPin,
  FlaskConical,
} from "lucide-react";
import { GiDna1 } from "react-icons/gi";

const POPUP_IMAGE =
  "https://res.cloudinary.com/ddcx08e0s/image/upload/v1782111643/ChatGPT_Image_Jun_22_2026_12_24_57_PM_xtk8ps.png";

const cityOptions = [
  "Gurgaon",
  "Delhi",
  "Noida",
  "Lucknow",
  "Bareilly",
  "Varanasi",
  "Panipat",
  "Amritsar",
  "Jaipur",
  "Karnal",
  "Kurukshetra",
  "Srinagar",
  "Guwahati",
  "Jammu",
  "Kolkata",
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
  "w-full rounded-xl border border-gray-200 bg-gray-50/80 px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#0ECE91] focus:bg-white focus:ring-2 focus:ring-[#0ECE91]/25";

const selectClass = `${inputClass} appearance-none cursor-pointer`;

const PopupForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    test: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setAcceptedTerms(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({ name: "", phone: "", city: "", test: "", message: "" });
      setAcceptedTerms(false);
    }, 2500);
  };

  const updateField = (field) => (e) =>
    setFormData({ ...formData, [field]: e.target.value });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#001E32]/70 px-3 py-4 backdrop-blur-sm sm:px-4 sm:py-6"
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-[min(980px,96vw)] max-h-[92vh] flex-col overflow-hidden rounded-2xl bg-white shadow-[0_25px_80px_rgba(0,0,0,0.35)] md:max-h-[90vh] md:flex-row md:items-stretch sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-gray-600 shadow-md transition hover:bg-white hover:text-gray-900 sm:right-4 sm:top-4"
        >
          <X className="h-5 w-5" />
        </button>

        {/* IMAGE — full bleed in card */}
        <div className="relative w-full shrink-0 overflow-hidden md:w-[48%] md:min-h-0">
          <img
            src={POPUP_IMAGE}
            alt="Genetic testing consultation"
            className="block h-[200px] w-full object-cover object-center sm:h-[240px] md:absolute md:inset-0 md:h-full md:w-full"
          />
        </div>

        {/* FORM PANEL */}
        <div className="relative flex min-h-0 min-w-0 flex-1 flex-col overflow-y-auto">
            {submitted ? (
              <div className="flex flex-1 flex-col items-center justify-center px-6 py-10 text-center sm:py-12">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#0ECE91]/15">
                  <ShieldCheck className="h-8 w-8 text-[#05AF79]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  Request Submitted!
                </h3>
                <p className="max-w-xs text-sm text-gray-500">
                  Thank you! Our genetic counseling team will contact you within
                  24 hours.
                </p>
              </div>
            ) : (
              <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6 md:px-7 md:py-7">
                <div className="mb-4">
                  <span className="mb-2 inline-flex items-center gap-1.5 text-xs font-medium text-[#005E91]">
                    <GiDna1 className="h-3.5 w-3.5 text-[#0ECE91]" />
                    MDRC Genomics
                  </span>
                  <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                    Book Your Genetic Test
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Fill in your details and we&apos;ll schedule your appointment.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-1 flex-col space-y-3">
                  <div className="grid gap-3 sm:grid-cols-2">
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
                      className={`${selectClass} pl-10 pr-10 text-gray-800 ${
                        !formData.city ? "text-gray-400" : ""
                      }`}
                    >
                      <option value="" disabled>
                        Select Your City*
                      </option>
                      {cityOptions.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
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
                      className={`${selectClass} pl-10 pr-10 text-gray-800 ${
                        !formData.test ? "text-gray-400" : ""
                      }`}
                    >
                      <option value="" disabled>
                        Select Genetic Test*
                      </option>
                      {geneticTests.map((test) => (
                        <option key={test} value={test}>
                          {test}
                        </option>
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

                  <label className="flex cursor-pointer items-start gap-2.5">
                    <input
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      required
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 text-[#0ECE91] focus:ring-[#0ECE91]/40"
                    />
                    <span className="text-xs leading-relaxed text-gray-600">
                      I agree to the{" "}
                      <Link
                        to="/about"
                        className="font-medium text-[#005C96] underline transition hover:text-[#0ECE91]"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Terms & Conditions
                      </Link>
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={!acceptedTerms}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#05AF79] to-[#0ECE91] py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(14,206,145,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(14,206,145,0.45)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                  >
                    Submit Request
                    <Send className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </button>
                </form>
              </div>
            )}
          </div>
      </div>
    </div>
  );
};

export default PopupForm;
