describe('Cart Tests', () => {
  beforeEach(() => {
    cy.login();
  });

  it('should add a single product to the cart', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('have.text', '1');
  });

  it('should add multiple products to the cart', () => {
    // Adding first product
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // second product
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    // third product
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();

    // Verify the cart badge
    cy.get('.shopping_cart_badge').should('have.text', '3');
  });
});

describe('Cart Functionality - Remove Product', () => {
  beforeEach(() => {
    cy.login();

    // Ensure we have products in the cart before testing removal
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    // Navigate to the cart
    cy.get('.shopping_cart_link').click();
  });

  it('should remove a product from the cart and update the badge correctly', () => {
    // Validate that both products are in the cart
    cy.get('.cart_item').should('have.length', 2);

    // delte one product
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();

    // Badge should contain 1 product
    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('have.text', '1');

    // Validate that the removed product is no longer in the cart
    cy.get('.cart_item')
      .should('have.length', 1)
      .and('contain.text', 'Sauce Labs Bike Light');
  });
});


