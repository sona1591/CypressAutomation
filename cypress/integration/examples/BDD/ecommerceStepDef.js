import {Given,When,And,Then } from "Cypress-cucumber-preprocessor/steps";
const homepage=new HomePage()
const productspage=new ProductsPage()

Given ("I open Ecommerce Page",()=>
{
    cy.visit(Cypress.env('url')+"/angularpractice/")

})

When ("I add items into the cart",()=>
{
    homepage.getShopTab().click()

    this.data.productName.forEach(function(element){
    cy.selectProduct(element)
     });
     productspage.CheckOutButton().click();
})
And  ("validate the total product price",()=>
{
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {


        const amount = $el.text()
        var res = amount.split(" ")
        res = res[1].trim()
        sum = Number(sum) + Number(res)
  
      }).then(function () {
        cy.log(sum)
      })
      cy.get('h3 strong').then(function (element) {
        const amount = element.text()
        var res = amount.split(" ")
        var total = res[1].trim()
        expect(Number(total)).to.equal(sum)
  
})
})
Then("Then Select the country, click on submit and verify thankyou msg",()=>
{
    cy.contains('Checkout').click()
    cy.get('#country').type('India')
    cy.get('.suggestions > ul > li > a').click()
    cy.get("#checkbox2").click({force: true})
    cy.get('input[type="submit"]').click()
    //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
    cy.get('.alert').then(function(element)
    {
       const actualText=element.text()
       expect(actualText.includes('Success')).to.be.true
})
})
