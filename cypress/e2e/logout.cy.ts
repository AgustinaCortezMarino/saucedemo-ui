describe('Logout Test', () => {
  beforeEach(() => {
    cy.login();
  });

  it('should logout successfully and redirect to login page', () => {
    cy.get('#react-burger-menu-btn').click();

    // Ensure the logout button is visible and click it
    cy.get('#logout_sidebar_link').should('be.visible').click();

    // Validate that the user is redirected to the login page
    cy.url().should('include', 'saucedemo.com');
    cy.get('[data-test="login-button"]').should('be.visible');
    cy.contains('Accepted usernames are').should('exist');
  });
});
