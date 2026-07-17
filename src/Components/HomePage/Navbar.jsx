import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Home } from "lucide-react";
import PopupForm from "../PopupForm";
import SiteSearch from "./SiteSearch";
import { navLinks } from "./navLinks";

const logo =
  "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827827/vite-project/vgzwrlq8snrlmmgcsr1l.webp";

  const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openMain, setOpenMain] = useState(null);
    const [openSub, setOpenSub] = useState(null);
    const location = useLocation();
    const [showPopup, setShowPopup] = useState(false);
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

  return (
    <>
      <nav className="fixed top-9 left-0 right-0 z-50 bg-white shadow-sm">

        {/* Main Header */}
        <div className="w-full max-w-[1680px] mx-auto px-4 lg:px-6">

          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 h-16 lg:h-[4.75rem]">

            {/* Left: Logo */}
            <Link to="/" className="shrink-0 justify-self-start">
              <img src={logo} alt="MODERN Diagnostic & Research Centre" className="h-11 lg:h-14 w-auto" />
            </Link>

            {/* Center: Nav links */}
            <div className="hidden xl:flex items-center justify-center gap-1 2xl:gap-1.5 text-[15px] 2xl:text-base text-gray-700">
                {navLinks.map((link, index) => (
                  <div key={index} className="relative group shrink-0 font-semibold">

                    {!link.dropdown ? (
                      <Link
                        to={link.path}
                        aria-label={link.path === "/" ? "Home" : undefined}
                        title={link.path === "/" ? "Home" : undefined}
                        className={`block whitespace-nowrap px-2.5 2xl:px-3 py-2 rounded-lg font-semibold transition-colors ${
                          location.pathname === link.path &&
                          navLinks.findIndex((item) => item.path === location.pathname) === index
                            ? "bg-[#E8F6FB] text-[#005E91]"
                            : "hover:bg-gray-50 hover:text-[#005E91]"
                        } ${link.path === "/" ? "flex items-center justify-center" : ""}`}
                      >
                        {link.path === "/" ? (
                          <Home className="w-5 h-5" strokeWidth={2.25} />
                        ) : (
                          link.label
                        )}
                      </Link>
                    ) : (
                      <>
                        {link.label === "Metabolomics Services" ||
                        link.label === "Modern DNA Panels" ? (
                          <Link
                            to={link.path}
                            className="flex items-center gap-1 whitespace-nowrap px-2.5 2xl:px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-[#005E91] transition-colors"
                          >
                            {link.label}
                            <ChevronDown className="w-4 h-4 opacity-70" />
                          </Link>
                        ) : (
                          <button className="flex items-center gap-1 whitespace-nowrap px-2.5 2xl:px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-[#005E91] transition-colors">
                            {link.label}
                            <ChevronDown className="w-4 h-4 opacity-70" />
                          </button>
                        )}

                        {/* Dropdown */}
                        <div
                          className={`
                            absolute
                            top-full
                            z-[60]
                            bg-white
                            rounded-xl
                            shadow-xl
                            opacity-0
                            invisible
                            group-hover:opacity-100
                            group-hover:visible
                            transition-all
                            duration-200
                            ${
                              link.label === "Metabolomics Services"
                                ? "left-0 w-96 max-h-[calc(100vh-9rem)] overflow-visible"
                                : link.label === "Genomic Services" ||
                                  link.label === "Contact Us"
                                ? "left-0 w-72"
                                : "left-0 w-72"
                            }
                          `}
                        >
                          {link.dropdown.map((item, i) => (
                            <div key={i} className="relative group/item">
                              {item.dropdown ? (
                                <>
                                  <Link
                                    to={item.path}
                                    className="flex justify-between items-center gap-2 px-5 py-3 hover:bg-gray-50 font-medium"
                                  >
                                    <span>{item.label}</span>
                                    <ChevronDown className="w-4 h-4 shrink-0 -rotate-90" />
                                  </Link>

                                  <div
                                    className={`
                                      absolute
                                      top-0
                                      z-[70]
                                      w-80
                                      max-h-[calc(100vh-9rem)]
                                      overflow-y-auto
                                      bg-white
                                      rounded-xl
                                      shadow-xl
                                      opacity-0
                                      invisible
                                      group-hover/item:opacity-100
                                      group-hover/item:visible
                                      transition-all
                                      duration-200
                                      pointer-events-none
                                      group-hover/item:pointer-events-auto
                                      left-full
                                    `}
                                  >
                                    {item.dropdown.map((sub, j) => (
                                      <Link
                                        key={j}
                                        to={sub.path}
                                        className="block px-5 py-3 text-sm hover:bg-gray-50 font-medium leading-snug"
                                      >
                                        {sub.label}
                                      </Link>
                                    ))}
                                  </div>
                                </>
                              ) : (
                                <Link
                                  to={item.path}
                                  className="block px-5 py-3 hover:bg-gray-50 font-medium"
                                >
                                  {item.label}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
            </div>

            {/* Right: Search + Book Tests */}
            <div className="hidden xl:flex items-center gap-2 shrink-0 justify-self-end">
              <SiteSearch
                variant="navbar"
                onNavigate={() => setIsOpen(false)}
                className="shrink-0"
              />

              <button
                onClick={() => setShowPopup(true)}
                className="
                  h-10
                  bg-gradient-to-r from-[#005E91] to-[#0C759A]
                  hover:from-[#004E7A] hover:to-[#005E91]
                  text-white
                  px-4
                  2xl:px-5
                  rounded-full
                  font-semibold
                  whitespace-nowrap
                  transition-all
                  duration-300
                  shadow-[0_6px_16px_rgba(0,94,145,0.28)]
                  flex
                  items-center
                  justify-center
                  text-sm
                "
              >
                Book Tests
              </button>
            </div>

            <div className="flex items-center gap-2.5 shrink-0 xl:hidden justify-self-end col-start-3">
              <SiteSearch
                variant="navbar"
                onNavigate={() => setIsOpen(false)}
                className="shrink-0"
              />

              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100">

            <div className="flex flex-col p-4 text-gray-700">

              {navLinks.map((link, index) => (
                <div key={index}>

                  {!link.dropdown ? (
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      aria-label={link.path === "/" ? "Home" : undefined}
                      title={link.path === "/" ? "Home" : undefined}
                      className={`block px-3 py-3 hover:bg-gray-50 rounded-lg ${
                        link.path === "/" ? "flex items-center gap-2" : ""
                      }`}
                    >
                      {link.path === "/" ? (
                        <>
                          <Home className="w-5 h-5" strokeWidth={2.25} />
                          <span className="sr-only">Home</span>
                        </>
                      ) : (
                        link.label
                      )}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() =>
                          setOpenMain(openMain === index ? null : index)
                        }
                        className="w-full flex justify-between items-center px-3 py-3 font-medium"
                      >
                        {link.label}

                        <ChevronDown
                          className={`w-4 h-4 transition ${
                            openMain === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openMain === index && (
                        <div className="pl-4 border-l border-gray-100">

                      {link.dropdown.map((item, i) => (
  <div key={i}>

    {item.dropdown ? (
      <>
        <div className="flex justify-between items-center">
          <Link
            to={item.path}
            className="px-3 py-2 text-sm font-medium"
          >
            {item.label}
          </Link>

          <button
            onClick={() =>
              setOpenSub(
                openSub === `${index}-${i}`
                  ? null
                  : `${index}-${i}`
              )
            }
          >
            <ChevronDown
              className={`w-4 h-4 transition ${
                openSub === `${index}-${i}`
                  ? "rotate-180"
                  : ""
              }`}
            />
          </button>
        </div>

        {openSub === `${index}-${i}` && (
          <div className="pl-4 border-l border-gray-100 ml-2">


            {item.dropdown.map((sub, j) => (
              <Link
                key={j}
                to={sub.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-1 text-sm hover:bg-gray-50 rounded font-medium"
              >
                {sub.label}
              </Link>
            ))}

          </div>
        )}

      </>
    ) : (
      <Link
        to={item.path}
        onClick={() => setIsOpen(false)}
        className="block px-3 py-2 text-sm hover:bg-gray-50 rounded"
      >
        {item.label}
      </Link>
    )}

  </div>
))}

                        </div>
                      )}
                    </>
                  )}

                </div>
              ))}

              {/* MOBILE BUTTON */}
              <button
                onClick={() => setShowPopup(true)}
                className="
                  mt-4
                  bg-[#005E91]
                  hover:bg-[#004E7A]
                  text-white
                  py-3
                  text-center
                  rounded-xl
                  font-semibold
                  w-full
                  transition-all
                  duration-300
                "
              >
                Book Tests
              </button>

            </div>
          </div>
        )}
      </nav>

      {/* POPUP FORM */}
      {showPopup && (
        <PopupForm
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
};

export default Navbar;
