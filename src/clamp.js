// Numeric helpers.
export function clamp(n, lo, hi) {
  if (n < lo) return lo;
  if (n > hi) return hi;
  return n;
}
/** Percentage (0-100) of value, rounded to an integer. Burst build 4 (wrong: divides by 10). */
export function percentOf(value, pct) {
  return Math.round(value * pct / 10);
}
