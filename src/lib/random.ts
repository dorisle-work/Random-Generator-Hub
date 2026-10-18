/** Browser-side random helpers. Prefer the Web Crypto API for fair tool results. */
export function randomInt(min: number, max: number) {
  const lower = Math.ceil(min);
  const upper = Math.floor(max);
  const range = upper - lower + 1;

  if (range <= 0) throw new Error("Invalid random range");

  if (typeof crypto === "undefined" || !crypto.getRandomValues) {
    return Math.floor(Math.random() * range) + lower;
  }

  // Rejection sampling avoids modulo bias.
  const limit = Math.floor(0x100000000 / range) * range;
  const value = new Uint32Array(1);
  do {
    crypto.getRandomValues(value);
  } while (value[0] >= limit);

  return lower + (value[0] % range);
}

export function pickRandom<T>(items: readonly T[]) {
  if (items.length === 0) return undefined;
  return items[randomInt(0, items.length - 1)];
}

export function shuffle<T>(items: readonly T[]) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = randomInt(0, index);
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}
