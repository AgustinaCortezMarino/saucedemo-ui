describe('Sort Products', () => {
  beforeEach(() => {
    cy.login();
    cy.get('[data-test="product-sort-container"]').should('be.visible');
  });

  // Test case to sort products by price from low to high

  it('should sort products by price from low to high', () => {
    cy.get('[data-test="product-sort-container"]').select('Price (low to high)');

    const prices: number[] = [];
    cy.get('.inventory_item_price').each(($el) => {
      const price = parseFloat($el.text().replace('$', ''));
      prices.push(price);
    }).then(() => {
      const sorted = [...prices].sort((a, b) => a - b);
      expect(prices).to.deep.equal(sorted);
    });
  });
});
