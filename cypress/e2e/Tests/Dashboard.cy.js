

describe('dashboard',()=>{
   
   it('check dashboard',()=>{
     cy.visit('https://automationexercise.com');
   cy.contains('a', 'Products').click();
     cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
     cy.get(':nth-child(4) > a').click();
     cy.get(':nth-child(5) > a').click();
     cy.get(':nth-child(6) > a').click();
      cy.get(':nth-child(8) > a').click();
     cy.get(':nth-child(7) > a').click();
    

   })
})