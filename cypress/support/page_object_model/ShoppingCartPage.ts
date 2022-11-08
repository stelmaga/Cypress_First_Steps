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

    verifyCartProductQuantity(text){
        this.productQuantity.should("contain", (text))
    }

}

export default new ShoppingCartPage();