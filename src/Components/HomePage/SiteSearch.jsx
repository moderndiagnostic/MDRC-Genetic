import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { filterSearchIndex } from "./buildSearchIndex";

const inputStyles = {
  navbar:
    "h-9 rounded-lg border border-gray-200 bg-gray-50 pl-9 pr-8 text-sm text-gray-600 placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-1 focus:ring-green-500/25",
  inline:
    "h-10 rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-9 text-sm shadow-sm focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-500/20",
};

const SiteSearch = ({ onNavigate, className = "", variant = "inline" }) => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const results = useMemo(() => filterSearchIndex(query), [query]);
  const showDropdown = isOpen && query.trim().length > 0;
  const isNavbar = variant === "navbar";

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeSearch = () => {
    setIsOpen(false);
    setQuery("");
    setActiveIndex(0);
  };

  const goToResult = (result) => {
    navigate(result.path);
    closeSearch();
    onNavigate?.();
  };

  const handleKeyDown = (event) => {
    if (!showDropdown) {
      if (event.key === "Escape") closeSearch();
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    } else if (event.key === "Enter" && results[activeIndex]) {
      event.preventDefault();
      goToResult(results[activeIndex]);
    } else if (event.key === "Escape") {
      closeSearch();
      inputRef.current?.blur();
    }
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
          strokeWidth={2.25}
        />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={isNavbar ? "Search.." : "Search services..."}
          aria-label="Search site"
          aria-expanded={showDropdown}
          aria-controls="site-search-results"
          className={`w-full text-gray-700 outline-none transition ${inputStyles[variant] ?? inputStyles.inline}`}
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

      {showDropdown && (
        <div
          id="site-search-results"
          className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-[10050] max-h-80 overflow-y-auto rounded-xl border border-gray-100 bg-white shadow-2xl"
        >
          {results.length > 0 ? (
            <ul className="py-2">
              {results.map((result, index) => (
                <li key={result.id}>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => goToResult(result)}
                    className={`flex w-full flex-col gap-0.5 px-4 py-2.5 text-left transition ${
                      index === activeIndex ? "bg-green-50" : "hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-sm font-medium text-gray-800">
                      {result.label}
                    </span>
                    <span className="text-xs text-gray-500">{result.category}</span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-3 text-sm text-gray-500">
              No matching pages or topics found.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default SiteSearch;
