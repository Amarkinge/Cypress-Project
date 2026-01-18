export class LogOut{
    
    clickLogout(){
    cy.get('.shop-menu > .nav > :nth-child(4) > a',{ timeout: 10000 }).should('be.visible').click();
    }
    
}