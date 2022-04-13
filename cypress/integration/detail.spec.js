describe('Detail', () => {
    before(() => {
        cy.visit('http://localhost:8080/detail/4')
        cy.contains('Loading')
        cy.contains('Walter White Jr.')
        cy.contains('Birthday')
    })

    it('change language', () => {
        cy.get('[data-test="language-selector"]').select('es')
        cy.contains('Fecha de nacimiento')
    })

    it('back to list', () => {
        cy.get('[data-test="back-button"]').click()
        cy.contains('Breaking Bad')
    })
})