/// <reference types="cypress"/>

describe('My test suites', () => {

        it('Table Test', () => {

            cy.visit('http://testautomationpractice.blogspot.com/')

            //1.Check the value presence in the table
            cy.get('table[name=BookTable]').contains('td', 'Learn Selenium').should('be.visible')

            //2)Check Value presence in specific row & column
            cy.get('table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible')

            // Verify the book name "Master In Java" whose author is Amod
            cy.get('table[name=BookTable] > tbody > tr td:nth-child(2)').each(($e1, index, $list) => {

                const text = $e1.text()
                if (text.includes("Amod")) {
                    cy.get('table[name=BookTable] > tbody > tr td:nth-child(1)').eq(index).then(function (bname) {
                        const bookName = bname.text()
                        expect(bookNAme).to.equal("Master in Java")
                    })
                }
            })
        })

    })
