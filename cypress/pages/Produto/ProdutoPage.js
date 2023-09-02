class ProdutoPage {
    constructor(){
       this.query = '#search_query_top'
       this.btnPequisa = "#searchbox > .btn"
       this.header = ".page-heading"
       this.produto = ':nth-child(1) > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x'
    }

    get Query(){
       return cy.get(this.query);
    }

    get BtnPesquisa(){
       return cy.get(this.btnPequisa)
    }

    get Header(){
       return cy.get(this.header)
    }

    get Produto(){
        return cy.get(this.produto)
    }
}

const produtoPage = new ProdutoPage();
export default produtoPage;