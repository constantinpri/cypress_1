/// <reference types="cypress"/>



describe('Suite Name', function()
   {
        it('Hobbies check boxes', function () 
            {
                cy.visit("http://demo.guru99.com/test/newtours/")
                cy.url().should('include', 'newtours')// Verify URL 
                cy.get('input[name=userName]').should('be.visible').should('be.enabled').type("mercury")
                cy.get('input[name=password]').should('be.visible').should('be.enabled').type("mercury")
                cy.get('input[name=login]').should('be.visible').click() //sign in button
                

                //Title verification

                cy.title().should('eq', 'Login: Mercury Tours')//Title verification
                cy.visit("http://demo.guru99.com/test/newtours/reservation.php")
                cy.get('input[value=roundtrip]').should('be.visible').should('be.checked')// visibiity checked status
                cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click()
                cy.get('[name=findFlights]').should('be.visible').click()//continue button click
                cy.title().should('eq','Find a Flight: Mercury Tours:')





            }
        )
    }
)