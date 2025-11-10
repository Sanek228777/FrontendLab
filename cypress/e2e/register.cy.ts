describe('Register Page', () => {
  beforeEach(() => {
    cy.visit('/register');
  });

  it('повинен успішно зареєструвати користувача (позитивний сценарій)', () => {
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('123456');
    cy.get('button[type="submit"]').click();

    cy.contains('Реєстрація успішна').should('be.visible');
  });

  it('повинен показати помилку при незаповнених полях (негативний сценарій)', () => {
    cy.get('button[type="submit"]').click();
    cy.contains('Будь ласка, заповніть усі поля').should('be.visible');
  });
});
