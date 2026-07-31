import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight, Clock, Headphones } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { GiDna1 } from "react-icons/gi";
import ContactForm from "./ContactForm";

const CONTACT_BANNER =
  "https://res.cloudinary.com/ddcx08e0s/image/upload/v1782114494/Untitled_design_2_ctblwl.png";

const locations = [
  {
    title: "Modern Diagnostic & Research Centre, Gurugram",
    address:
      "363-364/4, Sector-12, New Railway Road, Gurugram - 122001 Haryana, India",
    phone1: "01246712000",
    phone2: "01246713000",
    email: "info@mdrcindia.com",
  },
  {
    title: "Modern Diagnostic & Research Centre, Sector-40, Gurugram",
    address: "1057P, Sector - 40, Gurugram, Haryana - 122002",
    phone1: "01246713000",
    phone2: "01246712000",
    email: "info@mdrcindia.com",
  },
  {
    title: "Modern Diagnostic & Research Centre, Bhiwadi",
    address:
      "S.S Hospital, OCF-2, Bhagat Singh Colony, Bhiwadi, Rajasthan 301019",
    phone1: "08287513174",
    email: "info@mdrcindia.com",
  },
  {
    title: "Modern Diagnostic & Research Centre, Yamunanagar, Haryana",
    address:
      "No 25C/L, Bend Box Building, near NATHU SWEETS, Model Town, Yamuna Nagar, Haryana 135106",
    phone1: "08368952737",
    email: "info@mdrcindia.com",
  },
  {
    title: "Modern Diagnostic & Research Centre, Srinagar",
    address:
      "1st Floor, Hotel New Al Humza Building Iqbal Market, Karan Nagar, Srinagar - 190010",
    phone1: "09599815370",
    email: "info@mdrcindia.com",
  },
  {
    title: "Modern Diagnostic & Research Centre, Kurukshetra",
    address:
      "Ground Floor, Red Rd, near Sharda Nand Chowk, Kurukshetra, Haryana 136118",
    phone1: "08368944712",
    email: "info@mdrcindia.com",
  },
  {
    title: "Modern Diagnostic & Research Centre, Bareilly",
    address:
      "Emerald Tower, Pilibhit Bypass Rd, Chhoti Vihar, Bareilly, UP 243006",
    phone1: "08287513173",
    email: "info@mdrcindia.com",
  },
  {
    title: "Modern Diagnostic & Research Centre, Guwahati",
    address:
      "2nd Floor, PB Chaudhary Mansion, Ulubari, Guwahati, Assam 781007",
    phone1: "08287513173",
    email: "info@mdrcindia.com",
  },
  {
    title: "Modern Diagnostic & Research Centre, Panipat, Haryana",
    address:
      "Shop no - 75, opp. Manisha Hospital, Ram Nagar, Tehsil Camp, Panipat, Haryana 132103",
    phone1: "08287513175",
    email: "info@mdrcindia.com",
  },
  {
    title: "Modern Diagnostic & Research Centre, Karnal, Haryana",
    address:
      "446/F, opp. Kalpana Chawla Govt. Medical College, near Sai Mandir, Karnal, Haryana 132001",
    phone1: "09599815373",
    email: "info@mdrcindia.com",
  },
  {
    title: "Modern Diagnostic & Research Centre, Kolkata",
    address:
      "F119/60, 3 Ambika Mukherjee Road, Kolkata, West Bengal 700056",
    phone1: "8287513179",
    email: "info@mdrcindia.com",
  },
  {
    title: "Modern Diagnostic & Research Centre, Jaipur",
    address:
      "BL tower, S-268, Ground Floor, Mahaveer Nagar 2, Durgapura, Jaipur, Rajasthan 302018",
    phone1: "8287513179",
    email: "info@mdrcindia.com",
  },
  {
    title: "Modern Diagnostic & Research Centre, Indore",
    address:
      "R9, Ratna Lok Colony, Near Apollo Premium Centre Scheme No-53, Vijay Nagar, Indore",
    phone1: "9599815372",
    email: "info@mdrcindia.com",
  },
  {
    title: "Modern Diagnostic & Research Centre, Jammu",
    address:
      "JPDA Complex, Old Janipur, Jammu, Jammu and Kashmir 180007",
    phone1: "08287513177",
    email: "info@mdrcindia.com",
  },
  {
    title: "Modern Diagnostic & Research Centre, Varanasi",
    address:
      "Shiv Complex, Opposite Simaya Mall, Sunderpur, Varanasi - 221005",
    phone1: "9599815369",
    phone2: "9721322322",
    email: "info@mdrcindia.com",
  },
];

const quickContacts = [
  {
    icon: Phone,
    label: "Call Us",
    value: "01246712000 / 01246713000",
    href: "tel:01246713000",
    color: "text-[#005C96]",
    bg: "bg-[#E8F4FA]",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+91-8586988847",
    href: "https://wa.me/918586988847",
    color: "text-[#25D366]",
    bg: "bg-[#E8FAF0]",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@mdrcindia.com",
    href: "mailto:info@mdrcindia.com",
    color: "text-[#005C96]",
    bg: "bg-[#E8F4FA]",
  },
];

