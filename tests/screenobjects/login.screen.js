const selectors = {
    screenTitle: '//android.widget.TextView[@text="QAbify"]',
    usernameField: '//android.widget.EditText[@text="Username"]',
    passwordField: '//android.widget.EditText[@text="Password"]',
    loginButton: '//android.widget.Button[@text="LOGIN"]'
};

class LoginScreen {
    get screenTitle() { return $(selectors.screenTitle);}
    get usernameField() { return $(selectors.usernameField);}
    get passwordField() { return $(selectors.passwordField);}
    get loginButton() { return $(selectors.loginButton);}
}

export default new LoginScreen();
