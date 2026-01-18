export class SignUpPage{

    enterUsername(name){
       cy.get('[type="text"]').type(name)
    }
    enterEmailAddress(email){
        cy.get('.signup-form > form > [type="email"]').type(email)
    }
    clickSignUp(){
        cy.get('.signup-form > form > .btn').click()
    }
     clickTitle(){
        cy.get('#id_gender1').click();
     }
      enterPassword(password){
        cy.get('#password').type(password)
    }
    enterDateOFBirth(){
         cy.get('#days').select('1');
          cy.get('#months').select('1');
           cy.get('#years').select('2020');
           cy.get('#newsletter').click();
           cy.get('#optin').click();
    }    
    EnterAddressInfo(firtsname,lastname,companyname,address,country,state,city,pin,mobno){
        cy.get('#first_name').type(firtsname)
        cy.get('#last_name').type(lastname)
        cy.get('#company').type(companyname)
        cy.get('#address1').type(address)
        cy.get('#country').select(country)
        cy.get('#state').type(state)
        cy.get('#city').type(city)
        cy.get('#zipcode').type(pin)
        cy.get('#mobile_number').type(mobno)
        cy.get('.login-form > form > .btn').click()
        cy.get('.pull-right > .btn').click()

    }

}