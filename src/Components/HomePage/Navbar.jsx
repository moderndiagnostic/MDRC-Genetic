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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">

        {/* Top Bar */}
        <div className="h-12 bg-gray-100 flex items-center px-4 gap-4">
          <img
            src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828018/vite-project/xj4xw61kf7ppx5ovzv5w.svg"
            className="h-6 shrink-0"
          />

          <img
            src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828063/vite-project/sdx6ru1wht1omol4ghkh.svg"
            className="h-6 shrink-0"
          />
        </div>

        {/* Main Header */}
        <div className="w-full max-w-[1680px] mx-auto px-4 lg:px-6">

          <div className="flex items-center justify-between gap-4 h-16 lg:h-20">

            {/* Logo */}
            <Link to="/" className="shrink-0">
              <img src={logo} className="h-12 lg:h-14 w-auto" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden xl:flex flex-1 items-center justify-center gap-1 2xl:gap-2 text-[15px] 2xl:text-sm text-gray-700">

              {navLinks.map((link, index) => (
                <div key={index} className="relative group shrink-0 font-semibold">

                  {!link.dropdown ? (
                    <Link
                      to={link.path}
                      aria-label={link.path === "/" ? "Home" : undefined}
                      title={link.path === "/" ? "Home" : undefined}
                      className={`block whitespace-nowrap px-2 2xl:px-3 py-2 rounded font-semibold ${
                        location.pathname === link.path &&
                        navLinks.findIndex((item) => item.path === location.pathname) === index
                          ? "bg-gray-100"
                          : "hover:bg-gray-50"
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
                          className="flex items-center gap-1 whitespace-nowrap px-2 2xl:px-3 py-2 hover:text-primary"
                        >
                          {link.label}
                          <ChevronDown className="w-4 h-4" />
                        </Link>
                      ) : (
                        <button className="flex items-center gap-1 whitespace-nowrap px-2 2xl:px-3 py-2 hover:text-primary">
                        {link.label}
                        <ChevronDown className="w-4 h-4" />
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
                              ? "right-0 w-72"
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

        {/* LEVEL 2 DROPDOWN */}
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
            z-50
            pointer-events-none
            group-hover/item:pointer-events-auto
            ${
              link.label === "Genomic Services"
                ? "right-full"
                : "left-full"
            }
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

              <SiteSearch
                variant="navbar"
                onNavigate={() => setIsOpen(false)}
                className="w-32 2xl:w-40 shrink-0"
              />

              {/* BOOK TESTS BUTTON */}
              <button
                onClick={() => setShowPopup(true)}
                className="
                  bg-[#005E91]
                  hover:bg-[#004E7A]
                  text-white
                  px-4
                  2xl:px-6
                  py-3
                  rounded-xl
                  font-semibold
                  whitespace-nowrap
                  transition-all
                  duration-300
                  hover:scale-105
                  shadow-lg
                  flex
                  items-center
                  gap-2
                "
              >
                Book Tests
              </button>

            </div>

            <div className="flex items-center gap-2 shrink-0 xl:hidden">
              <SiteSearch
                variant="navbar"
                onNavigate={() => setIsOpen(false)}
                className="w-28 sm:w-32"
              />

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X /> : <Menu />}
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
