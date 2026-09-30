// economics.ts — defaults for the illustrative models. These are a plausible
// mid-market beauty SKU, not SuperOrdinary's numbers; the page labels them so.

export interface SkuInputs {
  price: number;
  discount: number;
  cogs: number;
  referral: number;
  affiliateShare: number;
  commission: number;
  adShare: number;
  fulfillment: number;
  sampleCost: number;
  returns: number;
}

export const SKU_DEFAULTS: SkuInputs = {
  price: 32,
  discount: 0.12,
  cogs: 0.22,
  referral: 0.08,
  affiliateShare: 0.6,
  commission: 0.2,
  adShare: 0.12,
  fulfillment: 3.5,
  sampleCost: 1.2,
  returns: 0.05,
};

export interface AccountInputs {
  gmv: number;
  aov: number;
  retainer: number;
  gmvShare: number;
  teamCost: number;
  liveHours: number;
  liveCostPerHour: number;
  wholesale: number;
}

export const ACCOUNT_DEFAULTS: AccountInputs = {
  gmv: 150_000,
  aov: 32,
  retainer: 6_000,
  gmvShare: 0.05,
  teamCost: 8_000,
  liveHours: 30,
  liveCostPerHour: 150,
  wholesale: 0.35,
};
