import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, ShieldCheck, Clock, Send, ChevronRight, ExternalLink } from "lucide-react";
import { GiDna1 } from "react-icons/gi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
const logo = "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778835905/logo1_xkzm1g.svg";
import SupportWidget from "../SupportWidget";

const testOptions = [
  "Gurgaon","Delhi","Noida","Lucknow","Bareilly","Varanasi","Panipat",
  "Amritsar","Jaipur","Karnal","Kurukshetra","Srinagar","Guwahati","Jammu","Kolkata"
];

const genomicServices = [
  { label: "Oncology", to: "/services/oncologygenomics" },
  { label: "Infectious Disease", to: "/services/infectious-Disease" },
  { label: "Pharmacogenomics", to: "/services/pharmacogenomics" },
  { label: "Cytogenetic and FISH", to: "/services/cyto-genetic-and-fish" },
  { label: "Advanced Sequencing", to: "/services/advanced-Sequencing" },
  { label: "Rare Diseases NGS panel", to: "/services/rare-nGS-panel" },
  { label: "Reproductive Health & Pregnancy", to: "/services/reproductive-health-pregnancy" },
  { label: "Whole Exome and Genome Sequencing", to: "/services/whole-exome-and-genome-Sequencing" },
];

const otherLinks = [
  { label: "Oncogenetics", to: "/service/oncogeneticsdisorders" },
  { label: "Modern DNA Panels", to: "/services/modern-dna-panels" },
  { label: "Metabolomics Services", to: "/services/metabolomics" },
  { label: "Tandem Mass Spectrometry", to: "/services/tandem-mass-spectrometry-tms" },
];

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blogs" },
  { label: "Contact Us", to: "/contact" },
  { label: "Terms & Conditions", to: "/terms-and-conditions" },
  { label: "Privacy Policy", to: "/privacy-policy" },
];

const socialLinks = [
  { icon: FaFacebookF, href: "https://www.facebook.com/MdrcIndia/?_rdr", label: "Facebook" },
  { icon: FaYoutube, href: "https://www.youtube.com/channel/UCwZECfhGeCu8o6CvAST95CQ", label: "YouTube" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/modern-diagnostic-research-centre/", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://x.com/mdrcindia", label: "Twitter" },
];

const FooterLink = ({ to, label }) => (
  <li>
    <Link
      to={to}
      className="group flex items-center gap-1.5 text-sm text-white/70 transition hover:text-[#0ECE91]"
    >
      <ChevronRight className="h-3 w-3 shrink-0 opacity-0 -translate-x-1 transition group-hover:opacity-100 group-hover:translate-x-0" />
      <span className="transition group-hover:translate-x-0.5">{label}</span>
    </Link>
  </li>
);

