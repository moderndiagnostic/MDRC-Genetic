import { navLinks } from "./navLinks";
import { ngsPanelTests } from "../ModernDNAPanel/NGSPanel/ngsPanelTests";

const extraPages = [
  {
    label: "Tandem Mass Spectrometry (TMS)",
    path: "/services/tandem-mass-spectrometry-tms",
    category: "Services",
  },
  {
    label: "Terms and Conditions",
    path: "/terms-and-conditions",
    category: "Legal",
  },
  {
    label: "Privacy Policy",
    path: "/privacy-policy",
    category: "Legal",
  },
];

function walkNavItems(items, trail = []) {
  const results = [];

  for (const item of items) {
    const nextTrail = item.label ? [...trail, item.label] : trail;

    if (item.path && item.path !== "#") {
      results.push({
        id: `${item.path}-${item.label}`,
        label: item.label,
        path: item.path,
        category: trail.length ? trail.join(" › ") : "Main",
        keywords: [...nextTrail, item.path].join(" ").toLowerCase(),
      });
    }

    if (item.dropdown?.length) {
      results.push(...walkNavItems(item.dropdown, nextTrail));
    }
  }

  return results;
}

function buildNgsTestEntries() {
  return ngsPanelTests.map((test) => ({
    id: `ngs-${test.name}`,
    label: test.name,
    path: "/services/modern-dna-panels/ngs-panels",
    category: "NGS Panels › Tests",
    keywords: `ngs panel test ${test.name}`.toLowerCase(),
  }));
}

function dedupeEntries(entries) {
  const seen = new Set();

  return entries.filter((entry) => {
    const key = `${entry.path}::${entry.label}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export const searchIndex = dedupeEntries([
  ...walkNavItems(navLinks),
  ...extraPages.map((page) => ({
    id: `${page.path}-${page.label}`,
    label: page.label,
    path: page.path,
    category: page.category,
    keywords: `${page.category} ${page.label} ${page.path}`.toLowerCase(),
  })),
  ...buildNgsTestEntries(),
]);

export function filterSearchIndex(query, limit = 12) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];

  const terms = normalized.split(/\s+/).filter(Boolean);

  return searchIndex
    .filter((entry) => {
      const haystack = `${entry.label} ${entry.category} ${entry.keywords}`.toLowerCase();
      return terms.every((term) => haystack.includes(term));
    })
    .slice(0, limit);
}
