// brands.mjs — every brand SuperOrdinary shows, names, or has been publicly
// reported working with. Plain .mjs so the logo fetch script and the site
// share one list. `group` is the era/channel the SOURCE supports; nothing is
// tagged TikTok Shop unless a source says so.

/**
 * @typedef {"tiktok" | "partner" | "amazon" | "china" | "bet"} Group
 * @typedef {{ name: string, domain: string, category: string, group: Group, note?: string, source: string }} Brand
 */

/** @type {Brand[]} */
export const BRANDS = [
  // ── Named as TikTok Shop partners: launch release, job postings, podcast ──
  { name: "Milk Makeup", domain: "milkmakeup.com", category: "Cosmetics", group: "tiktok", note: "Launch partner, Jan 2024", source: "PR Jan 2024; Livestream Operator posting" },
  { name: "BABOR", domain: "babor.com", category: "Skincare", group: "tiktok", note: "Launch partner, Jan 2024", source: "PR Jan 2024" },
  { name: "BYRD Hair", domain: "byrdhair.com", category: "Haircare", group: "tiktok", note: "Launch partner, Jan 2024", source: "PR Jan 2024" },
  { name: "Peter Thomas Roth", domain: "peterthomasroth.com", category: "Skincare", group: "tiktok", note: "“Viral relaunch” case study", source: "Job postings; podcast Jun 2026" },
  { name: "Laneige", domain: "laneige.com", category: "Skincare", group: "tiktok", source: "Job postings" },
  { name: "Glow Recipe", domain: "glowrecipe.com", category: "Skincare", group: "tiktok", source: "Brand Lead posting" },
  { name: "Touchland", domain: "touchland.com", category: "Personal care", group: "tiktok", source: "Job postings" },
  { name: "LG Beauty", domain: "lghnh.com", category: "Beauty group", group: "tiktok", source: "Livestream Operator posting" },
  { name: "Disney", domain: "disney.com", category: "Entertainment", group: "tiktok", source: "Job postings; PR Apr 2026" },
  { name: "H&M", domain: "hm.com", category: "Fashion", group: "tiktok", source: "Job postings; PR Apr 2026" },
  { name: "Olaplex", domain: "olaplex.com", category: "Haircare", group: "tiktok", note: "TikTok Shop and Tmall", source: "Company boilerplate; TechCrunch 2023" },
  { name: "Tower 28", domain: "tower28beauty.com", category: "Cosmetics", group: "tiktok", note: "TikTok Shop and Tmall", source: "Company boilerplate" },
  { name: "Crocs", domain: "crocs.com", category: "Footwear", group: "tiktok", note: "Studios microdrama with Shop tagging", source: "PR Jun 2026" },

  // ── On the 2026 investor-site brand wall (channel not stated) ──
  { name: "Fenty Beauty", domain: "fentybeauty.com", category: "Cosmetics", group: "partner", source: "Investor site" },
  { name: "Tatcha", domain: "tatcha.com", category: "Skincare", group: "partner", source: "Investor site" },
  { name: "Laura Mercier", domain: "lauramercier.com", category: "Cosmetics", group: "partner", source: "Investor site" },
  { name: "bareMinerals", domain: "bareminerals.com", category: "Cosmetics", group: "partner", source: "Investor site" },
  { name: "Clarins", domain: "clarins.com", category: "Skincare", group: "partner", source: "Investor site" },
  { name: "L’Oréal", domain: "loreal.com", category: "Beauty group", group: "partner", source: "Investor site" },
  { name: "Kenvue", domain: "kenvue.com", category: "Consumer health", group: "partner", source: "Investor site" },
  { name: "Neutrogena", domain: "neutrogena.com", category: "Skincare", group: "partner", source: "Investor site" },
  { name: "Aveeno", domain: "aveeno.com", category: "Skincare", group: "partner", source: "Investor site" },
  { name: "Church & Dwight", domain: "chd.com", category: "Consumer goods", group: "partner", source: "Investor site" },
  { name: "Hero Cosmetics", domain: "herocosmetics.us", category: "Skincare", group: "partner", source: "Investor site" },
  { name: "innisfree", domain: "innisfree.com", category: "Skincare", group: "partner", source: "Investor site" },
  { name: "The Face Shop", domain: "thefaceshop.com", category: "Skincare", group: "partner", source: "Investor site" },
  { name: "DKNY", domain: "dkny.com", category: "Fashion", group: "partner", source: "Investor site" },
  { name: "reVive Light Therapy", domain: "revivelighttherapy.com", category: "Beauty devices", group: "partner", source: "Investor site" },
  { name: "Nailboo", domain: "nailboo.com", category: "Nails", group: "partner", source: "Investor site" },
  { name: "Original Sprout", domain: "originalsprout.com", category: "Haircare", group: "partner", source: "Investor site" },
  { name: "True Sea Moss", domain: "trueseamoss.com", category: "Supplements", group: "partner", source: "Investor site" },
  { name: "Paddywax", domain: "paddywax.com", category: "Home fragrance", group: "partner", source: "Investor site" },
  { name: "K. Hall Studio", domain: "khallstudio.com", category: "Home fragrance", group: "partner", source: "Investor site" },
  { name: "Zinus", domain: "zinus.com", category: "Home", group: "partner", source: "Investor site" },
  { name: "GE Lighting", domain: "gelighting.com", category: "Home", group: "partner", source: "Investor site" },
  { name: "Craftmix", domain: "craftmix.com", category: "Beverage", group: "partner", source: "Investor site" },
  { name: "Haute Diggity Dog", domain: "hautediggitydog.com", category: "Pet", group: "partner", source: "Investor site" },
  { name: "Barrel & Oak", domain: "barrelandoak.com", category: "Grooming", group: "partner", source: "Investor site" },

  // ── U.S. Amazon partners, 2021–2023 (trade press) ──
  { name: "Boy Smells", domain: "boysmells.com", category: "Home fragrance", group: "amazon", source: "GCI; Cosmetics Business" },
  { name: "111SKIN", domain: "111skin.com", category: "Skincare", group: "amazon", source: "GCI" },
  { name: "NuFACE", domain: "mynuface.com", category: "Beauty devices", group: "amazon", source: "GCI" },
  { name: "Erno Laszlo", domain: "ernolaszlo.com", category: "Skincare", group: "amazon", source: "GCI" },
  { name: "Sabon", domain: "sabonnyc.com", category: "Bath & body", group: "amazon", source: "GCI" },
  { name: "Peace Out", domain: "peaceoutskincare.com", category: "Skincare", group: "amazon", source: "GCI" },
  { name: "Gisou", domain: "gisou.com", category: "Haircare", group: "amazon", source: "GCI" },
  { name: "Joanna Vargas", domain: "joannavargas.com", category: "Skincare", group: "amazon", note: "Controlling stake, 2022", source: "BeautyMatter" },
  { name: "Biossance", domain: "biossance.com", category: "Skincare", group: "amazon", note: "Also China, 2021", source: "BeautyMatter; Amyris PR" },
  { name: "Dr. Brandt", domain: "drbrandtskincare.com", category: "Skincare", group: "amazon", source: "BeautyMatter" },
  { name: "Herbivore", domain: "herbivorebotanicals.com", category: "Skincare", group: "amazon", source: "GCI" },
  { name: "Mario Badescu", domain: "mariobadescu.com", category: "Skincare", group: "amazon", source: "Business of Fashion" },
  { name: "Physicians Formula", domain: "physiciansformula.com", category: "Cosmetics", group: "amazon", source: "Business of Fashion" },

  // ── China era, 2018–2022 (Tmall, Douyin, Xiaohongshu) ──
  { name: "Farmacy", domain: "farmacybeauty.com", category: "Skincare", group: "china", note: "First flagship; later P&G, per SuperOrdinary", source: "Investor site" },
  { name: "Drunk Elephant", domain: "drunkelephant.com", category: "Skincare", group: "china", note: "Later acquired by Shiseido", source: "Investor site; ACG PR 2021" },
  { name: "The Ordinary", domain: "theordinary.com", category: "Skincare", group: "china", note: "Later acquired by Estée Lauder", source: "Investor site; ACG PR 2021" },
  { name: "Supergoop!", domain: "supergoop.com", category: "Suncare", group: "china", note: "Later Blackstone, per SuperOrdinary", source: "Investor site; Glossy 2020" },
  { name: "OUAI", domain: "theouai.com", category: "Haircare", group: "china", source: "ACG PR 2021; Glossy 2020" },
  { name: "The Honest Company", domain: "honest.com", category: "Personal care", group: "china", note: "Tmall Global launch, 2022", source: "Happi" },
  { name: "Malin+Goetz", domain: "malinandgoetz.com", category: "Skincare", group: "china", source: "Forbes 2021" },
  { name: "Nécessaire", domain: "necessaire.com", category: "Body care", group: "china", source: "GCI 2021" },
  { name: "Sunnies Face", domain: "sunniesface.com", category: "Cosmetics", group: "china", source: "Glossy 2020" },

  // ── Investments and incubations ──
  { name: "Good Light", domain: "goodlight.co", category: "Skincare", group: "bet", note: "Minority investment", source: "BeautyMatter" },
  { name: "Violette_FR", domain: "violettefr.com", category: "Cosmetics", group: "bet", note: "Seed participation, 2021", source: "BeautyMatter" },
  { name: "Lula", domain: "lulabeauty.com", category: "CBD beauty", group: "bet", note: "First incubated brand", source: "WWD" },
  { name: "Fanfix", domain: "fanfix.io", category: "Creator platform", group: "bet", note: "Acquired 2022", source: "Business Wire" },
];
