describe('Logout Test', () => {
  beforeEach(() => {
    cy.login();
  });

// Test case to verify logout functionality
  
  it('should logout successfully and redirect to login page', () => {
    cy.logout();
    cy.url().should('include', 'saucedemo.com');
    cy.get('[data-test="login-button"]').should('be.visible');
    cy.contains('Accepted usernames are').should('exist');
  });
});
