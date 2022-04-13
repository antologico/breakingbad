describe('List', () => {
    before(() => {
        cy.visit('http://localhost:8080')
        cy.contains('Loading')
        cy.contains('Breaking Bad')
    })

    it('load data', () => {
      cy.contains('Adam Pink')
    })

    it('filter data', () => {
        cy.contains('Walter White')
        cy.get('input').type('Adam')
        cy.contains('Adam Pink')
        cy.contains('Walter White').should('not.exist')
    })

    it('go to detail', () => {
        cy.get('[data-test="character_31"] a').click()
        cy.contains('Birthday')
    })
})