import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Home, ChevronRight } from "lucide-react";
import { createPortal } from "react-dom";
import PopupForm from "../PopupForm";
import SiteSearch from "./SiteSearch";
import { navLinks } from "./navLinks";

const logo =
  "https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827827/vite-project/vgzwrlq8snrlmmgcsr1l.webp";

/** Viewport-aware nested flyout popup (desktop only) */
function NestedFlyout({ anchorEl, items, onClose, onNavigate, onMouseEnter }) {
  const panelRef = useRef(null);
  const [style, setStyle] = useState({ top: 0, left: 0, maxHeight: 320, opacity: 0 });

  useLayoutEffect(() => {
    if (!anchorEl || !panelRef.current) return;

    const gap = 4;
    const pad = 12;
    const rect = anchorEl.getBoundingClientRect();
    const panel = panelRef.current;
    const panelW = panel.offsetWidth || 320;
    const panelH = panel.scrollHeight;
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Prefer right; flip left if not enough room
    let left = rect.right + gap;
    if (left + panelW > vw - pad) {
      left = rect.left - panelW - gap;
    }
    left = Math.max(pad, Math.min(left, vw - panelW - pad));

    const maxHeight = Math.min(panelH, Math.max(160, vh - pad * 2));
    let top = rect.top;
    if (top + maxHeight > vh - pad) {
      top = Math.max(pad, vh - pad - maxHeight);
    }

    setStyle({ top, left, maxHeight, opacity: 1 });
  }, [anchorEl, items]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    const onScroll = () => onClose();
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onClose);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onClose);
    };
  }, [onClose]);

  return createPortal(
    <div
      ref={panelRef}
      role="menu"
      data-nav-flyout
      className="fixed z-[80] w-80 overflow-y-auto overscroll-contain rounded-xl border border-gray-100 bg-white py-1 shadow-2xl"
      style={{
        top: style.top,
        left: style.left,
        maxHeight: style.maxHeight,
        opacity: style.opacity,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onClose}
    >
      {items.map((sub, j) => (
        <Link
          key={j}
          to={sub.path}
          role="menuitem"
          onClick={onNavigate}
          className="block px-4 py-2.5 text-sm font-medium leading-snug text-gray-700 hover:bg-gray-50 hover:text-[#005E91]"
        >
          {sub.label}
        </Link>
      ))}
    </div>,
    document.body
  );
}

