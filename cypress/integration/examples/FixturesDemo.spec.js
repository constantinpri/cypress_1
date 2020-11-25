/// <reference types="cypress"/>

const { data } = require("cypress/types/jquery")

describe('MyTestSuite', function()
    {

    before(function(){

        cy.fixture('example').then(function(data){

            this.data = data
        })
    })

        it('FixturesDemoTest', function()
            {
                cy.visit('https://admin-demo.nopcommerce.com/login')
                cy.get('input[name=Email]').type(this.data.email)  // email
                cy.get('input[name=Password]').type(this.data.password) //password
                cy.get('input[type=Submit]').click() //Signin
            })

    })
