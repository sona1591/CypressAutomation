describe('User Signup and Login', () => {
   
    const loginUrl = 'https://dev-fe.buttonshift.com/';
    const validEmail = 'test123@gmail.com';
    const validPassword = 'TestPassword@123';
    const ResetPassword = 'TestPassword@12345';
    const CommunityUrl='https://dev-fe.buttonshift.com/community'
  
    it('should sign up a new user', () => {
      // Visit the signup page
      cy.visit(loginUrl);
      //Click on signup
      cy.get('.css-m7nve9 > .MuiButton-contained').click()
      //Enter valid mail
      cy.get('[data-cy="auth-email-input"]').type(validEmail); 
      //Click on arrow button
      cy.get('svg[font-size$="2rem"]').should('be.visible').click( {mutiple: true} )
      //Enter valid password
      cy.get("input[placeholder='Enter password']").type(validPassword); 
      //Click on login button
      cy.get('[data-cy="auth-login-button"]').click()
      //click on forget password link
      cy.get('[data-cy="login-forgot-password-button"]').click()
      //Enter otp
      cy.get('[aria-label="Please enter OTP character 1"]').type('123456')
      //click on arrow button
      cy.get('svg[font-size$="2rem"]').should('be.visible').click( {mutiple: true} )
      //enter password in create password field
      cy.get("input[placeholder='Enter password']").type(ResetPassword); 
      //again retype the password for confirmation
      cy.get("input[placeholder='Retype password']").type(ResetPassword);
      //click on arrow button
      cy.get('svg[font-size$="2rem"]').should('be.visible').click( {mutiple: true} ) 
      //verify that page has community url 
      cy.url().should('eq', CommunityUrl);
      //click on menu button
      cy.get('.MuiFab-colorInherit > .MuiBox-root > .MuiAvatar-root').click()
      //click on logout button
      cy.get('[d="M88.43,80.61h-49.74c-2.21,0-4-1.79-4-4s1.79-4,4-4h49.74c2.21,0,4,1.79,4,4s-1.79,4-4,4Z"]').click()
     //clcik on login button
      cy.get('#root1 > .MuiBackdrop-root').click()
});
it('should login an existing user', () => {
    // Visit the login page
    cy.visit(loginUrl);
    cy.get('.css-m7nve9 > .MuiButton-text').click()
    // Enter valid login credentials and click on arrow button
    cy.get('[data-cy="auth-email-input"]').type(validEmail); 
    cy.get('svg[font-size$="2rem"]').should('be.visible').click( {mutiple: true} )
    //Enter password
    cy.get('[data-cy="auth-password-input"]').type(ResetPassword);
   // Submit the login form
   cy.get('[data-cy="auth-login-button"]').click()
// Verify successful login by redirect to the community page
    cy.url().should('eq', CommunityUrl);
   });
});

