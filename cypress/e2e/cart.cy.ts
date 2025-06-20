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
});

describe('Cart Tests', () => {
  beforeEach(() => {
    cy.login(); 
  });

  it('should add multiple products to the cart', () => {
    // Agregamos el primero
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Segundo
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    // Tercero
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();

    // Verificamos que el contador tenga el número 3
    cy.get('.shopping_cart_badge').should('have.text', '3');
  });
});

describe('Cart Functionality - Remove Product', () => {
  beforeEach(() => {
    cy.login();

    // Aseguramos productos en el carrito para testear la eliminación
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    // Vamos al carrito
    cy.get('.shopping_cart_link').click();
  });

  it('should remove a product from the cart and update the badge correctly', () => {
    // Validamos que hay 2 productos al inicio
    cy.get('.cart_item').should('have.length', 2);

    // Eliminamos uno
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();

    // Badge debería decir 1
    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('have.text', '1');

    // Validamos que sólo queda un producto y es el correcto
    cy.get('.cart_item')
      .should('have.length', 1)
      .and('contain.text', 'Sauce Labs Bike Light');
  });
});


