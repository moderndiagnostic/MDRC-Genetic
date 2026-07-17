import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, ArrowRight, Sparkles } from "lucide-react";
import { filterSearchIndex } from "./buildSearchIndex";

const SiteSearch = ({ onNavigate, className = "", variant = "inline" }) => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const isNavbar = variant === "navbar";
  const results = useMemo(() => filterSearchIndex(query, 8), [query]);
  const trimmed = query.trim();
  const showDropdown = isExpanded && isOpen && trimmed.length > 0;

  const openSearch = () => {
    setIsExpanded(true);
    setIsOpen(true);
    requestAnimationFrame(() => inputRef.current?.focus());
  };

  const closeSearch = () => {
    setIsOpen(false);
    setQuery("");
    setActiveIndex(0);
    setIsExpanded(false);
    inputRef.current?.blur();
  };

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        closeSearch();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const goToResult = (result) => {
    navigate(result.path);
    closeSearch();
    onNavigate?.();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeSearch();
      return;
    }

    if (!showDropdown) {
      if (event.key === "Enter" && results[0]) {
        event.preventDefault();
        goToResult(results[0]);
      }
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, Math.max(results.length - 1, 0)));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    } else if (event.key === "Enter" && results[activeIndex]) {
      event.preventDefault();
      goToResult(results[activeIndex]);
    }
  };

  const highlightMatch = (label) => {
    if (!trimmed) return label;
    const idx = label.toLowerCase().indexOf(trimmed.toLowerCase());
    if (idx === -1) return label;
    return (
      <>
        {label.slice(0, idx)}
        <mark className="rounded bg-[#15AEE5]/20 px-0.5 text-[#005E91] not-italic">
          {label.slice(idx, idx + trimmed.length)}
        </mark>
        {label.slice(idx + trimmed.length)}
      </>
    );
  };

  if (!isNavbar) {
    return (
      <div ref={containerRef} className={`relative ${className}`}>
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
            strokeWidth={2.25}
          />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder="Search services..."
            autoComplete="off"
            aria-label="Search site"
            className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-9 text-sm text-gray-700 shadow-sm outline-none transition focus:border-[#005E91] focus:bg-white focus:ring-2 focus:ring-[#15AEE5]/25"
          />
          {query && (
            <button
              type="button"
              onClick={closeSearch}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        {isOpen && trimmed.length > 0 && (
          <ResultsDropdown
            results={results}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            goToResult={goToResult}
            highlightMatch={highlightMatch}
            query={trimmed}
          />
        )}
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`relative flex h-10 w-10 items-center justify-center ${className}`}>
      <button
        type="button"
        onClick={() => (isExpanded ? closeSearch() : openSearch())}
        aria-label={isExpanded ? "Close search" : "Open search"}
        aria-expanded={isExpanded}
        className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
          isExpanded
            ? "bg-gradient-to-br from-[#005E91] to-[#0C759A] text-white shadow-[0_6px_16px_rgba(0,94,145,0.28)]"
            : "border border-[#C9E4F2] bg-gradient-to-br from-[#E8F6FB] to-white text-[#005E91] shadow-[0_4px_12px_rgba(0,94,145,0.1)] hover:border-[#15AEE5]/60 hover:from-[#005E91] hover:to-[#0C759A] hover:text-white hover:shadow-[0_6px_16px_rgba(0,94,145,0.22)]"
        }`}
      >
        {isExpanded ? (
          <X className="h-[18px] w-[18px]" strokeWidth={2.4} />
        ) : (
          <Search className="h-[18px] w-[18px]" strokeWidth={2.4} />
        )}
      </button>

      {/* Opens BELOW icon — never covers nav menus */}
      {isExpanded && (
        <div className="absolute right-0 top-[calc(100%+0.6rem)] z-[10050] w-[min(22rem,90vw)]">
          <div className="overflow-hidden rounded-2xl border border-[#E2EEF5] bg-white shadow-[0_18px_50px_rgba(15,23,42,0.16)]">
            <div className="flex items-center gap-2 border-b border-[#Eef5f9] px-3 py-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#005E91] to-[#0C759A] text-white">
                <Search className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setIsOpen(true);
                }}
                onFocus={() => setIsOpen(true)}
                onKeyDown={handleKeyDown}
                placeholder="Search tests, panels..."
                autoComplete="off"
                aria-label="Search site"
                aria-expanded={showDropdown}
                aria-controls="site-search-results"
                className="h-9 min-w-0 flex-1 bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setActiveIndex(0);
                    inputRef.current?.focus();
                  }}
                  aria-label="Clear search"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {showDropdown && (
              <ResultsDropdown
                results={results}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                goToResult={goToResult}
                highlightMatch={highlightMatch}
                query={trimmed}
                embedded
              />
            )}

            {!trimmed && (
              <p className="px-4 py-3 text-xs text-gray-500">
                Try “NIPT”, “Vitamin D”, “Oncology”, or “NGS”.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

function ResultsDropdown({
  results,
  activeIndex,
  setActiveIndex,
  goToResult,
  highlightMatch,
  query,
  embedded = false,
}) {
  return (
    <div
      id="site-search-results"
      className={
        embedded
          ? "max-h-72 overflow-y-auto"
          : "absolute right-0 top-[calc(100%+0.55rem)] z-[10050] w-[min(22rem,90vw)] overflow-hidden rounded-2xl border border-[#E2EEF5] bg-white shadow-[0_18px_50px_rgba(15,23,42,0.16)]"
      }
    >
      {!embedded && (
        <div className="flex items-center gap-2 border-b border-[#Eef5f9] bg-gradient-to-r from-[#F3FAFD] to-white px-3.5 py-2.5">
          <Sparkles className="h-3.5 w-3.5 text-[#15AEE5]" />
          <p className="text-xs font-medium text-[#005E91]">
            {results.length > 0
              ? `${results.length} suggestion${results.length === 1 ? "" : "s"} for “${query}”`
              : `No matches for “${query}”`}
          </p>
        </div>
      )}

      {embedded && (
        <div className="flex items-center gap-2 border-b border-[#Eef5f9] bg-[#F7FBFD] px-3.5 py-2">
          <Sparkles className="h-3.5 w-3.5 text-[#15AEE5]" />
          <p className="text-xs font-medium text-[#005E91]">
            {results.length > 0
              ? `${results.length} suggestion${results.length === 1 ? "" : "s"}`
              : "No matches found"}
          </p>
        </div>
      )}

      {results.length > 0 ? (
        <ul className={`${embedded ? "" : "max-h-72 overflow-y-auto"} py-1.5`}>
          {results.map((result, index) => (
            <li key={result.id}>
              <button
                type="button"
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => goToResult(result)}
                className={`flex w-full items-start gap-3 px-3.5 py-2.5 text-left transition ${
                  index === activeIndex
                    ? "bg-gradient-to-r from-[#E8F6FB] to-white"
                    : "hover:bg-gray-50"
                }`}
              >
                <span
                  className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                    index === activeIndex
                      ? "bg-gradient-to-br from-[#005E91] to-[#0C759A] text-white"
                      : "bg-[#F0F7FB] text-[#005E91]"
                  }`}
                >
                  <Search className="h-3.5 w-3.5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold text-gray-800">
                    {highlightMatch(result.label)}
                  </span>
                  <span className="mt-0.5 block truncate text-[11px] text-gray-500">
                    {result.category}
                  </span>
                </span>
                <ArrowRight
                  className={`mt-1.5 h-3.5 w-3.5 shrink-0 transition ${
                    index === activeIndex ? "text-[#005E91] opacity-100" : "text-gray-300 opacity-0"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="px-4 py-5 text-center text-sm text-gray-500">
          Try another keyword like “NIPT”, “Vitamin D”, or “Oncology”.
        </p>
      )}
    </div>
  );
}

export default SiteSearch;
