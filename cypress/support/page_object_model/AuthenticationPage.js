class AuthenticationPage {

    get emailCreateField(){
        return cy.get("#email_create")
    }

    get emailCreateSubmitButton(){
        return cy.get("#SubmitCreate")
    }

    fillEmailCreateField(email) {
        this.emailCreateField.type(email)
        }

    clickCreateSubmitButton() {
        this.emailCreateSubmitButton.click();
        }
    
}

export default new AuthenticationPage();