class ShoppingCartPage {
    get productQuantity(){
        return cy.get("#summary_products_quantity")
    }

    get productRow(){
        return cy.get(".cart_product")
    }

    search(text){
        this.searchField.type(text);
    }
    
}

export default new ShoppingCartPage();