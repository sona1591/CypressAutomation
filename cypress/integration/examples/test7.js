/// <reference types="Cypress" />
 
describe('Handling MouseHover', function() 
{
    it('mouse hover test case',function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')

    })
})