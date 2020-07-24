import { Given, When, Then } from 'cucumber';
import navigationScreen from '../screenobjects/navigation.screen';

Then(/^I navigate to the webview page$/, () => {
    navigationScreen.webViewButton.click();
});

Then(/^I navigate to the home page$/, () => {
    navigationScreen.homeButton.click();
});

Then(/^I navigate to the login page$/, () => {
    navigationScreen.loginButton.click();
});

Then(/^I navigate to the forms page$/, () => {
    navigationScreen.formsButton.click();
});

Then(/^I navigate to the swipe page$/, () => {
    navigationScreen.swipeButton.click();
});

Then(/^I navigate to "([^"]*)?"$/, menu => {
    navigationScreen.findMenuButtons(menu);
});
