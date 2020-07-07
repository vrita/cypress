/// <reference types="cypress" />

describe('Starting up', () => {
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
        cy.get('#project-name').type('TestProject')
        cy.get('.btn.btn-default').click()
        cy.get('#VIN').type('12')
        cy.get('.btn.btn-warning').click()
    })
})