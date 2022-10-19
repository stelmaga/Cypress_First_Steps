class SignInForm {
    get firstName(){
        return cy.get("#customer_firstname")
    }

    get lastName(){
        return cy.get("#customer_lastname")
    }

    get password(){
        return cy.get("#passwd")
    }

    get company(){
        return cy.get("#company")
    }

    get address1(){
        return cy.get("#address1")
    }

    get city(){
        return cy.get("#city")
    }

    get state(){
        return cy.get("#id_state")
    }

    get postcode(){
        return cy.get("#postcode")
    }

    get mobilePhone(){
        return cy.get("#phone_mobile")
    }

    get registerButton(){
        return cy.get("#submitAccount")
    }

    clickRegisterButton(){
        this.registerButton.click();
    }

    fillFirstName(text){
        this.firstName.type(text);
    }

    fillSecondName(text){
        this.lastName.type(text);
    }

    fillPassword(text){
        this.password.type(text);
    }

    fillCompany(text){
        this.company.type(text);
    }

    fillAddress1(text){
        this.address1.type(text);
    }

    fillCity(text){
        this.city.type(text);
    }

    chooseState(index){
        this.state.select(index)
    }

    fillPostcode(text){
        this.postcode.type(text);
    }
    
    fillMobilePhone(text){
        this.mobilePhone.type(text);
    }

}

export default new SignInForm();