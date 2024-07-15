/// <reference types="cypress" />


describe('it is my first test suite',function(){
    it('my first test case',function(){
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.get(".search-keyword").type("cu");
cy.wait(4000)
//selenium get hit url in browser, cypress get acts like findelement of selenium
cy.get(".product:visible").should('have.length',2)
//parent child chaining
cy.get('.products').as('productLocator')
cy.get('@productLocator').find('.product').should('have.length',2)
cy.get(':nth-child(2) > .product-action > button').click()
cy.get('@productLocator').find('.product').eq(0).contains('ADD TO CART').click().then(function()
{
console.log('sf')
})

cy.get("@productLocator").find('.product').each(($el, index, $list) => {

const textVeg=$el.find('h4.product-name').text()

if (textVeg.includes('Cucumber'))
{
    $el.find('button').click()
}
})
//assert if logo text is correctly displayed
cy.get('.brand').should('have.text','GREENKART')
 
//this is to print in logs
cy.get('.brand').then(function(logoelement)
{
    cy.log(logoelement.text())
 
})
//const logo=cy.get('.brand')
//cy.log(cy.get('.brand').text())
// cy.log(logo.text())
 

    })

})