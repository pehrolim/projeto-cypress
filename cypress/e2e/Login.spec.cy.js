import loginPage from "../pages/Login/LoginPage";

describe ("Login", () => {
    beforeEach (() => cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account'))

    it("TC01 - Registrar novo usuário com dados válidos", () => {
        //Para cada vez que esse teste for realizado, o email deve ser alterado, caso não seja dará um erro informando que o usuário já existe
        loginPage.Email.type("cocada93475@gmail.com");
        loginPage.Create.click();
        loginPage.Gender.click();
        loginPage.FirstName.type("Pedro Henrique");
        loginPage.LastName.type("Rolim");
        loginPage.Password.type("12345");
        
        loginPage.Register.click();

        cy.get('.alert').should('be.visible');
    });

    it("TC02 - Registrar novo usuário com email inválido", () => {
        loginPage.Email.type("asd.com");
        cy.get('#SubmitCreate > span').click();
        cy.get('#create_account_error').should('be.visible');
    });

    it("TC03 - Registrar usuário sem preencher o nome", () => {
        loginPage.Email.type("cocada12356678@gmail.com");
        loginPage.Create.click();
        loginPage.Gender.click();
        loginPage.LastName.type("Rolim");
        loginPage.Password.type("12345");
        
        loginPage.Register.click();
        cy.get('.alert').should('be.visible')
    });

    it("TC04 - Realizar login com dados válidos", () => {
        cy.get("#email").type("cocada1235667@gmail.com")
        cy.get('#passwd').type("12345")
        cy.get('#SubmitLogin > span').click()
        cy.get('.page-heading').should('be.visible')
    })


})