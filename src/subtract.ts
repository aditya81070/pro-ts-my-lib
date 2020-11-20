import product = require("./legacy"); // normal condition
// import legacy from './legacy'  // with esModuleInterop true
product(4, 4);
/**
 * Calculate the difference between two numbers
 * @param a - first number
 * @param b - second number
 *
 * @beta
 */
export function subtract(a: number, b: number): number {
  return a - b;
}