const FooterHeading = ({ children }) => (
  <h4 className="relative mb-5 pl-3 text-base font-semibold tracking-wide text-white sm:text-lg">
    <span className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-full bg-gradient-to-b from-[#0ECE91] to-[#05AF79]" />
    {children}
  </h4>
);

const Footer = () => {
  const location = useLocation();
  const hideBookingSection = location.pathname === "/contact";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    test: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", phone: "", test: "", message: "" });
  };

  return (
    <>
    <footer className="w-full text-white">

      {!hideBookingSection && (
      <div className="relative overflow-hidden bg-gradient-to-br from-[#004E7A] via-[#005E91] to-[#0C759A] py-12 lg:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 right-0 h-80 w-80 rounded-full bg-[#0ECE91]/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[#15AEE5]/15 blur-3xl" />
          <div className="absolute top-1/2 left-1/3 h-56 w-56 -translate-y-1/2 rounded-full border border-white/5" />
          <div className="absolute bottom-12 right-1/4 h-40 w-40 animate-pulse rounded-full border border-white/10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* LEFT */}
            <div>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-[#0ECE91] backdrop-blur-sm">
                <GiDna1 className="h-4 w-4" />
                Free Genetic Counseling
              </span>

              <h2 className="mb-4 text-[clamp(1.75rem,5vw,3rem)] font-bold leading-tight">
                Book Your{" "}
                <span className="text-[#0ECE91]">Genetic Test</span>
              </h2>

              <p className="max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
                Take the first step towards understanding your genetic health.
                Our expert counselors will guide you through the process.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { icon: ShieldCheck, label: "Expert Counselors" },
                  { icon: MapPin, label: "25+ Cities" },
                  { icon: Clock, label: "24hr Response" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 backdrop-blur-sm"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-[#0ECE91]" />
                    <span className="text-sm font-medium text-white/90">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* FORM */}
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-md sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    placeholder="Your Name*"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full rounded-xl border border-white/25 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 outline-none transition focus:border-[#0ECE91] focus:bg-white/10 focus:ring-2 focus:ring-[#0ECE91]/30"
                  />

                  <input
                    placeholder="Phone Number*"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="w-full rounded-xl border border-white/25 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 outline-none transition focus:border-[#0ECE91] focus:bg-white/10 focus:ring-2 focus:ring-[#0ECE91]/30"
                  />
                </div>

                <select
                  value={formData.test}
                  onChange={(e) =>
                    setFormData({ ...formData, test: e.target.value })
                  }
                  required
                  className="w-full appearance-none rounded-xl border border-white/25 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[#0ECE91] focus:bg-white/10 focus:ring-2 focus:ring-[#0ECE91]/30 [&>option]:bg-[#004E7A] [&>option]:text-white"
                >
                  <option value="" disabled>
                    Select Your City*
                  </option>
                  {testOptions.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>

                <textarea
                  placeholder="Message..."
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full resize-none rounded-xl border border-white/25 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 outline-none transition focus:border-[#0ECE91] focus:bg-white/10 focus:ring-2 focus:ring-[#0ECE91]/30"
                />

                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#05AF79] to-[#0ECE91] px-8 py-3.5 font-semibold text-white shadow-[0_8px_24px_rgba(14,206,145,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(14,206,145,0.45)] active:scale-[0.98]"
                >
                  Submit Request
                  <Send className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </button>

                {submitted && (
                  <p className="flex items-center gap-2 text-sm font-medium text-[#0ECE91]">
                    <ShieldCheck className="h-4 w-4" />
                    Form submitted successfully! We&apos;ll be in touch soon.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      )}

      {/* ================= FOOTER ================= */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#003A5C] via-[#002F4A] to-[#001E32]">
        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#0ECE91]/5 blur-3xl" />
          <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[#15AEE5]/5 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        {/* Top accent line */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#0ECE91] to-transparent opacity-60" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            {/* BRAND */}
            <div className="lg:col-span-4">
              <Link to="/" className="inline-block">
                <img
                  src={logo}
                  alt="MDRC India"
                  className="mb-5 h-24 object-contain object-left sm:h-28"
                />
              </Link>

              <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/65">
                Modern Diagnostic & Research Centre Limited is one of India&apos;s
                fastest growing diagnostic chains with{" "}
                <span className="font-semibold text-[#0ECE91]">1800+</span>{" "}
                collection points nationwide.
              </p>

              <div className="flex flex-wrap gap-2">
                {["NABH Certified", "NABL Accredited", "ISO Compliant"].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm"
                    >
                      {badge}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* GENOMIC SERVICES */}
            <div className="lg:col-span-3">
              <FooterHeading>Genomic Services</FooterHeading>
              <ul className="space-y-2.5">
                {genomicServices.map((link) => (
                  <FooterLink key={link.to} {...link} />
                ))}
              </ul>
            </div>

            {/* LINKS */}
            <div className="lg:col-span-2">
              <FooterHeading>Other Links</FooterHeading>
              <ul className="mb-8 space-y-2.5">
                {otherLinks.map((link) => (
                  <FooterLink key={link.to} {...link} />
                ))}
              </ul>

              <FooterHeading>Quick Links</FooterHeading>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <FooterLink key={link.to} {...link} />
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div className="lg:col-span-3">
              <FooterHeading>Reach Us</FooterHeading>

              <div className="space-y-3">
                <a
                  href="https://maps.google.com/?q=Gurugram,Haryana,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 rounded-xl border border-white/8 bg-white/5 p-3.5 transition hover:border-[#0ECE91]/30 hover:bg-white/8"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#0ECE91]/20 to-[#05AF79]/10 text-[#0ECE91]">
                    <MapPin size={16} />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-white/45">
                      Location
                    </p>
                    <p className="text-sm text-white/85 group-hover:text-white">
                      Gurugram, Haryana, India
                    </p>
                  </div>
                </a>

                <a
                  href="tel:01246713000"
                  className="group flex items-start gap-3 rounded-xl border border-white/8 bg-white/5 p-3.5 transition hover:border-[#0ECE91]/30 hover:bg-white/8"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#0ECE91]/20 to-[#05AF79]/10 text-[#0ECE91]">
                    <Phone size={16} />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-white/45">
                      Call Us
                    </p>
                    <p className="text-sm text-white/85 group-hover:text-white">
                      01246713000, 01246712000
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@mdrcindia.com"
                  className="group flex items-start gap-3 rounded-xl border border-white/8 bg-white/5 p-3.5 transition hover:border-[#0ECE91]/30 hover:bg-white/8"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#0ECE91]/20 to-[#05AF79]/10 text-[#0ECE91]">
                    <Mail size={16} />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-white/45">
                      Email
                    </p>
                    <p className="text-sm text-white/85 group-hover:text-white">
                      info@mdrcindia.com
                    </p>
                  </div>
                </a>
              </div>

              {/* SOCIAL */}
              <div className="mt-6">
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-white/45">
                  Follow Us
                </p>
                <div className="flex gap-2.5">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:-translate-y-0.5 hover:border-[#0ECE91]/40 hover:bg-[#0ECE91] hover:text-white hover:shadow-[0_8px_20px_rgba(14,206,145,0.3)]"
                    >
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="relative border-t border-white/8 bg-black/20">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center sm:flex-row sm:text-left lg:px-6">
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()}{" "}
              <span className="text-white/70">MDRC India</span>
              {" · "}All Rights Reserved
            </p>

            <div className="flex items-center gap-4 text-xs text-white/40">
              <span className="hidden items-center gap-1.5 sm:flex">
                <ShieldCheck className="h-3.5 w-3.5 text-[#0ECE91]" />
                NABH & NABL Certified Labs
              </span>
              <span className="hidden h-3 w-px bg-white/15 sm:block" />
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 transition hover:text-[#0ECE91]"
              >
                Get in Touch
                <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <SupportWidget/>
    </>
  );
};

export default Footer;
