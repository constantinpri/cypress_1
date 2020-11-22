/// <reference types="cypress"/>

describe('Locating Elements', function()
   {
        it('Verify types of locators', function()
            {
            cy.visit("https://demo.nopcommerce.com/") //opens URL of the app
            cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch")
            cy.get("[type='submit']").click() // click on search butoon
            cy.get(".product-box-add-to-cart-button[value='Add to cart']").click()
            cy.get("#product_enteredQuantity_4").clear().type('2')//Qyantity
            cy.get("#add-to-cart-button-4").click()//button click
            cy.wait(5000)

            cy.get("#topcartlink> a > span.cart-label").click()// shoping cart link
            cy.wait(3000)

            cy.get(".product-unit-price").contains("$1,800.00")//validating point
            }
        )
   }
)