class RandomEmailGenerator {

    randomEmail() {
        var text = "";
        
        var possible = "qwertyuioplkjhgfdazxcvbnm1234567890";
        
        for (var i = 0; i < 6; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        var email = text.concat('@gmail.com')
        return email;
        }
}

export default new RandomEmailGenerator();