/** Desktop main dropdown — scrollable popup that fits the viewport */
function DesktopMenuDropdown({ link, index }) {
  const panelRef = useRef(null);
  const closeTimer = useRef(null);
  const [flyout, setFlyout] = useState(null); // { anchor, items, key }

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleCloseFlyout = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setFlyout(null), 160);
  };

  useEffect(() => () => clearCloseTimer(), []);

  useEffect(() => {
    const root = panelRef.current?.closest("[data-nav-group]");
    if (!root) return undefined;

    const onLeave = (e) => {
      // Keep open while moving into the portaled flyout
      const to = e.relatedTarget;
      if (to && (to.closest?.("[data-nav-flyout]") || to.closest?.("[data-nav-group]"))) {
        return;
      }
      scheduleCloseFlyout();
    };

    root.addEventListener("mouseleave", onLeave);
    return () => root.removeEventListener("mouseleave", onLeave);
  }, []);

  const openFlyout = (anchor, item, key) => {
    clearCloseTimer();
    setFlyout({ anchor, items: item.dropdown, key });
  };

  const isWide = link.label === "Metabolomics Services";
  const forceOpen = Boolean(flyout);

  return (
    <>
      <div
        ref={panelRef}
        className={`
          absolute top-full left-0 z-[60] mt-0.5
          max-h-[min(70vh,calc(100dvh-8.5rem))]
          overflow-y-auto overflow-x-hidden overscroll-contain
          rounded-xl border border-gray-100 bg-white py-1 shadow-2xl
          transition-opacity duration-150
          ${isWide ? "w-[22rem]" : "w-72"}
          ${
            forceOpen
              ? "opacity-100 visible pointer-events-auto"
              : "opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto"
          }
        `}
      >
        {link.dropdown.map((item, i) => {
          const key = `desk-${index}-${i}`;
          const hasNested = Boolean(item.dropdown?.length);
          const isOpen = flyout?.key === key;

          return (
            <div
              key={i}
              data-nav-row
              className={`relative flex items-stretch ${isOpen ? "bg-gray-50" : ""}`}
              onMouseEnter={(e) => {
                if (!hasNested) {
                  scheduleCloseFlyout();
                  return;
                }
                openFlyout(e.currentTarget, item, key);
              }}
            >
              <Link
                to={item.path}
                className="min-w-0 flex-1 px-4 py-2.5 font-medium leading-snug text-gray-700 hover:bg-gray-50 hover:text-[#005E91]"
              >
                {item.label}
              </Link>

              {hasNested && (
                <button
                  type="button"
                  aria-label={`Open ${item.label} submenu`}
                  aria-expanded={isOpen}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const anchor = e.currentTarget.closest("[data-nav-row]");
                    if (flyout?.key === key) {
                      setFlyout(null);
                    } else {
                      openFlyout(anchor, item, key);
                    }
                  }}
                  className="flex w-10 shrink-0 items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-[#005E91]"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}
            </div>
          );
        })}
      </div>

      {flyout && (
        <NestedFlyout
          anchorEl={flyout.anchor}
          items={flyout.items}
          onClose={scheduleCloseFlyout}
          onMouseEnter={clearCloseTimer}
          onNavigate={() => setFlyout(null)}
        />
      )}
    </>
  );
}

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
      setOpenMain(null);
      setOpenSub(null);
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    setOpenSub(null);
    setOpenMain(null);
  }, [location.pathname]);

  return (
    <>
      <nav className="fixed top-9 left-0 right-0 z-50 bg-white shadow-sm">
        {/* Main Header */}
        <div className="w-full max-w-[1680px] mx-auto px-4 lg:px-6">
          <div className="grid h-16 grid-cols-[auto_1fr_auto] items-center gap-2 sm:gap-3 lg:h-[4.75rem] xl:grid-cols-[1fr_auto_1fr]">
            {/* Left: Logo */}
            <Link to="/" className="shrink-0 justify-self-start">
              <img
                src={logo}
                alt="MODERN Diagnostic & Research Centre"
                className="h-10 w-auto sm:h-11 lg:h-14"
              />
            </Link>

            {/* Center: Nav links (desktop) */}
            <div className="hidden xl:flex items-center justify-center gap-1 2xl:gap-1.5 text-[15px] 2xl:text-base text-gray-700">
              {navLinks.map((link, index) => (
                <div
                  key={index}
                  data-nav-group
                  className="relative group shrink-0 font-semibold"
                >
                  {!link.dropdown ? (
                    <Link
                      to={link.path}
                      aria-label={link.path === "/" ? "Home" : undefined}
                      title={link.path === "/" ? "Home" : undefined}
                      className={`block whitespace-nowrap px-2.5 2xl:px-3 py-2 rounded-lg font-semibold transition-colors ${
                        location.pathname === link.path &&
                        navLinks.findIndex((item) => item.path === location.pathname) ===
                          index
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
                        <button
                          type="button"
                          className="flex items-center gap-1 whitespace-nowrap px-2.5 2xl:px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-[#005E91] transition-colors"
                        >
                          {link.label}
                          <ChevronDown className="w-4 h-4 opacity-70" />
                        </button>
                      )}

                      <DesktopMenuDropdown link={link} index={index} />
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
                type="button"
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
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 sm:h-10 sm:w-10"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU — unchanged accordion pattern */}
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
                        <div className="flex items-center justify-between gap-1">
                          <Link
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className="min-w-0 flex-1 rounded-lg px-3 py-3 font-medium hover:bg-gray-50"
                          >
                            {link.label}
                          </Link>

                          <button
                            type="button"
                            onClick={() =>
                              setOpenMain(openMain === index ? null : index)
                            }
                            aria-label={`Toggle ${link.label}`}
                            aria-expanded={openMain === index}
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-50"
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition ${
                                openMain === index ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </div>

                        {openMain === index && (
                          <div className="ml-2 max-h-[min(55vh,24rem)] overflow-y-auto overscroll-contain border-l border-gray-100 pl-2">
                            {link.dropdown.map((item, i) => (
                              <div key={i}>
                                {item.dropdown ? (
                                  <>
                                    <div className="flex items-center justify-between gap-1">
                                      <Link
                                        to={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className="min-w-0 flex-1 rounded-lg px-3 py-2 text-sm font-medium leading-snug hover:bg-gray-50"
                                      >
                                        {item.label}
                                      </Link>

                                      <button
                                        type="button"
                                        onClick={() =>
                                          setOpenSub(
                                            openSub === `${index}-${i}`
                                              ? null
                                              : `${index}-${i}`
                                          )
                                        }
                                        aria-label={`Toggle ${item.label}`}
                                        aria-expanded={openSub === `${index}-${i}`}
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
                                      <div className="ml-2 border-l border-gray-100 pl-2">
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
                                    className="block rounded-lg px-3 py-2 text-sm font-medium leading-snug hover:bg-gray-50"
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

                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setShowPopup(true);
                  }}
                  className="mt-4 w-full rounded-xl bg-[#005E91] py-3 text-center font-semibold text-white transition-all duration-300 hover:bg-[#004E7A]"
                >
                  Book Tests
                </button>
              </div>
            </aside>
          </div>
        )}
      </nav>

      {showPopup && (
        <PopupForm isOpen={showPopup} onClose={() => setShowPopup(false)} />
      )}
    </>
  );
};

export default Navbar;
