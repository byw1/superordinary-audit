// brands.mjs — brands SuperOrdinary shows or names publicly. Plain .mjs so the
// logo fetch script and the site share one list. `source` says where the
// relationship is shown; it does not say which channel each brand runs on
// unless `channel` is set from a source that says so.

/** @typedef {{ name: string, domain: string, category: string, group: "current" | "china", channel?: string, source: string }} Brand */

/** @type {Brand[]} */
export const BRANDS = [
  // Named as TikTok Shop partners in SuperOrdinary's own releases.
  { name: "Milk Makeup", domain: "milkmakeup.com", category: "Cosmetics", group: "current", channel: "TikTok Shop", source: "TikTok Shop launch release, Jan 2024" },
  { name: "BABOR", domain: "babor.com", category: "Skincare", group: "current", channel: "TikTok Shop", source: "TikTok Shop launch release, Jan 2024" },
  { name: "Crocs", domain: "crocs.com", category: "Footwear", group: "current", channel: "Studios · TikTok Shop", source: "Crocs microdrama release, Jun 2026" },

  // On the investor site's brand wall.
  { name: "Olaplex", domain: "olaplex.com", category: "Haircare", group: "current", source: "Investor site" },
  { name: "Laneige", domain: "laneige.com", category: "Skincare", group: "current", source: "Investor site" },
  { name: "Touchland", domain: "touchland.com", category: "Personal care", group: "current", source: "Investor site" },
  { name: "Peter Thomas Roth", domain: "peterthomasroth.com", category: "Skincare", group: "current", source: "Investor site" },
  { name: "Tatcha", domain: "tatcha.com", category: "Skincare", group: "current", source: "Investor site" },
  { name: "Fenty Beauty", domain: "fentybeauty.com", category: "Cosmetics", group: "current", source: "Investor site" },
  { name: "Laura Mercier", domain: "lauramercier.com", category: "Cosmetics", group: "current", source: "Investor site" },
  { name: "bareMinerals", domain: "bareminerals.com", category: "Cosmetics", group: "current", source: "Investor site" },
  { name: "Clarins", domain: "clarins.com", category: "Skincare", group: "current", source: "Investor site" },
  { name: "L’Oréal", domain: "loreal.com", category: "Beauty group", group: "current", source: "Investor site" },
  { name: "Kenvue", domain: "kenvue.com", category: "Consumer health", group: "current", source: "Investor site" },
  { name: "Neutrogena", domain: "neutrogena.com", category: "Skincare", group: "current", source: "Investor site" },
  { name: "Aveeno", domain: "aveeno.com", category: "Skincare", group: "current", source: "Investor site" },
  { name: "Church & Dwight", domain: "chd.com", category: "Consumer goods", group: "current", source: "Investor site" },
  { name: "innisfree", domain: "innisfree.com", category: "Skincare", group: "current", source: "Investor site" },
  { name: "The Face Shop", domain: "thefaceshop.com", category: "Skincare", group: "current", source: "Investor site" },
  { name: "Disney", domain: "disney.com", category: "Entertainment", group: "current", source: "Investor site" },
  { name: "H&M", domain: "hm.com", category: "Fashion", group: "current", source: "Investor site" },
  { name: "DKNY", domain: "dkny.com", category: "Fashion", group: "current", source: "Investor site" },
  { name: "Paddywax", domain: "paddywax.com", category: "Home fragrance", group: "current", source: "Investor site" },
  { name: "K. Hall Studio", domain: "khallstudio.com", category: "Home fragrance", group: "current", source: "Investor site" },
  { name: "Zinus", domain: "zinus.com", category: "Home", group: "current", source: "Investor site" },
  { name: "GE Lighting", domain: "gelighting.com", category: "Home", group: "current", source: "Investor site" },
  { name: "Nailboo", domain: "nailboo.com", category: "Nails", group: "current", source: "Investor site" },
  { name: "Barrel & Oak", domain: "barrelandoak.com", category: "Men’s grooming", group: "current", source: "Investor site" },
  { name: "Haute Diggity Dog", domain: "hautediggitydog.com", category: "Pet", group: "current", source: "Investor site" },
  { name: "True Sea Moss", domain: "trueseamoss.com", category: "Supplements", group: "current", source: "Investor site" },
  { name: "Original Sprout", domain: "originalsprout.com", category: "Haircare", group: "current", source: "Investor site" },
  { name: "Craftmix", domain: "craftmix.com", category: "Beverage", group: "current", source: "Investor site" },

  // China-era partners the investor site lists alongside their later exits.
  { name: "Drunk Elephant", domain: "drunkelephant.com", category: "Skincare", group: "china", channel: "China", source: "Investor site (later acquired by Shiseido)" },
  { name: "The Ordinary", domain: "theordinary.com", category: "Skincare", group: "china", channel: "China", source: "Investor site (later acquired by Estée Lauder)" },
  { name: "Supergoop!", domain: "supergoop.com", category: "Suncare", group: "china", channel: "China", source: "Investor site (later majority-acquired by Blackstone)" },
  { name: "Farmacy", domain: "farmacybeauty.com", category: "Skincare", group: "china", channel: "China", source: "Investor site" },
];
