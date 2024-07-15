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
it('Assign Ticket to Team test case',function(){
    cy.visit("http://10.140.0.132/#/")
    cy.get(':nth-child(3) > .form-control').type(this.userCred.username)
    cy.get("input[type='password']").type(this.userCred.password)
    cy.get('.pink-btn').click()
    //Click on all ticket page
    cy.get('.topnav > .active').click({force: true})
    //cy.get('.topnav > .active').click()
    cy.get('.topnav > :nth-child(3)').click()
    //open the 2nd ticket from the all ticket page list
    cy.get('[ng-reflect-index="0"] > :nth-child(4) > .issue-link').click()
    //cy.get('[.ul-contextmenu-selected] > :nth-child(4) > .issue-link').click()
    //Assign to queue 
    cy.contains('label', 'Select Team').click()
    cy.contains('li[role="option"]', 'Business Application others').click();
    cy.contains('label','New').click()
    cy.contains('li[role="option"]', 'Work In Progress').click()
    cy.contains('li[role="option"]', 'Awaiting User Update').click() 
    cy.get('div.ng-star-inserted > .autocompdrop > .ui-autocomplete > .ui-inputtext').type('sonal')
    cy.get('.ui-autocomplete-list-item').contains("sonal.agrawal@centific.com").click()
    cy.get('[style="margin-top:10px;float:right;margin-right:10px"]').click()
    //cy.get(".pi-times").click()

//     let elements = document.querySelectorAll('.issue-link.ng-star-inserted');
//     let thirdElement = elements[2]; // Indexing starts at 0, so 2 is the third element
// let elements = $('.issue-link.ng-star-inserted');
// let thirdElement = elements.eq(2); // eq() is zero-based, so eq(2) is the third element

//thirdElement.click()

   // cy.get("a[ng-reflect-router-link='/issue,133311']").click()
    //open ticket no 133311
})
})
