class SearchPage {
    get productBlock(){
        return cy.get(".ajax_block_product")
    }

    get searchDropdown(){
        return cy.get("div.ac_results li", { timeout: 10000 })
    }

    get shoppingPopup(){
        return cy.get("#layer_cart", { timeout: 10000 })
    }

    get shoppingPopupButton(){
        return cy.get('[title="Close window"]')
    }

    get cartIcon(){
        return cy.get('[title="View my shopping cart"]')
    }

    get cartBlock(){
        return cy.get(".cart_block")
    }

    get checkOutButton(){
        return cy.get("#button_order_cart")
    }

    get cartProductNumber(){
        return cy.get(".ajax_cart_quantity.unvisible")
    }

    get addToCartButton(){
        return cy.get(".ajax_add_to_cart_button")
    }

    clickCheckOut(){
        this.checkOutButton.click();
    }

    openCartPopup(){
        this.cartIcon.trigger("mouseover");
    }

    closeShoppingPopup(){
        this.shoppingPopupButton.click();
    }

}

export default new SearchPage();