const LocationCard = ({ loc }) => (
  <div className="group flex h-full flex-col rounded-2xl border border-[#005C96]/8 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#0ECE91]/30 hover:shadow-[0_12px_32px_rgba(0,92,150,0.1)]">
    <div className="mb-3 flex items-start gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#005E91] to-[#0C759A] text-white">
        <MapPin size={18} />
      </span>
      <h3 className="text-base font-semibold leading-snug text-[#005C96]">
        {loc.title}
      </h3>
    </div>

    <p className="mb-3 flex gap-2 text-sm leading-relaxed text-gray-600">
      <MapPin size={16} className="mt-0.5 shrink-0 text-[#15AEE5]" />
      {loc.address}
    </p>

    <div className="mt-auto space-y-1.5">
      <a
        href={`tel:${loc.phone1}`}
        className="flex items-center gap-2 text-sm text-gray-700 transition hover:text-[#0ECE91]"
      >
        <Phone size={15} className="shrink-0 text-[#005C96]" />
        {loc.phone1}
      </a>

      {loc.phone2 && (
        <a
          href={`tel:${loc.phone2}`}
          className="flex items-center gap-2 text-sm text-gray-700 transition hover:text-[#0ECE91]"
        >
          <Phone size={15} className="shrink-0 text-[#005C96]" />
          {loc.phone2}
        </a>
      )}

      <a
        href={`mailto:${loc.email}`}
        className="flex items-center gap-2 text-sm text-gray-700 transition hover:text-[#0ECE91]"
      >
        <Mail size={15} className="shrink-0 text-[#005C96]" />
        {loc.email}
      </a>

      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-[#005C96] transition hover:text-[#0ECE91]"
      >
        View on map
        <ArrowUpRight size={14} />
      </a>
    </div>
  </div>
);

function ContactUs() {
  return (
    <div className="font-roboto">
      {/* BANNER — full image visible */}
      <section className="relative w-full overflow-hidden bg-[#003A5C] pt-24 sm:pt-28 lg:pt-32">
        <img
          src={CONTACT_BANNER}
          alt="Contact MDRC India"
          className="block w-full h-auto max-h-[280px] object-cover object-center sm:max-h-[320px] md:max-h-[360px] lg:max-h-[400px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003A5C]/70 via-[#005E91]/35 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <span className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium backdrop-blur-sm sm:text-sm">
            <GiDna1 className="text-[#0ECE91]" />
            MDRC Genomics
          </span>
          <h1 className="text-3xl font-bold drop-shadow-lg sm:text-4xl md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-2 text-sm text-white/90 sm:text-base">
            <Link to="/" className="transition hover:text-[#0ECE91]">
              Home
            </Link>
            {" / "}
            <span className="text-[#0ECE91]">Contact Us</span>
          </p>
        </div>
      </section>

      {/* QUICK CONTACT */}
      <section className="relative z-10 -mt-8 px-4 sm:-mt-10 sm:px-6">
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3">
          {quickContacts.map(({ icon: Icon, label, value, href, color, bg }) => (
            <a
              key={label}
              href={href}
              target={label === "WhatsApp" ? "_blank" : undefined}
              rel={label === "WhatsApp" ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-[0_8px_30px_rgba(0,92,150,0.1)] ring-1 ring-[#005C96]/8 transition hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(0,92,150,0.15)] sm:p-5"
            >
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${bg} ${color}`}>
                <Icon size={20} />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  {label}
                </p>
                <p className="truncate text-sm font-semibold text-gray-800 sm:text-[15px]">
                  {value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FORM + GET IN TOUCH */}
      <section className="bg-gradient-to-b from-[#F0FBFF] via-white to-[#F4F8FB] px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center lg:mb-10">
            <span className="text-sm font-medium text-[#15AEE5]">GET IN TOUCH</span>
            <h2 className="mt-1 text-2xl font-bold text-[#005C96] sm:text-3xl">
              Book Your Appointment
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-gray-600 sm:text-base">
              Schedule your genetic test or reach out to our expert team
            </p>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-3 lg:gap-10">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl bg-gradient-to-br from-[#005E91] to-[#0C759A] p-6 text-white shadow-lg">
                <h3 className="mb-4 text-xl font-semibold">Get in Touch</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone size={18} className="mt-0.5 shrink-0 text-[#0ECE91]" />
                    <div>
                      <p className="text-xs text-white/60">Phone</p>
                      <p className="text-sm font-medium">01246712000 / 01246713000</p>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/918586988847"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 transition hover:text-[#0ECE91]"
                  >
                    <FaWhatsapp size={18} className="mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-white/60">WhatsApp</p>
                      <p className="text-sm font-medium">+91-8586988847</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@mdrcindia.com"
                    className="flex items-start gap-3 transition hover:text-[#0ECE91]"
                  >
                    <Mail size={18} className="mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-white/60">Email</p>
                      <p className="text-sm font-medium">info@mdrcindia.com</p>
                    </div>
                  </a>
                </div>

                <a
                  href="#contact-form"
                  className="mt-6 block w-full rounded-xl bg-gradient-to-r from-[#05AF79] to-[#0ECE91] py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Book Appointment
                </a>
              </div>

              <div className="rounded-2xl border border-[#005C96]/10 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F4FA] text-[#005C96]">
                    <Clock size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Working Hours</p>
                    <p className="text-xs text-gray-500">Mon – Sat, 8:00 AM – 8:00 PM</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8FAF0] text-[#05AF79]">
                    <Headphones size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">24hr Response</p>
                    <p className="text-xs text-gray-500">We reply within one business day</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="bg-[#F4F8FB] px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center sm:mb-10">
            <span className="text-sm font-medium text-[#15AEE5]">OUR NETWORK</span>
            <h2 className="mt-1 text-2xl font-bold text-[#005C96] sm:text-3xl">
              Find Us Across India
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-600 sm:text-base">
              {locations.length} collection centres nationwide — same trusted quality everywhere
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc, index) => (
              <LocationCard key={index} loc={loc} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
