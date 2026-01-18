export class Login{
  
        
    enterEmailId(email){
        cy.get('.login-form > form > [type="email"]').type(email)
    }
   enterPassword(password){
         cy.get('[type="password"]').type(password)
   }
     ClickLogin(){
     cy.get('.login-form > form > .btn').click();
     }

}