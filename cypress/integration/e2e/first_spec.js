describe('My First Test', () => {
    it('Visiting site', () => {
        cy.visit('http://automationpractice.com/index.php')
    })
    it('Accessing t-shirt menu', () => {
        cy.get('.sf-menu > :nth-child(3) > a').click();
    })
    it('Validating menu stuff', () => {
        cy.get('.cat-name').should('be.visible');
    })
})