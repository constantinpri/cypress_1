

describe('MyTestSuite', function()
    {
    it('Verify Title of my Page - positive', function()
    {
       cy.visit('https://www.nopcommerce.com/en/demo')
       cy.title().should('eq', 'Store Demo - nopCommerce')   
    })

    it('Verify Title of my Page - negative', function()
    {
       cy.visit('https://www.nopcommerce.com/en/demo')
       cy.title().should('eq', 'Store - nopCommerce')   
    })
   
  })