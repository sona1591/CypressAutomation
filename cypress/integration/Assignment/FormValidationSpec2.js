describe('Form Validations', () => {
    const LoginFormUrl = 'https://dev-fe.buttonshift.com/';
    const validEmail = 'test123@gmail.com';
    const invalidEmail = 'test123@com';
    const invalidPassword = 'short';
    const CommunityUrl='https://dev-fe.buttonshift.com/community'
    const ResetPassword = 'TestPassword@12345';
  
    beforeEach(() => {
      // Visit the form page before each test
      cy.visit( LoginFormUrl);
      cy.get('.css-m7nve9 > .MuiButton-contained').click()
    });
  
    it('should validate email format', () => {
      // Submit the form without filling any fields
      cy.get('[data-cy="auth-email-input"]').type(invalidEmail);
      cy.get('svg[font-size$="2rem"]').click()
   // Check if the required field validations are displayed
     cy.get('#mui-2-helper-text').should('exist');
      // Enter a valid email format and submit the form
      cy.get('[data-cy="auth-email-input"]').clear().type(validEmail);
     // cy.get('svg[font-size$="2rem"]').should('be.visible').click( {mutiple: true} )

    // Check if the email validation message is not displayed
    cy.get('[data-cy="auth-email-input"]').should('exist');
    });
  
    it('should ensure the password meets requirements', () => {
      // Enter an invalid password and submit the form
      cy.get('[data-cy="auth-email-input"]').type(invalidPassword)
      cy.get('svg[font-size$="2rem"]').click();
      // Check if the required field validations are displayed
      cy.get('#mui-2-helper-text').should('exist');
 // Enter a valid password and submit the form
 cy.get('[data-cy="auth-email-input"]').clear().type(ResetPassword);
 cy.get('svg[font-size$="2rem"]').should('be.visible').click( {mutiple: true} )
 // Check if the email validation message is not displayed
 cy.get('[data-cy="auth-email-input"]').should('exist');
});
   it('should submit the form with valid data', () => {

    // Enter valid email and password, then submit the form
    cy.get('[data-cy="auth-email-input"]').type(validEmail); 
      cy.get('svg[font-size$="2rem"]').should('be.visible').click( {mutiple: true} )
      cy.get("input[placeholder='Enter password']").type(ResetPassword); 
      cy.get('[data-cy="auth-login-button"]').click()
 
     // Verify successful login by redirect to the community page
    cy.url().should('eq', CommunityUrl);
     });
  });

