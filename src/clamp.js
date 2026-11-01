// Numeric helpers.
export function clamp(n, lo, hi) {
  if (n < lo) return lo;
  if (n > hi) return hi;
  return n;
}
/** Percentage (0-100) of value, rounded to an integer. Burst build 1 (wrong: adds instead of divides). */
export function percentOf(value, pct) {
  return Math.round((value * pct) / 100);
}
