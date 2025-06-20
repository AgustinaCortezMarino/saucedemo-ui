// This file is used to extend the Cypress Chainable interface with custom commands.
// This allows us to define custom commands that can be used in our tests.  

/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    login(): Chainable<void>;
    logout(): Chainable<void>; 
    addProductsToCart(products: string[]): Chainable<void>;
    fillCheckoutForm(firstName: string, lastName: string, zip: string): Chainable<void>;
  }
}
