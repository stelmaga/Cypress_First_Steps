class ShoppingCartPage {
    get productQuantity(){
        return cy.get("#summary_products_quantity")
    }

    get productRow(){
        return cy.get(".cart_product")
    }

    verifyCartProductQuantity(text){
        this.productQuantity.should("contain", (text))
    }

}

export default new ShoppingCartPage();