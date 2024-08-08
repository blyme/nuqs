/// <reference types="cypress" />

it('Deferred updates', () => {
  cy.visit('/app/deferred?a=init+a&b=init+b')
  cy.contains('#hydration-marker', 'hydrated').should('be.hidden')
  cy.get('#input-a').should('have.value', 'init a')
  cy.get('#input-b').should('have.value', 'init b')
  cy.get('#state-a').should('have.text', 'init a')
  cy.get('#state-b').should('have.text', 'init b')
  cy.get('#input-a').clear().type('a')
  cy.get('#input-b').clear().type('b')
  cy.get('#input-a').should('have.value', 'a')
  cy.get('#input-b').should('have.value', 'b')
  cy.get('#state-a').should('have.text', 'a')
  cy.get('#state-b').should('have.text', 'b')
  cy.location('search').should('eq', '?a=init+a&b=init+b')
  cy.get('button').click()
  cy.location('search').should('eq', '?a=a&b=b')
  cy.get('#input-a').should('have.value', 'a')
  cy.get('#input-b').should('have.value', 'b')
  cy.get('#state-a').should('have.text', 'a')
  cy.get('#state-b').should('have.text', 'b')
})
