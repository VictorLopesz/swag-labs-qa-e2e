describe('Login', () => {
    
    beforeEach(() => {
        cy.paginaInicial()
    })


    it('CT-001: Login com sucesso', () => {

        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        cy.contains('.title', 'Products')
          .should('be.visible')
    })
})