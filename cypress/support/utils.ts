// This file contains utility functions for Cypress tests
// and can be imported in test files as needed.
// This function calculates the total price of items in a cart
// including tax, given an array of item prices and a tax amount.
export function calculateTotalWithTax(itemPrices: number[], tax: number): number {
  return itemPrices.reduce((acc, val) => acc + val, 0) + tax;
}
