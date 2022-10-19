class AuthenticationPage {

    get emailCreateField(){
        return cy.get("#email_create")
    }

    get emailCreateSubmitButton(){
        return cy.get("#SubmitCreate")
    }

    randomEmail() {
        var text = "";
        
        var possible = "qwertyuioplkjhgfdazxcvbnm1234567890";
        
        for (var i = 0; i < 6; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        var email = text.concat('@gmail.com')
        return email;
        }

    fillEmailCreateField(randomEmail) {
        this.emailCreateField.type(this.randomEmail())
        }

    clickCreateSubmitButton() {
        this.emailCreateSubmitButton.click();
        }
    
}

export default new AuthenticationPage();