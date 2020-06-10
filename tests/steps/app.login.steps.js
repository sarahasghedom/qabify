import { Given, When, Then } from 'cucumber';
import loginScreen from '../screenobjects/login.screen';
import baseScreen from '../screenobjects/base.screen';

Given(/^I open the qabify app$/, () => {
    driver.launchApp();
    loginScreen.screenTitle.waitForDisplayed();
});

When(/^I enter the username "([^"]*)?"$/, username => {
    loginScreen.usernameField.waitForDisplayed();
    loginScreen.usernameField.setValue(username);
});

Then(/^I enter the password "([^"]*)?"$/, password => {
    loginScreen.passwordField.waitForDisplayed();
    loginScreen.passwordField.setValue(password);
});

When(/^I click on the button to login$/, () => {
    loginScreen.loginButton.click();
});

Then(/^the app displays the error "([^"]*)?" and "([^"]*)?"$/, (title, text) => {
    baseScreen.alert.waitForIsShown(true);
    expect(baseScreen.alert.text().toLowerCase()).to.contains(title, text);
});