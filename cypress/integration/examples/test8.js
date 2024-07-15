/// <reference types="Cypress" />
 
describe('Handling Calender', function() 
{
    it('calender test case',function() {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('[href="#/offers"]').click()



    })
})