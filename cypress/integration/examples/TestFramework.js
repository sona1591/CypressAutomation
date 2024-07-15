/// <reference types="Cypress" />
import HomePage from '../pageObjects/HomePage'
import ProductsPage from '../pageObjects/ProductsPage'
 
describe('my first test suite', function() {

    before (function(){
        //run once before all the test in block
        cy.fixture('example').then (function(data)
        {
            //we are using this keyword to access data globally(anywhere in the class)
        this.data=data
    })
})
    it('my first test case',function(){
       
        const homepage=new HomePage()
        const productspage=new ProductsPage()

        cy.visit(Cypress.env('url')+"/angularpractice/")

        homepage.getEditBox().type(this.data.name)
        //cy.get(':nth-child(1) > .form-control').type(this.data.name)
        homepage.getGender().select(this.data.gender)
        homepage.getTwoWayDataBinding().should('have.value',this.data.name)
        homepage.getEditBox().should('have.attr','minlength','2')
        homepage.getEnterpreneurButton().should('be.disabled')
       
        //click on the shop icon and select product and add to cart
        Cypress.config('defaultCommandTimeout',8000)
        homepage.getShopTab().click()

        this.data.productName.forEach(function(element){
        cy.selectProduct(element)
         });
         productspage.CheckOutButton().click();
         var sum=0
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
})
