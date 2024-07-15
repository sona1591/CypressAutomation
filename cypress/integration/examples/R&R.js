/// <reference types="cypress" />

describe('it is RR application',function(){
   
        before (function(){
            //run once before all the test in block
            cy.fixture('userData').then (function(userData)
            {
                //we are using this keyword to access data globally(anywhere in the class)
            this.userData=userData
        })
    })
    it('my first test case',function(){
        cy.visit("http://10.140.1.49/#/")

        cy.get(':nth-child(1) > .form-control').type(this.userData.username)
        cy.get("input[type='password']").type(this.userData.password)
        cy.get('.btn').click()
        cy.get('[routerlink="/selfnomination"] > .side-bar-title').click()
        cy.get(':nth-child(2) > .btn').click()
        cy.get(':nth-child(4) > :nth-child(3) > .form-group > .form-control').select("3")
        cy.get(':nth-child(5) > :nth-child(1) > .form-group > .form-control').select(1)
        cy.get('[for="star3half"]').click({force: true})
        cy.get('.col-sm-8 > .form-group > .form-control').type('testing purpose')
        cy.get('.mat-dialog-actions > .mat-primary > .mat-button-wrapper').click()
        cy.get('.p-toast-detail').then(function(element)
        {
           const actualText=element.text()
           expect(actualText.includes('Nomination')).to.be.true
        })
       

    })
})