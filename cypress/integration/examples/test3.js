/// <reference types="Cypress" />
 
describe('My Third Suite', function() 
{
 
it('My Third Test case',function() {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get('input[type="checkbox"]').check(['option2','option3'])

    //static dropdown
    cy.get('select').select('option1').should('have.value','option1')

    //Dynamic Dropdowns
    cy.get('#autocomplete').type('ind')
    cy.get(".ui-menu-item div").each(($e1, index, $list) => {
    if($e1.text()=="India")
    {
        //$e1.click()
        cy.wrap($e1).click()
    }
    })
    //autocomplete
    cy.get('#autocomplete').should('have.value',"India")
    //visible invisible
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')
    //radio buttons
    cy.get('input[type="radio"]').check(['radio1','radio3'])
    cy.get('[value="radio2"]').check().should('be.checked')


})
})