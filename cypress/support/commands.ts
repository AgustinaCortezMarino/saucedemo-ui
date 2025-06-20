Cypress.Commands.add('login', () => {
  cy.visit('/');
  cy.get('[data-test="username"]').type('standard_user');
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('[data-test="login-button"]').click();
});


// Add multiple products to the cart
Cypress.Commands.add('addProductsToCart', (products: string[]) => {
  products.forEach(product => {
    cy.get(`[data-test="add-to-cart-${product}"]`).click();
  });
});

// Complete the checkout form with provided details
Cypress.Commands.add('fillCheckoutForm', (firstName: string, lastName: string, zip: string) => {
  cy.get('[data-test="firstName"]').type(firstName);
  cy.get('[data-test="lastName"]').type(lastName);
  cy.get('[data-test="postalCode"]').type(zip);
  cy.get('[data-test="continue"]').click();
});

// Logout functionality
Cypress.Commands.add('logout', () => {
  cy.get('#react-burger-menu-btn').click();
  cy.get('#logout_sidebar_link').should('be.visible').click();
});
