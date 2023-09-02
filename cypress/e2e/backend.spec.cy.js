describe ("Backend Tests", () => {
    
    it("TC01 - Lista de Produtos", () => {
        cy.request('http://www.automationpractice.pl/index.php?controller=search&orderby=position&orderway=desc&search_query=&submit_search=')
            .should(function(response) {
                const {status, statusText} = response;
                expect(status).to.equal(200);
                expect(statusText).to.equal('OK');
            })

    })

    it("TC02 - Detalhes de um produto", () => {
        cy.request('http://www.automationpractice.pl/index.php?id_product=5&controller=product#/size-s/color-orange')
            .should(function(response) {
                const {status, statusText} = response;
                expect(status).to.equal(200);
                expect(statusText).to.equal('OK');
            })

    })

})