import { SignUp, SignUpPage } from "../Pages/SignUpPage.js"



describe('SignUp Test', () => {
   
   const signpage = new SignUpPage()

 it('should signup successfully', () => {
    cy.visit('https://automationexercise.com')
    cy.get('a[href="/login"]').click()
    
    signpage.enterUsername('amar')
    signpage.enterEmailAddress('kingeamar98@gmail.com')
    signpage.clickSignUp()
    signpage.clickTitle()
    signpage.enterPassword('Amar@123')
    signpage.enterDateOFBirth()
    signpage.EnterAddressInfo('amar', 'kinge', 'dgi','address','India','maharashtra','latur','413512','9421669916')
    
  })  
})