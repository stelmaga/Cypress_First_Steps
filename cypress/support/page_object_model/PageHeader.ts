class PageHeader {
    get searchField(){
        return cy.get("#search_query_top")
    }

    get searchButton(){
        return cy.get('[name="submit_search"]')
    }

    get signInButton(){
        return cy.get(".login")
    }

    get accountName(){
        return cy.get(".account")
    }

    get navigationHeader(){
        return cy.get(".page-heading")
    }

    search(text: string){
        this.searchField.type(text);
    }

    clickSearch(){
        this.searchButton.click();
    }

    clickSignIn(){
        this.signInButton.click();
    }
    
}

export default new PageHeader();