import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { applySeoForPath } from "../lib/seo";

/**
 * Mounted once at the app root. Watches the current route and keeps
 * document.title, meta description/keywords, canonical link and
 * OG/Twitter tags in sync with a per-page SEO map, so every page has
 * unique, search-optimized metadata without needing an extra per-page
 * head-management dependency.
 */
function RouteSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    applySeoForPath(pathname);
  }, [pathname]);

  return null;
}

export default RouteSeo;
