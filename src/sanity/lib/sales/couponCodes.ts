export const COUPON_CODES = {
  SOURGRAPES: 'SOURGRAPES'
} as const

export type CouponCode = keyof typeof COUPON_CODES
