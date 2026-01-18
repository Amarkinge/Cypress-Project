       
       
       describe('Home page ',()=>{
        
           it('notification option testing home page',()=>{
             cy.visit('https://automationexercise.com');
          cy.get('.active > :nth-child(1) > .test_cases_list > .btn').click();
          cy.get('.nav > :nth-child(1) > a').click()
         cy.get('.active > :nth-child(1) > .apis_list > .btn').click();
         cy.get('.nav > :nth-child(1) > a').click()   
           })
    
      it('Women Category',()=>{
        cy.get(':nth-child(1) > .panel-heading > .panel-title > a > .badge > .fa').click();
        cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click();
       // cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click();
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
       cy.get('#quantity').clear().type('2');
        cy.get(':nth-child(5) > .btn').click();
        cy.get('.modal-footer > .btn').click();
        cy.get(':nth-child(5) > .btn').click();
       cy.get('#quantity').clear().type('1');
         cy.get('#cartModal').click();
         cy.get('u').click({force:true});
         cy.get('.col-sm-6 > .btn').click();
        
      })
  

  })