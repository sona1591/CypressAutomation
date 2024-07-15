/// <reference types="Cypress" />
 
describe('My fourth Suite', function() 
{
 
it('My fourth Test case',function() {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#alertbtn').click()
    cy.get('input[value="Confirm"]').click()
    //window:alert
    cy.on('window:alert', (str)=>
    {
        //mocha framework we are using cypress api to automate our browser
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })

    cy.on('window:confirm', (str)=>
    {
        //mocha framework we are using cypress api to automate our browser
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })



})
})