/// <reference types="cypress" />

describe('it is poise application',function(){
   
    before (function(){
        //run once before all the test in block
        cy.fixture('userCred').then (function(userCred)
        {
            //we are using this keyword to access data globally(anywhere in the class)
        this.userCred=userCred
    })
})
it('Reset Button test case',function(){
    cy.visit("http://10.140.0.132/#/")
    cy.get(':nth-child(3) > .form-control').type(this.userCred.username)
    cy.get("input[type='password']").type(this.userCred.password)
    cy.get('.pink-btn').click()
    cy.contains('Create Ticket ').click()
    cy.get('.row > :nth-child(1) > .form-group > .form-control').type('testing')
    cy.contains('label', 'Select Country').click()
    cy.contains('li[role="option"]', 'India').click();

    cy.contains('label', 'Select Ticket Type').click()
    cy.contains('li[role="option"]', 'Configuration').click();

    cy.contains('label', 'Select Category').click()
    cy.contains('li[role="option"]', 'Business Application').click();

    cy.contains('label', 'Select Sub Category').click()
    cy.contains('li[role="option"]', 'POISE').click();

    cy.get('.btn-warning').click();
   
    
  
})
})