import { calculateTotalWithTax } from '../support/utils';

describe('Checkout Flow - Happy Path', () => {
  beforeEach(() => {
    cy.login();
    cy.addProductsToCart([
      'sauce-labs-backpack',
      'sauce-labs-bike-light',
      'sauce-labs-bolt-t-shirt'
    ]);
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
    cy.fillCheckoutForm('Tina', 'Sparkle', '1234');
  });

// Test cases for the checkout process

  it('should complete checkout and validate total price', () => {
    let itemPrices: number[] = [];

    cy.get('.inventory_item_price').each(($el) => {
      const price = parseFloat($el.text().replace('$', ''));
      itemPrices.push(price);
    });

    cy.get('.summary_tax_label').invoke('text').then((taxText) => {
      const tax = parseFloat(taxText.replace('Tax: $', ''));
      const expectedTotal = calculateTotalWithTax(itemPrices, tax);

      cy.get('.summary_total_label').invoke('text').then((totalText) => {
        const displayedTotal = parseFloat(totalText.replace('Total: $', ''));
        expect(displayedTotal).to.be.closeTo(expectedTotal, 0.01);
      });
    });

    cy.get('[data-test="finish"]').click();
    cy.url().should('include', '/checkout-complete.html');
    cy.get('.complete-header')
      .should('be.visible')
      .and('have.text', 'Thank you for your order!');
    cy.get('.complete-text')
      .should('contain.text', 'Your order has been dispatched');
  });
});

// Test cases for the checkout process with negative scenarios
describe('Checkout Flow - Negative Path', () => {
  beforeEach(() => {
    cy.login();
    cy.addProductsToCart(['sauce-labs-backpack']);
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
  });

  it('should show error if required fields are missing', () => {
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]').should('be.visible').and('contain.text', 'Error: First Name is required');

    cy.get('[data-test="firstName"]').type('Tina');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]').should('be.visible').and('contain.text', 'Error: Last Name is required');

    cy.get('[data-test="lastName"]').type('Sparkle');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]').should('be.visible').and('contain.text', 'Error: Postal Code is required');
  });
});