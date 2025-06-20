import { LoginPage } from  '../pages/loginPage'

describe('TC 1.1 - Valid Login', () => {
  const loginPage = new LoginPage()

  beforeEach(() => {
    loginPage.visit()
  })

  it('should login successfully with valid credentials', () => {
    cy.fixture('users').then((user) => {
      loginPage.login(user.valid.username, user.valid.password)
      cy.url().should('include', '/inventory')
      cy.get('.title').should('contain', 'Products')
    })
  })
})

describe('Login Tests', () => {
  const baseUrl = 'https://www.saucedemo.com/';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('should login successfully with valid credentials', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    cy.url().should('include', '/inventory');
    cy.get('.inventory_list').should('exist');
  });

  it('should show error on invalid login', () => {
    cy.get('[data-test="username"]').type('invalid_user');
    cy.get('[data-test="password"]').type('wrong_password');
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Username and password do not match');
  });
});
