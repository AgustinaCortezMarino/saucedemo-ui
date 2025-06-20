describe('Cart Tests', () => {
  beforeEach(() => {
    cy.login();
  });
// Test cases for adding products to the cart
  it('should add a single product to the cart', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('have.text', '1');
  });

  it('should add multiple products to the cart', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    cy.get('.shopping_cart_badge').should('have.text', '3');
  });
});

// Test cases for removing products from the cart
describe('Cart Functionality - Remove Product', () => {
  beforeEach(() => {
    cy.login();
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('.shopping_cart_link').click();
  });

  it('should remove a product from the cart and update the badge correctly', () => {
    cy.get('.cart_item').should('have.length', 2);
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('be.visible').and('have.text', '1');
    cy.get('.cart_item')
      .should('have.length', 1)
      .and('contain.text', 'Sauce Labs Bike Light');
  });
});