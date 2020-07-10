/// <reference types="cypress" />

describe('Starting Up', () => {
    it('Visit website', () => {
        cy.visit('localhost:3000/login')
    })

    it('Login', () => {
        cy.get('[name=username]').type('Julian')
        cy.get('[name=password]').type('root')
        cy.get('#btn-login').click()
    })

    it('Create Project', () => {
        cy.contains('Projects').click()
        //cy.get('#project_name').click()
        cy.contains('Create Project').click()
        //cy.get('ul>li').eq(3).click()
        cy.wait(500)
        cy.get('#project-name').type('TestProject')
        cy.wait(500)
        cy.get('.btn.btn-default').click()
        cy.wait(500)
        cy.get('#VIN').type('12')
        cy.wait(500)
        cy.get('.btn.btn-warning').click()
    })

    it('Set Platform', () => {
        cy.contains('Platforms').click()

        //Forcing visibility
        //cy.contains('Platform B').parents().invoke('show').should('be.visible')
        //cy.contains('Platforms').parents().invoke('show').should('be.visible')//.click()

        //Experimenting .children().eq()
        //cy.get('#nav-device').children('.dropdown-menu').eq(0).click() 
    
        cy.get('#nav-device').children('.dropdown-menu').within(() => {
            cy.contains('Platform B').click()
            cy.contains('Platform B').parent().within(() => {
                cy.contains('AmP8DB').click()
                cy.contains('AmP8DB').parent().within(() => {
                    cy.contains('AmP8DB6').click()
                    cy.contains('AmP8DB6').parent().within(() => {
                        cy.contains('QF74 8x8').click()
                    })
                })
            })

            //Wrong path traversal
            /*cy.children('.dropdown-menu open').within(() => { 
                cy.contains('AmP8DB').click()
                cy.contains('AmP8DB').within(() => {
                    cy.contains('AmP8DB6').click()
                    cy.contains('AmP8DB6').within(() => {
                        cy.contains('QF74 8x8').click()
                    })
                })
            })*/
        })

        // Coordinate brute force
        /*cy.get('#nav-device').click(27, 80) 
        //cy.contains('AmP8DB').click({force: true})
        cy.get('#nav-device').click(150, 90)
        //cy.contains('AmP8DB6').click({force: true})
        cy.get('#nav-device').click(250, 145)
        //cy.contains('QF74 8x8').click({force: true})
        cy.get('#nav-device').click(350, 145)*/
    })
})