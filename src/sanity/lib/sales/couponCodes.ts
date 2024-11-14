export const COUPON_CODES = {
  OPENDAYS: "OPENDAYS",
} as const;

export type CouponCode = keyof typeof COUPON_CODES;
