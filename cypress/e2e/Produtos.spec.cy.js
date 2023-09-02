import produtoPage from "../pages/Produto/ProdutoPage";
describe ("Login", () => {
    beforeEach (() => cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account'))

    it("TC05 - Pesquisa de Produto existente", () => {
        produtoPage.Query.type("dress")
        produtoPage.BtnPesquisa.click()
        produtoPage.Header.should('be.visible')
    });

    it("TC06 - Pesquisa de Produto inexistente", () => {
        produtoPage.Query.type("cocada")
        produtoPage.BtnPesquisa.click()
        cy.get('.alert').should('be.visible')
    });

    it("TC07 - Visualização detalhada de um produto", () => {
        produtoPage.Query.type("dress")
        produtoPage.BtnPesquisa.click()
        produtoPage.Produto.click()
        cy.get('h1').should('contain', 'Printed Dress')
    });

    it("TC08 - Retornar a página de Resultados de pesquisa", () => {
        produtoPage.Query.type("dress")
        produtoPage.BtnPesquisa.click()
        produtoPage.Produto.click()
        cy.get('strong > a').click()
        produtoPage.Header.should('be.visible')
    });

})