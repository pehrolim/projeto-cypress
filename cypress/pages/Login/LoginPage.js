class LoginPage {
     constructor(){
        this.email = "#email_create"
        this.firstName = "#customer_firstname"
        this.create = "#SubmitCreate > span"
        this.gender = "#id_gender1"
        this.lastName = "#customer_lastname"
        this.password = "#passwd"
        this.register = "#submitAccount > span"
     }

     get Email(){
        return cy.get(this.email);
     }

     get Create(){
        return cy.get(this.create)
     }

     get FirstName(){
        return cy.get(this.firstName)
     }

     get Gender(){
        return cy.get(this.gender)
     }

     get LastName(){
        return cy.get(this.lastName)
     }

     get Password(){
        return cy.get(this.password)
     }

     get Register(){
        return cy.get(this.register)
     }
}

const loginPage = new LoginPage();
export default loginPage;