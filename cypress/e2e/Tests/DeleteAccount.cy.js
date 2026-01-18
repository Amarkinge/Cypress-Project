import { Login, LoginPage} from "../Pages/LoginPage.js";

describe('Login Test', () => {
   const loginPage = new Login() 
  

 it('Enter the login successfully ',()=>{
         cy.visit('https://automationexercise.com')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();  
        loginPage.enterEmailId('kingeamar98@gmail.com')
         loginPage.enterPassword('Amar@123')
         loginPage.ClickLogin()
  })  
  
    it('DeleteAccount', ()=>{
   cy.get('.shop-menu > .nav > :nth-child(5) > a').click();

})
})
