/// <reference types="cypress"/>

import LoginPage from '../PageObjects/LoginPage'

describe('TestSuite', function()
    {
    it('FixturesDemoTest', function()
    {
        const lp = new LoginPage()
        lp.visit()
        lp.fillEmail('admin@yourstore.com')     
        lp.fillPassword('admin')
        lp.submit()
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration')
    })

})
