import { Given, When, Then } from 'cucumber';
import baseScreen from '../screenobjects/base.screen';
import navigationScreen from "../screenobjects/navigation.screen";

Given(/^I open the demo app$/, () => {
    baseScreen.open();
});

Then(/^I close the demo app$/, () => {
    baseScreen.close();
});

Then(/^the page has the title "([^"]*)?"$/, title => {
    baseScreen.findTitle(title);
});
