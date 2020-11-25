/// <reference types="cypress"/>

describe('CustomSuites', function()
    {

    it('CustomTest', function()
        { 
            //Login script
            cy.login('admin@yourstore.com', 'admin')
            cy.title().should('be.equal', 'Dashboard / nopCommerce administration')
        })
        
    it('Add Customer', function()
        {   
            //Login script
            cy.login('admin@yourstore.com', 'admin12')
            cy.title().should('be.equal', 'Your store. Login')
              
            cy.log('Adding customer.........')
        })


    it('Edit Customer', function()
        {
            //Login script
            cy.login('admin@yourstore123.com', 'admin')
            cy.title().should('be.equal', 'Your store. Login')
            
            //Script for Adding new customer
            cy.log('Adding customer.........')
        })

    })
