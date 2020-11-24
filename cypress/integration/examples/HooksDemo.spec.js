/// <reference types="cypress"/>

describe('Ui Elements', function()
   {

    before(function(){
        cy.log('**** This is Setupt Block *****')
    })

    after(function(){
        cy.log('**** This is Tear Down Block *****')
    })

    beforeEach(function(){
        // runs before each test in the block
        cy.log('**** This is Login Block *****')
    })

    afterEach(function(){
        // runs after each test in the block
        cy.log('**** This is Login Out Block *****')
    })
        it('Searching', function()
            {
                cy.log('**** This is Searching Test *****')
           })

        it('advanced searching', function()
            {
                cy.log('****This is Advanced Searching Test *****')
            })

        it('listing Products', function()
            {
                cy.log('****This is Listing Products Test *****')
            })

    })
