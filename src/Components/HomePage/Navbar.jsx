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

          <div className="grid h-16 grid-cols-[auto_1fr_auto] items-center gap-2 sm:gap-3 lg:h-[4.75rem] xl:grid-cols-[1fr_auto_1fr]">

            {/* Left: Logo */}
            <Link to="/" className="shrink-0 justify-self-start">
              <img src={logo} alt="MODERN Diagnostic & Research Centre" className="h-10 w-auto sm:h-11 lg:h-14" />
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

            <div className="col-start-3 flex shrink-0 items-center gap-2 justify-self-end xl:hidden">
              <SiteSearch
                variant="navbar"
                onNavigate={() => setIsOpen(false)}
                className="shrink-0"
              />

              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 sm:h-10 sm:w-10"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="fixed inset-x-0 bottom-0 top-[calc(2.25rem+4rem)] z-[55] lg:top-[calc(2.25rem+4.75rem)] xl:hidden">
            <button
              type="button"
              aria-label="Close menu overlay"
              className="absolute inset-0 bg-[#001E32]/45 backdrop-blur-[2px]"
              onClick={() => setIsOpen(false)}
            />

            <aside className="relative ml-auto flex h-full w-[min(88vw,360px)] flex-col overflow-hidden border-l border-gray-100 bg-white shadow-[-18px_0_45px_rgba(15,23,42,0.18)]">
              <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
                <span className="text-sm font-semibold text-[#005E91]">Menu</span>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-700"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>

            <div className="flex min-h-0 flex-1 flex-col overflow-y-auto p-3 text-gray-700">

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
                        className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left font-medium hover:bg-gray-50"
                      >
                        {link.label}

                        <ChevronDown
                          className={`w-4 h-4 transition ${
                            openMain === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openMain === index && (
                        <div className="ml-3 border-l border-gray-100 pl-3">

                      {link.dropdown.map((item, i) => (
  <div key={i}>

    {item.dropdown ? (
      <>
        <div className="flex justify-between items-center">
          <Link
            to={item.path}
            onClick={() => setIsOpen(false)}
            className="min-w-0 flex-1 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-50"
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
            aria-label={`Toggle ${item.label}`}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full hover:bg-gray-50"
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
          <div className="ml-2 border-l border-gray-100 pl-3">


            {item.dropdown.map((sub, j) => (
              <Link
                key={j}
                to={sub.path}
                onClick={() => setIsOpen(false)}
                className="block rounded px-3 py-2 text-sm font-medium leading-snug hover:bg-gray-50"
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
        className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-50"
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
                onClick={() => {
                  setIsOpen(false);
                  setShowPopup(true);
                }}
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
            </aside>
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
